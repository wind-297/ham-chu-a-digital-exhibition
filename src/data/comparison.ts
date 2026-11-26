import { ShelterComparisonItem } from '../types/exhibition';

export const shelterComparisons: ShelterComparisonItem[] = [
  {
    id: 'ham-chu-a',
    name: 'Hầm trú ẩn chữ A (Hầm kèo / Triều Tiên)',
    category: 'Công trình trú ẩn có mái che dốc',
    capacity: 'Cá nhân, hộ gia đình (2–6 người) hoặc tổ sản xuất nhỏ',
    morphology: 'Khung kèo giàn hình tam giác chữ A, hai mái nghiêng đắp đất dày, chìm một phần hoặc toàn phần',
    connection: 'Bố trí độc lập cạnh nhà, trường học hoặc đấu nối với giao thông hào',
    duration: 'Trú ẩn trong các đợt còi báo động (từ 15 phút đến vài giờ)',
    primaryPurpose: 'Bảo vệ người dân, học sinh, bộ đội trước mảnh bom bi, mảnh pháo và vật liệu sập đổ',
    distinctionFromAFrame: 'HIỆN VẬT TRỌNG TÂM: Đặc trưng bởi mặt cắt chữ A và hai mái nghiêng; linh hoạt, dễ dựng từ tre gỗ bản địa.'
  },
  {
    id: 'ho-ca-nhan',
    name: 'Hố trú ẩn cá nhân (Hố tăng-xê)',
    category: 'Công trình trú ẩn tức thời cá nhân',
    capacity: '1 người (hố đơn) hoặc 2 người (hố đôi)',
    morphology: 'Hình trụ tròn đào sâu xuống đất hoặc ống cống bê tông đúc sẵn chôn dọc vỉa hè; có nắp đậy bằng rơm hoặc bê tông',
    connection: 'Rải rác cách nhau vài mét dọc theo lề đường phố, bờ ruộng, quanh nơi làm việc',
    duration: 'Rất ngắn, nhảy vào trú ẩn khẩn cấp khi máy bay ập đến bất ngờ',
    primaryPurpose: 'Tránh mảnh bom văng ngang tầm mặt đất cho người đi đường và công nhân ngoài trời',
    distinctionFromAFrame: 'Không có khung mái kèo; diện tích tối thiểu chỉ vừa vặn một người ngồi thụp xuống; không phục vụ sinh hoạt kéo dài.'
  },
  {
    id: 'ham-tap-the',
    name: 'Hầm trú ẩn tập thể',
    category: 'Công trình trú ẩn quy mô trung bình',
    capacity: '10 đến hàng chục người cùng lúc',
    morphology: 'Khoang hầm rộng hình hộp hoặc vòm bán nguyệt, thường xây bằng gạch, đá, vôi vữa hoặc tấm bê tông ghép',
    connection: 'Nằm trong khuôn viên các công sở, bệnh viện, nhà máy lớn hoặc khu tập thể đô thị',
    duration: 'Trú ẩn trung hạn trong suốt thời gian diễn ra đợt không kích lớn',
    primaryPurpose: 'Bảo vệ số lượng lớn cán bộ, công nhân đang trực tiếp ca sản xuất hoặc bệnh nhân',
    distinctionFromAFrame: 'Quy mô xây dựng lớn hơn, đòi hỏi vật tư công nghiệp (xi măng, sắt, gạch) và nhân lực thi công có tổ chức.'
  },
  {
    id: 'giao-thong-hao',
    name: 'Giao thông hào',
    category: 'Công trình kết nối và cơ động an toàn',
    capacity: 'Phục vụ lưu thông liên tục của nhiều người',
    morphology: 'Đường rãnh đào sâu xuống đất (thường sâu 1m – 1.4m), thành vách thoai thoải hoặc gia cố phên tre nứa',
    connection: 'Tuyến mạch kết nối giữa nhà ở với hầm chữ A, giữa các lớp học, hoặc liên kết toàn bộ làng xã',
    duration: 'Không gian vận động cơ động, không phải nơi dừng chân trú ẩn cố định',
    primaryPurpose: 'Bảo đảm an toàn cho người di chuyển, cứu thương, tiếp tế lương thực trong khi hỏa lực địch đang bắn phá',
    distinctionFromAFrame: 'Là hạ tầng giao thông kết nối dạng tuyến mở; không có mái che kín toàn bộ như hầm chữ A.'
  },
  {
    id: 'dia-dao',
    name: 'Hệ thống Địa đạo (Làng hầm ngầm)',
    category: 'Đại công trình phòng thủ & sinh tồn trường kỳ',
    capacity: 'Hàng trăm đến hàng nghìn người cùng sinh sống',
    morphology: 'Mạng lưới đường hầm đa tầng phức tạp sâu từ 3m đến 25m dưới lòng đất, có hệ thống thông gió, giếng nước, kho gạo',
    connection: 'Liên hoàn xuyên qua các làng xóm, thông ra sông, ra biển và kết nối hệ thống chiến đấu phòng thủ',
    duration: 'Trường kỳ nhiều tháng, nhiều năm (sống, sinh hoạt, hội họp, cứu thương, sinh đẻ)',
    primaryPurpose: 'Bảo toàn lực lượng và duy trì sự sống kiên cường của cả một cộng đồng dưới mưa bom bão đạn',
    distinctionFromAFrame: 'Là không gian ngầm toàn diện với chức năng xã hội rộng lớn; tuyệt đối không thể xem một căn hầm chữ A đơn lẻ là địa đạo.'
  }
];
