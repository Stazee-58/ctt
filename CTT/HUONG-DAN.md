# 📖 HƯỚNG DẪN QUẢN LÝ & CHỈNH SỬA DỰ ÁN "CÂY KỶ NIỆM 11A2"

Chào bạn! Dự án website tri ân thầy chủ nhiệm đã được xây dựng theo tiêu chuẩn thiết kế cao cấp (Editorial Scrapbook & Botanical Memorial Tree), phân tách thành các thư mục và file nhỏ gọn, khoa học để dễ dàng quản lý và chỉnh sửa nội dung.

---

## 📁 1. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
CTT/
├── index.html          # Khung trang web chính (Bố cục sổ lưu bút, bài thơ tri ân & cây kỷ niệm)
├── HUONG-DAN.md        # File hướng dẫn này
│
├── css/
│   └── style.css       # Toàn bộ giao diện, màu sắc, typography và animation
│
└── js/
    ├── config.js       # ⭐ NƠI CHỈNH SỬA NỘI DUNG CHÍNH (Tên trường, lớp, thầy & 12 lời chúc)
    ├── audio.js        # Hệ thống âm thanh chuông gió Web Audio & trình phát nhạc
    ├── petals.js       # Hiệu ứng cánh hoa rơi Canvas & pháo hoa khi bấm vào hoa
    └── main.js         # Logic mở sách 3D, thiệp thư chúc, lightbox ảnh, chế độ đêm
```

---

## ✍️ 2. NƠI CHỈNH SỬA CÁC NỘI DUNG (DỄ DÀNG NHẤT)

### A. Thay đổi lời chúc của các bạn trong lớp:
👉 **Mở file: `js/config.js`**
Tìm đến mảng `wishes: [ ... ]`, bạn chỉ cần sửa tên và câu chúc của từng bạn:

```javascript
wishes: [
  {
    name: "Tên bạn trong lớp",
    text: "Lời chúc gửi đến thầy Long... ❤️"
  },
  // Có sẵn 12 bông hoa tương ứng với 12 lời chúc (tên sẽ tự động hiện trên thẻ đính kèm ở cây)
]
```

### B. Thay đổi thông tin trường, lớp, tên thầy, niên khóa:
👉 **Mở file: `js/config.js`**, chỉnh sửa ngay các dòng đầu tiên:

```javascript
schoolName:      "Trường THPT Khương Đình",   // Tên trường của bạn
teacherName:     "Thầy Long",                 // Tên thầy chủ nhiệm
className:       "11A2",                      // Tên lớp
schoolYear:      "2026-2027",                 // Niên khóa
```

### C. Thêm ảnh và video thật của lớp:
Chỉ cần copy các file media vào thư mục dự án `CTT/` với tên tương ứng:
- `thptkd.png` hoặc `logo.png`: Logo trường
- `class.jpg`: Bức ảnh tập thể lớp 11A2 (hiện trên thẻ ảnh Polaroid dán băng keo washi)
- `teacher.jpg`: Bức ảnh riêng của thầy (hiện trên khung ảnh chân dung)
- `video.mp4`: Video kỷ niệm của lớp (phát khi nhấn vào Thước phim kỷ niệm)
- `music.mp3`: Bài hát nền tri ân (tùy chọn)

*(Nếu bạn lưu ở thư mục khác hoặc đổi tên file, chỉ cần sửa lại đường dẫn trong `js/config.js`)*.

### D. Thay đổi bài thơ / lời đề tặng trên trang sách trái:
👉 **Mở file: `index.html`**
Tìm đoạn thẻ `<article class="letter-body">`:
- Bạn có thể viết lại bài thơ, lời tri ân mở đầu tùy ý theo cảm xúc của lớp.

---

## 🎨 3. TÙY CHỈNH MÀU SẮC & GIAO DIỆN

👉 **Mở file: `css/style.css`**
Ngay đầu file là phần `:root` chứa các biến màu:
- `--desk-base`: Màu gỗ của mặt bàn làm việc
- `--paper-cream`: Màu nền giấy kem vintage
- `--gold-primary`: Màu vàng kim óng ánh
- `--foliage-deep`: Màu xanh tán cây

---

## 🚀 4. CÁCH ĐƯA WEB LÊN MẠNG ĐỂ GỬI LINK CHO THẦY (MIỄN PHÍ)

### Cách 1: Dùng Netlify Drop (Cực nhanh, chỉ mất 30 giây, không cần cài đặt)
1. Truy cập trang web: **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Kéo thả nguyên thư mục `CTT` vào khung tải lên của Netlify.
3. Trang web sẽ ngay lập tức được tạo thành 1 link trực tuyến (ví dụ: `https://tri-an-thay-long-11a2.netlify.app`).
4. Copy link và gửi tặng thầy qua Zalo/Facebook/Messenger!

### Cách 2: Dùng GitHub Pages
1. Tạo một Repository mới trên GitHub (ví dụ: `cay-ky-niem-11a2`).
2. Tải toàn bộ các file trong thư mục `CTT` lên.
3. Vào **Settings** → mục **Pages** → chọn Source là nhánh `main` / root → bấm **Save**.
4. Bạn sẽ có đường link dạng `https://ten-ban.github.io/cay-ky-niem-11a2/`.

---
*Chúc tập thể lớp có một món quà thật ý nghĩa và xúc động gửi tặng thầy chủ nhiệm! ❤️*
