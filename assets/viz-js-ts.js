/* Minh hoạ cho trang JavaScript & TypeScript. Cần assets/viz.js nạp trước. */
(function (VZ) {
  'use strict';
  if (!VZ) return;
  var h = VZ.h, s = VZ.s;

  VZ.css('vz-js', [
    '.vz{--vz-acc:var(--ts,#2a64aa);--accent-ink:var(--bg,#fff)}',
    '.vzj-code{font-family:var(--vz-mono);font-size:12.5px;line-height:1.7;margin:0;padding:8px 0;border-radius:8px;background:var(--code-bg,var(--vz-bg2));',
    'border:1px solid var(--vz-line);overflow-x:auto;color:var(--code-fg,var(--vz-fg))}',
    '.vzj-ln{display:flex;gap:10px;padding:0 10px;white-space:pre;border-left:3px solid transparent;transition:background .2s}',
    '.vzj-ln i{font-style:normal;color:var(--vz-muted);min-width:1.4em;text-align:right;user-select:none;opacity:.7}',
    '.vzj-ln.cur{background:color-mix(in srgb,var(--vz-acc) 16%,transparent);border-left-color:var(--vz-acc)}',
    '.vzj-ln .note{margin-left:auto;padding-left:16px;font-family:var(--font-body,system-ui);font-size:11.5px;display:flex;gap:4px;flex-wrap:nowrap}',
    /* TS erase */
    '.vzj-ty{color:var(--ts,#2a64aa);background:color-mix(in srgb,var(--ts,#2a64aa) 15%,transparent);border-radius:3px;transition:all .45s;display:inline-block;',
    'max-width:40em;overflow:hidden;vertical-align:bottom;white-space:pre}',
    '.vzj-erased .vzj-ty{max-width:0;opacity:0;background:var(--vz-red-s)}',
    /* event loop */
    '.vzj-el{display:grid;gap:10px;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr)}',
    '@media (max-width:640px){.vzj-el{grid-template-columns:minmax(0,1fr)}}',
    '.vzj-cols{display:grid;gap:8px;grid-template-columns:1fr 1fr}',
    '.vzj-q{border:1.5px solid var(--vz-line);border-radius:9px;padding:6px;min-height:78px;background:var(--vz-bg);display:flex;flex-direction:column;gap:4px}',
    '.vzj-q>b{font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--vz-muted)}',
        '.vzj-it{font-family:var(--vz-mono);font-size:11.5px;padding:3px 7px;border-radius:6px;animation:vz-in .25s ease-out}',
    '.vzj-q.stack .vzj-it{background:var(--vz-blue-s);color:var(--vz-blue)}',
    '.vzj-q.micro .vzj-it{background:var(--vz-green-s);color:var(--vz-green)}',
    '.vzj-q.macro .vzj-it{background:var(--vz-amber-s);color:var(--vz-amber)}',
    '.vzj-q.con .vzj-it{background:var(--vz-bg2)}',
    '.vzj-say{padding:8px 10px;border-radius:8px;background:var(--vz-bg2);font-size:13.5px;min-height:3.2em}',
    /* TDZ */
    '.vzj-tdz{border-collapse:separate;border-spacing:3px;font-size:12px}',
    '.vzj-tdz th{font-weight:600;color:var(--vz-muted);font-size:11px;padding:2px 4px}',
    '.vzj-tdz th.cur{color:var(--vz-acc)}',
    '.vzj-tdz td{min-width:50px;padding:5px 6px;border-radius:6px;text-align:center;font-family:var(--vz-mono);font-size:11px;transition:outline .15s}',
    '.vzj-tdz td.name{text-align:left;background:none;font-weight:700;min-width:0}',
    '.vzj-tdz td.cur{outline:2px solid var(--vz-acc)}',
    '.vzj-tdz .tdz{background:var(--vz-red-s);color:var(--vz-red)}',
    '.vzj-tdz .und{background:var(--vz-amber-s);color:var(--vz-amber)}',
    '.vzj-tdz .val{background:var(--vz-green-s);color:var(--vz-green)}',
    /* closure */
    '.vzj-cl{display:grid;gap:8px}',
    '.vzj-clr{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.vzj-fn{font-family:var(--vz-mono);font-size:12.5px;padding:6px 10px;border-radius:8px;border:1.5px solid var(--vz-blue);background:var(--vz-blue-s);color:var(--vz-blue);font-weight:600}',
    '.vzj-env{font-family:var(--vz-mono);font-size:12.5px;padding:6px 10px;border-radius:8px;border:1.5px dashed var(--vz-purple);background:var(--vz-purple-s);color:var(--vz-purple)}',
    '.vzj-env b{font-size:15px}',
    /* array */
    '.vzj-cells{display:flex;gap:6px;flex-wrap:wrap;align-items:center;min-height:42px}',
    '.vzj-cell{min-width:40px;height:40px;padding:0 8px;border-radius:8px;display:grid;place-items:center;font-family:var(--vz-mono);font-weight:700;font-size:14px;',
    'border:1.5px solid var(--vz-line);background:var(--vz-bg);transition:all .2s}',
    '.vzj-cell.vis{border-color:var(--vz-acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--vz-acc) 25%,transparent)}',
    '.vzj-cell.ok{border-color:var(--vz-green);background:var(--vz-green-s);color:var(--vz-green)}',
    '.vzj-cell.no{opacity:.4}',
    '.vzj-cell.skip{opacity:.25;border-style:dashed}',
    '.vzj-cell.out{border-color:var(--vz-purple);background:var(--vz-purple-s);color:var(--vz-purple);animation:vz-in .25s ease-out}',
    '.vzj-methods{display:flex;flex-wrap:wrap;gap:6px}',
    '.vzj-methods button{font:inherit;font-family:var(--vz-mono);font-size:12px;border:1.5px solid var(--vz-line);background:var(--vz-bg);color:var(--vz-fg);border-radius:7px;padding:4px 9px;cursor:pointer}',
    '.vzj-methods button[aria-pressed="true"]{border-color:var(--vz-acc);background:color-mix(in srgb,var(--vz-acc) 14%,var(--vz-bg));font-weight:700}',
    /* copy */
    '.vzj-mem{display:grid;gap:10px;grid-template-columns:minmax(0,.8fr) minmax(0,1.6fr)}',
    '@media (max-width:560px){.vzj-mem{grid-template-columns:minmax(0,1fr)}}',
    '.vzj-var{font-family:var(--vz-mono);font-size:12.5px;padding:6px 10px;border-radius:8px;background:var(--vz-bg);border:1.5px solid var(--vz-line);display:flex;justify-content:space-between;gap:8px}',
    '.vzj-obj{font-family:var(--vz-mono);font-size:12px;padding:6px 10px;border-radius:8px;border:2px solid;background:var(--vz-bg);display:grid;gap:2px;transition:all .2s}',
    '.vzj-ref{display:inline-block;padding:0 6px;border-radius:5px;font-weight:700;color:#fff;font-size:11.5px}',
    '.vzj-chg{background:var(--vz-red-s);border-radius:4px;outline:1.5px solid var(--vz-red)}',
    /* combinators */
    '.vzj-prow{display:grid;grid-template-columns:auto auto 1fr;gap:6px 12px;align-items:center}',
    '.vzj-res{display:grid;gap:4px}',
    '.vzj-res div{display:grid;grid-template-columns:minmax(0,11.5em) 1fr;gap:8px;align-items:baseline;padding:5px 8px;border-radius:7px;background:var(--vz-bg);font-size:12.5px}',
    '.vzj-res code{font-weight:700}',
    /* events */
    '.vzj-nest{border:2px solid var(--vz-line);border-radius:10px;padding:8px 10px 10px;display:grid;gap:6px;transition:all .2s;background:var(--vz-bg)}',
    '.vzj-nest>span{font-family:var(--vz-mono);font-size:11.5px;color:var(--vz-muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
    '.vzj-nest.cap{border-color:var(--vz-purple);background:var(--vz-purple-s)}',
    '.vzj-nest.tgt{border-color:var(--vz-red);background:var(--vz-red-s)}',
    '.vzj-nest.bub{border-color:var(--vz-blue);background:var(--vz-blue-s)}',
    '.vzj-nest .ph{font-family:var(--font-body,system-ui);font-weight:700;font-size:11px}',
    /* debounce */
    '.vzj-pad{border:1.5px dashed var(--vz-acc);border-radius:10px;padding:16px;text-align:center;color:var(--vz-muted);font-size:13px;cursor:crosshair;touch-action:none;user-select:none}',
    /* utility */
    '.vzj-flds{display:grid;gap:4px}',
    '.vzj-fld{display:flex;align-items:center;gap:6px;font-family:var(--vz-mono);font-size:12.5px;padding:5px 9px;border-radius:7px;background:var(--vz-bg);border:1.5px solid var(--vz-line);transition:all .2s}',
    '.vzj-fld .t{color:var(--vz-muted);margin-left:auto}',
    '.vzj-fld .m{font-family:var(--font-body,system-ui);font-size:10.5px;font-weight:700;padding:0 6px;border-radius:5px}',
    '.vzj-fld .m.opt{background:var(--vz-amber-s);color:var(--vz-amber)}.vzj-fld .m.ro{background:var(--vz-purple-s);color:var(--vz-purple)}',
    '.vzj-fld.gone{opacity:.35;text-decoration:line-through;border-style:dashed}',
    '.vzj-fld.chg{border-color:var(--vz-acc)}'
  ].join(''));

  function codeBlock(lines) {
    var pre = h('pre', { class: 'vzj-code' });
    var els = lines.map(function (l, i) {
      var ln = h('div', { class: 'vzj-ln' }, h('i', null, String(i + 1)), h('span', null, l));
      pre.appendChild(ln);
      return ln;
    });
    pre.lines = els;
    pre.mark = function (n) { els.forEach(function (e, i) { e.classList.toggle('cur', i + 1 === n); }); };
    return pre;
  }

  /* ---------- 1. TS bị xoá khi compile ---------- */
  VZ.add('j-compile', function (root) {
    // [văn bản, là type?]
    var src = [
      [['interface User { id: number; name: string }', 1]],
      [['']],
      [['function greet(u'], [': User', 1], [', loud'], ['?: boolean', 1], [')'], [': string', 1], [' {']],
      [['  const msg'], [': string', 1], [' = `Xin chào ${u.name}`;']],
      [['  return loud ? msg.toUpperCase() : msg;']],
      [['}']],
      [['']],
      [['const list = [] '], ['as User[]', 1], [';']],
      [['greet(list[0]'], ['!', 1], [');']]
    ];
    var pre = h('pre', { class: 'vzj-code' });
    src.forEach(function (line, i) {
      var allType = line.length === 1 && line[0][1];
      var ln = h('div', { class: 'vzj-ln' + (allType ? ' alltype' : '') }, h('i', null, String(i + 1)),
        h('span', null, line.map(function (p) { return p[1] ? h('span', { class: 'vzj-ty' }, p[0]) : p[0]; })));
      pre.appendChild(ln);
    });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function set(m) {
      pre.classList.toggle('vzj-erased', m === 'js');
      out.textContent = m === 'js'
        ? 'Sau tsc: mọi chú thích type biến mất, chỉ còn JavaScript thuần. Lúc chạy không ai kiểm tra u có đúng là User không, nên dữ liệu từ API vẫn cần validate (zod…).'
        : 'Phần tô màu là type: chỉ dùng lúc viết code và lúc compile để bắt lỗi.';
    }
    root.appendChild(VZ.seg([['ts', 'greet.ts (lúc viết)'], ['js', 'greet.js (sau tsc, lúc chạy)']], 'ts', set, 'Giai đoạn'));
    root.appendChild(pre);
    root.appendChild(out);
    set('ts');
  });

  /* ---------- 2. Event loop từng bước ---------- */
  VZ.add('j-eventloop', function (root) {
    var code = codeBlock([
      "setTimeout(() => console.log('A timeout'));",
      'Promise.resolve().then(() => {',
      "  console.log('B then');",
      "  setTimeout(() => console.log('C timeout'));",
      "  Promise.resolve().then(() => console.log('D then lồng'));",
      '});',
      "console.log('E sync');"
    ]);
    var S = [
      { l: 0, st: ['script chính'], mi: [], ma: [], lg: [], say: 'Bắt đầu: toàn bộ file là một tác vụ trên call stack.' },
      { l: 1, st: ['script chính'], mi: [], ma: ['A'], lg: [], say: 'setTimeout không chạy callback ngay, chỉ đăng ký A vào macrotask queue.' },
      { l: 2, st: ['script chính'], mi: ['B'], ma: ['A'], lg: [], say: 'Promise đã resolve → callback của then (B) vào microtask queue.' },
      { l: 7, st: ['script chính', 'console.log'], mi: ['B'], ma: ['A'], lg: ['E sync'], say: 'Code sync chạy tiếp: in E.' },
      { l: 0, st: [], mi: ['B'], ma: ['A'], lg: ['E sync'], say: 'Hết code sync, call stack rỗng. Event loop xét microtask queue TRƯỚC.' },
      { l: 3, st: ['then B'], mi: [], ma: ['A'], lg: ['E sync', 'B then'], say: 'Lấy B ra chạy: in B.' },
      { l: 4, st: ['then B'], mi: [], ma: ['A', 'C'], lg: ['E sync', 'B then'], say: 'B đăng ký thêm C vào cuối macrotask queue (sau A).' },
      { l: 5, st: ['then B'], mi: ['D'], ma: ['A', 'C'], lg: ['E sync', 'B then'], say: 'B thêm D vào microtask queue.' },
      { l: 5, st: ['then D'], mi: [], ma: ['A', 'C'], lg: ['E sync', 'B then', 'D then lồng'], say: 'Microtask queue phải chạy HẾT, kể cả microtask mới sinh ra: chạy D ngay.' },
      { l: 0, st: [], mi: [], ma: ['A', 'C'], lg: ['E sync', 'B then', 'D then lồng'], say: 'Microtask rỗng → trình duyệt có thể render → lấy MỘT macrotask.' },
      { l: 1, st: ['timeout A'], mi: [], ma: ['C'], lg: ['E sync', 'B then', 'D then lồng', 'A timeout'], say: 'Chạy A. Xong lại xét microtask (rỗng).' },
      { l: 4, st: ['timeout C'], mi: [], ma: [], lg: ['E sync', 'B then', 'D then lồng', 'A timeout', 'C timeout'], say: 'Lấy macrotask tiếp theo: C. Thứ tự cuối cùng: E, B, D, A, C.' }
    ];
    var i = 0, tm = VZ.timers(), playing = false;
    function q(cls, title, items) {
      return h('div', { class: 'vzj-q ' + cls }, h('b', null, title), items.map(function (t) { return h('div', { class: 'vzj-it' }, t); }));
    }
    var qs = h('div', { class: 'vzj-cols' }), say = h('div', { class: 'vzj-say', 'aria-live': 'polite' });
    var prev = VZ.btn('◀ Lùi', function () { stop(); go(i - 1); });
    var next = VZ.btn('Tiếp ▶', function () { stop(); go(i + 1); }, true);
    var play = VZ.btn('▶ Tự chạy', function () { if (playing) return stop(); if (i >= S.length - 1) go(0); playing = true; play.textContent = '⏸ Dừng'; tick(); });
    var counter = h('span', { class: 'vz-muted', style: { fontSize: '12.5px' } });
    function tick() { tm.after(1300, function () { if (i < S.length - 1) { go(i + 1); tick(); } else stop(); }); }
    function stop() { playing = false; tm.stop(); play.textContent = '▶ Tự chạy'; }
    function go(n) {
      i = Math.max(0, Math.min(S.length - 1, n));
      var st = S[i];
      code.mark(st.l);
      VZ.clear(qs);
      qs.appendChild(q('stack', 'Call stack (trên cùng chạy trước)', st.st.slice().reverse()));
      qs.appendChild(q('micro', 'Microtask queue', st.mi));
      qs.appendChild(q('macro', 'Macrotask queue', st.ma));
      qs.appendChild(q('con', 'Console', st.lg));
      say.textContent = st.say;
      prev.disabled = i === 0; next.disabled = i === S.length - 1;
      counter.textContent = 'Bước ' + (i + 1) + '/' + S.length;
    }
    root.appendChild(h('div', { class: 'vz-row' }, prev, next, play, VZ.btn('↺', function () { stop(); go(0); }), counter));
    root.appendChild(h('div', { class: 'vzj-el' }, h('div', { class: 'vz-col' }, code, say), qs));
    go(0);
  });

  /* ---------- 3. Hoisting & TDZ ---------- */
  VZ.add('j-tdz', function (root) {
    var lines = ['{', '  // đọc a, b, c, greet ở đây?', '  var a = 1;', '  let b = 2;', '  const c = 3;', '  function greet() {}', '  // sau khai báo', '}'];
    var vars = [['a', 'var', 3, '1'], ['b', 'let', 4, '2'], ['c', 'const', 5, '3'], ['greet', 'function', 6, 'ƒ']];
    var cur = 2;
    var code = codeBlock(lines);
    var table = h('table', { class: 'vzj-tdz' });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function state(v, ln) {
      if (v[1] === 'function') return ['val', 'ƒ greet'];
      if (ln > v[2]) return ['val', v[3]];
      if (ln === v[2]) return v[1] === 'var' ? ['und', 'undefined→1'] : ['tdz', 'TDZ→' + v[3]];
      return v[1] === 'var' ? ['und', 'undefined'] : ['tdz', 'TDZ'];
    }
    function render() {
      code.mark(cur);
      VZ.clear(table);
      var head = h('tr', null, h('th', null, 'dòng'));
      for (var ln = 2; ln <= 7; ln++) head.appendChild(h('th', { class: ln === cur ? 'cur' : '' }, String(ln)));
      table.appendChild(head);
      vars.forEach(function (v) {
        var tr = h('tr', null, h('td', { class: 'name' }, v[1] + ' ' + v[0]));
        for (var ln = 2; ln <= 7; ln++) {
          var st = state(v, ln);
          tr.appendChild(h('td', { class: st[0] + (ln === cur ? ' cur' : '') }, st[1]));
        }
        table.appendChild(tr);
      });
      var msgs = vars.map(function (v) {
        var st = state(v, cur);
        return v[0] + ': ' + (st[0] === 'tdz' ? 'ReferenceError' : st[0] === 'und' ? 'undefined' : v[3]);
      });
      out.textContent = 'Đọc ở dòng ' + cur + ' → ' + msgs.join(' · ');
    }
    root.appendChild(VZ.range('Đang chạy tới dòng', 2, 7, 1, cur, function (v) { cur = v; render(); }));
    root.appendChild(h('div', { class: 'vz-col' }, code, h('div', { class: 'vz-stage' }, table)));
    root.appendChild(h('div', { class: 'vz-legend' },
      h('span', null, h('i', { style: { background: 'var(--vz-red)' } }), 'TDZ: đã hoist nhưng chưa khởi tạo, đọc là ReferenceError'),
      h('span', null, h('i', { style: { background: 'var(--vz-amber)' } }), 'var: hoist và gán sẵn undefined'),
      h('span', null, h('i', { style: { background: 'var(--vz-green)' } }), 'có giá trị (function hoist cả thân hàm)')));
    root.appendChild(out);
    render();
  });

  /* ---------- 4. Closure ---------- */
  VZ.add('j-closure', function (root) {
    var counters = [], log = h('pre', { class: 'vz-log' }), list = h('div', { class: 'vzj-cl' });
    function make() {
      var c = { name: 'c' + (counters.length + 1), count: 0 };
      counters.push(c);
      log.textContent += 'const ' + c.name + ' = makeCounter();  // scope mới, count = 0\n';
      render();
    }
    function render() {
      VZ.clear(list);
      counters.forEach(function (c) {
        var env = h('span', { class: 'vzj-env' }, 'scope của lần gọi makeCounter #' + c.name.slice(1) + ' { count: ', h('b', null, String(c.count)), ' }');
        var b = VZ.btn(c.name + '()', function () {
          c.count++;
          log.textContent += c.name + '()  // → ' + c.count + '\n';
          log.scrollTop = log.scrollHeight;
          render();
          VZ.flash(list.children[counters.indexOf(c)].querySelector('.vzj-env'));
        });
        list.appendChild(h('div', { class: 'vzj-clr' }, b, h('span', { class: 'vzj-fn' }, c.name + ': () => ++count'), h('span', { 'aria-hidden': 'true' }, '──giữ tham chiếu──▶'), env));
      });
    }
    root.appendChild(h('pre', { class: 'vzj-code', style: { padding: '8px 10px' } },
      'function makeCounter() {\n  let count = 0;          // sống tiếp sau khi hàm return\n  return () => ++count;  // closure "nhớ" count\n}'));
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn('+ makeCounter()', make, true),
      h('span', { class: 'vz-muted', style: { fontSize: '12.5px' } }, 'Mỗi lần gọi tạo một scope riêng; bấm c1(), c2() để thấy chúng không dùng chung count.')));
    root.appendChild(h('div', { class: 'vz-stage' }, list));
    root.appendChild(log);
    make(); make();
  });

  /* ---------- 5. Array methods ---------- */
  VZ.add('j-array', function (root) {
    var arr = [3, 8, 1, 6, 4];
    var M = {
      'map(x => x * 2)': { kind: 'map', f: function (x) { return x * 2; } },
      'filter(x => x % 2 === 0)': { kind: 'filter', f: function (x) { return x % 2 === 0; } },
      'find(x => x > 5)': { kind: 'find', f: function (x) { return x > 5; } },
      'findIndex(x => x > 5)': { kind: 'findIndex', f: function (x) { return x > 5; } },
      'some(x => x > 5)': { kind: 'some', f: function (x) { return x > 5; } },
      'every(x => x > 2)': { kind: 'every', f: function (x) { return x > 2; } },
      'reduce((s, x) => s + x, 0)': { kind: 'reduce' },
      'toSorted((a, b) => a - b)': { kind: 'sort' },
      'slice(1, 3)': { kind: 'slice' },
      'flatMap(x => [x, -x])': { kind: 'flatMap' }
    };
    var cur = 'map(x => x * 2)', tm = VZ.timers();
    var bar = h('div', { class: 'vzj-methods', role: 'group', 'aria-label': 'Chọn method' });
    var inRow = h('div', { class: 'vzj-cells' }), outRow = h('div', { class: 'vzj-cells' });
    var res = h('div', { class: 'vz-out', 'aria-live': 'polite' }), acc = h('span', { class: 'vz-m' });
    var btns = Object.keys(M).map(function (k) {
      var b = h('button', { type: 'button', 'aria-pressed': 'false' }, k);
      b.addEventListener('click', function () { cur = k; run(); });
      bar.appendChild(b);
      return b;
    });
    function cells(row, vals, cls) {
      VZ.clear(row);
      return vals.map(function (v) { var c = h('div', { class: 'vzj-cell ' + (cls || '') }, String(v)); row.appendChild(c); return c; });
    }
    function cell(v) { var c = h('div', { class: 'vzj-cell out' }, String(v)); outRow.appendChild(c); return c; }
    function run() {
      tm.stop();
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.textContent === cur)); });
      var m = M[cur], ins = cells(inRow, arr), step = 0, sum = 0, done = false;
      VZ.clear(outRow); res.textContent = ''; acc.textContent = '';
      var expr = 'arr.' + cur;
      if (m.kind === 'sort') {
        tm.after(300, function () {
          arr.slice().sort(function (a, b) { return a - b; }).forEach(cell);
          res.textContent = expr + ' → mảng mới đã sắp xếp; arr giữ nguyên. (sort() cũ thì sửa chính arr)';
        });
        return;
      }
      if (m.kind === 'slice') {
        ins.forEach(function (c, i) { c.classList.add(i >= 1 && i < 3 ? 'ok' : 'no'); });
        tm.after(300, function () { [8, 1].forEach(cell); res.textContent = expr + ' → lấy từ index 1 tới trước index 3. Không sửa arr.'; });
        return;
      }
      function visit() {
        if (done || step >= ins.length) return finish();
        var i = step, x = arr[i], c = ins[i];
        ins.forEach(function (e) { e.classList.remove('vis'); });
        c.classList.add('vis');
        if (m.kind === 'map') cell(m.f(x));
        else if (m.kind === 'flatMap') { cell(x); cell(-x); }
        else if (m.kind === 'filter') { var ok = m.f(x); c.classList.add(ok ? 'ok' : 'no'); if (ok) cell(x); }
        else if (m.kind === 'reduce') { sum += x; acc.textContent = 's = ' + (sum - x) + ' + ' + x + ' = ' + sum; }
        else if (m.kind === 'every') { var e = m.f(x); c.classList.add(e ? 'ok' : 'no'); if (!e) done = 'stop'; }
        else { var hit = m.f(x); c.classList.add(hit ? 'ok' : 'no'); if (hit) done = i; }
        step++;
        tm.after(450, visit);
      }
      function finish() {
        ins.forEach(function (e, i) { e.classList.remove('vis'); if (i >= step) e.classList.add('skip'); });
        var skipped = ins.length - step;
        var tail = skipped > 0 ? ' Dừng sớm, ' + skipped + ' phần tử sau không được duyệt.' : '';
        switch (m.kind) {
          case 'map': res.textContent = expr + ' → mảng mới cùng độ dài.'; break;
          case 'flatMap': res.textContent = expr + ' → map rồi làm phẳng một cấp.'; break;
          case 'filter': res.textContent = expr + ' → giữ phần tử trả về true.'; break;
          case 'reduce': res.textContent = expr + ' → ' + sum + '. Gộp mảng thành một giá trị.'; break;
          case 'find': if (done !== false) cell(arr[done]); res.textContent = expr + ' → ' + (done !== false ? arr[done] : 'undefined') + '.' + tail; break;
          case 'findIndex': if (done !== false) cell(done); res.textContent = expr + ' → ' + (done !== false ? done : -1) + '.' + tail; break;
          case 'some': cell(done !== false); res.textContent = expr + ' → ' + (done !== false) + '.' + tail; break;
          case 'every': cell(done !== 'stop'); res.textContent = expr + ' → ' + (done !== 'stop') + '.' + tail; break;
        }
      }
      tm.after(250, visit);
    }
    root.appendChild(bar);
    root.appendChild(h('div', { class: 'vz-stage vz-col' },
      h('span', { class: 'vz-lbl' }, 'const arr = [3, 8, 1, 6, 4]'), inRow,
      h('span', { class: 'vz-lbl' }, 'Kết quả ', acc), outRow));
    root.appendChild(res);
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn('↺ Chạy lại', run)));
    run();
  });

  /* ---------- 6. Shallow / deep copy ---------- */
  VZ.add('j-copy', function (root) {
    var COL = ['#2563eb', '#16a34a', '#c2410c', '#9333ea'];
    var mode = 'spread', heap, vars, changed = {};
    var stage = h('div', { class: 'vzj-mem' }), out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function reset() {
      changed = {};
      heap = { 1: { kind: 'user', name: 'An', addr: 2 }, 2: { kind: 'addr', city: 'Huế' } };
      vars = { a: 1 };
      if (mode === 'assign') vars.b = 1;
      if (mode === 'spread') { heap[3] = { kind: 'user', name: 'An', addr: 2 }; vars.b = 3; }
      if (mode === 'clone') { heap[3] = { kind: 'user', name: 'An', addr: 4 }; heap[4] = { kind: 'addr', city: 'Huế' }; vars.b = 3; }
      out.textContent = {
        assign: 'b = a chỉ copy tham chiếu: a và b cùng trỏ tới object #1.',
        spread: '{ ...a } tạo object mới #3 ở cấp ngoài, nhưng address vẫn trỏ chung #2 (shallow copy).',
        clone: 'structuredClone(a) copy mọi cấp: #3 và #4 hoàn toàn mới (deep copy).'
      }[mode];
      render();
    }
    function ref(id) { return h('span', { class: 'vzj-ref', style: { background: COL[(id - 1) % 4] } }, '#' + id); }
    function render() {
      VZ.clear(stage);
      var left = h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'Biến'));
      Object.keys(vars).forEach(function (v) { left.appendChild(h('div', { class: 'vzj-var' }, h('b', null, 'const ' + v), ref(vars[v]))); });
      var right = h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'Heap (object thật nằm ở đây)'));
      Object.keys(heap).forEach(function (id) {
        var o = heap[id], c = COL[(id - 1) % 4];
        var body = o.kind === 'user'
          ? [h('div', null, ref(+id), ' { ', h('span', { class: changed[id + 'name'] ? 'vzj-chg' : '' }, "name: '" + o.name + "'"), ',  address: ', ref(o.addr), ' }')]
          : [h('div', null, ref(+id), ' { ', h('span', { class: changed[id + 'city'] ? 'vzj-chg' : '' }, "city: '" + o.city + "'"), ' }')];
        right.appendChild(h('div', { class: 'vzj-obj', style: { borderColor: c } }, body));
      });
      stage.appendChild(left); stage.appendChild(right);
    }
    function aView() {
      var u = heap[vars.a];
      return "a.name = '" + u.name + "', a.address.city = '" + heap[u.addr].city + "'";
    }
    function editName() {
      var id = vars.b; heap[id].name = 'Bình'; changed = {}; changed[id + 'name'] = 1; render();
      out.textContent = "b.name = 'Bình' → " + aView() + (vars.a === vars.b ? '  ← a đổi theo!' : '  ← a không đổi');
    }
    function editCity() {
      var id = heap[vars.b].addr; heap[id].city = 'Đà Nẵng'; changed = {}; changed[id + 'city'] = 1; render();
      var shared = heap[vars.a].addr === id;
      out.textContent = "b.address.city = 'Đà Nẵng' → " + aView() + (shared ? '  ← a đổi theo!' : '  ← a không đổi');
    }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.seg([['assign', 'const b = a'], ['spread', 'const b = { ...a }'], ['clone', 'const b = structuredClone(a)']], mode, function (v) { mode = v; reset(); }, 'Cách copy')));
    root.appendChild(h('div', { class: 'vz-stage' }, stage));
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn("b.name = 'Bình'", editName), VZ.btn("b.address.city = 'Đà Nẵng'", editCity), VZ.btn('↺', reset)));
    root.appendChild(out);
    reset();
  });

  /* ---------- 7. Promise combinators ---------- */
  VZ.add('j-combinators', function (root) {
    var P = [{ ok: true, t: 300 }, { ok: false, t: 600 }, { ok: true, t: 900 }];
    var W = 560, L = 40, R = 16, TMAX = 1000;
    function x(t) { return L + t / TMAX * (W - L - R); }
    var svg = s('svg', { viewBox: '0 0 ' + W + ' 110', role: 'img', 'aria-label': 'Dòng thời gian 3 promise', style: { maxWidth: '640px' } });
    var res = h('div', { class: 'vzj-res', 'aria-live': 'polite' });
    var ctrls = h('div', { class: 'vzj-prow' });
    P.forEach(function (p, i) {
      ctrls.appendChild(h('b', { class: 'vz-m' }, 'p' + (i + 1)));
      ctrls.appendChild(VZ.seg([[true, '✓ resolve'], [false, '✗ reject']], p.ok, function (v) { p.ok = v; render(); }, 'Kết quả p' + (i + 1)));
      ctrls.appendChild(VZ.range('sau', 100, 1000, 50, p.t, function (v) { p.t = v; render(); }, function (v) { return v + 'ms'; }));
    });
    function render() {
      VZ.clear(svg);
      [0, 250, 500, 750, 1000].forEach(function (t) {
        svg.appendChild(s('line', { x1: x(t), x2: x(t), y1: 4, y2: 92, stroke: 'var(--vz-line)' }));
        svg.appendChild(s('text', { x: x(t), y: 106, 'font-size': 11, 'text-anchor': 'middle', style: 'fill:var(--vz-muted)' }, t + 'ms'));
      });
      P.forEach(function (p, i) {
        var y = 10 + i * 28, c = p.ok ? 'var(--vz-green)' : 'var(--vz-red)';
        svg.appendChild(s('text', { x: 0, y: y + 13, 'font-size': 12, 'font-weight': 700 }, 'p' + (i + 1)));
        svg.appendChild(s('rect', { x: x(0), y: y + 3, width: x(p.t) - x(0), height: 12, rx: 6, fill: c, opacity: .25 }));
        svg.appendChild(s('circle', { cx: x(p.t), cy: y + 9, r: 8, fill: c }));
        svg.appendChild(s('text', { x: x(p.t), y: y + 13, 'font-size': 10, 'text-anchor': 'middle', style: 'fill:#fff;font-weight:700' }, p.ok ? '✓' : '✗'));
      });
      var sorted = P.map(function (p, i) { return { i: i, ok: p.ok, t: p.t }; }).sort(function (a, b) { return a.t - b.t; });
      var maxT = sorted[sorted.length - 1].t;
      var firstRej = sorted.filter(function (p) { return !p.ok; })[0];
      var firstOk = sorted.filter(function (p) { return p.ok; })[0];
      var vals = P.map(function (p, i) { return p.ok ? "'v" + (i + 1) + "'" : 'Error' + (i + 1); });
      var rows = [
        ['Promise.all', firstRej ? ['✗ reject ' + vals[firstRej.i], firstRej.t, false] : ['✓ [' + vals.join(', ') + ']', maxT, true], 'Đợi tất cả; một cái reject là reject ngay.'],
        ['Promise.allSettled', ['✓ [' + P.map(function (p) { return p.ok ? 'fulfilled' : 'rejected'; }).join(', ') + ']', maxT, true], 'Luôn đợi đủ, không bao giờ reject.'],
        ['Promise.race', [(sorted[0].ok ? '✓ ' : '✗ reject ') + vals[sorted[0].i], sorted[0].t, sorted[0].ok], 'Lấy cái xong đầu tiên, dù thành công hay lỗi.'],
        ['Promise.any', firstOk ? ['✓ ' + vals[firstOk.i], firstOk.t, true] : ['✗ AggregateError', maxT, false], 'Lấy cái thành công đầu tiên; tất cả lỗi mới reject.']
      ];
      VZ.clear(res);
      rows.forEach(function (r) {
        res.appendChild(h('div', null, h('code', null, r[0]),
          h('span', null, h('b', { style: { color: r[1][2] ? 'var(--vz-green)' : 'var(--vz-red)' } }, r[1][0]), ' lúc ' + r[1][1] + 'ms. ', h('span', { class: 'vz-muted' }, r[2]))));
      });
    }
    root.appendChild(ctrls);
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(res);
    render();
  });

  /* ---------- 8. Event propagation ---------- */
  VZ.add('j-events', function (root) {
    var stopAt = null, tm = VZ.timers();
    var lv = [
      { k: 'app', tag: 'div#app', lis: 'addEventListener("click", f, { capture: true })', cap: true },
      { k: 'ul', tag: 'ul.list', lis: 'addEventListener("click", delegate)  // delegation', cap: false },
      { k: 'li', tag: 'li', lis: 'addEventListener("click", f)', cap: false },
      { k: 'btn', tag: 'button "Xoá"', lis: 'addEventListener("click", f)', cap: false }
    ];
    var boxes = [], ph = [];
    var inner = null;
    for (var i = lv.length - 1; i >= 0; i--) {
      var p = h('span', { class: 'ph' });
      ph[i] = p;
      var b = h('div', { class: 'vzj-nest' }, h('span', null, h('b', null, lv[i].tag), h('span', null, '.' + lv[i].lis), p), inner);
      boxes[i] = b;
      inner = b;
    }
    var log = h('pre', { class: 'vz-log' });
    function clearUI() { boxes.forEach(function (b, i) { b.className = 'vzj-nest'; ph[i].textContent = ''; }); }
    function run() {
      tm.stop(); clearUI(); log.textContent = '';
      var seq = [];
      for (var i = 0; i < lv.length - 1; i++) seq.push([i, 'cap']);
      seq.push([lv.length - 1, 'tgt']);
      for (var j = lv.length - 2; j >= 0; j--) seq.push([j, 'bub']);
      var stopped = false;
      seq.forEach(function (st, n) {
        tm.after(n * 650, function () {
          if (stopped) return;
          var i = st[0], kind = st[1], L = lv[i];
          boxes.forEach(function (b) { b.classList.remove('cap', 'tgt', 'bub'); });
          boxes[i].classList.add(kind);
          ph[i].textContent = kind === 'cap' ? '↓ capture' : kind === 'tgt' ? '◎ target' : '↑ bubble';
          var fires = (kind === 'cap' && L.cap) || (kind !== 'cap' && !L.cap);
          if (fires) {
            log.textContent += '▶ listener ở ' + L.tag + ' chạy (' + (kind === 'cap' ? 'capture' : kind === 'tgt' ? 'target' : 'bubble') + ')' +
              (L.k === 'ul' ? "  e.target.closest('li') → biết li nào bị bấm" : '') + '\n';
            if (stopAt === L.k) { log.textContent += '■ e.stopPropagation() ở ' + L.tag + ': sự kiện dừng lại, các cha phía trên không nhận.\n'; stopped = true; }
          }
          if (n === seq.length - 1 && !stopped) log.textContent += '✓ Xong: e.target luôn là button, e.currentTarget là phần tử đang chạy listener.\n';
        });
      });
    }
    root.appendChild(h('div', { class: 'vz-row' }, VZ.btn('Bấm "Xoá"', run, true),
      h('span', { class: 'vz-lbl' }, 'stopPropagation() ở'),
      VZ.seg([[null, 'không'], ['li', 'li'], ['btn', 'button']], stopAt, function (v) { stopAt = v; run(); }, 'Gọi stopPropagation ở đâu')));
    root.appendChild(h('div', { class: 'vz-stage' }, boxes[0]));
    root.appendChild(h('div', { class: 'vz-legend' },
      h('span', null, h('i', { style: { background: 'var(--vz-purple)' } }), 'capture: đi xuống từ window'),
      h('span', null, h('i', { style: { background: 'var(--vz-red)' } }), 'target'),
      h('span', null, h('i', { style: { background: 'var(--vz-blue)' } }), 'bubble: nổi lên lại (mặc định listener chạy ở pha này)')));
    root.appendChild(log);
  });

  /* ---------- 9. Type narrowing ---------- */
  VZ.add('j-narrow', function (root) {
    var ALL = ['string', 'number', 'null', 'Date'];
    var rows = [
      ['function fmt(x: string | number | null | Date) {', ALL],
      ['  if (x == null) return "—";            ', ['null']],
      ['  // ở đây:', ['string', 'number', 'Date']],
      ['  if (typeof x === "string") return x;  ', ['string']],
      ['  // ở đây:', ['number', 'Date']],
      ['  if (x instanceof Date) return x.toISOString();', ['Date']],
      ['  return x.toFixed(2);                  ', ['number']],
      ['}', null]
    ];
    var COL = { string: 'green', number: 'blue', null: 'red', Date: 'purple' };
    var pre = h('pre', { class: 'vzj-code' });
    rows.forEach(function (r, i) {
      var note = r[1] ? h('span', { class: 'note' }, h('span', { class: 'vz-muted' }, 'x:'),
        ALL.map(function (t) {
          var on = r[1].indexOf(t) >= 0;
          return h('span', { class: 'vz-pill', style: on ? { background: 'var(--vz-' + COL[t] + '-s)', color: 'var(--vz-' + COL[t] + ')' } : { opacity: '.35', textDecoration: 'line-through' } }, t);
        })) : null;
      pre.appendChild(h('div', { class: 'vzj-ln' }, h('i', null, String(i + 1)), h('span', null, r[0]), note));
    });
    root.appendChild(pre);
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Mỗi lần kiểm tra (== null, typeof, instanceof) rồi return, TypeScript gạch khỏi union những type đã xử lý. Tới dòng cuối chỉ còn number nên gọi toFixed được mà không cần ép kiểu.'));
  });

  /* ---------- 10. Debounce & throttle ---------- */
  VZ.add('j-debounce', function (root) {
    var WAIT = 400, WIN = 6000, W = 600, L = 92, H = 132;
    var ev = { raw: [], deb: [], thr: [] }, dt = null, lastThr = -1e9, lastEv = -1e9, raf = 0, tm = VZ.timers();
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Dòng thời gian sự kiện gốc, debounce và throttle', style: { minWidth: '420px' } });
    var lanes = [['raw', 'sự kiện gốc', 22, 'var(--vz-muted)'], ['deb', 'debounce', 62, 'var(--vz-purple)'], ['thr', 'throttle', 102, 'var(--vz-teal)']];
    var g = s('g');
    lanes.forEach(function (l) {
      svg.appendChild(s('text', { x: 0, y: l[2] + 4, 'font-size': 12, 'font-weight': 600 }, l[1]));
      svg.appendChild(s('line', { x1: L, x2: W, y1: l[2], y2: l[2], stroke: 'var(--vz-line)' }));
    });
    svg.appendChild(s('text', { x: W, y: H - 2, 'font-size': 10.5, 'text-anchor': 'end', style: 'fill:var(--vz-muted)' }, 'bây giờ'));
    svg.appendChild(s('text', { x: L, y: H - 2, 'font-size': 10.5, style: 'fill:var(--vz-muted)' }, '6 giây trước'));
    svg.appendChild(g);
    var counts = h('div', { class: 'vz-out', 'aria-live': 'off' });
    function hit() {
      var now = performance.now();
      ev.raw.push(now); lastEv = now;
      clearTimeout(dt);
      dt = setTimeout(function () { ev.deb.push(performance.now()); lastEv = performance.now(); kick(); }, WAIT);
      if (now - lastThr >= WAIT) { ev.thr.push(now); lastThr = now; }
      kick();
    }
    function kick() { if (!raf) raf = requestAnimationFrame(draw); }
    function draw() {
      raf = 0;
      var now = performance.now();
      while (g.firstChild) g.removeChild(g.firstChild);
      lanes.forEach(function (l) {
        ev[l[0]] = ev[l[0]].filter(function (t) { return now - t < WIN; });
        ev[l[0]].forEach(function (t) {
          var x = W - (now - t) / WIN * (W - L);
          g.appendChild(l[0] === 'raw'
            ? s('line', { x1: x, x2: x, y1: l[2] - 8, y2: l[2] + 8, stroke: l[3], 'stroke-width': 1.5 })
            : s('circle', { cx: x, cy: l[2], r: 7, fill: l[3] }));
        });
      });
      counts.textContent = 'Trong 6 giây: ' + ev.raw.length + ' sự kiện gốc → debounce chạy ' + ev.deb.length + ' lần, throttle chạy ' + ev.thr.length + ' lần.';
      if (now - lastEv < WIN + 200) kick();
    }
    var pad = h('div', { class: 'vzj-pad' }, 'Rê chuột / kéo ngón tay qua đây, hoặc gõ vào ô bên dưới');
    pad.addEventListener('pointermove', hit);
    var input = h('input', { type: 'text', placeholder: 'Gõ thử vào đây…', 'aria-label': 'Gõ để tạo sự kiện input' });
    input.addEventListener('input', hit);
    function burst() {
      tm.stop();
      var t = 0;
      for (var b = 0; b < 3; b++) {
        for (var k = 0; k < 9; k++) { t += 60 + Math.random() * 90; tm.after(t, hit); }
        t += 900;
      }
    }
    root.appendChild(h('div', { class: 'vz-split' }, pad, h('div', { class: 'vz-col' }, input, h('div', null, VZ.btn('Giả lập 3 tràng gõ phím', burst)))));
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(counts);
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Cả hai dùng wait = 400ms. Debounce chỉ chạy khi bạn ngừng 400ms (hợp với ô tìm kiếm). Throttle chạy tối đa mỗi 400ms một lần trong lúc sự kiện còn dồn dập (hợp với scroll, resize, kéo thả).'));
    draw();
  });

  /* ---------- 11. Utility types ---------- */
  VZ.add('j-utility', function (root) {
    var base = [['id', 'number', '', ''], ['name', 'string', '', ''], ['email', 'string', 'opt', ''], ['password', 'string', '', ''], ['createdAt', 'Date', '', 'ro']];
    var U = {
      'Partial<User>': function (f) { return { opt: 'opt' }; },
      'Required<User>': function (f) { return { opt: '' }; },
      'Readonly<User>': function (f) { return { ro: 'ro' }; },
      "Pick<User, 'id' | 'name'>": function (f) { return f[0] === 'id' || f[0] === 'name' ? {} : { gone: true }; },
      "Omit<User, 'password'>": function (f) { return f[0] === 'password' ? { gone: true } : {}; },
      "Partial<Pick<User, 'name' | 'email'>>": function (f) { return f[0] === 'name' || f[0] === 'email' ? { opt: 'opt' } : { gone: true }; }
    };
    var uses = {
      'Partial<User>': 'Dữ liệu cho hàm update(patch): field nào cũng có thể vắng.',
      'Required<User>': 'Bắt buộc đủ mọi field, kể cả field vốn optional.',
      'Readonly<User>': 'Không gán lại được field nào (chỉ ở cấp ngoài cùng).',
      "Pick<User, 'id' | 'name'>": 'Chỉ lấy vài field, ví dụ dữ liệu hiển thị trong danh sách.',
      "Omit<User, 'password'>": 'Bỏ field nhạy cảm trước khi trả về client.',
      "Partial<Pick<User, 'name' | 'email'>>": 'Lồng nhau: form sửa hồ sơ chỉ cho đổi name và email, cái nào cũng tuỳ chọn.'
    };
    var cur = 'Partial<User>';
    var left = h('div', { class: 'vzj-flds' }), right = h('div', { class: 'vzj-flds' }), out = h('p', { class: 'vz-out', 'aria-live': 'polite' }), title = h('span', { class: 'vz-lbl' });
    function fld(f, mod) {
      var opt = mod && 'opt' in mod ? mod.opt : f[2], ro = mod && mod.ro ? mod.ro : f[3];
      var changed = mod && (opt !== f[2] || ro !== f[3]);
      return h('div', { class: 'vzj-fld' + (mod && mod.gone ? ' gone' : '') + (changed ? ' chg' : '') },
        ro ? h('span', { class: 'm ro' }, 'readonly') : null, h('b', null, f[0] + (opt ? '?' : '')), opt ? h('span', { class: 'm opt' }, 'optional') : null, h('span', { class: 't' }, f[1]));
    }
    function render() {
      VZ.clear(left); VZ.clear(right);
      base.forEach(function (f) { left.appendChild(fld(f)); right.appendChild(fld(f, U[cur](f))); });
      title.textContent = 'type X = ' + cur;
      out.textContent = uses[cur];
    }
    root.appendChild(VZ.seg(Object.keys(U).map(function (k) { return [k, k]; }), cur, function (v) { cur = v; render(); }, 'Utility type'));
    root.appendChild(h('div', { class: 'vz-split' },
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl' }, 'interface User'), left),
      h('div', { class: 'vz-col' }, title, right)));
    root.appendChild(out);
    render();
  });
})(window.VZ);
