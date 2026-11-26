import { QuizQuestion } from '../types/exhibition';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Tên gọi "hầm chữ A" bắt nguồn từ đặc điểm nhận diện nào của công trình?',
    options: [
      'Từ quy ước mật mã của Bộ Tổng Tham mưu Quân đội Nhân dân Việt Nam',
      'Từ hình dáng mặt cắt ngang của khung kèo phía trên tạo thành hình tam giác chữ A',
      'Từ việc công trình được xếp loại A trong thang phân loại công sự chiến đấu',
      'Từ tên gọi của người kỹ sư đầu tiên phát minh ra mẫu hầm tại miền Bắc'
    ],
    correctIndex: 1,
    explanation: 'Theo Bách khoa Toàn thư Việt Nam, tên gọi hầm chữ A xuất phát trực tiếp từ hình dạng mặt cắt ngang của công trình, với phần khung giàn phía trên tạo thành hai mái dốc nghiêng gặp nhau ở đỉnh, tạo thành hình tam giác tương tự chữ A.',
    sourceReference: 'Bách khoa Toàn thư Việt Nam – Mục từ "Hầm chữ A"'
  },
  {
    id: 2,
    question: 'Tại Việt Nam, những căn hầm trú ẩn chữ A đầu tiên được ghi nhận xây dựng tại địa bàn nào và vào thời điểm nào?',
    options: [
      'Tại Thủ đô Hà Nội vào cuối năm 1972 trong chiến dịch 12 ngày đêm',
      'Tại Khu IV vào đầu năm 1965 khi Mỹ mở rộng chiến tranh phá hoại miền Bắc',
      'Tại Căn cứ Địa đạo Củ Chi vào năm 1960 trong phong trào Đồng khởi',
      'Tại chiến trường Điện Biên Phủ vào năm 1954'
    ],
    correctIndex: 1,
    explanation: 'Tư liệu Bách khoa Toàn thư Việt Nam xác nhận: những căn hầm chữ A đầu tiên tại Việt Nam được quân và dân Khu IV khẩn trương xây dựng khi các hoạt động đánh phá bằng không quân và hải quân của Mỹ trở nên ác liệt vào đầu năm 1965.',
    sourceReference: 'Bách khoa Toàn thư Việt Nam & Lịch sử Quân khu IV'
  },
  {
    id: 3,
    question: 'Chỉ thị số 144-CT/TW ngày 10/03/1967 của Ban Bí thư Trung ương Đảng mang ý nghĩa gì đối với công tác phòng không nhân dân?',
    options: [
      'Quy định tiêu chuẩn kỹ thuật bắt buộc chỉ được dùng bê tông đúc sẵn để làm hầm',
      'Phát động đợt tổng động viên toàn bộ học sinh miền Bắc tham gia quân ngũ',
      'Chỉ thị mở đợt một tháng đẩy mạnh công tác phòng không nhân dân, toàn dân làm và tu sửa hầm hào',
      'Yêu cầu giải tán toàn bộ các lớp học ở nông thôn để tập trung chống hạn'
    ],
    correctIndex: 2,
    explanation: 'Chỉ thị số 144-CT/TW ban hành ngày 10/03/1967 chỉ đạo mở đợt một tháng đẩy mạnh công tác phòng không nhân dân, yêu cầu toàn xã hội tăng cường làm và tu sửa hầm, hào tại từng gia đình, đường phố, xí nghiệp, trường học, bệnh viện nhằm bảo vệ tính mạng con người và duy trì sản xuất.',
    sourceReference: 'Văn kiện Đảng Toàn tập, Tập 28 (1967)'
  },
  {
    id: 4,
    question: 'Số liệu nào sau đây phản ánh quy mô sơ tán và mạng lưới phòng tránh tại Thủ đô Hà Nội tính đến giữa năm 1972?',
    options: [
      'Sơ tán khoảng 500.000 người ra ngoại thành; nội thành có hơn 630.000 hố cá nhân và hầm tập thể, bảo vệ khoảng 900.000 người',
      'Toàn thành phố xây dựng đúng 10.000 căn hầm chữ A đúc bằng thép nguyên khối',
      'Tất cả 100% người dân nội thành đều rút hết về nông thôn, không còn ai bám trụ sản xuất',
      'Thành phố chỉ đào hào giao thông nối liền 4 quận nội thành mà không làm hầm'
    ],
    correctIndex: 0,
    explanation: 'Theo số liệu công bố tại Tọa đàm "Lớp học thời chiến" (Bảo tàng Hà Nội, 2026), tính đến giữa năm 1972, Hà Nội đã sơ tán khoảng 500.000 người cùng 1.200 cơ quan, trường học; nội thành có hơn 630.000 hố cá nhân và hầm tập thể kết hợp hàng vạn km hào, che chở cho khoảng 900.000 người.',
    sourceReference: 'Bộ VHTTDL & Bảo tàng Hà Nội (Tọa đàm ngày 08/10/2026)'
  },
  {
    id: 5,
    question: 'Điểm khác biệt căn bản giữa Hầm trú ẩn chữ A và Hệ thống Địa đạo (như Vịnh Mốc, Củ Chi) là gì?',
    options: [
      'Hầm chữ A chỉ dùng cho quân đội, còn địa đạo chỉ dùng cho trẻ em và người già',
      'Hầm chữ A được làm bằng kim loại hiện đại, còn địa đạo làm bằng bê tông',
      'Hầm chữ A là công trình trú ẩn cấp điểm có mái dốc; địa đạo là mạng lưới đường hầm ngầm liên hoàn đa chức năng phục vụ sinh sống trường kỳ',
      'Hai loại hình công trình này thực chất là một, không có điểm gì khác biệt'
    ],
    correctIndex: 2,
    explanation: 'Bảo tàng Lịch sử Quốc gia lưu ý: Cần phân biệt rõ hầm chữ A (dạng công trình trú ẩn đặc thù với khung kèo mái nghiêng che chắn tức thời) với địa đạo (hệ thống đường ngầm nhiều tầng liên hoàn có quy mô xã hội rộng lớn phục vụ sinh hoạt, học tập, cứu thương trường kỳ).',
    sourceReference: 'Bảo tàng Lịch sử Quốc gia (Bài nghiên cứu 08/08/2014)'
  }
];
