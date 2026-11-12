/*
 * Dùng chung cho mọi trang trong site.
 * 1. Áp theme đã lưu trước khi trang vẽ (tránh chớp màu). Mọi trang dùng chung khoá "cheatsheet-theme".
 * 2. Trang con: thêm nút "Cheatsheets" nổi ở góc để chuyển trang / về trang chủ.
 * 3. Trang con: đọc ?q=từ-khóa và điền vào ô tìm kiếm của trang (trang chủ dùng để nhảy tới kết quả).
 */
(function () {
  'use strict';
  var KEY = 'cheatsheet-theme';
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) { /* storage bị chặn: theo hệ thống */ }

  var me = document.currentScript;
  var page = me && me.getAttribute('data-page');
  if (!page) return; // trang chủ tự lo phần còn lại

  var base = new URL('../', me.src).href;
  var PAGES = [
    { slug: 'html', name: 'HTML', sub: 'Thẻ, thuộc tính, a11y', mark: '</>', color: '#c23c12' },
    { slug: 'css', name: 'CSS', sub: 'Flexbox, Grid, theming', mark: '{ }', color: '#0a776d' },
    { slug: 'js-ts', name: 'JavaScript & TypeScript', sub: 'ES2023+, TS strict', mark: 'JS', color: '#2a64aa' },
    { slug: 'angular', name: 'Angular', sub: 'v17+ → v22, signals', mark: 'A', color: '#b81d55' }
  ];

  var CSS = [
    '.cs-nav{position:fixed;z-index:35;right:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));',
    'font:500 13px/1.3 "Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;',
    '--cs-bg:#ffffff;--cs-fg:#171923;--cs-muted:#5a5f70;--cs-line:#dde0e8;--cs-hover:#f0f2f6;--cs-shadow:0 6px 24px rgba(20,24,35,.16),0 1px 3px rgba(20,24,35,.08)}',
    ':root[data-theme="dark"] .cs-nav{--cs-bg:#1b1f29;--cs-fg:#e6e8ee;--cs-muted:#9ba1b2;--cs-line:#2f3442;--cs-hover:#252a36;--cs-shadow:0 8px 28px rgba(0,0,0,.5)}',
    '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .cs-nav{--cs-bg:#1b1f29;--cs-fg:#e6e8ee;--cs-muted:#9ba1b2;--cs-line:#2f3442;--cs-hover:#252a36;--cs-shadow:0 8px 28px rgba(0,0,0,.5)}}',
    '.cs-nav *{box-sizing:border-box}',
    '.cs-fab{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 14px 0 12px;border-radius:999px;border:1px solid var(--cs-line);',
    'background:var(--cs-bg);color:var(--cs-fg);box-shadow:var(--cs-shadow);font:inherit;cursor:pointer}',
    '.cs-fab:hover{background:var(--cs-hover)}',
    '.cs-fab:focus-visible,.cs-menu a:focus-visible{outline:2px solid #5b7cfa;outline-offset:2px}',
    '.cs-fab svg{width:16px;height:16px;flex:none}',
    '.cs-menu{position:absolute;right:0;bottom:calc(100% + 8px);width:min(290px,calc(100vw - 32px));padding:6px;border-radius:14px;',
    'border:1px solid var(--cs-line);background:var(--cs-bg);color:var(--cs-fg);box-shadow:var(--cs-shadow)}',
    '.cs-menu[hidden]{display:none}',
    '.cs-menu a{display:flex;align-items:center;gap:10px;padding:8px;border-radius:9px;color:inherit;text-decoration:none}',
    '.cs-menu a:hover{background:var(--cs-hover)}',
    '.cs-menu a[aria-current]{background:var(--cs-hover)}',
    '.cs-mark{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:8px;color:#fff;',
    'font:600 11.5px/1 "JetBrains Mono",ui-monospace,Consolas,monospace;letter-spacing:-.02em}',
    '.cs-txt{min-width:0;display:flex;flex-direction:column;gap:1px}',
    '.cs-txt b{font-weight:600}',
    '.cs-txt small{color:var(--cs-muted);font-size:12px}',
    '.cs-cur{margin-left:auto;font-size:11px;color:var(--cs-muted)}',
    '.cs-home{border-top:1px solid var(--cs-line);margin-top:4px;padding-top:4px}',
    '.cs-home a{color:var(--cs-muted)}',
    '@media print{.cs-nav{display:none}}'
  ].join('');

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }

  function mount() {
    var style = el('style', {}, CSS);
    document.head.appendChild(style);

    var wrap = el('div', { 'class': 'cs-nav' });
    var btn = el('button', { type: 'button', 'class': 'cs-fab', 'aria-expanded': 'false', 'aria-controls': 'cs-menu' },
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
      '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/>' +
      '<rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg>' +
      '<span>Cheatsheets</span>');
    var menu = el('nav', { id: 'cs-menu', 'class': 'cs-menu', 'aria-label': 'Chuyển cheatsheet', hidden: '' });

    PAGES.forEach(function (p) {
      var a = el('a', { href: base + p.slug + '/' },
        '<span class="cs-mark" style="background:' + p.color + '" aria-hidden="true">' + p.mark.replace('<', '&lt;').replace('>', '&gt;') + '</span>' +
        '<span class="cs-txt"><b>' + p.name + '</b><small>' + p.sub + '</small></span>' +
        (p.slug === page ? '<span class="cs-cur">đang xem</span>' : ''));
      if (p.slug === page) a.setAttribute('aria-current', 'page');
      menu.appendChild(a);
    });
    var home = el('div', { 'class': 'cs-home' },
      '<a href="' + base + '"><span class="cs-txt"><b>← Trang chủ</b><small>Tìm xuyên cả 4 cheatsheet</small></span></a>');
    menu.appendChild(home);

    function setOpen(open) {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
    }
    btn.addEventListener('click', function () { setOpen(menu.hidden); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
    });

    wrap.appendChild(menu);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);
  }

  function applyQuery() {
    var q;
    try { q = new URLSearchParams(location.search).get('q'); } catch (e) { q = null; }
    if (!q) return;
    var input = document.querySelector('input[type="search"]');
    if (!input) return;
    input.value = q;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
  window.addEventListener('load', applyQuery);
})();
