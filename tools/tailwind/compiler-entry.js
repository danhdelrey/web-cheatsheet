/*
 * Bundle Tailwind CSS compiler cho trình duyệt (dùng ở tailwind/index.html).
 * Build: cd tools/tailwind && npm i && npm run build
 * Expose window.TW = { version, build(sourceCss, candidates[], { fresh }) → Promise<string> }
 */
import { compile } from 'tailwindcss';
import pkg from 'tailwindcss/package.json';
import themeCss from './node_modules/tailwindcss/theme.css';
import preflightCss from './node_modules/tailwindcss/preflight.css';
import utilitiesCss from './node_modules/tailwindcss/utilities.css';

// index.css của package = 3 file dưới gộp lại; tự ghép để bundle nhẹ hơn ~30KB
const indexCss = '@layer theme, base, components, utilities;\n' +
  '@import "./theme.css" layer(theme);\n@import "./preflight.css" layer(base);\n@import "./utilities.css" layer(utilities);\n';
const FILES = {
  'tailwindcss': indexCss,
  'tailwindcss/index.css': indexCss,
  './theme.css': themeCss,
  './preflight.css': preflightCss,
  './utilities.css': utilitiesCss,
  'tailwindcss/theme.css': themeCss,
  'tailwindcss/preflight.css': preflightCss,
  'tailwindcss/utilities.css': utilitiesCss
};

async function loadStylesheet(id, base) {
  const content = FILES[id];
  if (content == null) throw new Error('Playground chỉ hỗ trợ import "tailwindcss" (và theme.css, preflight.css, utilities.css), không có: ' + id);
  return { path: id, base, content };
}

const cache = new Map();
function compiler(src) {
  if (!cache.has(src)) {
    const p = compile(src, { base: '/', loadStylesheet });
    p.catch(() => cache.delete(src));
    if (cache.size > 30) cache.delete(cache.keys().next().value);
    cache.set(src, p);
  }
  return cache.get(src);
}

window.TW = {
  version: pkg.version,
  // Lưu ý: một compiler cộng dồn mọi candidate đã build. fresh: true = biên dịch mới, chỉ ra CSS của đúng danh sách này.
  async build(src, candidates, opts) {
    const c = opts && opts.fresh ? await compile(src, { base: '/', loadStylesheet }) : await compiler(src);
    return c.build(candidates);
  }
};
