"""Sinh lại assets/index-data.js (dữ liệu cho ô tìm xuyên trang ở trang chủ).

Chạy sau khi sửa nội dung một cheatsheet hoặc thêm cheatsheet mới:
    pip install beautifulsoup4
    python tools/build_index.py

Quy ước mỗi trang: <thư-mục>/index.html, mỗi phần là <section id="..."> có <h2>,
mục con là <h3>; mục lục nằm trong #toc hoặc #nav.
"""
import json
import re
import unicodedata
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
SLUGS = ["html", "css", "js-ts", "angular"]  # thêm thư mục mới vào đây


def fold(s):
    s = unicodedata.normalize("NFD", s.lower()).replace("đ", "d")
    return "".join(c for c in s if not unicodedata.combining(c))


def text(el):
    return re.sub(r"\s+", " ", el.get_text(" ", strip=True)).strip()


def index_page(slug):
    soup = BeautifulSoup((ROOT / slug / "index.html").read_text(encoding="utf8"), "html.parser")
    labels = {}
    nav = soup.select_one("#toc") or soup.select_one("#nav")
    if nav:
        for a in nav.select('a[href^="#"]'):
            parts = [s for s in a.stripped_strings]
            if parts and re.fullmatch(r"\d+", parts[0]):
                parts = parts[1:]
            labels[a["href"][1:]] = " ".join(parts)
    out = []
    for sec in soup.select("section[id]"):
        h2 = sec.find("h2")
        if not h2:
            continue
        full = re.sub(r"^\d+\s*", "", text(h2))
        entries, seen = [], set()
        for h3 in sec.find_all("h3"):
            t = re.sub(r"\s*(bổ sung|mới|new)$", "", text(h3), flags=re.I)
            if not t or t in seen:
                continue
            seen.add(t)
            box = h3.find_parent("article") or h3.find_parent(class_=re.compile(r"\b(card|entry)\b")) or h3.parent
            body = box.get_text(" ") + " " + " ".join(sc.string or "" for sc in box.find_all("script"))
            words = {w.rstrip(".:-") for w in re.findall(r"[@#$\w][\w\-.:$]{1,}", fold(body))}
            words -= set(fold(t).split()) | {""}
            entries.append([t, " ".join(sorted(words))])
        out.append({"id": sec["id"], "t": labels.get(sec["id"], full), "h": full, "e": entries})
    return out


data = {slug: index_page(slug) for slug in SLUGS}
(ROOT / "assets" / "index-data.js").write_text(
    "// Sinh tự động bởi tools/build_index.py — mục lục của từng cheatsheet cho ô tìm kiếm ở trang chủ\n"
    "window.CHEATSHEET_INDEX = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n",
    encoding="utf8",
)
for slug, secs in data.items():
    print(f"{slug:8} {len(secs)} mục, {sum(len(s['e']) for s in secs)} mục con")
