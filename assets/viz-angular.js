/* Minh hoạ cho trang Angular. Cần assets/viz.js nạp trước. */
(function (VZ) {
  'use strict';
  if (!VZ) return;
  var h = VZ.h, s = VZ.s;

  VZ.css('vz-ng', [
    '.vz{--accent-ink:var(--bg,#fff)}',
    '.vza-chips{display:flex;flex-wrap:wrap;gap:5px}',
    '.vza-chip{font-family:var(--vz-mono);font-size:11.5px;padding:3px 8px;border-radius:6px;border:1.5px solid var(--vz-line);background:var(--vz-bg);color:var(--vz-muted);transition:all .2s}',
    '.vza-chip.on{border-color:var(--vz-acc);color:var(--vz-fg);background:color-mix(in srgb,var(--vz-acc) 14%,var(--vz-bg));font-weight:700}',
    '.vza-chip.done{border-color:var(--vz-green);color:var(--vz-green)}',
    '.vza-box{border:1.5px solid var(--vz-line);border-radius:10px;padding:10px;background:var(--vz-bg);display:grid;gap:8px;transition:all .2s;min-width:0}',
    '.vza-box>.hd{font-family:var(--vz-mono);font-size:12px;font-weight:700;display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
    '.vza-pipe{display:flex;flex-direction:column;align-items:center;gap:2px;font-family:var(--vz-mono);font-size:11.5px;color:var(--vz-muted);padding:4px 0}',
    '.vza-pipe .a{font-size:16px;transition:color .2s}.vza-pipe.hot{color:var(--vz-acc)}.vza-pipe.hot .a{color:var(--vz-acc)}',
    '.vza-io{display:grid;grid-template-columns:1fr auto 1fr;gap:6px;align-items:center}',
    '.vza-io .vza-pipe{flex-direction:row}',
    '@media (max-width:560px){.vza-io{grid-template-columns:1fr}}',
    /* tree */
    '.vza-tree{display:grid;gap:4px}',
    '.vza-node{display:flex;align-items:center;gap:8px;padding:5px 9px;border-radius:8px;border:1.5px solid var(--vz-line);background:var(--vz-bg);font-size:12.5px;transition:all .2s;min-width:0}',
    '.vza-node b{font-family:var(--vz-mono);font-size:12.5px}',
    '.vza-node .tg{font-size:10.5px;font-weight:700;padding:0 6px;border-radius:5px;background:var(--vz-bg2);color:var(--vz-muted);white-space:nowrap}',
    '.vza-node .tg.push{background:var(--vz-purple-s);color:var(--vz-purple)}',
    '.vza-node .st{margin-left:auto;font-size:11.5px;font-weight:600;white-space:nowrap}',
    '.vza-node.ok{border-color:var(--vz-green);background:var(--vz-green-s)}.vza-node.ok .st{color:var(--vz-green)}',
    '.vza-node.skip{border-style:dashed;opacity:.55}',
    '.vza-node.pass{border-color:var(--vz-blue);border-style:dashed}.vza-node.pass .st{color:var(--vz-blue)}',
    '.vza-node.look{border-color:var(--vz-amber);background:var(--vz-amber-s)}.vza-node.look .st{color:var(--vz-amber)}',
    '.vza-node.miss .st{color:var(--vz-muted)}',
    '.vza-node.err{border-color:var(--vz-red);background:var(--vz-red-s)}.vza-node.err .st{color:var(--vz-red)}',
    '.vza-node.dim{opacity:.35}',
    '.vza-node .prov{font-family:var(--vz-mono);font-size:11px;color:var(--vz-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.vza-sec{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--vz-muted);margin-top:4px}',
    /* projection */
    '.vza-tri{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))}',
    '.vza-ln{font-family:var(--vz-mono);font-size:11.5px;padding:3px 7px;border-radius:6px;border:1.5px solid transparent;white-space:pre;overflow:hidden;text-overflow:ellipsis;transition:all .15s}',
    '.vza-ln[data-k]{cursor:pointer}',
    '.vza-ln.k1{border-color:var(--vz-blue)}.vza-ln.k2{border-color:var(--vz-green)}.vza-ln.k3{border-color:var(--vz-purple)}',
    '.vza-ln.hot.k1{background:var(--vz-blue-s)}.vza-ln.hot.k2{background:var(--vz-green-s)}.vza-ln.hot.k3{background:var(--vz-purple-s)}',
    '.vza-ln.hot{box-shadow:0 0 0 2px currentColor}',
    '.vza-card{border:1.5px solid var(--vz-line);border-radius:10px;overflow:hidden;background:var(--vz-bg);display:grid}',
    '.vza-card>*{padding:8px 10px;margin:0;font-family:var(--font-body,system-ui);white-space:normal}',
    '.vza-card>header{background:var(--vz-bg2);font-weight:700}',
    '.vza-card>footer{border-top:1px solid var(--vz-line);display:flex;justify-content:flex-end}',
    /* marbles */
    '.vza-lane-l{font-family:var(--vz-mono);font-size:11px}',
    /* search */
    '.vza-lanes{display:grid;gap:6px}',
    '.vza-lane{display:grid;grid-template-columns:9.5em minmax(0,1fr);gap:8px;align-items:center}',
    '.vza-lane>span{font-family:var(--vz-mono);font-size:11.5px;color:var(--vz-muted)}',
    '.vza-lane>div{display:flex;gap:4px;overflow:hidden;min-height:26px;align-items:center;justify-content:flex-end}',
    '.vza-m{flex:none;font-family:var(--vz-mono);font-size:11px;padding:2px 7px;border-radius:999px;background:var(--vz-bg);border:1.5px solid var(--vz-line);animation:vz-in .2s ease-out;white-space:nowrap}',
    '.vza-m.k{border-color:var(--vz-muted)}.vza-m.d{border-color:var(--vz-purple);color:var(--vz-purple)}',
    '.vza-m.u{border-color:var(--vz-teal);color:var(--vz-teal)}.vza-m.r{border-color:var(--vz-amber);color:var(--vz-amber)}',
    '.vza-m.x{border-color:var(--vz-red);color:var(--vz-red);text-decoration:line-through;opacity:.7}',
    '.vza-m.ok{border-color:var(--vz-green);color:var(--vz-green);font-weight:700}',
    /* defer */
    '.vza-prev{min-height:96px;border-radius:10px;border:1.5px dashed var(--vz-line);display:grid;place-items:center;padding:12px;text-align:center;font-size:13px;transition:all .2s}',
    '.vza-prev.placeholder{background:var(--vz-bg2);color:var(--vz-muted)}',
    '.vza-prev.loading{border-color:var(--vz-amber);background:var(--vz-amber-s);color:var(--vz-amber)}',
    '.vza-prev.content{border-style:solid;border-color:var(--vz-green);background:var(--vz-green-s);color:var(--vz-green)}',
    '.vza-prev.error{border-style:solid;border-color:var(--vz-red);background:var(--vz-red-s);color:var(--vz-red)}',
    '@keyframes vza-spin{to{transform:rotate(360deg)}}',
    '.vza-spin{display:inline-block;width:16px;height:16px;border:2.5px solid currentColor;border-right-color:transparent;border-radius:50%;animation:vza-spin .8s linear infinite;vertical-align:-3px;margin-right:6px}',
    /* chain */
    '.vza-chain{display:flex;align-items:stretch;gap:0;flex-wrap:wrap}',
    '.vza-step{flex:1;min-width:104px;padding:8px;border-radius:9px;border:1.5px solid var(--vz-line);background:var(--vz-bg);display:grid;gap:3px;align-content:start;transition:all .2s}',
    '.vza-step b{font-family:var(--vz-mono);font-size:11.5px}.vza-step span{font-size:11px;color:var(--vz-muted)}',
    '.vza-step.on{border-color:var(--vz-acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--vz-acc) 25%,transparent)}',
    '.vza-step.ok{border-color:var(--vz-green);background:var(--vz-green-s)}',
    '.vza-step.no{border-color:var(--vz-red);background:var(--vz-red-s)}',
    '.vza-step.na{opacity:.4}',
    '.vza-step select{font-size:11.5px;min-height:28px;padding:2px 4px}',
    '.vza-arr{display:grid;place-items:center;padding:0 3px;color:var(--vz-muted);font-size:13px}',
    /* form state */
    '.vza-flags{display:grid;gap:6px;grid-template-columns:repeat(auto-fit,minmax(min(100%,130px),1fr))}',
    '.vza-flag{border-radius:8px;padding:6px 9px;background:var(--vz-bg);border:1.5px solid var(--vz-line);font-size:12px;display:grid;gap:1px}',
    '.vza-flag b{font-family:var(--vz-mono);font-size:12.5px}',
    '.vza-flag.t{border-color:var(--vz-green)}.vza-flag.t b{color:var(--vz-green)}',
    '.vza-inp.ng-invalid.ng-touched{border-color:var(--vz-red)!important;box-shadow:0 0 0 3px var(--vz-red-s)}',
    '.vza-inp.ng-valid.ng-dirty{border-color:var(--vz-green)!important}',
    '.vza-inp.ng-pending{border-color:var(--vz-amber)!important}'
  ].join(''));

  function tree(nodes) { // nodes: [{k, name, tag, depth, extra}]
    var map = {}, el = h('div', { class: 'vza-tree' });
    nodes.forEach(function (n) {
      var st = h('span', { class: 'st' });
      var row = h('div', { class: 'vza-node', style: { marginLeft: (n.depth || 0) * 20 + 'px' } },
        n.depth ? h('span', { class: 'vz-muted', 'aria-hidden': 'true' }, '└') : null,
        h('b', null, n.name), n.tag ? h('span', { class: 'tg' + (n.tag === 'OnPush' ? ' push' : '') }, n.tag) : null,
        n.prov ? h('span', { class: 'prov' }, n.prov) : null, st);
      row.st = st;
      map[n.k] = row;
      el.appendChild(row);
    });
    el.map = map;
    el.reset = function () { for (var k in map) { map[k].className = 'vza-node'; map[k].st.textContent = ''; } };
    el.set = function (k, cls, txt) { map[k].className = 'vza-node ' + cls; map[k].st.textContent = txt || ''; };
    return el;
  }

  /* ---------- 1. Lifecycle ---------- */
  VZ.add('a-lifecycle', function (root) {
    var D = {
      constructor: 'inject() service, khởi tạo field. Input CHƯA có giá trị.',
      ngOnChanges: 'Input (kiểu @Input) vừa đổi; nhận SimpleChanges.',
      ngOnInit: 'Một lần, input đã có: gọi API, setup.',
      ngDoCheck: 'Mỗi lần change detection chạy. Tránh code nặng.',
      ngAfterContentInit: 'Một lần, nội dung <ng-content> đã sẵn sàng (contentChild).',
      ngAfterContentChecked: 'Sau mỗi lần kiểm tra content.',
      ngAfterViewInit: 'Một lần, view con đã render (viewChild dùng được).',
      ngAfterViewChecked: 'Sau mỗi lần kiểm tra view.',
      afterNextRender: 'Một lần sau khi DOM đã vẽ: đo kích thước, thư viện DOM (chỉ trên browser).',
      ngOnDestroy: 'Dọn dẹp: huỷ timer, subscription (hoặc dùng DestroyRef / takeUntilDestroyed).'
    };
    var SEQ = {
      create: ['constructor', 'ngOnChanges', 'ngOnInit', 'ngDoCheck', 'ngAfterContentInit', 'ngAfterContentChecked', 'ngAfterViewInit', 'ngAfterViewChecked', 'afterNextRender'],
      input: ['ngOnChanges', 'ngDoCheck', 'ngAfterContentChecked', 'ngAfterViewChecked'],
      cd: ['ngDoCheck', 'ngAfterContentChecked', 'ngAfterViewChecked'],
      destroy: ['ngOnDestroy']
    };
    var alive = false, tm = VZ.timers(), chips = {};
    var row = h('div', { class: 'vza-chips' });
    Object.keys(D).forEach(function (k) { chips[k] = h('span', { class: 'vza-chip' }, k); row.appendChild(chips[k]); });
    var log = h('pre', { class: 'vz-log', style: { maxHeight: '260px' } });
    var bC, bI, bD, bX;
    function run(kind, title) {
      tm.stop();
      for (var k in chips) chips[k].className = 'vza-chip';
      log.textContent += (log.textContent ? '\n' : '') + '── ' + title + ' ──\n';
      SEQ[kind].forEach(function (k, i) {
        tm.after(i * 260, function () {
          for (var c in chips) chips[c].classList.remove('on');
          chips[k].classList.add('on', 'done');
          log.textContent += k.padEnd(22) + ' ' + D[k] + '\n';
          log.scrollTop = log.scrollHeight;
        });
      });
      if (kind === 'create') alive = true;
      if (kind === 'destroy') alive = false;
      bC.disabled = alive; bI.disabled = bD.disabled = bX.disabled = !alive;
    }
    bC = VZ.btn('Tạo component', function () { log.textContent = ''; run('create', 'Component được tạo'); }, true);
    bI = VZ.btn('Cha đổi input', function () { run('input', 'Cha truyền giá trị input mới'); });
    bD = VZ.btn('Change detection chạy', function () { run('cd', 'Có sự kiện / timer → change detection'); });
    bX = VZ.btn('Huỷ (@if → false)', function () { run('destroy', 'Component bị gỡ khỏi DOM'); });
    bI.disabled = bD.disabled = bX.disabled = true;
    root.appendChild(h('div', { class: 'vz-row' }, bC, bI, bD, bX));
    root.appendChild(row);
    root.appendChild(log);
    log.textContent = 'Bấm "Tạo component" để xem thứ tự các hook.';
  });

  /* ---------- 2. input() / output() ---------- */
  VZ.add('a-io', function (root) {
    var qty = 1, total = 0;
    var down = h('div', { class: 'vza-pipe' }, h('span', { class: 'a' }, '▼'), '[qty]="qty()"', h('span', { class: 'vz-muted' }, 'input: dữ liệu đi xuống'));
    var up = h('div', { class: 'vza-pipe' }, h('span', { class: 'a' }, '▲'), '(added)="onAdded($event)"', h('span', { class: 'vz-muted' }, 'output: sự kiện đi lên'));
    var childQty = h('b', null, '1'), parentQty = h('b', null, '1'), parentLog = h('div', { class: 'vz-out', 'aria-live': 'polite' }, 'Chưa có sự kiện nào.');
    var slider = VZ.range('qty = signal(', 1, 9, 1, qty, function (v) {
      qty = v; parentQty.textContent = v; childQty.textContent = v;
      hot(down); VZ.flash(childBox);
    }, function (v) { return v + ')'; });
    var childBox = h('div', { class: 'vza-box' },
      h('div', { class: 'hd' }, '<app-product-row>', h('span', { class: 'vz-pill' }, 'con')),
      h('div', null, h('code', null, 'qty = input.required<number>()'), ' → hiển thị ', childQty),
      h('div', null, VZ.btn('Thêm vào giỏ  →  added.emit(qty())', function () {
        total += qty;
        hot(up);
        parentLog.textContent = 'onAdded(' + qty + ') → tổng trong giỏ: ' + total;
        VZ.flash(parentBox);
      }, true)));
    var parentBox = h('div', { class: 'vza-box' },
      h('div', { class: 'hd' }, '<app-cart>', h('span', { class: 'vz-pill' }, 'cha')),
      h('div', { class: 'vz-row' }, slider, h('span', null, 'qty() = ', parentQty)), parentLog);
    function hot(p) { p.classList.add('hot'); setTimeout(function () { p.classList.remove('hot'); }, 500); }
    root.appendChild(h('div', { class: 'vz-stage vz-col' }, parentBox, h('div', { class: 'vz-split' }, down, up), childBox));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Luồng một chiều: con không sửa input; muốn đổi thì emit output cho cha tự cập nhật state. Cần hai chiều thì dùng model() với cú pháp [(qty)].'));
  });

  /* ---------- 3. Content projection ---------- */
  VZ.add('a-projection', function (root) {
    var all = [];
    function ln(t, k) {
      var e = h('div', { class: 'vza-ln' + (k ? ' k' + k : ''), 'data-k': k || null, tabindex: k ? '0' : null }, t);
      if (k) ['mouseenter', 'focus', 'click'].forEach(function (ev) { e.addEventListener(ev, function () { hot(k); }); });
      all.push(e);
      return e;
    }
    function hot(k) { all.forEach(function (e) { e.classList.toggle('hot', e.getAttribute('data-k') === String(k)); }); }
    var parent = h('div', { class: 'vz-col' }, h('span', { class: 'vza-sec' }, '1 · Cha dùng component'),
      ln('<app-card>'), ln('  <h3 card-title>Hoá đơn #1024</h3>', 1), ln('  <p>Tổng: 450.000đ</p>', 2), ln('  <button card-actions>Thanh toán</button>', 3), ln('</app-card>'));
    var child = h('div', { class: 'vz-col' }, h('span', { class: 'vza-sec' }, '2 · Template của app-card'),
      ln('<header>'), ln('  <ng-content select="[card-title]" />', 1), ln('</header>'),
      ln('<section>'), ln('  <ng-content />  <!-- còn lại -->', 2), ln('</section>'),
      ln('<footer>'), ln('  <ng-content select="[card-actions]" />', 3), ln('</footer>'));
    var t = ln('Hoá đơn #1024', 1), p = ln('Tổng: 450.000đ', 2), b = ln('Thanh toán', 3);
    var card = h('div', { class: 'vza-card' }, h('header', null, t), h('section', null, p), h('footer', null, b));
    var out = h('div', { class: 'vz-col' }, h('span', { class: 'vza-sec' }, '3 · Kết quả hiển thị'), card);
    root.appendChild(h('div', { class: 'vz-stage' }, h('div', { class: 'vza-tri' }, parent, child, out)));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Rê chuột hoặc Tab vào từng dòng. Nội dung khớp selector nào thì vào ng-content đó; phần không khớp rơi vào ng-content không có select. Giống truyền slot widget (title:, actions:) trong Flutter/Compose.'));
    hot(1);
  });

  /* ---------- 4. Signal graph ---------- */
  VZ.add('a-signals', function (root) {
    var W = 700, H = 250, NW = 128, NH = 52;
    var N = {
      price: { x: 6, y: 12, kind: 's', label: 'price', expr: 'signal' },
      qty: { x: 6, y: 98, kind: 's', label: 'qty', expr: 'signal' },
      coupon: { x: 6, y: 184, kind: 's', label: 'coupon', expr: 'signal' },
      subtotal: { x: 200, y: 40, kind: 'c', label: 'subtotal', expr: 'price × qty', deps: ['price', 'qty'] },
      label: { x: 200, y: 160, kind: 'c', label: 'label', expr: "qty>1 ? 'nhiều':'một'", deps: ['qty'] },
      total: { x: 394, y: 98, kind: 'c', label: 'total', expr: 'subtotal × (1-coupon)', deps: ['subtotal', 'coupon'] },
      effect: { x: 566, y: 98, kind: 'e', label: 'effect', expr: 'log(label, total)', deps: ['total', 'label'] }
    };
    var val = { price: 100, qty: 1, coupon: 0 }, runs = {};
    var order = ['subtotal', 'label', 'total', 'effect'];
    var F = {
      subtotal: function () { return val.price * val.qty; },
      label: function () { return val.qty > 1 ? 'nhiều' : 'một'; },
      total: function () { return Math.round(val.subtotal * (1 - val.coupon / 100)); },
      effect: function () { return '✓ đã log'; }
    };
    order.forEach(function (k) { val[k] = F[k](); runs[k] = 1; });
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Đồ thị phụ thuộc giữa signal, computed và effect', style: { minWidth: '560px' } });
    var COL = { s: 'var(--vz-blue)', c: 'var(--vz-purple)', e: 'var(--vz-teal)' };
    Object.keys(N).forEach(function (k) {
      (N[k].deps || []).forEach(function (d) {
        var a = N[d], b = N[k];
        var x1 = a.x + NW, y1 = a.y + NH / 2, x2 = b.x, y2 = b.y + NH / 2, mx = (x1 + x2) / 2;
        N[k]['e_' + d] = svg.appendChild(s('path', { d: 'M' + x1 + ' ' + y1 + ' C' + mx + ' ' + y1 + ' ' + mx + ' ' + y2 + ' ' + x2 + ' ' + y2,
          fill: 'none', stroke: 'var(--vz-line)', 'stroke-width': 2, 'marker-end': 'url(#vza-arrow)' }));
      });
    });
    svg.insertBefore(s('defs', null, s('marker', { id: 'vza-arrow', viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto' },
      s('path', { d: 'M0 0L10 5L0 10z', fill: 'var(--vz-muted)' }))), svg.firstChild);
    Object.keys(N).forEach(function (k) {
      var n = N[k];
      n.rect = s('rect', { x: n.x, y: n.y, width: NW, height: NH, rx: 9, fill: 'var(--vz-bg)', stroke: COL[n.kind], 'stroke-width': 2 });
      n.t1 = s('text', { x: n.x + 9, y: n.y + 18, 'font-size': 12.5, 'font-weight': 700, 'font-family': 'var(--vz-mono)' }, n.label);
      n.t2 = s('text', { x: n.x + 9, y: n.y + 34, 'font-size': 10, style: 'fill:var(--vz-muted)' }, n.expr);
      n.t3 = s('text', { x: n.x + 9, y: n.y + 47, 'font-size': 11, 'font-family': 'var(--vz-mono)' });
      svg.appendChild(n.rect); svg.appendChild(n.t1); svg.appendChild(n.t2); svg.appendChild(n.t3);
    });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' }), tm = VZ.timers();
    function paint() {
      Object.keys(N).forEach(function (k) {
        var v = k === 'effect' ? '' : (k === 'coupon' ? val[k] + '%' : String(val[k]));
        N[k].t3.textContent = v + (runs[k] ? (v ? '  ·  ' : '') + 'chạy ' + runs[k] + ' lần' : '');
      });
    }
    function color(k, c) { N[k].rect.setAttribute('fill', c); }
    function down(src) { // tất cả node phụ thuộc (trực tiếp/gián tiếp)
      var res = [];
      order.forEach(function (k) { if (N[k].deps.some(function (d) { return d === src || res.indexOf(d) >= 0; })) res.push(k); });
      return res;
    }
    function set(k, v) {
      tm.stop();
      Object.keys(N).forEach(function (x) { color(x, 'var(--vz-bg)'); });
      if (val[k] === v) { color(k, 'var(--vz-bg2)'); out.textContent = k + '.set(' + v + '): giá trị không đổi (so sánh bằng Object.is) → không báo cho ai, không gì chạy lại.'; return; }
      val[k] = v; color(k, 'var(--vz-blue-s)'); paint();
      var dirty = down(k), changed = {}; changed[k] = 1;
      dirty.forEach(function (d) { color(d, 'var(--vz-amber-s)'); });
      out.textContent = k + ' đổi → đánh dấu "có thể cũ" (vàng): ' + dirty.join(', ') + '. Chưa tính lại ngay.';
      var skipped = order.filter(function (x) { return dirty.indexOf(x) < 0; });
      dirty.forEach(function (d, i) {
        tm.after(700 + i * 500, function () {
          var need = N[d].deps.some(function (x) { return changed[x]; });
          if (!need) { color(d, 'var(--vz-bg)'); return; }
          var old = val[d];
          val[d] = F[d](); runs[d]++;
          if (d === 'effect' || val[d] !== old) changed[d] = 1;
          color(d, 'var(--vz-green-s)');
          paint();
          if (i === dirty.length - 1) {
            out.textContent = 'Đã tính lại (xanh): ' + dirty.filter(function (x) { return runs[x] && changed[x]; }).join(', ') +
              (skipped.length ? '. Không đụng tới: ' + skipped.join(', ') + ' (không phụ thuộc ' + k + ').' : '.') +
              (dirty.indexOf('label') >= 0 && !changed.label ? ' label tính lại nhưng ra cùng giá trị nên không lan tiếp từ label.' : '');
          }
        });
      });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.btn('price.update(p => p + 10)', function () { set('price', val.price + 10); }),
      VZ.btn('qty.update(q => q + 1)', function () { set('qty', val.qty + 1); }),
      VZ.btn('qty.set(qty())', function () { set('qty', val.qty); }),
      VZ.btn('coupon.set(' + 10 + ')', function () { set('coupon', val.coupon === 10 ? 0 : 10); })));
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(h('div', { class: 'vz-legend' },
      h('span', null, h('i', { style: { background: COL.s } }), 'signal: giá trị gốc, đọc/ghi'),
      h('span', null, h('i', { style: { background: COL.c } }), 'computed: chỉ đọc, tự tính, có cache'),
      h('span', null, h('i', { style: { background: COL.e } }), 'effect: side effect khi dependency đổi')));
    root.appendChild(out);
    paint();
    out.textContent = 'Bấm một nút để đổi signal. Angular tự biết ai phụ thuộc ai nhờ việc đọc signal(), không cần khai báo.';
  });

  /* ---------- 5. Hierarchical injector ---------- */
  VZ.add('a-injector', function (root) {
    var L = [
      { k: 'null', name: 'NullInjector', prov: 'ném lỗi NG0201', env: 1 },
      { k: 'platform', name: 'Platform', prov: '', env: 1 },
      { k: 'root', name: 'Root (EnvironmentInjector)', prov: "LoggerService, CartService (providedIn: 'root')", env: 1, has: ['LoggerService', 'CartService'] },
      { k: 'route', name: "Route '/shop' (lazy)", prov: 'providers: [ShopApi]', env: 1, has: ['ShopApi'] },
      { k: 'app', name: 'AppComponent', prov: '', depth: 0 },
      { k: 'shop', name: 'ShopPage', prov: 'providers: [CartService]', depth: 1, has: ['CartService'] },
      { k: 'list', name: 'ProductList', prov: '', depth: 2 },
      { k: 'item', name: 'ProductItem', prov: '', depth: 3 }
    ];
    var envNodes = tree(L.filter(function (x) { return x.env; }).map(function (x) { return { k: x.k, name: x.name, prov: x.prov }; }));
    var elNodes = tree(L.filter(function (x) { return !x.env; }).map(function (x) { return { k: x.k, name: x.name, prov: x.prov, depth: x.depth }; }));
    var who = 'item', tok = 'CartService', tm = VZ.timers();
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function node(k) { return envNodes.map[k] ? envNodes : elNodes; }
    function path() {
      var chain = { item: ['item', 'list', 'shop', 'app'], list: ['list', 'shop', 'app'], shop: ['shop', 'app'], app: ['app'] }[who];
      var env = who === 'app' ? ['root', 'platform', 'null'] : ['route', 'root', 'platform', 'null'];
      return chain.concat(env);
    }
    function run() {
      tm.stop(); envNodes.reset(); elNodes.reset();
      var p = path();
      L.forEach(function (x) { if (p.indexOf(x.k) < 0) node(x.k).set(x.k, 'dim', ''); });
      p.some(function (k, i) {
        var lv = L.filter(function (x) { return x.k === k; })[0];
        var found = lv.has && lv.has.indexOf(tok) >= 0;
        tm.after(i * 420, function () {
          if (k === 'null') { node(k).set(k, 'err', '✗ NG0201 No provider for ' + tok); out.textContent = 'Không ai cung cấp ' + tok + ' → lỗi. Dùng inject(' + tok + ', { optional: true }) nếu được phép thiếu.'; return; }
          node(k).set(k, found ? 'ok' : 'look', found ? '✓ có ' + tok : 'không có, đi lên…');
          if (found) {
            out.textContent = {
              shop: 'Dừng ở ShopPage: ProductItem nhận instance CartService RIÊNG của ShopPage, khác instance ở root.',
              root: tok + ' lấy từ root: singleton dùng chung toàn app.',
              route: 'ShopApi chỉ có trong injector của route /shop: component ngoài route này không inject được.'
            }[k] || '';
          }
        });
        return found;
      });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'Ai gọi inject()'),
      VZ.seg([['item', 'ProductItem'], ['shop', 'ShopPage'], ['app', 'AppComponent']], who, function (v) { who = v; run(); }, 'Component gọi inject'),
      h('span', { class: 'vz-lbl' }, 'Token'),
      VZ.seg([['CartService', 'CartService'], ['LoggerService', 'LoggerService'], ['ShopApi', 'ShopApi'], ['THEME', 'THEME (không ai cung cấp)']], tok, function (v) { tok = v; run(); }, 'Token cần inject')));
    root.appendChild(h('div', { class: 'vz-stage vz-col' },
      h('span', { class: 'vza-sec' }, '② Environment injector (đi tiếp lên: route → root → platform)'), envNodes,
      h('span', { class: 'vza-sec' }, '① Element injector (bắt đầu từ component gọi, đi ngược cây)'), elNodes));
    root.appendChild(out);
    run();
  });

  /* ---------- 6. Change detection ---------- */
  VZ.add('a-cd', function (root) {
    var N = [
      { k: 'app', name: 'App', p: null, push: false, depth: 0 },
      { k: 'header', name: 'Header', p: 'app', push: true, depth: 1 },
      { k: 'avatar', name: 'Avatar', p: 'header', push: false, depth: 2 },
      { k: 'main', name: 'Main', p: 'app', push: false, depth: 1 },
      { k: 'list', name: 'ProductList', p: 'main', push: true, depth: 2 },
      { k: 'item', name: 'ProductItem', p: 'list', push: true, depth: 3 },
      { k: 'side', name: 'Sidebar', p: 'main', push: false, depth: 2 }
    ];
    var strat = 'mix', trig = 'click', tm = VZ.timers();
    var T = {
      click: { label: '(click) trong ProductItem', dirty: ['item'], note: 'Event trong template đánh dấu ProductItem và mọi tổ tiên là dirty, rồi zone.js chạy CD từ gốc.' },
      timer: { label: 'setTimeout / HTTP ở App', dirty: [], note: 'zone.js báo "có thể có thay đổi" nhưng không ai bị đánh dấu dirty: OnPush không có input mới thì bị bỏ qua cả nhánh.' },
      input: { label: 'Header nhận input mới', dirty: [], input: ['header'], note: 'Input đổi reference → Header (OnPush) được kiểm tra; con Default của nó cũng được kiểm tra theo.' },
      signal: { label: 'signal trong ProductItem đổi (zoneless)', dirty: [], sig: 'item', note: 'Signal đổi: chỉ view đọc signal đó được refresh. Tổ tiên chỉ được đi qua để tới nó, không chạy lại template.' }
    };
    var t = tree(N.map(function (n) { return { k: n.k, name: n.name, depth: n.depth, tag: n.push ? 'OnPush' : 'Default' }; }));
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function anc(k) { var r = []; var n = N.filter(function (x) { return x.k === k; })[0]; while (n && n.p) { r.push(n.p); n = N.filter(function (x) { return x.k === n.p; })[0]; } return r; }
    function run() {
      tm.stop(); t.reset();
      N.forEach(function (n) { t.map[n.k].querySelector('.tg').textContent = strat === 'all' ? 'Default' : (n.push ? 'OnPush' : 'Default'); t.map[n.k].querySelector('.tg').className = 'tg' + (strat !== 'all' && n.push ? ' push' : ''); });
      var tr = T[trig], dirty = {}, count = 0;
      tr.dirty.forEach(function (k) { dirty[k] = 1; anc(k).forEach(function (a) { dirty[a] = 1; }); });
      var res = {};
      N.forEach(function (n) {
        var parentRes = n.p ? res[n.p] : 'ok';
        var r;
        if (tr.sig) {
          r = n.k === tr.sig ? 'ok' : (anc(tr.sig).indexOf(n.k) >= 0 ? 'pass' : 'skip');
        } else if (parentRes === 'skip') r = 'skip';
        else if (strat === 'all' || !n.push) r = 'ok';
        else r = (dirty[n.k] || (tr.input && tr.input.indexOf(n.k) >= 0)) ? 'ok' : 'skip';
        res[n.k] = r;
      });
      N.forEach(function (n, i) {
        tm.after(i * 300, function () {
          var r = res[n.k];
          if (r === 'ok') count++;
          t.set(n.k, r, r === 'ok' ? '✓ kiểm tra template' : r === 'pass' ? '→ chỉ đi qua' : '– bỏ qua');
          if (i === N.length - 1) out.textContent = tr.note + ' Kiểm tra ' + count + '/' + N.length + ' component.';
        });
      });
      out.textContent = 'Đang chạy change detection từ gốc…';
    }
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'Chiến lược'),
      VZ.seg([['mix', 'Có OnPush'], ['all', 'Tất cả Default']], strat, function (v) { strat = v; run(); }, 'Chiến lược change detection')));
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'Điều gì xảy ra'),
      VZ.seg(Object.keys(T).map(function (k) { return [k, T[k].label]; }), trig, function (v) { trig = v; run(); }, 'Tác nhân')));
    root.appendChild(h('div', { class: 'vz-stage' }, t));
    root.appendChild(out);
    run();
  });

  /* ---------- marble helper ---------- */
  function marbles(opts) { // {W, lanes:[{label, items:[{t, v, cls}], marks:[{t, kind}]}], T}
    var W = opts.W || 640, L = opts.L || 120, LH = 40, T = opts.T, H = opts.lanes.length * LH + 22;
    function x(t) { return L + t / T * (W - L - 16); }
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': opts.aria || 'Marble diagram', style: { minWidth: (opts.min || 520) + 'px' } });
    opts.lanes.forEach(function (ln, i) {
      var y = i * LH + 20;
      if (ln.sep) svg.appendChild(s('line', { x1: 0, x2: W, y1: y - 20, y2: y - 20, stroke: 'var(--vz-line)', 'stroke-dasharray': '2 3' }));
      svg.appendChild(s('text', { x: 0, y: y + 4, 'font-size': 11.5, 'font-weight': 600, 'font-family': 'var(--vz-mono)', style: ln.color ? 'fill:' + ln.color : '' }, ln.label));
      svg.appendChild(s('line', { x1: L, x2: W - 6, y1: y, y2: y, stroke: 'var(--vz-muted)', 'stroke-width': 1.2, 'marker-end': 'url(#vza-tl)' }));
      (ln.marks || []).forEach(function (m) {
        var mx = x(m.t);
        if (m.kind === 'sub') {
          svg.appendChild(s('line', { x1: mx, x2: mx, y1: y - 12, y2: y + 12, stroke: 'var(--vz-acc)', 'stroke-width': 2 }));
          svg.appendChild(s('text', { x: mx - 4, y: y - 4, 'font-size': 9.5, 'text-anchor': 'end', style: 'fill:var(--vz-acc)' }, 'subscribe'));
        } else if (m.kind === 'cancel') {
          svg.appendChild(s('text', { x: mx, y: y + 5, 'font-size': 14, 'font-weight': 700, 'text-anchor': 'middle', style: 'fill:var(--vz-red)' }, '✕'));
        } else if (m.kind === 'span') {
          svg.appendChild(s('rect', { x: x(m.t), y: y - 3, width: Math.max(2, x(m.t2) - x(m.t)), height: 6, rx: 3, fill: m.color, opacity: .25 }));
        }
      });
      var lastX = -1e9, lastDy = 0, R = opts.r || 12;
      ln.items.slice().sort(function (p, q) { return (x(p.t) + (p.dx || 0)) - (x(q.t) + (q.dx || 0)); }).forEach(function (it) {
        var cx = x(it.t) + (it.dx || 0), c = it.color || 'var(--vz-blue)';
        var dy = cx - lastX < R * 2 + 1 ? (lastDy ? 0 : -R - 2) : 0;
        lastX = cx; lastDy = dy;
        var y0 = y; y = y0 + dy;
        svg.appendChild(s('circle', { cx: cx, cy: y, r: opts.r || 12, fill: it.faded ? 'var(--vz-bg)' : c, stroke: c, 'stroke-width': 2, 'stroke-dasharray': it.faded ? '3 2' : null }));
        svg.appendChild(s('text', { x: cx, y: y + 4, 'font-size': 10.5, 'font-weight': 700, 'text-anchor': 'middle', style: 'fill:' + (it.faded ? c : '#fff') }, it.v));
        y = y0;
      });
    });
    svg.insertBefore(s('defs', null, s('marker', { id: 'vza-tl', viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto' },
      s('path', { d: 'M0 1L9 5L0 9', fill: 'none', stroke: 'var(--vz-muted)', 'stroke-width': 1.5 }))), svg.firstChild);
    return svg;
  }

  /* ---------- 7. Subject types ---------- */
  VZ.add('a-subjects', function (root) {
    var EM = [[2, '1'], [4, '2'], [7, '3']], subB = 5, T = 10;
    var box = h('div', { class: 'vz-stage' }), out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    var C = { src: 'var(--vz-blue)', a: 'var(--vz-muted)', b: 'var(--vz-purple)' };
    function after(t) { return EM.filter(function (e) { return e[0] >= t; }).map(function (e) { return { t: e[0], v: e[1], color: C.b }; }); }
    function render() {
      var before = EM.filter(function (e) { return e[0] < subB; });
      var latest = before.length ? before[before.length - 1][1] : '0';
      var replay = before.slice(-2).map(function (e, i, arr) { return { t: subB, v: e[1], color: C.b, faded: true, dx: 14 + i * 24 }; });
      var lanes = [
        { label: 'nguồn .next()', items: EM.map(function (e) { return { t: e[0], v: e[1], color: C.src }; }) },
        { label: 'Subject', color: C.b, sep: true, items: after(subB), marks: [{ t: subB, kind: 'sub' }] },
        { label: 'Behavior(0)', color: C.b, items: [{ t: subB, v: latest, color: C.b, faded: true, dx: 14 }].concat(after(subB)), marks: [{ t: subB, kind: 'sub' }] },
        { label: 'Replay(2)', color: C.b, items: replay.concat(after(subB)), marks: [{ t: subB, kind: 'sub' }] }
      ];
      VZ.clear(box);
      box.appendChild(marbles({ T: T, lanes: lanes, aria: 'Subscriber B đăng ký muộn nhận được gì với từng loại Subject' }));
      out.textContent = 'B subscribe lúc t=' + subB + '. Subject: chỉ nhận giá trị phát SAU đó. BehaviorSubject: nhận ngay giá trị hiện tại (' + latest +
        ') rồi tiếp tục. ReplaySubject(2): phát lại tối đa 2 giá trị gần nhất (' + (before.slice(-2).map(function (e) { return e[1]; }).join(', ') || 'chưa có') + ').';
    }
    root.appendChild(VZ.range('B subscribe lúc t =', 0, 9, 0.5, subB, function (v) { subB = v; render(); }));
    root.appendChild(box);
    root.appendChild(h('div', { class: 'vz-legend' }, h('span', null, 'Vòng nét đứt: giá trị được phát lại ngay lúc subscribe.')));
    root.appendChild(out);
    render();
  });

  /* ---------- 8. 4 map operators ---------- */
  VZ.add('a-maps', function (root) {
    var PRE = { fast: [[1, 'a'], [2.5, 'b'], [3.5, 'c']], slow: [[0.5, 'a'], [4.5, 'b'], [8.5, 'c']] };
    var pre = 'fast', d = 3, T = 12;
    var COL = { a: 'var(--vz-blue)', b: 'var(--vz-purple)', c: 'var(--vz-amber)' };
    var box = h('div', { class: 'vz-stage' }), out = h('div', { class: 'vz-col', style: { gap: '4px', fontSize: '12.5px' } });
    function inner(name, start, cutAt) {
      var r = [];
      [[d * 0.4, '1'], [d, '2']].forEach(function (p) {
        var t = start + p[0];
        if (cutAt == null || t < cutAt) r.push({ t: t, v: name + p[1], color: COL[name] });
      });
      return r;
    }
    function render() {
      var src = PRE[pre];
      var merge = [], concat = [], sw = [], ex = [], marks = { merge: [], concat: [], sw: [], ex: [] };
      src.forEach(function (e) { merge = merge.concat(inner(e[1], e[0])); marks.merge.push({ kind: 'span', t: e[0], t2: e[0] + d, color: COL[e[1]] }); });
      var end = 0;
      src.forEach(function (e) {
        var st = Math.max(e[0], end); end = st + d;
        concat = concat.concat(inner(e[1], st));
        marks.concat.push({ kind: 'span', t: st, t2: end, color: COL[e[1]] });
      });
      src.forEach(function (e, i) {
        var next = src[i + 1] ? src[i + 1][0] : null;
        var cut = next != null && next < e[0] + d ? next : null;
        sw = sw.concat(inner(e[1], e[0], cut));
        marks.sw.push({ kind: 'span', t: e[0], t2: cut || e[0] + d, color: COL[e[1]] });
        if (cut) marks.sw.push({ kind: 'cancel', t: cut });
      });
      var busy = -1, ignored = [];
      src.forEach(function (e) {
        if (e[0] < busy) { ignored.push(e[1]); return; }
        busy = e[0] + d;
        ex = ex.concat(inner(e[1], e[0]));
        marks.ex.push({ kind: 'span', t: e[0], t2: busy, color: COL[e[1]] });
      });
      VZ.clear(box);
      box.appendChild(marbles({
        T: T, L: 104, W: 680, min: 560, r: 10, aria: 'So sánh mergeMap, concatMap, switchMap, exhaustMap',
        lanes: [
          { label: 'click$', items: src.map(function (e) { return { t: e[0], v: e[1], color: COL[e[1]] }; }) },
          { label: 'mergeMap', sep: true, items: merge, marks: marks.merge },
          { label: 'concatMap', items: concat, marks: marks.concat },
          { label: 'switchMap', items: sw, marks: marks.sw },
          { label: 'exhaustMap', items: ex, marks: marks.ex }
        ]
      }));
      VZ.clear(out);
      [['mergeMap', 'chạy song song mọi inner, kết quả xen kẽ. Dùng khi các request độc lập.'],
        ['concatMap', 'xếp hàng, inner sau đợi inner trước xong. Giữ đúng thứ tự (lưu lần lượt).'],
        ['switchMap', 'giá trị mới tới thì huỷ inner cũ (✕). Hợp với tìm kiếm, chọn tab.'],
        ['exhaustMap', 'đang bận thì bỏ qua giá trị mới' + (ignored.length ? ' (bỏ ' + ignored.join(', ') + ')' : '') + '. Hợp với nút submit/login chống bấm đúp.']
      ].forEach(function (r) { out.appendChild(h('div', null, h('code', { style: { fontWeight: '700' } }, r[0]), ': ' + r[1])); });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.seg([['fast', 'Bấm dồn dập'], ['slow', 'Bấm thưa']], pre, function (v) { pre = v; render(); }, 'Nhịp phát của nguồn'),
      VZ.range('inner (HTTP) kéo dài', 1, 5, 0.5, d, function (v) { d = v; render(); }, function (v) { return v + ' đơn vị'; })));
    root.appendChild(box);
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12px' } }, 'Mỗi giá trị nguồn (a, b, c) mở một inner observable phát 2 giá trị (a1, a2…). Vệt mờ là lúc inner đang chạy.'));
    root.appendChild(out);
    render();
  });

  /* ---------- 9. Search pipeline ---------- */
  VZ.add('a-search', function (root) {
    var DATA = ['Angular', 'AngularJS', 'Ant Design', 'Apollo', 'Astro', 'Next.js', 'Nuxt', 'NgRx', 'Node.js', 'React', 'Redux', 'RxJS', 'Solid', 'Svelte', 'Signals', 'Vue', 'Vite', 'Vitest'];
    var input = h('input', { type: 'text', placeholder: 'Gõ thử: an, ng, r…', 'aria-label': 'Ô tìm kiếm', style: { width: 'min(100%,280px)' } });
    function lane(label) { var d = h('div'); return { row: h('div', { class: 'vza-lane' }, h('span', null, label), d), box: d }; }
    var Lk = lane('valueChanges'), Ld = lane('debounceTime(300)'), Lu = lane('distinctUntilChanged()'), Lr = lane('switchMap(api)');
    var results = h('div', { class: 'vza-chips', 'aria-live': 'polite' }), stats = h('div', { class: 'vz-out' });
    var dt = null, last = null, cur = null, n = { k: 0, d: 0, r: 0, x: 0 };
    function push(L, txt, cls) { var m = h('span', { class: 'vza-m ' + cls }, txt); L.box.appendChild(m); while (L.box.children.length > 14) L.box.removeChild(L.box.firstChild); return m; }
    function show() { stats.textContent = 'Gõ ' + n.k + ' lần → sau debounce ' + n.d + ' → gửi ' + n.r + ' request, huỷ ' + n.x + '.'; }
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      n.k++; push(Lk, JSON.stringify(input.value), 'k'); show();
      clearTimeout(dt);
      dt = setTimeout(function () {
        n.d++; push(Ld, JSON.stringify(q), 'd');
        if (q === last) { show(); return; }
        last = q; push(Lu, JSON.stringify(q), 'u');
        if (cur) { cur.chip.className = 'vza-m x'; cur.chip.textContent = '✕ ' + cur.q; clearTimeout(cur.t); n.x++; }
        n.r++;
        var lat = 300 + Math.round(Math.random() * 900);
        var chip = push(Lr, 'GET ?q=' + q + ' … ' + lat + 'ms', 'r');
        var req = { q: q, chip: chip };
        req.t = setTimeout(function () {
          chip.className = 'vza-m ok'; chip.textContent = '✓ ' + q;
          cur = null;
          VZ.clear(results);
          var hits = q ? DATA.filter(function (x) { return x.toLowerCase().indexOf(q) >= 0; }) : [];
          (hits.length ? hits : [q ? 'Không có kết quả' : '(nhập để tìm)']).forEach(function (x) { results.appendChild(h('span', { class: 'vza-chip on' }, x)); });
        }, lat);
        cur = req;
        show();
      }, 300);
    });
    root.appendChild(h('pre', { class: 'vz-log', style: { minHeight: '0' } },
      'results = toSignal(this.q.valueChanges.pipe(\n  debounceTime(300), distinctUntilChanged(),\n  switchMap(q => this.api.search(q))   // latency giả lập 300–1200ms\n));'));
    root.appendChild(input);
    root.appendChild(h('div', { class: 'vz-stage vza-lanes' }, Lk.row, Ld.row, Lu.row, Lr.row));
    root.appendChild(stats);
    root.appendChild(h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'Kết quả'), results));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Thử gõ nhanh rồi dừng, gõ "an" xoá bớt rồi gõ lại "an" (distinct chặn request trùng), hoặc gõ tiếp khi request cũ chưa về (switchMap huỷ request cũ, kết quả không bị lệch thứ tự).'));
    show();
  });

  /* ---------- 10. @defer ---------- */
  VZ.add('a-defer', function (root) {
    var net = 'mid', tm = VZ.timers();
    var NET = { fast: [60, 'Mạng nhanh (60ms)'], mid: [250, 'Vừa (250ms)'], slow: [1600, 'Chậm (1.6s)'], err: [700, 'Lỗi tải chunk'] };
    var prev = h('div', { class: 'vza-prev' }), log = h('pre', { class: 'vz-log' });
    var chips = {};
    var sts = h('div', { class: 'vza-chips' }, ['@placeholder', '@loading', 'nội dung chính', '@error'].map(function (k) { chips[k] = h('span', { class: 'vza-chip' }, k); return chips[k]; }));
    var trig;
    function state(k, html) {
      for (var c in chips) chips[c].classList.toggle('on', c === k);
      prev.className = 'vza-prev ' + { '@placeholder': 'placeholder', '@loading': 'loading', 'nội dung chính': 'content', '@error': 'error' }[k];
      VZ.clear(prev);
      prev.appendChild(html);
    }
    var t0 = 0;
    function L(msg) { log.textContent += ('t=' + Math.round(performance.now() - t0) + 'ms').padEnd(10) + msg + '\n'; log.scrollTop = log.scrollHeight; }
    function reset() {
      tm.stop(); log.textContent = ''; trig.disabled = false;
      for (var c in chips) chips[c].className = 'vza-chip';
      state('@placeholder', h('span', null, '🖼️ Khung xám giữ chỗ (render ngay, không tải gì)'));
    }
    function go() {
      tm.stop(); trig.disabled = true; log.textContent = ''; t0 = performance.now();
      L('trigger on viewport kích hoạt → bắt đầu tải chunk JS');
      var dur = NET[net][0], loadingShown = false, loadingAt = 0;
      tm.after(100, function () {
        if (done) return;
        loadingShown = true; loadingAt = performance.now();
        L('quá 100ms chưa xong (after 100ms) → hiện @loading');
        state('@loading', h('span', null, h('span', { class: 'vza-spin' }), 'Đang tải…'));
      });
      var done = false;
      tm.after(dur, function () {
        done = true;
        var wait = loadingShown ? Math.max(0, 500 - (performance.now() - loadingAt)) : 0;
        if (loadingShown) L('chunk tải xong' + (wait > 30 ? ', nhưng @loading phải hiện đủ minimum 500ms → đợi thêm ' + Math.round(wait) + 'ms' : ''));
        else L('chunk tải xong trước 100ms → bỏ qua @loading, tránh nháy');
        tm.after(wait, function () {
          if (net === 'err') { L('tải lỗi → @error'); state('@error', h('span', null, '⚠️ Không tải được biểu đồ. Thử lại sau.')); }
          else { L('render nội dung chính'); state('nội dung chính', h('span', null, '📊 <app-sales-chart /> đã hiển thị')); }
          trig.disabled = false;
        });
      });
    }
    trig = VZ.btn('Cuộn tới (trigger: on viewport)', go, true);
    root.appendChild(h('pre', { class: 'vz-log', style: { minHeight: '0' } },
      '@defer (on viewport) {\n  <app-sales-chart />\n} @placeholder (minimum 300ms) { … }\n  @loading (after 100ms; minimum 500ms) { … }\n  @error { … }'));
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.seg(Object.keys(NET).map(function (k) { return [k, NET[k][1]]; }), net, function (v) { net = v; reset(); }, 'Tốc độ tải'),
      trig, VZ.btn('↺', reset)));
    root.appendChild(sts);
    root.appendChild(h('div', { class: 'vz-split' }, prev, log));
    reset();
  });

  /* ---------- 11. Guards ---------- */
  VZ.add('a-guards', function (root) {
    var steps = [
      { k: 'match', name: 'canMatch', sub: "route 'admin' có khớp?", opts: [['ok', 'true'], ['no', 'false']], fail: 'Route bị bỏ qua như không tồn tại, router thử route tiếp theo → rơi vào ** (NotFound). Chunk admin không bị tải.' },
      { k: 'load', name: 'loadChildren', sub: 'tải chunk lazy', fixed: true },
      { k: 'deact', name: 'canDeactivate', sub: 'rời CartPage? (form chưa lưu)', opts: [['ok', 'true'], ['no', 'false']], fail: 'Người dùng chọn ở lại: điều hướng bị huỷ, vẫn ở /cart.' },
      { k: 'act', name: 'canActivate', sub: 'đã đăng nhập?', opts: [['ok', 'true'], ['no', 'UrlTree /login']], fail: 'Trả về UrlTree → huỷ điều hướng hiện tại và chuyển sang /login.' },
      { k: 'child', name: 'canActivateChild', sub: 'có quyền với trang con?', opts: [['ok', 'true'], ['no', 'false']], fail: 'Bị chặn ở route con: điều hướng huỷ.' },
      { k: 'res', name: 'resolve', sub: 'tải danh sách user', opts: [['ok', 'xong'], ['no', 'lỗi']], fail: 'Resolver lỗi → NavigationError, trang không được kích hoạt.' },
      { k: 'done', name: 'kích hoạt', sub: 'render UsersPage', fixed: true }
    ];
    var val = {}, els = {}, tm = VZ.timers();
    var chain = h('div', { class: 'vza-chain' }), out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    steps.forEach(function (st, i) {
      if (i) chain.appendChild(h('span', { class: 'vza-arr', 'aria-hidden': 'true' }, '→'));
      var kids = [h('b', null, st.name), h('span', null, st.sub)];
      if (!st.fixed) {
        val[st.k] = 'ok';
        var sel = h('select', { 'aria-label': st.name + ' trả về' }, st.opts.map(function (o) { return h('option', { value: o[0] }, o[1]); }));
        sel.addEventListener('change', function () { val[st.k] = sel.value; reset(); });
        kids.push(sel);
      }
      els[st.k] = h('div', { class: 'vza-step' }, kids);
      chain.appendChild(els[st.k]);
    });
    function reset() { tm.stop(); for (var k in els) els[k].className = 'vza-step'; out.textContent = 'Chọn kết quả từng guard rồi bấm điều hướng.'; }
    function go() {
      reset();
      var stopped = false;
      steps.forEach(function (st, i) {
        tm.after(i * 550, function () {
          if (stopped) { els[st.k].className = 'vza-step na'; return; }
          var ok = st.fixed || val[st.k] === 'ok';
          els[st.k].className = 'vza-step ' + (ok ? 'ok' : 'no');
          if (!ok) { stopped = true; out.textContent = '✗ ' + st.name + ': ' + st.fail; }
          else if (st.k === 'done') out.textContent = '✓ Điều hướng thành công tới /admin/users.';
        });
      });
    }
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn('router.navigate([\'/admin/users\'])', go, true),
      h('span', { class: 'vz-muted', style: { fontSize: '12.5px' } }, 'Đang ở /cart')));
    root.appendChild(h('div', { class: 'vz-stage' }, chain));
    root.appendChild(out);
    reset();
  });

  /* ---------- 12. Interceptor chain ---------- */
  VZ.add('a-interceptor', function (root) {
    var resp = '200', tm = VZ.timers();
    var boxes = [['comp', 'Component', 'http.get(\'/api/orders\')'], ['auth', 'authInterceptor', 'thêm Authorization'], ['retry', 'retryInterceptor', 'retry(1) khi 5xx'],
      ['logI', 'loggingInterceptor', 'đo thời gian'], ['back', 'HttpBackend', 'gửi qua mạng']];
    var els = {}, chain = h('div', { class: 'vza-chain' });
    boxes.forEach(function (b, i) {
      if (i) chain.appendChild(h('span', { class: 'vza-arr', 'aria-hidden': 'true' }, '⇄'));
      els[b[0]] = h('div', { class: 'vza-step' }, h('b', null, b[1]), h('span', null, b[2]));
      chain.appendChild(els[b[0]]);
    });
    var log = h('pre', { class: 'vz-log' });
    function lit(k, cls) { for (var x in els) els[x].classList.remove('on'); if (k) { els[k].classList.add('on'); if (cls) els[k].classList.add(cls); } }
    function run() {
      tm.stop(); log.textContent = ''; for (var x in els) els[x].className = 'vza-step';
      var seq = [];
      function L(k, msg, cls) { seq.push([k, msg, cls]); }
      L('comp', '→ request GET /api/orders');
      L('auth', '→ req.clone({ setHeaders: { Authorization: "Bearer …" } })');
      L('retry', '→ next(req)');
      L('logI', '→ bắt đầu đo');
      var attempts = resp === '500' ? 2 : 1;
      for (var a = 1; a <= attempts; a++) {
        if (a > 1) { L('retry', '↻ nhận 500 → retry lần ' + (a - 1)); L('logI', '→ bắt đầu đo (lần 2)'); }
        L('back', '→ server trả ' + resp, resp === '200' ? 'ok' : 'no');
        L('logI', '← ' + resp + ' sau ' + (120 + a * 40) + 'ms');
      }
      if (resp === '500') L('retry', '← hết lượt retry, ném lỗi lên', 'no');
      else L('retry', '← đi qua');
      if (resp === '401') L('auth', '← 401: xoá token, chuyển tới /login (catchError)', 'no');
      else L('auth', '← đi qua');
      L('comp', resp === '200' ? '← nhận dữ liệu orders' : '← nhận HttpErrorResponse ' + resp, resp === '200' ? 'ok' : 'no');
      seq.forEach(function (st, i) {
        tm.after(i * 480, function () {
          lit(st[0], st[2]);
          var name = boxes.filter(function (b) { return b[0] === st[0]; })[0][1];
          log.textContent += name.padEnd(19) + st[1] + '\n';
          log.scrollTop = log.scrollHeight;
        });
      });
    }
    root.appendChild(h('div', { class: 'vz-row' },
      h('span', { class: 'vz-lbl' }, 'Server trả về'),
      VZ.seg([['200', '200 OK'], ['401', '401'], ['500', '500']], resp, function (v) { resp = v; run(); }, 'Mã phản hồi'),
      VZ.btn('▶ Gửi request', run, true)));
    root.appendChild(h('div', { class: 'vz-stage' }, chain));
    root.appendChild(log);
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Thứ tự trong withInterceptors([auth, retry, logging]) là thứ tự request đi xuống; response đi ngược lên. Mỗi interceptor gọi next(req) để chuyển tiếp và có thể pipe() vào response.'));
  });

  /* ---------- 14. CSR / SSR / incremental hydration ---------- */
  VZ.add('a-ssr', function (root) {
    // mốc thời gian (ms) cho từng chế độ; số liệu minh hoạ, không phải đo thật
    var M = {
      csr: { label: 'CSR', end: 2000, bars: [['net', 0, 150, 'HTML rỗng'], ['net', 150, 1250, 'tải JS'], ['cpu', 1250, 1650, 'render + gọi API']], paint: 1650, live: 1650, below: 1650 },
      ssr: { label: 'SSR + hydration', end: 2000, bars: [['srv', 0, 450, 'render ở server'], ['net', 450, 600, 'HTML đầy đủ'], ['net', 600, 1450, 'tải JS'], ['cpu', 1450, 1700, 'hydrate']], paint: 600, live: 1700, below: 1700 },
      inc: { label: 'SSR + incremental', end: 2000, bars: [['srv', 0, 450, 'render ở server'], ['net', 450, 600, 'HTML đầy đủ'], ['net', 600, 1050, 'tải JS chính'], ['cpu', 1050, 1150, 'hydrate']], paint: 600, live: 1150, below: null }
    };
    var mode = 'ssr', t = 0, replay = true, queued = 0, scrolled = false, tm = VZ.timers(), playing = false;
    var W = 640, L = 92, R = 12;
    function x(v) { return L + v / 2000 * (W - L - R); }
    var svg = s('svg', { viewBox: '0 0 ' + W + ' 128', role: 'img', 'aria-label': 'Dòng thời gian tải trang', style: { minWidth: '480px' } });
    var head = h('div', { class: 'vz-out', 'aria-live': 'polite' });
    var page = h('div', { style: { borderRadius: '10px', border: '1.5px solid var(--vz-line)', background: 'var(--vz-bg)', minHeight: '150px', padding: '10px', display: 'grid', gap: '8px', alignContent: 'start', transition: 'all .2s' } });
    var log = h('pre', { class: 'vz-log', style: { minHeight: '0' } });
    var slider = VZ.range('t =', 0, 2000, 10, t, function (v) { stop(); t = v; render(); }, function (v) { return v + 'ms'; });
    function lane(y, label) {
      svg.appendChild(s('text', { x: 0, y: y + 4, 'font-size': 11.5, 'font-weight': 600 }, label));
      svg.appendChild(s('line', { x1: L, x2: W - R, y1: y, y2: y, stroke: 'var(--vz-line)' }));
    }
    var Y = { srv: 20, net: 50, cpu: 80 }, COL = { srv: 'var(--vz-purple)', net: 'var(--vz-blue)', cpu: 'var(--vz-amber)' };
    function drawTimeline() {
      VZ.clear(svg);
      lane(Y.srv, 'Server'); lane(Y.net, 'Mạng'); lane(Y.cpu, 'Trình duyệt');
      var m = M[mode];
      m.bars.forEach(function (b) {
        svg.appendChild(s('rect', { x: x(b[1]), y: Y[b[0]] - 8, width: x(b[2]) - x(b[1]), height: 16, rx: 4, fill: COL[b[0]], opacity: .85 }));
        if (x(b[2]) - x(b[1]) > b[3].length * 5.6 + 8) svg.appendChild(s('text', { x: (x(b[1]) + x(b[2])) / 2, y: Y[b[0]] + 4, 'font-size': 10, 'text-anchor': 'middle', style: 'fill:var(--vz-bg)' }, b[3]));
        else if (b[0] === 'cpu') svg.appendChild(s('text', { x: x(b[2]) + 4, y: Y[b[0]] + 4, 'font-size': 10, style: 'fill:var(--vz-muted)' }, b[3]));
      });
      [['paint', 'thấy nội dung', 'var(--vz-green)'], ['live', 'bấm được', 'var(--vz-acc)']].forEach(function (k, i) {
        var v = m[k[0]];
        svg.appendChild(s('line', { x1: x(v), x2: x(v), y1: 6, y2: 96, stroke: k[2], 'stroke-width': 2, 'stroke-dasharray': '4 3' }));
        svg.appendChild(s('text', { x: x(v) + (i ? 4 : -4), y: 108 + i * 12, 'font-size': 10.5, 'font-weight': 700, 'text-anchor': i ? 'start' : 'end', style: 'fill:' + k[2] }, k[1] + ' ' + v + 'ms'));
      });
      svg.cursor = s('line', { y1: 2, y2: 98, stroke: 'var(--vz-fg)', 'stroke-width': 1.5 });
      svg.appendChild(svg.cursor);
    }
    function state() {
      var m = M[mode];
      return { painted: t >= m.paint, live: t >= m.live, below: m.below == null ? (scrolled && t >= m.live) : t >= m.below };
    }
    function render() {
      var m = M[mode], st = state();
      svg.cursor.setAttribute('x1', x(t)); svg.cursor.setAttribute('x2', x(t));
      slider.setValue(t);
      VZ.clear(page);
      if (!st.painted) {
        page.style.background = 'var(--vz-bg)';
        page.appendChild(h('div', { class: 'vz-muted', style: { textAlign: 'center', paddingTop: '50px', fontSize: '13px' } }, mode === 'csr' ? 'Trang trắng: <app-root></app-root> rỗng, đợi JS' : 'Đang đợi server…'));
      } else {
        page.appendChild(h('div', { style: { fontWeight: '700', fontSize: '15px' } }, 'Áo khoác gió · 450.000đ'));
        var b = h('button', { type: 'button', class: 'vz-btn' + (st.live ? ' vz-pri' : '') }, st.live ? 'Thêm vào giỏ' : 'Thêm vào giỏ (chưa hydrate)');
        b.addEventListener('click', function () {
          if (state().live) { log.textContent += 't=' + t + 'ms  click → chạy handler ngay\n'; }
          else if (replay || mode === 'inc') { queued++; log.textContent += 't=' + t + 'ms  click → ghi lại, sẽ replay khi hydrate xong (' + m.live + 'ms)' + (mode === 'inc' && !replay ? ' — incremental hydration tự bật event replay' : '') + '\n'; }
          else log.textContent += 't=' + t + 'ms  click → MẤT (không bật withEventReplay)\n';
          log.scrollTop = log.scrollHeight;
        });
        page.appendChild(h('div', null, b));
        var below = h('div', { style: { borderTop: '1px dashed var(--vz-line)', paddingTop: '8px', fontSize: '12.5px' } });
        if (mode === 'inc' && !st.below) {
          below.appendChild(h('span', { class: 'vz-muted' }, 'Bình luận: HTML có sẵn, JS chưa tải (@defer hydrate on viewport) '));
          below.appendChild(VZ.btn('Cuộn tới', function () { scrolled = true; if (t < m.live) t = m.live; log.textContent += 'cuộn tới → tải JS khối bình luận và hydrate riêng khối đó\n'; render(); }));
        } else below.appendChild(h('span', { class: st.below ? '' : 'vz-muted' }, st.below ? '💬 Bình luận: đã hydrate, tương tác được' : '💬 Bình luận: thấy được, chưa tương tác'));
        page.appendChild(below);
      }
      if (st.live && queued) { log.textContent += 'hydrate xong → replay ' + queued + ' click đã ghi\n'; queued = 0; }
      head.textContent = {
        csr: 'CSR: người dùng nhìn trang trắng tới khi JS tải và chạy xong. Bot không chạy JS chỉ thấy HTML rỗng.',
        ssr: 'SSR: HTML đầy đủ tới sớm nên thấy nội dung ngay, nhưng phải đợi JS tải + hydrate mới bấm được.',
        inc: 'Incremental: chỉ hydrate phần trên trước nên bấm được sớm hơn; khối bên dưới tải JS khi cần.'
      }[mode];
    }
    function stop() { playing = false; tm.stop(); }
    function play() {
      stop(); playing = true; if (t >= 2000) t = 0;
      (function step() { tm.after(40, function () { t = Math.min(2000, t + 20); render(); if (t < 2000 && playing) step(); else playing = false; }); })();
    }
    function reset() { stop(); t = 0; queued = 0; scrolled = false; log.textContent = ''; drawTimeline(); render(); }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.seg([['csr', 'CSR'], ['ssr', 'SSR + hydration'], ['inc', 'SSR + incremental hydration']], mode, function (v) { mode = v; reset(); }, 'Chế độ render'),
      VZ.check('withEventReplay()', replay, function (v) { replay = v; })));
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn('▶ Phát', play, true), slider));
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(head);
    root.appendChild(h('div', { class: 'vz-split' }, page, h('div', { class: 'vz-col' },
      h('span', { class: 'vz-lbl' }, 'Thử bấm nút trong trang ở các thời điểm khác nhau'), log)));
    reset();
  });

  /* ---------- 13. Form control state ---------- */
  VZ.add('a-formstate', function (root) {
    var st = { value: '', touched: false, dirty: false, status: 'INVALID', errors: { required: true } }, pend = null;
    var inp = h('input', { type: 'text', class: 'vza-inp', placeholder: 'email@vidu.com', 'aria-label': 'Email', autocomplete: 'off', style: { width: 'min(100%,300px)' } });
    var flags = h('div', { class: 'vza-flags' }), cls = h('div', { class: 'vza-chips' }), err = h('pre', { class: 'vz-log', style: { minHeight: '0' } });
    function sync() {
      var classes = ['ng-' + (st.status === 'PENDING' ? 'pending' : st.status === 'VALID' ? 'valid' : 'invalid'), st.dirty ? 'ng-dirty' : 'ng-pristine', st.touched ? 'ng-touched' : 'ng-untouched'];
      inp.className = 'vza-inp ' + classes.join(' ');
      VZ.clear(flags);
      [['pristine', !st.dirty, 'chưa sửa giá trị'], ['dirty', st.dirty, 'đã gõ/sửa'], ['untouched', !st.touched, 'chưa blur'], ['touched', st.touched, 'đã rời ô (blur)'],
        ['status', st.status, 'VALID / INVALID / PENDING']].forEach(function (f) {
        var on = f[1] === true || typeof f[1] === 'string';
        flags.appendChild(h('div', { class: 'vza-flag' + (on ? ' t' : '') }, h('b', null, f[0] + ': ' + (typeof f[1] === 'string' ? f[1] : f[1])), h('span', { class: 'vz-muted' }, f[2])));
      });
      VZ.clear(cls);
      classes.forEach(function (c) { cls.appendChild(h('span', { class: 'vza-chip on' }, '.' + c)); });
      err.textContent = 'email.errors = ' + (st.errors ? JSON.stringify(st.errors) : 'null') +
        (st.status === 'INVALID' && st.touched ? '\n→ hiện thông báo lỗi (pattern hay dùng: invalid && touched)' : '');
    }
    function validate() {
      var v = st.value;
      clearTimeout(pend);
      if (!v) { st.errors = { required: true }; st.status = 'INVALID'; return sync(); }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { st.errors = { email: true }; st.status = 'INVALID'; return sync(); }
      st.errors = null; st.status = 'PENDING'; sync();
      pend = setTimeout(function () {
        if (/^admin@/i.test(st.value)) { st.errors = { taken: true }; st.status = 'INVALID'; }
        else { st.errors = null; st.status = 'VALID'; }
        sync();
      }, 800);
    }
    inp.addEventListener('input', function () { st.value = inp.value; st.dirty = true; validate(); });
    inp.addEventListener('blur', function () { st.touched = true; sync(); });
    root.appendChild(h('pre', { class: 'vz-log', style: { minHeight: '0' } },
      "email = new FormControl('', {\n  validators: [Validators.required, Validators.email],\n  asyncValidators: [emailTaken()],   // giả lập 800ms, 'admin@…' là đã có\n});"));
    root.appendChild(h('div', { class: 'vz-row' }, inp, VZ.btn('email.reset()', function () {
      clearTimeout(pend); inp.value = ''; st = { value: '', touched: false, dirty: false, status: 'INVALID', errors: { required: true } }; sync();
    })));
    root.appendChild(flags);
    root.appendChild(h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'Class Angular tự gắn lên <input>'), cls));
    root.appendChild(err);
    sync();
  });
})(window.VZ);
