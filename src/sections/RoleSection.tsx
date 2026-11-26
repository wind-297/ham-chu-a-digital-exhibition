import React from 'react';
import { Shield, Home, GraduationCap, Crosshair } from 'lucide-react';

export const RoleSection: React.FC = () => {
  const roles = [
    {
      id: 'role-protect',
      icon: <Shield className="w-5 h-5 text-archive-terracotta" />,
      number: '01',
      title: 'Bảo vệ sinh mạng trước không kích và pháo kích',
      summary: 'Giảm thiểu mức độ phơi nhiễm trực tiếp trước bom bi, mảnh pháo và vật liệu sập đổ.',
      content: 'Đặc trưng của hầm chữ A là phần khung che chắn hình mái dốc phía trên kết hợp khoang trú ẩn chìm dưới đất. Cấu trúc mái nghiêng giúp làm chệch hướng mảnh văng và phân tán áp lực nén từ các vụ ném bom trên không. Tuy không thể xem là hầm chống được bom xuyên hạng nặng, công trình đã bảo vệ an toàn tính mạng cho đông đảo dân cư và lực lượng vũ trang.',
      archivalNote: 'Tư liệu lịch sử: Bố trí hầm tại chỗ giúp giảm thiểu thương vong đáng kể trước bom bi và mảnh pháo.'
    },
    {
      id: 'role-daily-life',
      icon: <Home className="w-5 h-5 text-archive-olive" />,
      number: '02',
      title: 'Duy trì đời sống sinh hoạt và sản xuất',
      summary: 'Gắn liền trực tiếp với từng nếp nhà, xưởng máy, trạm xá và đồng ruộng thời chiến.',
      content: 'Khác với những công trình ngầm quy mô lớn ở xa, hầm chữ A hiện diện ngay sát nơi ở và nơi làm việc. Người dân có thể tiếp tục canh tác, thợ máy tiếp tục sản xuất cơ khí, nhân viên y tế duy trì cứu thương; khi còi báo động vang lên, chỉ mất vài giây để vào hầm ẩn nấp, và nhanh chóng tiếp tục công việc khi báo yên.',
      archivalNote: 'Phương châm thời chiến: "Vừa sản xuất, vừa chiến đấu" – hầm chữ A tạo điểm tựa duy trì mạch sống hậu phương.'
    },
    {
      id: 'role-education',
      icon: <GraduationCap className="w-5 h-5 text-archive-umber" />,
      number: '03',
      title: 'Bảo vệ hoạt động giáo dục và các lớp học thời chiến',
      summary: 'Che chở cho học sinh và duy trì việc dạy học liên tục tại các vùng sơ tán.',
      content: 'Khi các trường học ở đô thị sơ tán về nông thôn, hầm chữ A được đào ngay sát vách lớp học. Học sinh đội mũ rơm bện dày, mang theo túi cứu thương cá nhân. Mỗi khi có báo động, thầy trò bình tĩnh chuyển xuống hầm tiếp tục trao đổi bài học, bảo đảm sự nghiệp trồng người không bị gián đoạn.',
      archivalNote: 'Ký ức vùng sơ tán: Những buổi học dưới mái hầm phản ánh ý chí kiên định duy trì giáo dục giữa khói lửa.'
    },
    {
      id: 'role-military',
      icon: <Crosshair className="w-5 h-5 text-archive-olive" />,
      number: '04',
      title: 'Ứng dụng trong môi trường quân sự và căn cứ kháng chiến',
      summary: 'Bảo vệ cán bộ, chiến sĩ và duy trì hoạt động của các cơ quan đầu não chỉ huy.',
      content: 'Bên cạnh mục đích dân sự, các dạng hầm chữ A bằng gỗ rừng hoặc sắt dã chiến được xây dựng trong các căn cứ kháng chiến. Tiêu biểu tại Căn cứ Quân ủy, Bộ Chỉ huy Miền tại Tà Thiết (Bình Phước), hệ thống hầm chữ A đã bảo đảm an toàn cho các cơ quan tham mưu, tác chiến trong suốt chiến dịch giải phóng.',
      archivalNote: 'Nghiên cứu của Vũ Đình Tâm (2015): Hệ thống kiến trúc quân sự thời chiến tại Tà Thiết ghi nhận sự hiện diện của hầm chữ A.'
    }
  ];

  return (
    <section id="vai-tro" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Vai trò trong Hệ thống Phòng không Nhân dân
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Không chỉ là nơi ẩn nấp tạm thời, hầm chữ A là thành tố bảo đảm duy trì sinh hoạt, học tập và sản xuất trong hoàn cảnh chiến tranh.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {roles.map((r) => (
            <div 
              key={r.id} 
              className="p-6 sm:p-7 bg-archive-parchment rounded-lg border border-archive-border hover:border-archive-olive transition-all shadow-sm flex flex-col justify-between archival-border"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-archive-border/70">
                  <div className="p-2 rounded bg-archive-ivory border border-archive-border">
                    {r.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-archive-stone/60">
                    {r.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-archive-charcoal mb-2">
                  {r.title}
                </h3>

                <p className="font-serif italic text-xs sm:text-sm text-archive-terracotta font-medium mb-3">
                  {r.summary}
                </p>

                <p className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify">
                  {r.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Policy Summary */}
        <div className="mt-10 p-6 bg-archive-ivory rounded-lg border border-archive-border">
          <h4 className="font-serif text-lg font-bold text-archive-charcoal mb-2">
            Hệ thống phòng không toàn diện: Kết hợp Hầm hào – Sơ tán – Trực chiến
          </h4>
          <p className="text-xs sm:text-sm text-archive-charcoal/90 max-w-4xl leading-relaxed">
            Công tác phòng không nhân dân kết hợp chặt chẽ việc tổ chức mạng lưới hầm, hào tại gia đình, đường phố, xí nghiệp, hợp tác xã, trường học và cơ quan; kết hợp với hệ thống quan sát, báo động kịp thời nhằm bảo vệ tối đa tính mạng nhân dân và tiềm lực kháng chiến.
          </p>
        </div>
      </div>
    </section>
  );
};
