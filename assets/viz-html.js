/* Minh hoạ cho trang HTML. Cần assets/viz.js nạp trước. */
(function (VZ) {
  'use strict';
  if (!VZ) return;
  var h = VZ.h, s = VZ.s;

  VZ.css('vz-html', [
    /* 3 lớp */
    '.vzh-layers{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));align-items:stretch}',
    '.vzh-stack{display:grid;gap:6px;align-content:start}',
    '.vzh-layer{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1.5px dashed var(--vz-line);color:var(--vz-muted);font-size:13px;transition:all .2s}',
    '.vzh-layer b{font-family:var(--vz-mono);font-size:12px;min-width:3.2em}',
    '.vzh-layer.on{border-style:solid;color:var(--vz-fg)}',
    '.vzh-layer.on.l1{border-color:var(--vz-amber);background:var(--vz-amber-s)}',
    '.vzh-layer.on.l2{border-color:var(--vz-blue);background:var(--vz-blue-s)}',
    '.vzh-layer.on.l3{border-color:var(--vz-green);background:var(--vz-green-s)}',
    '.vzh-preview{display:grid;place-items:center;min-height:120px;background:var(--vz-bg2);border-radius:10px;padding:16px}',
    '.vzh-like-css{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;border-radius:999px;',
    'background:#e0245e;color:#fff;font:600 15px/1.2 var(--font-body,system-ui);box-shadow:0 2px 8px rgba(224,36,94,.35);cursor:pointer;transition:transform .12s}',
    '.vzh-like-css:active{transform:scale(.95)}',
    '.vzh-like-css:focus-visible{outline:2px solid var(--vz-acc);outline-offset:3px}',
    '.vzh-code{font-family:var(--vz-mono);font-size:12px;line-height:1.55;white-space:pre;overflow-x:auto;margin:0;padding:8px 10px;border-radius:8px;',
    'background:var(--code-bg,var(--vz-bg2));border:1px solid var(--vz-line)}',
    /* block / inline */
    '.vzh-flow{background:var(--vz-bg);border:1px dashed var(--vz-line);border-radius:8px;padding:10px;max-width:460px;line-height:2.1;font-size:13.5px}',
    '.vzh-el{cursor:pointer;border:1.5px solid;border-radius:5px;padding:1px 6px;margin:2px 0;transition:background .15s}',
    '.vzh-el small{font-family:var(--vz-mono);font-size:11px;font-weight:600;margin-right:6px}',
    '.vzh-el.block{border-color:var(--vz-blue);background:var(--vz-blue-s)}',
    '.vzh-el.inline{border-color:var(--vz-amber);background:var(--vz-amber-s)}',
    '.vzh-el.inline-block{border-color:var(--vz-purple);background:var(--vz-purple-s)}',
    /* landmarks */
    '.vzh-page{display:grid;gap:6px;grid-template-columns:1fr 3fr 1.3fr;grid-template-areas:"hd hd hd" "nv mn as" "ft ft ft";min-width:300px}',
    '.vzh-lm{font:inherit;text-align:left;border:1.5px solid var(--vz-line);background:var(--vz-bg);border-radius:8px;padding:8px;cursor:pointer;color:var(--vz-fg);',
    'display:flex;flex-direction:column;gap:4px;min-height:44px;transition:all .15s}',
    '.vzh-lm code{font-weight:600;font-size:12px;align-self:flex-start}',
    '.vzh-lm span{font-size:11.5px;color:var(--vz-muted)}',
    '.vzh-lm[aria-pressed="true"]{border-color:var(--vz-acc);background:color-mix(in srgb,var(--vz-acc) 12%,var(--vz-bg));box-shadow:0 0 0 2px color-mix(in srgb,var(--vz-acc) 30%,transparent)}',
    '.vzh-lm .vzh-lm{min-height:36px}',
    '.vzh-main{grid-area:mn;display:grid;gap:6px;align-content:start}',
    '.vzh-info{display:grid;gap:4px;padding:10px 12px;border-radius:9px;background:var(--vz-bg2);font-size:13.5px}',
    /* headings */
    '.vzh-outline{display:grid;gap:3px;font-size:13px}',
    '.vzh-h{display:flex;align-items:center;gap:8px;padding:3px 8px;border-radius:6px;background:var(--vz-bg)}',
    '.vzh-h b{font-family:var(--vz-mono);font-size:11px;padding:1px 6px;border-radius:5px;background:var(--vz-blue-s);color:var(--vz-blue)}',
    '.vzh-h.bad{background:var(--vz-red-s)}',
    '.vzh-h.bad b{background:var(--vz-red);color:#fff}',
    '.vzh-h em{margin-left:auto;font-style:normal;font-size:11.5px;color:var(--vz-red);font-weight:600;white-space:nowrap}',
    /* srcset */
    '.vzh-cands{display:flex;gap:6px;flex-wrap:wrap}',
    '.vzh-cand{font-family:var(--vz-mono);font-size:12px;padding:6px 10px;border-radius:8px;border:1.5px solid var(--vz-line);background:var(--vz-bg);transition:all .15s}',
    '.vzh-cand.pick{border-color:var(--vz-green);background:var(--vz-green-s);font-weight:700}',
    '.vzh-cand.small{opacity:.5;text-decoration:line-through}',
    '.vzh-vp{position:relative;height:56px;border-radius:8px;background:var(--vz-bg);border:1.5px solid var(--vz-line);overflow:hidden;transition:width .15s}',
    '.vzh-slot{position:absolute;inset:6px auto 6px 6px;border-radius:5px;background:var(--vz-blue-s);border:1.5px solid var(--vz-blue);display:grid;place-items:center;',
    'font-size:11.5px;font-family:var(--vz-mono);color:var(--vz-blue);transition:width .15s;white-space:nowrap;overflow:hidden}',
    /* focus */
    '.vzh-form{display:flex;flex-wrap:wrap;gap:10px;align-items:center}',
    '.vzh-f{position:relative;border:1.5px solid var(--vz-line);background:var(--vz-bg);border-radius:7px;padding:7px 12px;font-size:13px;transition:box-shadow .15s}',
    '.vzh-f.link{color:var(--vz-blue);text-decoration:underline;border-style:dashed}',
    '.vzh-f.inp{min-width:110px;color:var(--vz-muted)}',
    '.vzh-f.bt{background:var(--vz-acc);color:var(--accent-ink,#fff);border-color:var(--vz-acc)}',
    '.vzh-f.bt sub{color:inherit;opacity:.8}',
    '.vzh-f.div{border-style:dotted;color:var(--vz-muted)}',
    '.vzh-f.cur{box-shadow:0 0 0 3px var(--vz-bg),0 0 0 6px var(--vz-acc)}',
    '.vzh-f.skip{opacity:.45}',
    '.vzh-f i{position:absolute;top:-10px;right:-8px;font-style:normal;font-size:11px;font-weight:700;min-width:20px;height:20px;padding:0 5px;border-radius:999px;',
    'display:grid;place-items:center;background:var(--vz-fg);color:var(--vz-bg)}',
    '.vzh-f i.x{background:var(--vz-red);color:#fff}',
    '.vzh-f sub{display:block;font-family:var(--vz-mono);font-size:10.5px;color:var(--vz-muted);margin-top:2px}',
    /* shadow DOM */
    '.vzh-tri{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))}',
    '.vzh-tree{display:grid;gap:4px;font-family:var(--vz-mono);font-size:12px;align-content:start}',
    '.vzh-tree h4{margin:0 0 4px;font-family:var(--font-body,system-ui);font-size:12px;color:var(--vz-muted);font-weight:700;text-transform:uppercase;letter-spacing:.05em}',
    '.vzh-n{padding:4px 8px;border-radius:6px;border:1.5px solid var(--vz-line);background:var(--vz-bg);transition:all .15s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.vzh-n[data-k]{cursor:pointer}',
    '.vzh-n.k1{border-color:var(--vz-blue)}.vzh-n.k2{border-color:var(--vz-purple)}.vzh-n.k3{border-color:var(--vz-green)}',
    '.vzh-n.hot.k1{background:var(--vz-blue-s)}.vzh-n.hot.k2{background:var(--vz-purple-s)}.vzh-n.hot.k3{background:var(--vz-green-s)}',
    '.vzh-n.hot{box-shadow:0 0 0 2px currentColor}',
    '.vzh-n.sh{border-style:dashed;color:var(--vz-muted)}',
    '.vzh-card{border:1.5px solid var(--vz-line);border-radius:10px;background:var(--vz-bg);padding:10px;display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center}',
    '.vzh-card .vzh-n{font-family:var(--font-body,system-ui);font-size:12.5px}'
  ].join(''));

  /* ---------- 1. Ba lớp HTML / CSS / JS ---------- */
  VZ.add('h-layers', function (root) {
    var mode = 'html', count = 0;
    var codes = {
      html: '<button type="button">\n  ♥ Thích (<span>0</span>)\n</button>',
      css: '.like {\n  border-radius: 999px;\n  background: #e0245e;\n  color: #fff;\n  padding: 9px 18px;\n}',
      js: "btn.addEventListener('click', () => {\n  count++;\n  span.textContent = count;\n});"
    };
    var notes = {
      html: 'Chỉ HTML: đã là một nút thật — focus bằng Tab, bấm Enter/Space được, trình đọc màn hình đọc "nút Thích". Nhưng bấm chưa có tác dụng.',
      css: 'Thêm CSS: đổi hình dáng, màu, khoảng cách. Ý nghĩa và hành vi bàn phím vẫn giữ nguyên.',
      js: 'Thêm JS: gắn hành vi. Bấm thử nút bên cạnh.'
    };
    var layers = [['l1', 'HTML', 'ý nghĩa + cấu trúc'], ['l2', 'CSS', 'giao diện'], ['l3', 'JS', 'hành vi']].map(function (l) {
      return h('div', { class: 'vzh-layer ' + l[0] }, h('b', null, l[1]), l[2]);
    });
    var preview = h('div', { class: 'vzh-preview' });
    var code = h('pre', { class: 'vzh-code' });
    var note = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function render() {
      var lvl = { html: 1, css: 2, js: 3 }[mode];
      layers.forEach(function (l, i) { l.classList.toggle('on', i < lvl); });
      VZ.clear(preview);
      var num = h('span', null, String(count));
      var b = h('button', { type: 'button' }, '♥ Thích (', num, ')');
      if (mode === 'html') b.style.cssText = 'all:revert;font-size:14px';
      else b.className = 'vzh-like-css';
      b.addEventListener('click', function () {
        if (mode !== 'js') { VZ.flash(b); return; }
        count++; num.textContent = count;
      });
      preview.appendChild(b);
      code.textContent = codes[mode];
      note.textContent = notes[mode];
    }
    root.appendChild(VZ.seg([['html', 'Chỉ HTML'], ['css', '+ CSS'], ['js', '+ JS']], mode, function (v) { mode = v; render(); }, 'Chọn lớp'));
    root.appendChild(h('div', { class: 'vzh-layers' },
      h('div', { class: 'vzh-stack' }, layers, code),
      preview));
    root.appendChild(note);
    render();
  });

  /* ---------- 2. Block và inline ---------- */
  VZ.add('h-block-inline', function (root) {
    var items = [
      ['h2', 'block', 'Tiêu đề'], ['p', 'block', 'Đoạn văn'], ['span', 'inline', 'chữ thường'], ['a', 'inline', 'một link'],
      ['strong', 'inline', 'in đậm'], ['button', 'inline-block', 'Nút'], ['div', 'block', 'Khối div'], ['img', 'inline', 'ảnh']
    ];
    var cycle = { block: 'inline', inline: 'inline-block', 'inline-block': 'block' };
    var flow = h('div', { class: 'vzh-flow', 'aria-live': 'polite' });
    function render() {
      VZ.clear(flow);
      items.forEach(function (it, i) {
        var el = h('span', {
          class: 'vzh-el ' + it[1], role: 'button', tabindex: '0',
          'aria-label': '<' + it[0] + '> đang là display ' + it[1] + '. Bấm để đổi',
          style: { display: it[1] }
        }, h('small', null, '<' + it[0] + '>'), it[2]);
        function toggle() { it[1] = cycle[it[1]]; render(); flow.children[i].focus(); }
        el.addEventListener('click', toggle);
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
        flow.appendChild(el);
        flow.appendChild(document.createTextNode(' '));
      });
    }
    root.appendChild(h('div', { class: 'vz-legend' },
      h('span', null, h('i', { style: { background: 'var(--vz-blue)' } }), 'block: chiếm trọn một dòng, xếp dọc như Column'),
      h('span', null, h('i', { style: { background: 'var(--vz-amber)' } }), 'inline: chảy cùng dòng chữ, bỏ qua width/height'),
      h('span', null, h('i', { style: { background: 'var(--vz-purple)' } }), 'inline-block: cùng dòng nhưng nhận width/height')));
    root.appendChild(h('div', { class: 'vz-stage' }, flow));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } }, 'Bấm vào một phần tử để đổi display: block → inline → inline-block. Mặc định đúng như trình duyệt.'));
    render();
  });

  /* ---------- 3. Landmark ---------- */
  VZ.add('h-landmarks', function (root) {
    var info = {
      header: ['<header>', 'banner', 'Đầu trang: logo, tên site, ô tìm kiếm. Chỉ là banner khi nằm trực tiếp dưới body, không nằm trong article/section.'],
      search: ['<search>', 'search', 'Vùng tìm kiếm (thẻ mới, thay cho <form role="search">).'],
      nav: ['<nav>', 'navigation', 'Nhóm link điều hướng chính. Không cần bọc mọi nhóm link, chỉ những nhóm quan trọng.'],
      main: ['<main>', 'main', 'Nội dung chính, duy nhất một <main> hiển thị mỗi trang. Skip link thường nhảy tới đây.'],
      article: ['<article>', 'article', 'Nội dung tự đứng được: bài viết, bình luận, card sản phẩm. Lấy ra chỗ khác vẫn hiểu.'],
      section: ['<section>', 'region (khi có tên)', 'Một phần theo chủ đề, nên có heading. Chỉ thành landmark khi có aria-label/aria-labelledby.'],
      aside: ['<aside>', 'complementary', 'Nội dung phụ: sidebar, quảng cáo, "bài liên quan".'],
      footer: ['<footer>', 'contentinfo', 'Chân trang: bản quyền, liên hệ. Là contentinfo khi nằm trực tiếp dưới body.']
    };
    var cur = 'main', btns = {};
    var panel = h('div', { class: 'vzh-info', 'aria-live': 'polite' });
    function lm(key, area, kids) {
      var b = h('button', { type: 'button', class: 'vzh-lm', style: area ? { gridArea: area } : null, 'aria-pressed': 'false' },
        h('code', null, info[key][0]), h('span', null, 'role=' + info[key][1]), kids);
      b.addEventListener('click', function (e) { e.stopPropagation(); pick(key); });
      btns[key] = b;
      return b;
    }
    function pick(k) {
      cur = k;
      for (var x in btns) btns[x].setAttribute('aria-pressed', String(x === k));
      VZ.clear(panel);
      panel.appendChild(h('div', null, h('code', { style: { fontWeight: '700' } }, info[k][0]), ' → role ngầm định ', h('span', { class: 'vz-pill' }, info[k][1])));
      panel.appendChild(h('div', { class: 'vz-muted' }, info[k][2]));
    }
    var hd = lm('header', 'hd');
    hd.style.flexDirection = 'row'; hd.style.alignItems = 'center'; hd.style.flexWrap = 'wrap'; hd.style.gap = '4px 10px';
    var sr = lm('search');
    sr.style.marginLeft = 'auto';
    hd.appendChild(sr);
    var main = h('div', { class: 'vzh-main' }, lm('main', null, [lm('article'), lm('section')]));
    main.firstChild.style.gap = '6px';
    var page = h('div', { class: 'vzh-page' }, hd, lm('nav', 'nv'), main, lm('aside', 'as'), lm('footer', 'ft'));
    root.appendChild(h('div', { class: 'vz-stage' }, page));
    root.appendChild(panel);
    pick(cur);
  });

  /* ---------- 4. Heading hierarchy ---------- */
  VZ.add('h-headings', function (root) {
    var good = [[1, 'Áo khoác gió'], [2, 'Mô tả'], [3, 'Chất liệu'], [3, 'Kích thước'], [2, 'Đánh giá'], [3, 'Đánh giá nổi bật'], [2, 'Sản phẩm tương tự']];
    var bad = [[1, 'Áo khoác gió'], [3, 'Mô tả'], [2, 'Chất liệu'], [5, 'Kích thước'], [1, 'Đánh giá'], [4, 'Sản phẩm tương tự']];
    function outline(list) {
      var prev = 0, h1 = 0;
      return h('div', { class: 'vzh-outline' }, list.map(function (it) {
        var lv = it[0], warn = null;
        if (lv === 1) { h1++; if (h1 > 1) warn = 'thêm một h1'; }
        if (prev && lv > prev + 1) warn = 'nhảy từ h' + prev + ' xuống h' + lv;
        prev = lv;
        return h('div', { class: 'vzh-h' + (warn ? ' bad' : ''), style: { marginLeft: (lv - 1) * 18 + 'px' } },
          h('b', null, 'h' + lv), it[1], warn ? h('em', null, '⚠ ' + warn) : null);
      }));
    }
    root.appendChild(h('div', { class: 'vz-split' },
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl', style: { color: 'var(--vz-green)' } }, '✓ Đúng: như mục lục của một cuốn sách'), h('div', { class: 'vz-stage' }, outline(good))),
      h('div', { class: 'vz-col' }, h('span', { class: 'vz-lbl', style: { color: 'var(--vz-red)' } }, '✗ Sai: chọn cấp theo cỡ chữ'), h('div', { class: 'vz-stage' }, outline(bad)))));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Người dùng trình đọc màn hình mở danh sách heading và nhảy theo cấp giống thế này. Muốn chữ to/nhỏ thì dùng CSS, đừng đổi cấp heading.'));
  });

  /* ---------- 5. srcset + sizes ---------- */
  VZ.add('h-srcset', function (root) {
    var vw = 900, dpr = 2, cands = [400, 800, 1200, 1600];
    var vp = h('div', { class: 'vzh-vp' }), slot = h('div', { class: 'vzh-slot' });
    vp.appendChild(slot);
    var candEls = cands.map(function (w) { return h('span', { class: 'vzh-cand' }, 'photo-' + w + '.jpg ' + w + 'w'); });
    var out = h('div', { class: 'vz-out', 'aria-live': 'polite' });
    function render() {
      var slotW = vw <= 600 ? vw : Math.round(vw / 2);
      var need = slotW * dpr;
      var pick = cands.filter(function (c) { return c >= need; })[0] || cands[cands.length - 1];
      vp.style.width = Math.max(18, vw / 1600 * 100) + '%';
      slot.style.width = 'calc(' + (slotW / vw * 100) + '% - 12px)';
      slot.textContent = slotW + 'px';
      candEls.forEach(function (el, i) {
        el.classList.toggle('pick', cands[i] === pick);
        el.classList.toggle('small', cands[i] < need && cands[i] !== pick);
      });
      out.innerHTML = '';
      out.appendChild(h('span', null,
        'Màn ', h('b', null, vw + 'px'), ' → ', h('code', null, vw <= 600 ? '(max-width: 600px) 100vw' : '50vw'),
        ' → ô ảnh ', h('b', null, slotW + 'px'), ' × DPR ', h('b', null, String(dpr)), ' = cần ', h('b', null, need + 'px'),
        ' → tải ', h('b', { style: { color: 'var(--vz-green)' } }, pick + 'w'),
        pick < need ? h('span', { class: 'vz-muted' }, ' (lớn nhất có, vẫn hơi thiếu)') : null));
    }
    root.appendChild(h('pre', { class: 'vzh-code' },
      '<img src="photo-800.jpg"\n     srcset="photo-400.jpg 400w, photo-800.jpg 800w,\n             photo-1200.jpg 1200w, photo-1600.jpg 1600w"\n     sizes="(max-width: 600px) 100vw, 50vw" alt="…">'));
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.range('Rộng màn hình', 320, 1600, 10, vw, function (v) { vw = v; render(); }, function (v) { return v + 'px'; }),
      VZ.seg([[1, '1x'], [2, '2x'], [3, '3x']], dpr, function (v) { dpr = v; render(); }, 'Mật độ điểm ảnh (DPR)')));
    root.appendChild(h('div', { class: 'vz-stage vz-col' }, h('span', { class: 'vz-lbl' }, 'Viewport và ô ảnh (theo sizes)'), vp, h('div', { class: 'vzh-cands' }, candEls)));
    root.appendChild(out);
    render();
  });

  /* ---------- 6. Thứ tự focus ---------- */
  VZ.add('h-focus', function (root) {
    var mode = 'natural', pos = -1;
    var defs = [
      { k: 'link', cls: 'link', label: 'Trang chủ', tag: '<a href>' },
      { k: 'name', cls: 'inp', label: 'Họ tên…', tag: '<input>' },
      { k: 'mail', cls: 'inp', label: 'Email…', tag: '<input>' },
      { k: 'send', cls: 'bt', label: 'Gửi', tag: '<button>' },
      { k: 'del', cls: 'div', label: 'Xoá', tag: '<div onclick>' }
    ];
    var modes = {
      natural: { ti: {}, note: 'Mặc định: Tab đi theo thứ tự trong DOM. <div onclick> không nhận focus, người dùng bàn phím không bấm "Xoá" được.' },
      positive: { ti: { mail: 1, send: 2 }, note: 'tabindex dương (1, 2…) được ưu tiên trước mọi phần tử khác, nên thứ tự bị đảo lộn. Tránh dùng.' },
      fixdiv: { ti: { del: 0 }, note: 'Cách sửa: dùng <button> thật. Nếu buộc phải dùng div thì thêm tabindex="0", role="button" và tự xử lý Enter/Space.' },
      minus: { ti: { link: -1 }, note: 'tabindex="-1": bỏ khỏi vòng Tab nhưng vẫn focus được bằng code (el.focus()). Hay dùng cho heading đích của skip link, dialog.' }
    };
    var els = defs.map(function (d) { return h('span', { class: 'vzh-f ' + d.cls }, d.label, h('sub', null, d.tag)); });
    var out = h('p', { class: 'vz-out', 'aria-live': 'polite' });
    function order() {
      var ti = modes[mode].ti, list = [];
      defs.forEach(function (d, i) {
        var t = d.k in ti ? ti[d.k] : (d.k === 'del' ? null : 0);
        if (t === null || t < 0) return;
        list.push({ i: i, t: t });
      });
      var pos1 = list.filter(function (x) { return x.t > 0; }).sort(function (a, b) { return a.t - b.t; });
      return pos1.concat(list.filter(function (x) { return x.t === 0; })).map(function (x) { return x.i; });
    }
    function render() {
      var ord = order(), ti = modes[mode].ti;
      els.forEach(function (el, i) {
        var o = ord.indexOf(i);
        var old = el.querySelector('i'); if (old) el.removeChild(old);
        el.insertBefore(h('i', { class: o < 0 ? 'x' : '' }, o < 0 ? '–' : String(o + 1)), el.firstChild);
        el.classList.toggle('skip', o < 0);
        el.classList.toggle('cur', pos >= 0 && ord[pos] === i);
        var sub = el.querySelector('sub');
        sub.textContent = defs[i].tag.replace('>', defs[i].k in ti ? ' tabindex="' + ti[defs[i].k] + '">' : '>');
      });
      out.textContent = modes[mode].note;
    }
    function step(d) {
      var n = order().length;
      pos = pos < 0 ? (d > 0 ? 0 : n - 1) : (pos + d + n) % n;
      render();
    }
    root.appendChild(h('div', { class: 'vz-row' },
      VZ.seg([['natural', 'Mặc định'], ['positive', 'tabindex dương'], ['fixdiv', 'div tabindex=0'], ['minus', 'tabindex=-1']], mode,
        function (v) { mode = v; pos = -1; render(); }, 'Kịch bản'),
      h('span', { class: 'vz-row', style: { gap: '6px' } }, VZ.btn('⇧ Tab', function () { step(-1); }), VZ.btn('Tab ↹', function () { step(1); }, true))));
    root.appendChild(h('div', { class: 'vz-stage', style: { paddingTop: '18px' } }, h('div', { class: 'vzh-form' }, els)));
    root.appendChild(out);
    render();
  });

  /* ---------- 7. defer / async / module ---------- */
  VZ.add('h-scripts', function (root) {
    var W = 700, X0 = 130, U = 4.2; // 1 đơn vị thời gian = 4.2px
    var rows = [
      { name: '<script>', note: 'chặn parse', bars: [['p', 0, 30], ['f', 30, 55], ['e', 55, 65], ['p', 65, 115]], dcl: 115 },
      { name: 'async', note: 'chạy ngay khi tải xong', bars: [['p', 0, 55], ['f', 30, 55], ['e', 55, 65], ['p', 65, 90]], dcl: 90 },
      { name: 'defer', note: 'chạy sau parse, đúng thứ tự', bars: [['p', 0, 80], ['f', 30, 55], ['e', 80, 90]], dcl: 90 },
      { name: 'type="module"', note: 'mặc định như defer', bars: [['p', 0, 80], ['f', 30, 55], ['e', 80, 90]], dcl: 90 }
    ];
    var col = { p: 'var(--vz-green)', f: 'var(--vz-blue)', e: 'var(--vz-red)' };
    var RH = 54, H = rows.length * RH + 30;
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, style: { maxWidth: '760px', minWidth: '560px' }, role: 'img', 'aria-label': 'Dòng thời gian parse HTML, tải và chạy script cho 4 cách nạp script' });
    rows.forEach(function (r, i) {
      var y = i * RH + 8;
      svg.appendChild(s('text', { x: 0, y: y + 16, 'font-size': 13, 'font-weight': 600, 'font-family': 'var(--vz-mono)' }, r.name));
      svg.appendChild(s('text', { x: 0, y: y + 32, 'font-size': 11, style: 'fill:var(--vz-muted)' }, r.note));
      svg.appendChild(s('line', { x1: X0, x2: W, y1: y + 42, y2: y + 42, stroke: 'var(--vz-line)' }));
      r.bars.forEach(function (b) {
        var top = b[0] === 'p' ? y + 4 : y + 22;
        svg.appendChild(s('rect', { x: X0 + b[1] * U, y: top, width: (b[2] - b[1]) * U, height: 14, rx: 3, fill: col[b[0]], opacity: b[0] === 'f' ? .75 : 1 }));
      });
      var gap = r.bars.filter(function (b) { return b[0] === 'e'; })[0];
      if (r.name === '<script>') {
        svg.appendChild(s('text', { x: X0 + 32 * U, y: y + 15, 'font-size': 10.5, style: 'fill:var(--vz-red)' }, 'parser đứng chờ…'));
      }
      var dx = X0 + r.dcl * U;
      svg.appendChild(s('line', { x1: dx, x2: dx, y1: y, y2: y + 40, stroke: 'var(--vz-fg)', 'stroke-dasharray': '3 3' }));
      var far = dx > W - 110;
      svg.appendChild(s('text', { x: far ? dx - 4 : dx + 4, y: y + 36, 'font-size': 10, 'text-anchor': far ? 'end' : 'start', style: 'fill:var(--vz-muted)' }, 'DOMContentLoaded'));
      void gap;
    });
    svg.appendChild(s('text', { x: X0, y: H - 4, 'font-size': 11, style: 'fill:var(--vz-muted)' }, 'thời gian →'));
    root.appendChild(h('div', { class: 'vz-stage' }, svg));
    root.appendChild(h('div', { class: 'vz-legend' },
      h('span', null, h('i', { style: { background: col.p } }), 'parse HTML'),
      h('span', null, h('i', { style: { background: col.f, opacity: .75 } }), 'tải script (song song)'),
      h('span', null, h('i', { style: { background: col.e } }), 'chạy script')));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Nhiều script async chạy theo thứ tự tải xong (không đoán được). defer và module giữ đúng thứ tự trong HTML và chạy trước DOMContentLoaded.'));
  });

  /* ---------- 8. Shadow DOM + slot ---------- */
  VZ.add('h-shadow', function (root) {
    var all = [];
    function n(text, k, extra) {
      var el = h('div', { class: 'vzh-n' + (k ? ' k' + k : '') + (extra ? ' ' + extra : ''), 'data-k': k || null, tabindex: k ? '0' : null, style: null }, text);
      if (k) {
        el.addEventListener('mouseenter', function () { hot(k); });
        el.addEventListener('focus', function () { hot(k); });
        el.addEventListener('click', function () { hot(k); });
      }
      all.push(el);
      return el;
    }
    function ind(el, lv) { el.style.marginLeft = lv * 14 + 'px'; return el; }
    function hot(k) { all.forEach(function (el) { el.classList.toggle('hot', el.getAttribute('data-k') === String(k)); }); }
    var light = h('div', { class: 'vzh-tree' }, h('h4', null, '1 · Light DOM (bạn viết)'),
      n('<user-card>'),
      ind(n('<img slot="avatar">', 1), 1),
      ind(n('<b slot="name">Lan Anh</b>', 2), 1),
      ind(n('<p>Frontend dev</p>', 3), 1));
    var shadow = h('div', { class: 'vzh-tree' }, h('h4', null, '2 · Shadow DOM (component)'),
      n('#shadow-root', null, 'sh'),
      ind(n('<style> chỉ áp trong đây', null, 'sh'), 1),
      ind(n('<div class="card">', null, 'sh'), 1),
      ind(n('<slot name="avatar">', 1, 'sh'), 2),
      ind(n('<slot name="name">', 2, 'sh'), 2),
      ind(n('<slot> (mặc định)', 3, 'sh'), 2));
    var av = n('🙂', 1); av.style.cssText = 'width:38px;height:38px;border-radius:50%;display:grid;place-items:center;padding:0;grid-row:span 2;font-size:20px';
    var nm = n('Lan Anh', 2); nm.style.fontWeight = '700';
    var ds = n('Frontend dev', 3);
    var out = h('div', { class: 'vzh-tree' }, h('h4', null, '3 · Hiển thị (flattened)'), h('div', { class: 'vzh-card' }, av, nm, ds));
    root.appendChild(h('div', { class: 'vz-stage' }, h('div', { class: 'vzh-tri' }, light, shadow, out)));
    root.appendChild(h('p', { class: 'vz-muted', style: { fontSize: '12.5px' } },
      'Rê chuột hoặc Tab vào một node để thấy nó đi vào slot nào. Node vẫn thuộc light DOM (CSS trang vẫn chạm được), chỉ được "chiếu" vào vị trí slot. Node không có slot="…" rơi vào <slot> mặc định.'));
    hot(2);
  });
})(window.VZ);
