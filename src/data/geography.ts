import { GeographicalRegion } from '../types/exhibition';

export const geographicalRegions: GeographicalRegion[] = [
  {
    id: 'khu-iv',
    name: 'Khu IV',
    vietnameseTitle: 'Quân khu IV — Nơi khởi nguồn những căn hầm chữ A đầu tiên',
    strategicRole: 'Tuyến đầu miền Bắc chi viện cho chiến trường miền Nam, túi bom gánh chịu đòn không kích tàn khốc.',
    historicalContext: 'Đầu năm 1965, khi Mỹ leo thang đánh phá ác liệt vào các tỉnh Bắc Trung Bộ, quân và dân Khu IV (Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình, Vĩnh Linh) đã sáng tạo dựng nên những căn hầm chữ A đầu tiên từ tre gỗ tại chỗ để vừa bám trụ sản xuất, vừa bảo vệ giao thông vận tải chi viện tiền tuyến.',
    recordedData: [
      { label: 'Thời điểm ghi nhận đầu tiên', value: 'Đầu năm 1965', note: 'Ghi nhận theo Bách khoa Toàn thư Việt Nam' },
      { label: 'Vật liệu chủ lực', value: 'Tre ngâm, gỗ đồi, đất đá đầm chặt' },
      { label: 'Đặc trưng môi trường', value: 'Địa bàn chiến sự ác liệt, đồi dốc và đồng bằng ven biển' }
    ],
    archivalNarrative: 'Khu IV là chiếc nôi thử nghiệm và hoàn thiện mô hình hầm chữ A trước khi được nhân rộng trên toàn miền Bắc. Kinh nghiệm khoét đất, đóng cọc kèo hình chữ A và đắp lũy đất dày chống mảnh bom bi bắt nguồn từ chính máu xương và trí tuệ của đồng bào Khu IV.',
    cautions: 'Lưu ý: Tư liệu ghi nhận thời điểm xuất hiện đầu năm 1965 mang tính giai đoạn lịch sử, không có ngày tháng duy nhất xác định sự ra đời của công trình.'
  },
  {
    id: 'hanoi',
    name: 'Hà Nội',
    vietnameseTitle: 'Thủ đô Hà Nội — Đỉnh cao công tác sơ tán và phòng tránh quy mô lớn',
    strategicRole: 'Trung tâm đầu não chính trị, kinh tế; mục tiêu hủy diệt của không quân chiến lược Mỹ năm 1972.',
    historicalContext: 'Từ năm 1965 đến đỉnh cao trận "Điện Biên Phủ trên không" tháng 12/1972, Hà Nội đã tổ chức một chiến dịch phòng không nhân dân kỳ vĩ: phân tán cơ quan, sơ tán triệt để người già và trẻ em, đồng thời biến lòng đất Thủ đô thành mạng lưới phòng thủ vững chắc.',
    recordedData: [
      { label: 'Dân cư sơ tán ngoại thành', value: 'Khoảng 500.000 người', note: 'Tính đến giữa năm 1972' },
      { label: 'Cơ quan, nhà máy sơ tán', value: '1.200 đơn vị', note: 'Chuyển về các vùng nông thôn ngoại thành' },
      { label: 'Hố cá nhân & hầm tập thể', value: 'Hơn 630.000 công trình', note: 'Phủ khắp các vỉa hè, công viên, nhà máy' },
      { label: 'Quy mô dân số được bảo vệ', value: 'Khoảng 900.000 người', note: 'Nơi trú ẩn tại chỗ ở nội thành' },
      { label: 'Giao thông hào kết nối', value: 'Hàng vạn kilômét', note: 'Liên kết các cụm trú ẩn' }
    ],
    archivalNarrative: 'Tại Hà Nội, hầm chữ A xuất hiện bên cạnh các hố cá nhân hình trụ tròn bằng bê tông đúc sẵn và các hầm tập thể kiên cố bằng gạch vôi. Cùng với việc sơ tán nửa triệu dân ra ngoại thành, mạng lưới hầm hào đã giảm thiểu tối đa thương vong trong 12 ngày đêm khói lửa B-52 rải thảm.',
    cautions: 'Lưu ý quan trọng: Các số liệu (630.000 hố/hầm, 900.000 người) là quy mô của toàn bộ hệ thống phòng tránh tại Hà Nội, không phải số lượng riêng của hầm chữ A.'
  },
  {
    id: 'nghe-an',
    name: 'Nghệ An',
    vietnameseTitle: 'Nghệ An — Ký ức về những căn hầm trong từng nếp nhà và làng quê',
    strategicRole: 'Tọa độ lửa trên tuyến đường Trường Sơn huyền thoại và huyết mạch giao thông huyết mạch.',
    historicalContext: 'Nghệ An chịu đựng hàng vạn trận oanh tạc nhắm vào phà Bến Thủy, Truông Bồn và các trục đường số 1, đường 15. Căn hầm chữ A trở thành vật bất ly thân của mọi nếp nhà nông thôn Nghệ An, vừa là nơi tránh bom, vừa là không gian học tập và sinh hoạt trong mưa lũ.',
    recordedData: [
      { label: 'Hình thức phổ biến', value: 'Hầm kèo tre vườn, gỗ keo, mái phủ đất thịt' },
      { label: 'Môi trường sinh hoạt', value: 'Ẩm thấp, thấm nước mùa mưa nhưng kiên cường bám trụ' },
      { label: 'Chức năng mở rộng', value: 'Nơi học bài, nghỉ ngơi của học sinh thời sơ tán' }
    ],
    archivalNarrative: 'Hồi ức của tác giả Nguyễn Duy Xuân ghi lại sinh động hình ảnh những căn hầm chữ A tại Nghệ An: tiếng bom rung đất, những bàn tay thoăn thoắt tát nước ngập trong hầm, và ánh đèn dầu vẫn rọi sáng trang vở của những đứa trẻ xứ Nghệ hiếu học.',
    cautions: 'Lưu ý: Hồi ức cá nhân cung cấp bức tranh chân thực về đời sống thực tế, không dùng để khái quát hóa thành tiêu chuẩn kỹ thuật chung.'
  },
  {
    id: 'vinh-linh',
    name: 'Vĩnh Linh',
    vietnameseTitle: 'Vĩnh Linh — Không gian đặc biệt của hệ thống Hầm, Hào và Địa đạo',
    strategicRole: 'Vĩ tuyến 17 bên bờ sông Bến Hải, tuyến lửa tiền đồn bảo vệ miền Bắc xã hội chủ nghĩa.',
    historicalContext: 'Là khu vực đối đầu trực tiếp bên giới tuyến quân sự tạm thời sau Hiệp định Genève 1954, Vĩnh Linh hứng chịu mật độ bom đạn khổng lồ. Để tồn tại và chiến đấu, quân và dân Vĩnh Linh đã kiến tạo một kỳ tích: đưa toàn bộ đời sống kinh tế - xã hội xuống lòng đất thông qua hệ thống làng hầm và địa đạo.',
    recordedData: [
      { label: 'Đặc điểm mạng lưới', value: 'Hệ thống hầm, hào và địa đạo liên hoàn đa tầng' },
      { label: 'Chức năng mở rộng', value: 'Không gian sống hoàn chỉnh: hội trường, trạm xá, nhà hộ sinh' },
      { label: 'Vị trí của hầm chữ A', value: 'Là một thành phần trú ẩn cấp cơ sở kết nối với hào' }
    ],
    archivalNarrative: 'Hệ thống tại Vĩnh Linh phát triển qua nhiều giai đoạn: từ hố cá nhân đến hầm chữ A, và đỉnh cao là các địa đạo như Vịnh Mốc. Hầm chữ A tại đây vừa đóng vai trò hầm tác chiến, vừa là chốt bảo vệ cửa hầm lớn trước các đợt pháo kích từ bờ nam sông Bến Hải.',
    cautions: 'Nguyên tắc bảo tàng: Tuyệt đối không đồng nhất hầm chữ A đơn lẻ với toàn bộ hệ thống địa đạo liên hoàn Vĩnh Linh. Địa đạo là công trình ngầm sinh hoạt quy mô lớn, hầm chữ A là dạng kết cấu trú ẩn đặc trưng.'
  }
];
