/*
 * Minh hoạ trực quan dùng chung cho các cheatsheet.
 *
 * Cách dùng trong trang:
 *   <script src="../assets/viz.js" defer></script>
 *   <script src="../assets/viz-<slug>.js" defer></script>
 *   ...
 *   <figure class="vz" data-viz="ten-minh-hoa"><figcaption>Mô tả ngắn</figcaption></figure>
 *
 * File viz-<slug>.js gọi VZ.add('ten-minh-hoa', function (root, VZ) { ... }) để vẽ vào figure.
 * Figure bị ẩn cho tới khi vẽ xong, nên tắt JS cũng không để lại khung trống.
 * Màu lấy từ biến của chính trang (--surface, --line, --accent...), nên tự theo theme Sáng / Tối.
 */
(function () {
  'use strict';
  if (window.VZ) return;

  var CSS = [
    '.vz{--vz-fg:var(--fg,var(--ink,#1a1d24));--vz-muted:var(--muted,#5a6070);--vz-line:var(--line,#d8dce4);',
    '--vz-bg:var(--surface,#fff);--vz-bg2:var(--surface-2,var(--sunken,#eef0f4));--vz-acc:var(--accent,#4f6bed);',
    '--vz-blue:#2059b8;--vz-blue-s:#e2ecfa;--vz-green:#167a42;--vz-green-s:#dff2e6;--vz-amber:#985600;--vz-amber-s:#fbefd5;',
    '--vz-purple:#6a3bbd;--vz-purple-s:#eee7fa;--vz-red:#bf2a2f;--vz-red-s:#fbe6e5;--vz-teal:#0c6f66;--vz-teal-s:#daf1ed;',
    '--vz-mono:var(--font-mono,"JetBrains Mono",ui-monospace,Consolas,monospace);',
    'margin:0;border:1px solid var(--vz-line);border-radius:12px;background:var(--vz-bg);padding:14px;display:grid;',
    'grid-template-columns:minmax(0,1fr);gap:12px;min-width:0;color:var(--vz-fg);font-size:14px;line-height:1.5;',
    'font-family:var(--font-body,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif)}',
    ':root[data-theme="dark"] .vz{--vz-blue:#7fb2ff;--vz-blue-s:#15253c;--vz-green:#62d293;--vz-green-s:#12301f;--vz-amber:#f2bb55;--vz-amber-s:#2f2410;',
    '--vz-purple:#bea4ff;--vz-purple-s:#251c3b;--vz-red:#ff8080;--vz-red-s:#3a1a1c;--vz-teal:#5fd3c3;--vz-teal-s:#0f2d2a}',
    '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .vz{--vz-blue:#7fb2ff;--vz-blue-s:#15253c;--vz-green:#62d293;--vz-green-s:#12301f;',
    '--vz-amber:#f2bb55;--vz-amber-s:#2f2410;--vz-purple:#bea4ff;--vz-purple-s:#251c3b;--vz-red:#ff8080;--vz-red-s:#3a1a1c;--vz-teal:#5fd3c3;--vz-teal-s:#0f2d2a}}',
    '.vz:not(.vz-ready){display:none}',
    '.vz *,.vz *::before,.vz *::after{box-sizing:border-box}',
    '.vz>figcaption{margin:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;font-size:13.5px;font-weight:600;line-height:1.4;color:var(--vz-fg)}',
    '.vz>figcaption::before{content:"Minh hoạ";flex:none;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;',
    'color:var(--vz-acc);border:1px solid currentColor;border-radius:999px;padding:1px 8px}',
    '.vz p{margin:0}',
    '.vz code,.vz .vz-m{font-family:var(--vz-mono);font-size:.9em}',
    '.vz-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;min-width:0}',
    '.vz-col{display:grid;gap:8px;min-width:0}',
    '.vz-split{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));min-width:0}',
    '.vz-stage{background:var(--vz-bg2);border-radius:10px;padding:12px;min-width:0;overflow-x:auto}',
    '.vz-lbl{font-size:12px;font-weight:600;color:var(--vz-muted)}',
    '.vz-out{font-size:13.5px;color:var(--vz-fg);min-height:1.5em}',
    '.vz-muted{color:var(--vz-muted)}',
    '.vz-seg{display:inline-flex;flex-wrap:wrap;border:1px solid var(--vz-line);border-radius:9px;overflow:hidden;background:var(--vz-bg)}',
    '.vz-seg button{font:inherit;font-size:13px;border:0;border-right:1px solid var(--vz-line);background:none;color:var(--vz-fg);',
    'padding:6px 11px;min-height:34px;cursor:pointer}',
    '.vz-seg button:last-child{border-right:0}',
    '.vz-seg button[aria-pressed="true"]{background:var(--vz-acc);color:var(--accent-ink,#fff);font-weight:600}',
    '.vz-btn{font:inherit;font-size:13px;font-weight:500;border:1px solid var(--vz-line);background:var(--vz-bg);color:var(--vz-fg);',
    'border-radius:9px;padding:6px 12px;min-height:34px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}',
    '.vz-btn:hover,.vz-seg button:hover:not([aria-pressed="true"]){background:var(--vz-bg2)}',
    '.vz-btn.vz-pri{background:var(--vz-acc);border-color:var(--vz-acc);color:var(--accent-ink,#fff)}',
    '.vz-btn:disabled{opacity:.45;cursor:default}',
    '.vz button:focus-visible,.vz input:focus-visible,.vz select:focus-visible,.vz [tabindex]:focus-visible{outline:2px solid var(--vz-acc);outline-offset:2px}',
    '.vz-range{display:inline-flex;align-items:center;gap:8px;font-size:13px;min-width:0}',
    '.vz-range input{width:140px;accent-color:var(--vz-acc)}',
    '.vz-range output{font-family:var(--vz-mono);font-size:12.5px;min-width:4.5em}',
    '.vz-check{display:inline-flex;align-items:center;gap:6px;font-size:13px;cursor:pointer}',
    '.vz-check input{accent-color:var(--vz-acc);width:16px;height:16px;margin:0}',
    '.vz input[type=text],.vz select{font:inherit;font-size:14px;color:var(--vz-fg);background:var(--vz-bg);border:1px solid var(--vz-line);',
    'border-radius:8px;padding:6px 10px;min-height:36px;min-width:0}',
    '.vz-pill{display:inline-flex;align-items:center;gap:4px;border-radius:999px;padding:1px 9px;font-size:12px;font-weight:600;white-space:nowrap;',
    'background:var(--vz-bg2);color:var(--vz-fg)}',
    '.vz-box{border:1.5px solid var(--vz-line);border-radius:9px;padding:8px 10px;background:var(--vz-bg);min-width:0}',
    '.vz svg{display:block;max-width:100%;height:auto;overflow:visible}',
    '.vz svg text{font-family:inherit;fill:var(--vz-fg)}',
    '.vz-log{font-family:var(--vz-mono);font-size:12.5px;line-height:1.6;background:var(--code-bg,var(--vz-bg2));border:1px solid var(--vz-line);',
    'border-radius:8px;padding:8px 10px;margin:0;min-height:3em;max-height:220px;overflow:auto;white-space:pre-wrap}',
    '.vz-legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.5px;color:var(--vz-muted)}',
    '.vz-legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}',
    '@keyframes vz-flash{0%{box-shadow:0 0 0 0 var(--vz-acc)}100%{box-shadow:0 0 0 8px transparent}}',
    '.vz-flash{animation:vz-flash .6s ease-out}',
    '@keyframes vz-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}',
    '.vz-in{animation:vz-in .25s ease-out}',
    '@media (prefers-reduced-motion:reduce){.vz *{animation-duration:.01ms!important;transition-duration:.01ms!important}}',
    '@media print{.vz button,.vz input{display:none}}'
  ].join('');

  var registry = {};
  var SVGNS = 'http://www.w3.org/2000/svg';
  var reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var uid = 0;

  function set(n, props) {
    if (!props) return n;
    for (var k in props) {
      var v = props[k];
      if (v == null || v === false) continue;
      if (k === 'class') n.setAttribute('class', v);
      else if (k === 'style' && typeof v === 'object') {
        for (var s in v) { if (s.indexOf('-') >= 0) n.style.setProperty(s, v[s]); else n.style[s] = v[s]; }
      }
      else if (k === 'text') n.textContent = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    return n;
  }
  function add(n, kids) {
    for (var i = 0; i < kids.length; i++) {
      var c = kids[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) add(n, c);
      else n.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
    }
    return n;
  }
  /* h('div', {class:'x', onclick: fn}, 'text', child, [children]) */
  function h(tag, props) {
    return add(set(document.createElement(tag), props), [].slice.call(arguments, 2));
  }
  function s(tag, props) {
    return add(set(document.createElementNS(SVGNS, tag), props), [].slice.call(arguments, 2));
  }

  /* Nút chọn một trong nhiều. opts: [[value, label], ...] */
  function seg(opts, value, onChange, label) {
    var wrap = h('div', { class: 'vz-seg', role: 'group', 'aria-label': label || null });
    var btns = opts.map(function (o) {
      var b = h('button', { type: 'button', 'aria-pressed': String(o[0] === value) }, o[1]);
      b.addEventListener('click', function () { api.set(o[0]); onChange(o[0]); });
      wrap.appendChild(b);
      return b;
    });
    var api = {
      el: wrap,
      set: function (v) { opts.forEach(function (o, i) { btns[i].setAttribute('aria-pressed', String(o[0] === v)); }); }
    };
    wrap.api = api;
    return wrap;
  }
  function btn(label, onClick, primary) {
    return h('button', { type: 'button', class: 'vz-btn' + (primary ? ' vz-pri' : ''), onclick: onClick }, label);
  }
  /* Thanh trượt có nhãn và ô hiển thị giá trị */
  function range(label, min, max, step, value, onInput, fmt) {
    var id = 'vz' + (++uid);
    fmt = fmt || String;
    var out = h('output', { for: id }, fmt(value));
    var inp = h('input', { type: 'range', id: id, min: min, max: max, step: step, value: value });
    inp.addEventListener('input', function () { var v = +inp.value; out.textContent = fmt(v); onInput(v); });
    var el = h('label', { class: 'vz-range' }, h('span', null, label), inp, out);
    el.input = inp;
    el.setValue = function (v) { inp.value = v; out.textContent = fmt(+v); };
    return el;
  }
  function check(label, checked, onChange) {
    var inp = h('input', { type: 'checkbox' });
    inp.checked = !!checked;
    inp.addEventListener('change', function () { onChange(inp.checked); });
    var el = h('label', { class: 'vz-check' }, inp, h('span', null, label));
    el.input = inp;
    return el;
  }
  function flash(el) {
    if (!el) return;
    el.classList.remove('vz-flash');
    void el.offsetWidth;
    el.classList.add('vz-flash');
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* Hẹn giờ gắn với một figure: gọi stop() để huỷ hết (khi reset) */
  function timers() {
    var ids = [];
    return {
      after: function (ms, fn) { var t = setTimeout(fn, reduced ? Math.min(ms, 30) : ms); ids.push(t); return t; },
      every: function (ms, fn) { var t = setInterval(fn, ms); ids.push(t); return t; },
      stop: function () { ids.forEach(function (t) { clearTimeout(t); clearInterval(t); }); ids = []; }
    };
  }

  var VZ = {
    add: function (name, fn) { registry[name] = fn; },
    h: h, s: s, seg: seg, btn: btn, range: range, check: check,
    flash: flash, clear: clear, esc: esc, timers: timers, reduced: reduced,
    /* CSS riêng của từng file viz-<slug>.js, chỉ chèn một lần */
    css: function (id, text) {
      if (!document.getElementById(id)) document.head.appendChild(h('style', { id: id }, text));
    }
  };
  window.VZ = VZ;

  function mount() {
    if (!document.getElementById('vz-style')) {
      document.head.appendChild(h('style', { id: 'vz-style' }, CSS));
    }
    var figs = document.querySelectorAll('figure.vz[data-viz]:not(.vz-ready)');
    for (var i = 0; i < figs.length; i++) {
      var f = figs[i], fn = registry[f.getAttribute('data-viz')];
      if (!fn) continue;
      try {
        fn(f, VZ);
        f.classList.add('vz-ready');
      } catch (e) {
        if (window.console) console.error('[viz] ' + f.getAttribute('data-viz'), e);
      }
    }
  }
  VZ.mount = mount;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else setTimeout(mount, 0);
})();
