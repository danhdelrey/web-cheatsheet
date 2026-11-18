"""Đồng bộ khối code hiển thị dưới mỗi demo trong tailwind/index.html.

Mỗi demo có dạng:
    <div class="k-stage" data-code> ...HTML dùng class Tailwind... </div>
    <pre data-from-stage><code class="language-markup">...</code></pre>

Sửa phần HTML trong k-stage xong thì chạy:
    python tools/tailwind/sync_code.py
để khối <pre data-from-stage> ngay sau nó được viết lại cho khớp (thiếu thì tự thêm).
Không chạy cũng không sao: trang tự sinh code lúc mở nếu thiếu khối <pre>,
nhưng chạy thì code nằm sẵn trong HTML, ô tìm xuyên trang ở trang chủ mới tìm thấy class.
Chạy lại tools/build_index.py sau đó nếu muốn cập nhật ô tìm kiếm.
"""
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
START = re.compile(r'<div class="k-stage[^"]*"[^>]*\sdata-code[^>]*>')
DIV = re.compile(r'<(/?)div\b[^>]*>')
OLD_PRE = re.compile(r'\s*<pre data-from-stage>.*?</pre>', re.S)


def dedent(text):
    lines = text.replace('\t', '  ').split('\n')
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    ind = min(len(l) - len(l.lstrip(' ')) for l in lines if l.strip())
    return '\n'.join(l[ind:] for l in lines)


def sync(src):
    out, pos, count = [], 0, 0
    while True:
        m = START.search(src, pos)
        if not m:
            break
        depth, i = 1, m.end()
        while depth:
            t = DIV.search(src, i)
            if not t:
                raise SystemExit(f'Thiếu </div> cho k-stage ở ký tự {m.start()}')
            depth += -1 if t.group(1) else 1
            i = t.end()
        code = dedent(src[m.end():t.start()]).replace(' id="k-cq-box"', '')
        out.append(src[pos:i])
        out.append('\n<pre data-from-stage><code class="language-markup">' + html.escape(code, quote=False) + '</code></pre>')
        old = OLD_PRE.match(src, i)
        pos = old.end() if old else i
        count += 1
    out.append(src[pos:])
    return ''.join(out), count


if __name__ == '__main__':
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'tailwind' / 'index.html'
    text, n = sync(path.read_text(encoding='utf8'))
    path.write_text(text, encoding='utf8')
    print(f'{path.name}: đồng bộ {n} khối code')
