/* Minh hoạ cho trang CSS. Cần assets/viz.js nạp trước. */
(function (VZ) {
  'use strict';
  if (!VZ) return;
  var h = VZ.h, s = VZ.s;

  VZ.css('vz-css', [
    /* cascade */
    '.vzc-rules{display:grid;gap:4px}',
    '.vzc-rule{display:grid;grid-template-columns:auto auto minmax(0,1fr) auto;gap:8px;align-items:center;padding:5px 8px;border-radius:8px;',
    'background:var(--vz-bg);border:1.5px solid transparent;font-size:12.5px;transition:all .15s}',
    '.vzc-rule code{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.vzc-rule .sw{width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.2)}',
    '.vzc-rule .why{font-size:11.5px;color:var(--vz-muted);text-align:right}',
    '.vzc-rule.win{border-color:var(--vz-green);background:var(--vz-green-s)}',
    '.vzc-rule.win .why{color:var(--vz-green);font-weight:700}',
    '.vzc-rule.off{opacity:.45}',
    '.vzc-rule .tier{font-size:10.5px;font-weight:700;padding:1px 6px;border-radius:5px;background:var(--vz-bg2);color:var(--vz-muted);white-space:nowrap}',
    '.vzc-preview{display:flex;align-items:center;gap:12px;flex-wrap:wrap}',
    '.vzc-preview .tb{padding:8px;border-radius:9px;border:1px dashed var(--vz-line);font-size:11px;color:var(--vz-muted);font-family:var(--vz-mono)}',
    '.vzc-preview .bt{all:unset;display:inline-block;margin-left:8px;padding:6px 14px;border-radius:8px;border:1.5px solid currentColor;font:600 14px var(--font-body,system-ui);transition:color .2s}',
    /* inheritance */
    '.vzc-tree{display:grid;gap:6px}',
    '.vzc-node{border:1.5px solid var(--vz-line);border-radius:9px;padding:8px 10px;background:var(--vz-bg);transition:all .2s;display:grid;gap:6px}',
    '.vzc-node>.tag{font-family:var(--vz-mono);font-size:11px;color:var(--vz-muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
    '.vzc-node>.tag .vz-pill{font-family:var(--font-body,system-ui)}',
    '.vzc-node.yes>.tag .vz-pill{background:var(--vz-green-s);color:var(--vz-green)}',
    '.vzc-node.no>.tag .vz-pill{background:var(--vz-red-s);color:var(--vz-red)}',
    '.vzc-node.src>.tag .vz-pill{background:var(--vz-blue-s);color:var(--vz-blue)}',
    '.vzc-kids{display:grid;gap:6px;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr))}',
    /* margin collapse */
    '.vzc-mc{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));align-items:start}',
    '.vzc-par{position:relative;border:1.5px dashed var(--vz-line);border-radius:8px;padding:0 10px;background:var(--vz-bg)}',
    '.vzc-par.flex{display:flex;flex-direction:column}',
    '.vzc-blk{position:relative;z-index:1;height:44px;border-radius:7px;display:grid;place-items:center;font-size:12.5px;font-weight:600}',
    '.vzc-blk.a{background:var(--vz-blue-s);border:1.5px solid var(--vz-blue);color:var(--vz-blue)}',
    '.vzc-blk.b{background:var(--vz-purple-s);border:1.5px solid var(--vz-purple);color:var(--vz-purple)}',
    '.vzc-m{position:absolute;left:10px;right:10px;pointer-events:none;border-radius:4px;display:grid;place-items:center;font-size:11px;font-family:var(--vz-mono);transition:all .15s}',
    '.vzc-m.a{background:repeating-linear-gradient(45deg,color-mix(in srgb,var(--vz-blue) 28%,transparent) 0 4px,transparent 4px 8px);color:var(--vz-blue)}',
    '.vzc-m.b{background:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--vz-purple) 28%,transparent) 0 4px,transparent 4px 8px);color:var(--vz-purple)}',
    '.vzc-gap{font-size:22px;font-weight:700;font-family:var(--vz-mono)}',
    /* hide */
    '.vzc-cards{display:flex;gap:10px;align-items:stretch;min-height:76px;padding:4px 0}',
    '.vzc-card{flex:1;min-width:0;border-radius:9px;padding:10px;font-size:13px;font-weight:600;display:grid;place-items:center;text-align:center;transition:opacity .3s}',
    '.vzc-card.side{background:var(--vz-bg);border:1.5px solid var(--vz-line)}',
    '.vzc-card.mid{background:var(--vz-amber-s);border:1.5px solid var(--vz-amber);color:var(--vz-amber);cursor:pointer}',
    '.vzc-ghost{position:relative;flex:1;min-width:0;display:flex}',
    '.vzc-ghost.show::after{content:"vẫn chiếm chỗ";position:absolute;inset:0;border:1.5px dashed var(--vz-amber);border-radius:9px;display:grid;place-items:center;',
    'font-size:11px;color:var(--vz-amber);pointer-events:none}',
    '.vzc-tbl{width:100%;border-collapse:collapse;font-size:12.5px}',
    '.vzc-tbl th,.vzc-tbl td{padding:5px 8px;border-bottom:1px solid var(--vz-line);text-align:center;white-space:nowrap}',
    '.vzc-tbl th:first-child,.vzc-tbl td:first-child{text-align:left}',
    '.vzc-tbl thead th{font-size:11.5px;color:var(--vz-muted);font-weight:600}',
    '.vzc-tbl tr.cur{background:color-mix(in srgb,var(--vz-acc) 13%,transparent)}',
    '.vzc-tbl .y{color:var(--vz-green);font-weight:700}.vzc-tbl .n{color:var(--vz-red);font-weight:700}',
    /* units */
    '.vzc-nest{border:1.5px solid var(--vz-line);border-radius:8px;padding:6px 8px;background:var(--vz-bg);line-height:1.2}',
    '.vzc-nest .vzc-nest{margin-top:6px}',
    '.vzc-nest small{display:block;font-family:var(--vz-mono);font-size:11px;color:var(--vz-muted);margin-bottom:2px}',
    '.vzc-nest.em{border-color:var(--vz-amber)}.vzc-nest.rem{border-color:var(--vz-teal)}',
    /* object-fit */
    '.vzc-frame{width:min(100%,320px);border:2px solid var(--vz-acc);border-radius:6px;background:repeating-conic-gradient(var(--vz-bg2) 0 25%,var(--vz-bg) 0 50%) 0 0/16px 16px;transition:aspect-ratio .2s}',
    '.vzc-frame img{display:block;width:100%;height:100%}',
    /* pipeline */
    '.vzc-props{display:flex;flex-wrap:wrap;gap:6px}',
    '.vzc-props button{font:inherit;font-family:var(--vz-mono);font-size:12px;border:1.5px solid var(--vz-line);background:var(--vz-bg);color:var(--vz-fg);border-radius:7px;padding:4px 9px;cursor:pointer}',
    '.vzc-props button[aria-pressed="true"]{border-color:var(--vz-acc);background:color-mix(in srgb,var(--vz-acc) 14%,var(--vz-bg));font-weight:700}',
    '.vzc-pipe{display:flex;align-items:stretch;gap:0;flex-wrap:wrap}',
    '.vzc-st{flex:1;min-width:110px;padding:10px;border-radius:9px;border:1.5px solid var(--vz-line);background:var(--vz-bg);display:grid;gap:2px;transition:all .2s;opacity:.45}',
    '.vzc-st b{font-size:13.5px}.vzc-st span{font-size:11.5px;color:var(--vz-muted)}',
    '.vzc-st.on{opacity:1;border-color:var(--vz-red);background:var(--vz-red-s)}',
    '.vzc-st.on.cheap{border-color:var(--vz-green);background:var(--vz-green-s)}',
    '.vzc-arr{display:grid;place-items:center;padding:0 4px;color:var(--vz-muted)}',
    /* transform */
    '.vzc-tf{position:relative;height:230px;display:grid;place-items:center;overflow:hidden;border-radius:10px;',
    'background-image:linear-gradient(var(--vz-line) 1px,transparent 1px),linear-gradient(90deg,var(--vz-line) 1px,transparent 1px);background-size:20px 20px;background-position:center}',
    '.vzc-tf .ghost,.vzc-tf .box{position:absolute;width:90px;height:90px;border-radius:10px}',
    '.vzc-tf .ghost{border:2px dashed var(--vz-muted);opacity:.6}',
    '.vzc-tf .box{background:color-mix(in srgb,var(--vz-acc) 85%,transparent);color:var(--accent-ink,#fff);display:grid;place-items:center;font-weight:700;font-size:13px;transition:transform .15s}',
    '.vzc-tf .org{position:absolute;width:10px;height:10px;border-radius:50%;background:var(--vz-red);border:2px solid var(--vz-bg);transform:translate(-50%,-50%);z-index:2}'
  ].join(''));

  /* ---------- 1. Cascade ---------- */
  VZ.add('c-cascade', function (root) {
    // tier: 0 UA, 1 author trong @layer, 2 author ngoài layer, 3 inline; !important: 4 ngoài layer, 5 trong layer, 6 inline
    var rules = [
      { css: 'button { color: gray }', tier: 0, sp: [0, 0, 1], c: '#6b7280', label: 'UA', on: true },
      { css: '@layer base { .toolbar .btn { color: purple } }', tier: 1, sp: [0, 2, 0], c: '#7c3aed', label: '@layer', on: true },
      { css: 'button { color: navy }', tier: 2, sp: [0, 0, 1], c: '#1e3a8a', label: 'author', on: true },
      { css: '.btn { color: blue }', tier: 2, sp: [0, 1, 0], c: '#2563eb', label: 'author', on: true },
      { css: '.toolbar .btn { color: green }', tier: 2, sp: [0, 2, 0], c: '#16a34a', label: 'author', on: true },
      { css: '.btn { color: red }  /* viết sau */', tier: 2, sp: [0, 1, 0], c: '#dc2626', label: 'author', on: true },
      { css: 'style="color: orange"', tier: 3, sp: [1, 0, 0], c: '#ea7c0c', label: 'inline', on: false },
      { css: '.btn { color: teal !important }', tier: 4, sp: [0, 1, 0], c: '#0d9488', label: '!important', on: false },
      { css: '@layer base { button { color: brown !important } }', tier: 5, sp: [0, 0, 1], c: '#92400e', label: '!imp @layer', on: false }
    ];
    function cmp(a, b) { // >0 nếu a thắng b
      if (a.tier !== b.tier) return a.tier - b.tier;
      for (var i = 0; i < 3; i++) if (a.sp[i] !== b.sp[i]) return a.sp[i] - b.sp[i];
      return a.idx - b.idx;
    }
    rules.forEach(function (r, i) { r.idx = i; });
    var list = h('div', { class: 'vzc-rules' });
    var btnEl = h('button', { class: 'bt', type: 'button', tabindex: '-1' }, 'Lưu');
    var out = h('div', { class: 'vz-out', 'aria-live': 'polite' });
    function why(r, w) {
      if (r === w) return 'thắng';
      if (r.tier !== w.tier) {
        if (w.tier >= 4) return 'thua !important';
        if (w.tier === 3) return 'thua inline style';
        if (r.tier === 0) return 'thua: UA < author';
        if (r.tier === 1) return 'thua: @layer < ngoài layer';
        return 'thua tầng nguồn';
      }
      for (var i = 0; i < 3; i++) if (r.sp[i] !== w.sp[i]) return 'specificity ' + r.sp.join('-') + ' < ' + w.sp.join('-');
      return 'cùng specificity, viết trước';
    }
    function render() {
      var act = rules.filter(function (r) { return r.on; });
      var w = act.reduce(function (best, r) { return !best || cmp(r, best) > 0 ? r : best; }, null);
      VZ.clear(list);
      rules.forEach(function (r) {
        var cb = h('input', { type: 'checkbox', 'aria-label': 'Bật rule ' + r.css });
        cb.checked = r.on;
        cb.addEventListener('change', function () { r.on = cb.checked; render(); });
        list.appendChild(h('label', { class: 'vzc-rule' + (r === w ? ' win' : '') + (r.on ? '' : ' off') },
          cb, h('span', { class: 'tier' }, r.label), h('code', { title: r.css }, r.css),
          h('span', { class: 'why' }, r.on && w ? why(r, w) : (r.on ? '' : 'tắt'))));
      });
      btnEl.style.color = w ? w.c : 'inherit';
      out.textContent = w ? 'Kết quả: color lấy từ ' + w.css.replace(/\s*\/\*.*\*\//, '') : 'Không rule nào bật: color kế thừa từ cha.';
    }
    root.appendChild(h('div', { class: 'vzc-preview' },
      h('div', { class: 'tb' }, '.toolbar', btnEl), h('span', { class: 'vz-muted', style: { fontSize: '12.5px' } }, '<button class="btn"> nằm trong .toolbar. Bật/tắt từng rule để xem ai thắng.')));
    root.appendChild(h('div', { class: 'vz-stage' }, list));
    root.appendChild(out);
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Thứ tự xét: tầng nguồn (UA → @layer → ngoài layer → inline; !important đảo ngược thứ tự layer) → specificity → rule viết sau.'));
    render();
  });

  /* ---------- 2. Inheritance ---------- */
  VZ.add('c-inherit', function (root) {
    var props = {
      color: { css: 'color: crimson', inh: true, apply: { color: 'crimson' } },
      'font-size': { css: 'font-size: 18px', inh: true, apply: { fontSize: '18px' } },
      'font-style': { css: 'font-style: italic', inh: true, apply: { fontStyle: 'italic' } },
      border: { css: 'border: 2px solid crimson', inh: false, apply: { border: '2px solid crimson' } },
      padding: { css: 'padding: 16px', inh: false, apply: { padding: '16px' } },
      background: { css: 'background: #fde68a', inh: false, apply: { background: '#fde68a', color: '#1a1d24' } }
    };
    var cur = 'color';
    var stage = h('div', { class: 'vz-stage' });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function node(tag, text, state, style, kids) {
      var pill = state === 'src' ? 'đặt ở đây' : state === 'yes' ? 'kế thừa' : state === 'ua' ? 'UA ghi đè' : 'không kế thừa';
      var el = h('div', { class: 'vzc-node ' + (state === 'ua' ? 'no' : state) },
        h('div', { class: 'tag' }, tag, h('span', { class: 'vz-pill' }, pill)), text ? h('div', null, text) : null, kids);
      if (style) for (var k in style) el.style[k] = style[k];
      return el;
    }
    function render() {
      var p = props[cur], kidState = p.inh ? 'yes' : 'no';
      var kidStyle = p.inh ? p.apply : null;
      // <a> có color riêng từ UA, <button> có font/color riêng từ UA
      var aState = kidState, btnState = kidState;
      if (p.inh && cur === 'color') aState = 'ua';
      if (p.inh) btnState = 'ua';
      VZ.clear(stage);
      stage.appendChild(node('<div class="card">', null, 'src', p.apply, h('div', { class: 'vzc-kids' },
        node('<h3>', 'Tiêu đề card', kidState, kidStyle),
        node('<p>', h('span', null, 'Đoạn văn có ', node('<a>', 'link', aState, aState === 'yes' ? kidStyle : null)), kidState, kidStyle),
        node('<button>', 'Nút', btnState, null))));
      var a = stage.querySelectorAll('.vzc-node')[3];
      a.style.display = 'inline-grid'; a.style.padding = '2px 6px'; a.style.color = aState === 'yes' ? 'crimson' : 'var(--vz-blue)';
      out.textContent = p.inh
        ? p.css + ' là thuộc tính chữ nên chảy xuống con cháu. Riêng ' + (cur === 'color' ? '<a> và <button>' : '<button>') +
          ' có style mặc định của trình duyệt (UA) nên không nhận; dùng "' + (cur === 'color' ? 'color' : 'font') + ': inherit" để ép.'
        : p.css + ' không kế thừa: chỉ phần tử được đặt mới có. Con muốn giống thì phải tự khai báo (hoặc dùng giá trị inherit).';
    }
    root.appendChild(VZ.seg(Object.keys(props).map(function (k) { return [k, k]; }), cur, function (v) { cur = v; render(); }, 'Thuộc tính đặt trên .card'));
    root.appendChild(stage);
    root.appendChild(out);
    render();
  });

  /* ---------- 3. Margin collapse ---------- */
  VZ.add('c-margin', function (root) {
    var mA = 30, mB = 20, disp = 'block';
    var par = h('div', { class: 'vzc-par' });
    var A = h('div', { class: 'vzc-blk a' }, 'A');
    var B = h('div', { class: 'vzc-blk b' }, 'B');
    var ma = h('div', { class: 'vzc-m a' }), mb = h('div', { class: 'vzc-m b' });
    par.appendChild(h('div', { style: { height: '10px' } })); // khoảng đệm, tránh collapse với cha
    par.appendChild(A); par.appendChild(B); par.appendChild(ma); par.appendChild(mb);
    par.appendChild(h('div', { style: { height: '10px' } }));
    var gapEl = h('div', { class: 'vzc-gap' }), expl = h('div', { class: 'vz-out', 'aria-live': 'polite' });
    function render() {
      par.className = 'vzc-par' + (disp === 'flex' ? ' flex' : '');
      A.style.marginBottom = mA + 'px'; B.style.marginTop = mB + 'px';
      requestAnimationFrame(function () {
        var pr = par.getBoundingClientRect(), ar = A.getBoundingClientRect(), br = B.getBoundingClientRect();
        var gap = Math.round(br.top - ar.bottom);
        ma.style.top = (ar.bottom - pr.top) + 'px'; ma.style.height = mA + 'px'; ma.textContent = mA ? mA + 'px' : '';
        mb.style.top = (br.top - pr.top - mB) + 'px'; mb.style.height = mB + 'px'; mb.textContent = mB ? mB + 'px' : '';
        ma.style.right = disp === 'block' ? '50%' : '10px'; mb.style.left = disp === 'block' ? '50%' : '10px';
        gapEl.textContent = gap + 'px';
        expl.textContent = disp === 'block'
          ? 'Hai margin dọc kề nhau chồng lên nhau: khoảng cách = max(' + mA + ', ' + mB + ') = ' + Math.max(mA, mB) + 'px, không phải tổng.'
          : 'Trong flex (hoặc grid) margin không collapse: khoảng cách = ' + mA + ' + ' + mB + ' = ' + (mA + mB) + 'px. Dùng gap còn gọn hơn.';
      });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.range('A margin-bottom', 0, 60, 2, mA, function (v) { mA = v; render(); }, function (v) { return v + 'px'; }),
      VZ.range('B margin-top', 0, 60, 2, mB, function (v) { mB = v; render(); }, function (v) { return v + 'px'; }),
      VZ.seg([['block', 'cha display: block'], ['flex', 'cha display: flex (column)']], disp, function (v) { disp = v; render(); }, 'Display của phần tử cha')));
    root.appendChild(h('div', { class: 'vzc-mc' },
      h('div', { class: 'vz-stage' }, par),
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'Khoảng cách đo được giữa A và B'), gapEl, expl)));
    render();
  });

  /* ---------- 4. Ẩn phần tử ---------- */
  VZ.add('c-hide', function (root) {
    var methods = [
      ['show', 'Đang hiện', ''],
      ['none', 'display: none', 'display:none'],
      ['vis', 'visibility: hidden', 'visibility:hidden'],
      ['op', 'opacity: 0', 'opacity:0'],
      ['sr', '.visually-hidden', 'sr']
    ];
    var facts = { // chiếm chỗ, bấm/focus được, trình đọc màn hình đọc, transition được
      none: ['n', 'n', 'n', 'n'], vis: ['y', 'n', 'n', 'y'], op: ['y', 'y', 'y', 'y'], sr: ['n', 'y', 'y', 'n']
    };
    var cur = 'op', clicks = 0;
    var mid = h('div', { class: 'vzc-card mid', role: 'button', tabindex: '0' }, 'B (bấm thử)');
    var ghost = h('div', { class: 'vzc-ghost' }, mid);
    var row = h('div', { class: 'vzc-cards' }, h('div', { class: 'vzc-card side' }, 'A'), ghost, h('div', { class: 'vzc-card side' }, 'C'));
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    var tbody = h('tbody');
    var table = h('table', { class: 'vzc-tbl' },
      h('thead', null, h('tr', null, h('th', null, 'Cách ẩn'), h('th', null, 'Chiếm chỗ'), h('th', null, 'Bấm / focus'), h('th', null, 'Screen reader'), h('th', null, 'Transition'))), tbody);
    function onHit() { clicks++; out.textContent = cur === 'op' ? 'Bấm trúng B dù không nhìn thấy (' + clicks + ' lần)! opacity: 0 vẫn nhận click và focus.' : 'Đã bấm B (' + clicks + ' lần).'; }
    mid.addEventListener('click', onHit);
    mid.addEventListener('keydown', function (e) { if (e.key === 'Enter') onHit(); });
    function render() {
      mid.style.cssText = '';
      ghost.style.cssText = '';
      if (cur === 'none') ghost.style.display = 'none';
      if (cur === 'vis') mid.style.visibility = 'hidden';
      if (cur === 'op') mid.style.opacity = '0';
      if (cur === 'sr') ghost.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap';
      ghost.classList.toggle('show', cur === 'vis' || cur === 'op');
      VZ.clear(tbody);
      Object.keys(facts).forEach(function (k) {
        var m = methods.filter(function (x) { return x[0] === k; })[0];
        tbody.appendChild(h('tr', { class: k === cur ? 'cur' : '' }, h('td', null, h('code', null, m[1])),
          facts[k].map(function (f) { return h('td', { class: f }, f === 'y' ? '✓' : '✗'); })));
      });
      out.textContent = {
        show: 'B đang hiện bình thường. Chọn một cách ẩn để so sánh.',
        none: 'display: none: B biến mất hoàn toàn, A và C dồn lại. Giống Visibility(visible: false) của Flutter.',
        vis: 'visibility: hidden: B vô hình nhưng vẫn giữ chỗ, không bấm được. Giống Visibility(maintainSize: true).',
        op: 'opacity: 0: vô hình nhưng vẫn giữ chỗ, vẫn bấm và focus được. Bấm vào ô trống giữa A và C thử xem.',
        sr: '.visually-hidden: mắt không thấy, không chiếm chỗ, nhưng trình đọc màn hình vẫn đọc. Dùng cho label của nút icon.'
      }[cur];
    }
    root.appendChild(VZ.seg(methods.map(function (m) { return [m[0], m[1]]; }), cur, function (v) { cur = v; clicks = 0; render(); }, 'Cách ẩn B'));
    root.appendChild(h('div', { class: 'vz-stage' }, row));
    root.appendChild(out);
    root.appendChild(h('div', { style: { overflowX: 'auto' } }, table));
    render();
  });

  /* ---------- 5. em vs rem ---------- */
  VZ.add('c-units', function (root) {
    var rootPx = 16, levels = 3, k = 1.25;
    var emCol = h('div'), remCol = h('div');
    function build(col, unit) {
      VZ.clear(col);
      var parent = col, px = rootPx;
      for (var i = 1; i <= levels; i++) {
        px = unit === 'em' ? px * k : rootPx * k;
        var box = h('div', { class: 'vzc-nest ' + unit, style: { fontSize: px + 'px' } },
          h('small', null, 'cấp ' + i + ': ' + k + unit + ' = ' + (Math.round(px * 10) / 10) + 'px'), 'Aa');
        parent.appendChild(box);
        parent = box;
      }
    }
    function render() { build(emCol, 'em'); build(remCol, 'rem'); }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.range('font-size của html', 12, 24, 1, rootPx, function (v) { rootPx = v; render(); }, function (v) { return v + 'px'; }),
      VZ.range('Số cấp lồng', 1, 4, 1, levels, function (v) { levels = v; render(); })));
    root.appendChild(h('div', { class: 'vz-split' },
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl', style: { color: 'var(--vz-amber)' } }, 'font-size: 1.25em (nhân dồn theo cha)'), h('div', { class: 'vz-stage' }, emCol)),
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl', style: { color: 'var(--vz-teal)' } }, 'font-size: 1.25rem (luôn theo html)'), h('div', { class: 'vz-stage' }, remCol))));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Kéo font-size của html (người dùng tăng cỡ chữ trong trình duyệt): cả em và rem đều co giãn theo, px thì không. Lồng nhiều cấp thì em nhân dồn, rem giữ nguyên.'));
    render();
  });

  /* ---------- 6. clamp() ---------- */
  VZ.add('c-clamp', function (root) {
    // clamp(1rem, 0.5rem + 2.5vw, 2rem) với 1rem = 16px
    var MIN = 16, MAX = 32, f = function (vw) { return 8 + 0.025 * vw; };
    var vw = 700, V0 = 240, V1 = 1440;
    var W = 560, H = 220, L = 44, B = 30, T = 12, R = 12;
    function x(v) { return L + (v - V0) / (V1 - V0) * (W - L - R); }
    function y(px) { return H - B - (px - 8) / (40 - 8) * (H - B - T); }
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Đồ thị font-size theo chiều rộng viewport', style: { maxWidth: '640px' } });
    [8, 16, 24, 32, 40].forEach(function (p) {
      svg.appendChild(s('line', { x1: L, x2: W - R, y1: y(p), y2: y(p), stroke: 'var(--vz-line)' }));
      svg.appendChild(s('text', { x: L - 6, y: y(p) + 4, 'font-size': 11, 'text-anchor': 'end', style: 'fill:var(--vz-muted)' }, p + 'px'));
    });
    [320, 640, 960].forEach(function (v) {
      svg.appendChild(s('text', { x: x(v), y: H - 10, 'font-size': 11, 'text-anchor': 'middle', style: 'fill:var(--vz-muted)' }, v));
    });
    svg.appendChild(s('text', { x: W - R, y: H - 10, 'font-size': 11, 'text-anchor': 'end', style: 'fill:var(--vz-muted)' }, 'viewport (px)'));
    // đường preferred (mờ) và đường clamp
    svg.appendChild(s('line', { x1: x(V0), y1: y(f(V0)), x2: x(V1), y2: y(Math.min(40, f(V1))), stroke: 'var(--vz-muted)', 'stroke-dasharray': '4 4' }));
    svg.appendChild(s('polyline', { points: [V0, 320, 960, V1].map(function (v) { return x(v) + ',' + y(Math.min(MAX, Math.max(MIN, f(v)))); }).join(' '),
      fill: 'none', stroke: 'var(--vz-acc)', 'stroke-width': 3, 'stroke-linejoin': 'round' }));
    svg.appendChild(s('text', { x: x(V1) - 4, y: y(f(1300)) - 6, 'font-size': 10.5, 'text-anchor': 'end', style: 'fill:var(--vz-muted)' }, '0.5rem + 2.5vw'));
    var vline = s('line', { y1: T, y2: H - B, stroke: 'var(--vz-fg)', 'stroke-dasharray': '2 3' });
    var dot = s('circle', { r: 6, fill: 'var(--vz-acc)', stroke: 'var(--vz-bg)', 'stroke-width': 2 });
    svg.appendChild(vline); svg.appendChild(dot);
    var sample = h('div', { style: { fontWeight: '700', lineHeight: '1.2', transition: 'font-size .1s' } }, 'Tiêu đề co giãn');
    var out = h('div', { class: 'vz-out', 'aria-live': 'polite' });
    function render() {
      var p = f(vw), v = Math.min(MAX, Math.max(MIN, p));
      vline.setAttribute('x1', x(vw)); vline.setAttribute('x2', x(vw));
      dot.setAttribute('cx', x(vw)); dot.setAttribute('cy', y(v));
      sample.style.fontSize = v + 'px';
      var branch = p < MIN ? 'đang kẹp ở MIN (1rem)' : p > MAX ? 'đang kẹp ở MAX (2rem)' : 'đang dùng giá trị ưu tiên';
      out.innerHTML = '';
      out.appendChild(h('span', null, 'vw = ', h('b', null, vw + 'px'), ' → 8 + 2.5% × ' + vw + ' = ' + (Math.round(p * 10) / 10) + 'px → ',
        h('b', { style: { color: 'var(--vz-acc)' } }, (Math.round(v * 10) / 10) + 'px'), ' (' + branch + ')'));
    }
    root.appendChild(h('pre', { class: 'vz-log', style: { minHeight: '0' } }, 'h1 { font-size: clamp(1rem, 0.5rem + 2.5vw, 2rem); }'));
    root.appendChild(VZ.range('Rộng viewport', V0, V1, 10, vw, function (v) { vw = v; render(); }, function (v) { return v + 'px'; }));
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(sample);
    root.appendChild(out);
    render();
  });

  /* ---------- 7. object-fit ---------- */
  VZ.add('c-objectfit', function (root) {
    var img = 'data:image/svg+xml;utf8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4ff"/><stop offset="1" stop-color="#d9f0ff"/></linearGradient></defs>' +
      '<rect width="600" height="400" fill="url(#g)"/><circle cx="470" cy="90" r="42" fill="#ffd34d"/>' +
      '<path d="M0 300 L140 170 L250 280 L360 150 L600 330 L600 400 L0 400Z" fill="#3f8f5a"/>' +
      '<path d="M0 340 Q150 300 300 340 T600 340 L600 400 L0 400Z" fill="#2f6d45"/>' +
      '<circle cx="300" cy="235" r="34" fill="#ffcf9e"/><circle cx="289" cy="228" r="4" fill="#333"/><circle cx="311" cy="228" r="4" fill="#333"/>' +
      '<path d="M287 246 Q300 256 313 246" stroke="#333" stroke-width="3" fill="none"/>' +
      '<rect x="4" y="4" width="592" height="392" fill="none" stroke="#e11d48" stroke-width="8"/></svg>');
    var fit = 'cover', ratio = '1 / 1', posn = 'center';
    var pic = h('img', { src: img, alt: 'Ảnh phong cảnh 3:2 có khuôn mặt ở giữa, viền đỏ là mép ảnh gốc' });
    var frame = h('div', { class: 'vzc-frame' }, pic);
    var code = h('pre', { class: 'vz-log', style: { minHeight: '0' } });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    var notes = {
      fill: 'Kéo giãn cho vừa khung, méo hình. Mặc định của <img> khi đặt cả width và height.',
      contain: 'Thu nhỏ cho thấy trọn ảnh, giữ tỉ lệ, chừa khoảng trống (letterbox). Giống BoxFit.contain.',
      cover: 'Phủ kín khung, giữ tỉ lệ, cắt bớt phần thừa. Giống BoxFit.cover / ContentScale.Crop. Hay dùng cho avatar, thumbnail.',
      none: 'Giữ nguyên kích thước gốc (600×400), chỉ thấy một phần.',
      'scale-down': 'Chọn cái nhỏ hơn giữa none và contain. Ảnh không bao giờ bị phóng to.'
    };
    function render() {
      frame.style.aspectRatio = ratio;
      pic.style.objectFit = fit; pic.style.objectPosition = posn;
      code.textContent = '.frame {\n  aspect-ratio: ' + ratio + ';\n}\n.frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: ' + fit + ';\n  object-position: ' + posn + ';\n}';
      out.textContent = notes[fit];
    }
    root.appendChild(VZ.seg([['fill', 'fill'], ['contain', 'contain'], ['cover', 'cover'], ['none', 'none'], ['scale-down', 'scale-down']], fit, function (v) { fit = v; render(); }, 'object-fit'));
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'aspect-ratio'),
      VZ.seg([['1 / 1', '1 / 1'], ['16 / 9', '16 / 9'], ['3 / 4', '3 / 4']], ratio, function (v) { ratio = v; render(); }, 'aspect-ratio'),
      h('span', { class: 'vz-lbl' }, 'object-position'),
      VZ.seg([['center', 'center'], ['left top', 'left top'], ['right bottom', 'right bottom']], posn, function (v) { posn = v; render(); }, 'object-position')));
    root.appendChild(h('div', { class: 'vz-split' }, h('div', { class: 'vz-stage', style: { display: 'grid', placeItems: 'center' } }, frame), h('div', { class: 'vz-col' }, code, out)));
    render();
  });

  /* ---------- 8. Rendering pipeline ---------- */
  VZ.add('c-pipeline', function (root) {
    var props = {
      width: 3, height: 3, top: 3, left: 3, margin: 3, padding: 3, 'font-size': 3,
      color: 2, background: 2, 'box-shadow': 2, 'border-radius': 2,
      transform: 1, opacity: 1
    };
    var stages = [['Style', 'tính style'], ['Layout', 'tính vị trí, kích thước mọi box'], ['Paint', 'vẽ pixel từng lớp'], ['Composite', 'ghép lớp trên GPU']];
    var cur = 'left';
    var bar = h('div', { class: 'vzc-props', role: 'group', 'aria-label': 'Thuộc tính được animate' });
    var stEls = stages.map(function (st) { return h('div', { class: 'vzc-st' }, h('b', null, st[0]), h('span', null, st[1])); });
    var pipe = h('div', { class: 'vzc-pipe' });
    stEls.forEach(function (e, i) { if (i) pipe.appendChild(h('span', { class: 'vzc-arr', 'aria-hidden': 'true' }, '→')); pipe.appendChild(e); });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    var btns = Object.keys(props).map(function (p) {
      var b = h('button', { type: 'button', 'aria-pressed': 'false' }, p);
      b.addEventListener('click', function () { cur = p; render(); });
      bar.appendChild(b);
      return b;
    });
    function render() {
      var lvl = props[cur]; // 3: layout trở đi, 2: paint trở đi, 1: chỉ composite
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.textContent === cur)); });
      stEls.forEach(function (e, i) {
        var on = i === 0 || i >= 4 - lvl;
        e.classList.toggle('on', on);
        e.classList.toggle('cheap', lvl === 1);
      });
      out.textContent = lvl === 3 ? 'Đổi ' + cur + ' → tính lại layout cho phần tử và có thể cả các phần tử xung quanh, rồi vẽ lại, mỗi frame. Dễ giật trên máy yếu.'
        : lvl === 2 ? 'Đổi ' + cur + ' → không đổi layout nhưng phải vẽ lại pixel. Chấp nhận được với vùng nhỏ.'
        : 'Đổi ' + cur + ' → bỏ qua layout và paint, GPU chỉ ghép lại lớp. Đây là 2 thuộc tính nên dùng để animate.';
    }
    root.appendChild(h('span', { class: 'vz-lbl' }, 'Chọn thuộc tính đang animate:'));
    root.appendChild(bar);
    root.appendChild(h('div', { class: 'vz-stage' }, pipe));
    root.appendChild(out);
    render();
  });

  /* ---------- 9. transform ---------- */
  VZ.add('c-transform', function (root) {
    var st = { tx: 40, ty: 0, rot: 30, sc: 1, sk: 0, origin: 'center', order: 'tr' };
    var stage = h('div', { class: 'vzc-tf' });
    var ghost = h('div', { class: 'ghost' }), box = h('div', { class: 'box' }, 'box'), org = h('div', { class: 'org' });
    stage.appendChild(ghost); stage.appendChild(box); box.appendChild(org);
    var code = h('pre', { class: 'vz-log', style: { minHeight: '0' } });
    var ORG = { center: [50, 50], 'top left': [0, 0], 'bottom right': [100, 100] };
    function render() {
      var t = 'translate(' + st.tx + 'px, ' + st.ty + 'px)', r = 'rotate(' + st.rot + 'deg)';
      var parts = st.order === 'tr' ? [t, r] : [r, t];
      parts.push('scale(' + st.sc + ')');
      if (st.sk) parts.push('skewX(' + st.sk + 'deg)');
      var tf = parts.join(' ');
      box.style.transform = tf;
      box.style.transformOrigin = st.origin;
      var o = ORG[st.origin];
      org.style.left = o[0] + '%';
      org.style.top = o[1] + '%';
      code.textContent = '.box {\n  transform: ' + tf + ';\n  transform-origin: ' + st.origin + ';\n}';
    }
    function rg(label, key, min, max, step, unit) {
      return VZ.range(label, min, max, step, st[key], function (v) { st[key] = v; render(); }, function (v) { return v + unit; });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      rg('translateX', 'tx', -80, 80, 1, 'px'), rg('translateY', 'ty', -60, 60, 1, 'px'),
      rg('rotate', 'rot', -180, 180, 1, '°'), rg('scale', 'sc', 0.4, 1.8, 0.05, ''), rg('skewX', 'sk', -40, 40, 1, '°')));
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'transform-origin'),
      VZ.seg([['center', 'center'], ['top left', 'top left'], ['bottom right', 'bottom right']], st.origin, function (v) { st.origin = v; render(); }, 'transform-origin'),
      h('span', { class: 'vz-lbl' }, 'Thứ tự hàm'),
      VZ.seg([['tr', 'translate → rotate'], ['rt', 'rotate → translate']], st.order, function (v) { st.order = v; render(); }, 'Thứ tự hàm transform')));
    root.appendChild(h('div', { class: 'vz-split' }, stage, h('div', { class: 'vz-col' }, code,
      h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
        'Khung nét đứt là vị trí gốc: transform không đẩy phần tử khác, layout vẫn tính như chưa biến đổi. Đổi thứ tự translate/rotate để thấy hàm được áp từ phải sang trái; chấm đỏ là transform-origin.'))));
    render();
  });
})(window.VZ);
