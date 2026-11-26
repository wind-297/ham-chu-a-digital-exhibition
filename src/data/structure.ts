import { ShelterComponent } from '../types/exhibition';

export const shelterComponents: ShelterComponent[] = [
  {
    id: 'frame-truss',
    name: 'Khung chịu lực dạng chữ A',
    vietnameseRole: 'Bộ khung sườn định hình không gian và chịu tải trọng',
    identificationSignificance: 'Mặt cắt ngang hình tam giác chữ A đặc trưng tạo nên tên gọi lịch sử của công trình.',
    description: 'Hệ thống giàn khung kèo gồm hai thanh nghiêng tựa vào nhau ở đỉnh, tạo thành tiết diện tam giác cân. Thiết kế dạng giàn kèo chữ A giúp phân tán áp lực nén từ phía trên xuống hai bên sườn đất một cách tự nhiên, giảm nguy cơ sập gãy cục bộ so với các mái bằng.',
    materialsRecorded: ['Tre già (tre đực ngâm)', 'Thân cây gỗ tốt bản địa', 'Khung sắt (trong một số cơ quan/căn cứ)', 'Cấu kiện bê tông đúc sẵn'],
    historicalFunction: 'Nâng đỡ lớp phên chắn và tầng đất phủ dày bên trên, giữ cho khoang hầm không bị ép sụp.',
    educationalCaveat: 'Minh họa khái niệm nhận diện hình thái; không chứa thông số đo đạc kỹ thuật hay bản vẽ thi công.',
    hotspot: { x: 50, y: 34 }
  },
  {
    id: 'sloping-roof',
    name: 'Hai mái nghiêng che chắn',
    vietnameseRole: 'Hình thành phần bao che phía trên',
    identificationSignificance: 'Độ dốc của hai mái giúp làm chệch hướng mảnh văng và đất đá rơi từ trên cao.',
    description: 'Hai mái dốc nghiêng từ nóc kèo xuống mép đất. Trên mặt khung thường được đan phên nứa, rơm rạ hoặc ván gỗ để ngăn đất lọt xuống khoang trú ẩn, trước khi đắp đất dày bên ngoài.',
    materialsRecorded: ['Phên nứa đan dày', 'Ván gỗ xẻ', 'Thân luồng ghép sát', 'Tấm tôn hoặc bạt dã chiến'],
    historicalFunction: 'Che chắn trực tiếp cho người bên trong, phân tán lực va đập từ mảnh bom đạn và đất đá văng.',
    educationalCaveat: 'Khả năng bảo vệ thực tế phụ thuộc chất lượng vật liệu và cự ly của vụ nổ; không có khả năng chống chịu tuyệt đối trước bom xuyên hay bom hạng nặng.',
    hotspot: { x: 32, y: 44 }
  },
  {
    id: 'sunken-chamber',
    name: 'Thân hầm & Khoang trú ẩn',
    vietnameseRole: 'Tạo không gian an toàn cho người sinh hoạt và tránh nạn',
    identificationSignificance: 'Thường được đào chìm hoặc bán âm dưới mặt đất để tận dụng độ kiên cố của nền đất tự nhiên.',
    description: 'Không gian bên dưới lòng đất nơi người dân, học sinh hoặc bộ đội trú ngụ khi có báo động phòng không. Quy mô không gian thay đổi tùy theo mục đích: từ hầm nhỏ cho 2–4 người trong hộ gia đình đến hầm lớn phục vụ cả tổ sản xuất hay lớp học.',
    materialsRecorded: ['Đất đào đầm chặt', 'Ván lót sàn chống ẩm', 'Chiếu cói hoặc rơm khô rải sàn'],
    historicalFunction: 'Nơi con người ẩn nấp, học tập, nghỉ ngơi hoặc băng bó thương binh trong những đợt oanh kích kéo dài.',
    educationalCaveat: 'Không gian chật hẹp, thiếu ánh sáng và thường xuyên ẩm thấp, đọng nước trong mùa mưa là những gian khổ chân thực được ghi nhận trong hồi ức lịch sử.',
    hotspot: { x: 50, y: 68 }
  },
  {
    id: 'protective-cover',
    name: 'Lớp đất che phủ bên ngoài',
    vietnameseRole: 'Tách biệt không gian bên trong với mảnh bom đạn bên ngoài',
    identificationSignificance: 'Ụ đất thoải nhô lên khỏi mặt đất, thường được ngụy trang bằng cây cỏ tự nhiên.',
    description: 'Phần đất đào từ lòng hầm được tận dụng để đắp phủ lên trên mái nghiêng thành hình mai rùa hoặc mái thoải. Lớp đất này tạo khối đệm hấp thụ sóng xung kích và ngăn chặn mảnh văng của bom bi, pháo kích.',
    materialsRecorded: ['Đất thịt đầm kỹ', 'Bao tải đất/cát', 'Đất trộn rơm bùn', 'Cỏ ngụy trang chống xói lở'],
    historicalFunction: 'Hấp thụ năng lượng mảnh nổ, giảm chấn động và hòa lẫn vào địa hình làng quê để tránh trinh sát trên không.',
    educationalCaveat: 'Độ dày lớp phủ thay đổi theo điều kiện từng địa phương; tư liệu không quy định một độ dày cố định mang tính chuẩn mực.',
    hotspot: { x: 68, y: 38 }
  },
  {
    id: 'entry-exit',
    name: 'Lối ra vào & Cửa thoát hiểm hai đầu',
    vietnameseRole: 'Đảm bảo khả năng tiếp cận nhanh và thoát hiểm an toàn',
    identificationSignificance: 'Thiết kế thông hai đầu tránh việc bị cô lập khi một cửa bị sập hoặc vùi lấp.',
    description: 'Hầm thường được bố trí cửa ở hai đầu hoặc kết nối trực tiếp với giao thông hào bên ngoài. Miệng hầm có gờ chắn đất và rãnh thoát nước mưa. Bố trí hai lối thông là một kinh nghiệm xương máu giúp người bên trong luôn có đường thoát ra ngoài.',
    materialsRecorded: ['Bậc tam cấp đất đầm', 'Cọc tre chống cửa', 'Cửa phên liếp tre'],
    historicalFunction: 'Cho phép người dân chui vào hầm trong vài giây sau tiếng còi báo động, và thoát hiểm nếu một đầu bị đất đá che chắn.',
    educationalCaveat: 'Miệng hầm cần được kiểm tra định kỳ sau các đợt mưa lớn để tránh ngập úng.',
    hotspot: { x: 18, y: 66 }
  },
  {
    id: 'indigenous-materials',
    name: 'Vật liệu kết cấu bản địa & Cải tiến',
    vietnameseRole: 'Thể hiện tính sáng tạo và nguồn lực tại chỗ của nhân dân',
    identificationSignificance: 'Phản ánh phương châm "tự lực cánh sinh", lấy vật liệu sẵn có trong tự nhiên làm vũ khí phòng tránh.',
    description: 'Hầm chữ A tại Việt Nam không có một quy chuẩn công nghiệp duy nhất. Tại làng quê Bắc Bộ và Bắc Trung Bộ, tre ngâm và gỗ vườn là vật liệu chủ lực. Tại các thành phố lớn hoặc căn cứ chỉ huy, một số hầm được gia cố bằng sắt chữ U, ray tàu hoặc các vòm bê tông đúc sẵn lưu động.',
    materialsRecorded: ['Tre gai, tre ngâm bùn', 'Gỗ lim, keo, phi lao', 'Cấu kiện vòm bê tông lắp ghép', 'Sắt thép dã chiến'],
    historicalFunction: 'Tối ưu hóa khả năng thi công nhanh tại chỗ mà không đòi hỏi nguồn vật tư kỹ thuật cao cấp.',
    educationalCaveat: 'Sự đa dạng vật liệu chứng minh tính thích ứng cao của công trình, không nên áp đặt một loại vật liệu duy nhất cho mọi hiện vật.',
    hotspot: { x: 82, y: 66 }
  }
];

export const structuralGuidelines = {
  pedagogicalDisclaimer: 'LƯU Ý AN TOÀN & ĐỘ CHÍNH XÁC LỊCH SỬ: Sơ đồ tương tác chỉ phục vụ nhận diện giáo dục di sản và lịch sử quốc phòng. Tuyệt đối không thể hiện kích thước chi tiết, bản vẽ kết cấu chịu lực, hướng dẫn thi công hoặc thông số kỹ thuật quân sự.',
  threeCorePrinciples: [
    {
      title: 'Không phải một mẫu duy nhất',
      detail: 'Hình thức, vật liệu và quy mô thay đổi theo từng địa phương, từ hầm tre nứa nông thôn đến hầm vòm bê tông đô thị.'
    },
    {
      title: 'Phân biệt rạch ròi với địa đạo',
      detail: 'Hầm chữ A là dạng công trình trú ẩn điểm/cụm ngắn hạn; địa đạo là hệ thống đường ngầm liên hoàn sinh hoạt trường kỳ.'
    },
    {
      title: 'Khả năng bảo vệ mang tính tương đối',
      detail: 'Chủ yếu chống mảnh bom bi, mảnh vỡ và đất đá văng; không thể xem là công trình kiên cố tuyệt đối trước mọi loại bom nổ trực diện.'
    }
  ]
};
