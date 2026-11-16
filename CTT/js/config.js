/**
 * ============================================================
 * CONFIG.JS - TÙY CHỈNH NỘI DUNG WEBSITE TRI ÂN THẦY LONG
 * ============================================================
 * Dễ dàng thay đổi: Tên trường, Tên thầy, Lớp, Năm học,
 * đường dẫn ảnh/video/nhạc và 12 LỜI CHÚC của các bạn trong lớp.
 * 
 * Lưu ý:
 * - Để thay ảnh/video/nhạc: Hãy lưu file ảnh (.jpg, .png) hoặc video (.mp4)
 *   vào cùng thư mục với trang web và điền đúng tên file vào đây.
 * - Danh sách lời chúc: Mỗi bạn tương ứng với 1 bông hoa trên Cây Kỷ Niệm.
 */

//  1. CONFIG BLOCK – Toàn bộ cài đặt tập trung tại đây
// ============================================================
const CONFIG = {
  schoolName: "Trường THPT Khương Đình",   // Thay tên trường
  teacherName: "Thầy Long",                 // Tên giáo viên chủ nhiệm
  className: "11A2",                      // Tên lớp
  schoolYear: "2026-2027",                 // Năm học
  logoSrc: "thptkd.png",                  // Logo trường
  classPhotoSrc: "class.jpg",                 // Ảnh tập thể lớp
  teacherPhotoSrc: "teacher.jpg",               // Ảnh riêng của thầy
  videoSrc: "video.mp4",                 // Video kỷ niệm
  videoPoster: "poster.jpg",                // Ảnh bìa video
  musicSrc: "music.mp3",                 // Nhạc nền (tùy chọn)
  wishes: [
    {
      name: "Hiểu Minh",
      text: "Chúc thầy trăm năm hạnh phúc"
    },
    {
      name: "Trần Bảo Châu",
      text: "Thầy là người đầu tiên tin vào em khi chính em còn hoài nghi bản thân. Những lần thầy dừng lại hỏi 'Em ổn không?' – em sẽ không bao giờ quên. Cảm ơn thầy từ tận đáy lòng!"
    },
    {
      name: "Lê Hoàng Nam",
      text: "Thầy giải toán nhanh hơn máy tính, nhưng thầy dạy tụi em 'bài toán làm người' còn sâu sắc hơn ngàn lần. Tụi em học được rất nhiều điều quý giá từ thầy. Chúc thầy mãi giữ ngọn lửa nhiệt huyết!"
    },
    {
      name: "Phạm Thị Lan",
      text: "Có những buổi chiều tan trường muộn, thầy vẫn nán lại lắng nghe những băn khoăn tuổi học trò của tụi em. Cảm ơn thầy vì đã luôn kiên nhẫn và bao dung như một người cha thứ hai."
    },
    {
      name: "Vũ Đức Huy",
      text: "Em nhớ nhất nụ cười hiền của thầy mỗi khi lớp bày trò ngớ ngẩn. Thầy không la mắng mà chỉ nhẹ nhàng chỉ bảo. Cảm ơn thầy đã đồng hành cùng 'đội quân 11A2' siêu quậy này!"
    },
    {
      name: "Ngô Thị Hương",
      text: "Lời thầy dặn: 'Vấp ngã không phải là dấu chấm hết, mà là bước đệm để vươn cao hơn' sẽ là hành trang theo em suốt cuộc đời. Cảm ơn người thầy truyền cảm hứng tuyệt vời của chúng em!"
    },
    {
      name: "Đinh Quang Minh",
      text: "11A2 mà không có thầy thì chắc loạn lắm đó thầy ơi! Cảm ơn thầy đã dẫn dắt đàn vịt tụi em suốt năm học qua. Chúc thầy năm mới thật nhiều sức khỏe và bớt đau đầu vì tụi em nhé!"
    },
    {
      name: "Phan Ngọc Linh",
      text: "Mỗi sáng thứ Hai nhìn thấy nụ cười rạng rỡ của thầy ở cổng trường, tụi em như được tiếp thêm 100% năng lượng. Thầy chính là ánh nắng ấm áp nhất của tập thể 11A2!"
    },
    {
      name: "Hoàng Thị Mai",
      text: "Thầy không chỉ là giáo viên chủ nhiệm, mà còn là người thắp sáng ước mơ cho từng bạn trong lớp. Cảm ơn thầy từ 42 trái tim nhỏ bé nhưng đong đầy lòng biết ơn của 11A2!"
    },
    {
      name: "Lý Thanh Tùng",
      text: "Em hay gục ngủ trong giờ nhưng thầy không phạt mà chỉ nhẹ nhàng đặt tờ giấy tóm tắt bài lên bàn. Sự ân cần của thầy làm em cảm động vô cùng. Em hứa sẽ chăm chỉ hơn để không phụ lòng thầy!"
    },
    {
      name: "Đặng Thị Thu",
      text: "Giọng thầy trầm ấm như bản tình ca mùa thu, mỗi tiết sinh hoạt lớp đều ngập tràn tiếng cười và bài học sâu sắc. Kính chúc thầy và gia đình luôn an khang, hạnh phúc!"
    },
    {
      name: "Tập thể 11A2",
      text: "Thầy Long kính mến! Một năm qua thầy đã vun vén cho cây non 11A2 lớn lên từng ngày. Dẫu mai này mỗi đứa một phương trời, hình bóng người thầy tận tụy sẽ mãi in đậm trong ký ức thanh xuân đẹp nhất của chúng em. Yêu thầy rất nhiều! ❤️"
    }
  ]
};

// ============================================================
