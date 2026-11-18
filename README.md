# Web Cheatsheets

Năm cheatsheet web cho dev đã quen Flutter, Jetpack Compose, Dart và Kotlin:

| Trang | Nội dung |
|---|---|
| [`html/`](html/) | HTML: thẻ, thuộc tính, forms, dialog, accessibility, SEO, Web Components |
| [`css/`](css/) | CSS: box model, Flexbox, Grid, theming, responsive, animation, debug |
| [`js-ts/`](js-ts/) | JavaScript ES2023+ và TypeScript strict, có snippet chạy được trên trang |
| [`angular/`](angular/) | Angular v17+ → v22: signals, DI, RxJS, forms, routing, `@defer` |
| [`tailwind/`](tailwind/) | Tailwind CSS v4.3 trực quan: demo chạy thật, lab flex/grid, bảng màu, breakpoint, playground |

Trang chủ (`index.html`) có ô **tìm xuyên cả 5 cheatsheet**, tìm được cả tiêu đề lẫn nội dung/code (ví dụ `switchMap`, `inputmode`, `z-index`). Bấm vào kết quả sẽ mở đúng trang và tự lọc theo từ khóa (`?q=`).

Site tĩnh thuần HTML/CSS/JS, **không cần build**, không phụ thuộc CDN cho phần code (Prism đã nằm trong `assets/vendor/`). Chỉ font lấy từ Google Fonts.

## Deploy lên GitHub Pages

```bash
cd cheatsheets
git init
git add .
git commit -m "Web cheatsheets"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Sau đó trên GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Workflow `.github/workflows/deploy.yml` sẽ tự chạy mỗi lần push lên `main`. Site nằm ở `https://<username>.github.io/<repo>/`.

> Không muốn dùng Actions? Chọn **Source: Deploy from a branch → `main` / `(root)`** rồi xoá thư mục `.github/` cũng được.

Mọi đường dẫn đều là đường dẫn tương đối, nên chạy được ở cả `username.github.io/<repo>/` lẫn domain riêng.

## Chạy thử ở máy

```bash
python -m http.server 8000
# mở http://localhost:8000
```

Mở trực tiếp file `index.html` bằng trình duyệt cũng xem được, nhưng nên chạy qua server để giống môi trường thật.

## Cấu trúc

```
├── index.html              # trang chủ: 5 card + tìm xuyên trang
├── html/ css/ js-ts/ angular/ tailwind/
│   └── index.html          # từng cheatsheet, tự chứa CSS/JS riêng
├── tailwind/tw-compiler.js # Tailwind 4.3.5 biên dịch trong trình duyệt (sinh bởi tools/tailwind)
├── assets/
│   ├── site.js             # theme dùng chung + nút "Cheatsheets" chuyển trang + hỗ trợ ?q=
│   ├── index-data.js       # dữ liệu tìm kiếm (sinh bởi tools/build_index.py)
│   └── vendor/prism/       # Prism 1.29.0 (MIT) để tô màu code
├── tools/build_index.py    # sinh lại index-data.js
├── tools/tailwind/         # đóng gói lại tw-compiler.js + sync_code.py
├── 404.html
├── favicon.svg
└── .nojekyll
```

## Sửa nội dung hoặc thêm cheatsheet

1. Sửa trực tiếp `<thư-mục>/index.html`. Mỗi phần là `<section id="...">` có `<h2>`, mỗi mục con là `<h3>`.
2. Sinh lại dữ liệu tìm kiếm cho trang chủ:
   ```bash
   pip install beautifulsoup4
   python tools/build_index.py
   ```
3. Thêm cheatsheet mới: tạo thư mục `<slug>/index.html`, trong `<head>` thêm
   `<script src="../assets/site.js" data-page="<slug>"></script>`, rồi khai báo slug ở 3 chỗ:
   `SLUGS` trong `tools/build_index.py`, `PAGES` trong `assets/site.js`, `SHEETS` trong `index.html`.

Theme (Hệ thống / Sáng / Tối) lưu chung một khoá `cheatsheet-theme`, chọn ở trang nào cũng áp dụng cho cả site.

## Trang Tailwind

Demo trong `tailwind/index.html` được biên dịch **lúc mở trang** bằng `tailwind/tw-compiler.js`, là hàm `compile()` của Tailwind 4.3.5 đóng gói chạy trong trình duyệt (khoảng 50ms cho gần 600 class). Vì vậy:

- Thêm hoặc sửa demo: viết HTML có class Tailwind vào bên trong `<div class="k-stage" data-code>`, rồi tải lại trang. Không cần build.
- Đồng bộ khối code hiển thị dưới demo: `python tools/tailwind/sync_code.py`, sau đó `python tools/build_index.py`. Quên chạy cũng không sao, trang tự sinh code lúc mở; chỉ là ô tìm xuyên trang ở trang chủ sẽ chưa thấy class mới.
- Class của trang tự đặt đều có tiền tố `k-`, và CSS của trang nằm ở cascade layer `page`, thấp hơn utility. Nhờ đó Tailwind luôn thắng bên trong demo.
- Nâng cấp Tailwind: sửa phiên bản trong `tools/tailwind/package.json`, sau đó chạy:
  ```bash
  cd tools/tailwind && npm i && npm run build   # ghi đè tailwind/tw-compiler.js
  ```
