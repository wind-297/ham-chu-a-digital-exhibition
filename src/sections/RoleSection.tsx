import React from 'react';
import { Shield, Home, GraduationCap, Crosshair } from 'lucide-react';

export const RoleSection: React.FC = () => {
  const roles = [
    {
      id: 'role-protect',
      icon: <Shield className="w-6 h-6 text-archive-terracotta" />,
      number: '01',
      title: 'Bảo vệ sinh mạng trước mưa bom bão đạn',
      summary: 'Giảm thiểu tối đa mức độ phơi nhiễm trực tiếp trước bom bi, mảnh pháo và vật liệu sập đổ.',
      content: 'Đặc trưng của hầm chữ A là có phần khung che chắn vững chãi phía trên và khoang trú ẩn chìm dưới đất. Cấu trúc mái nghiêng giúp chệch hướng mảnh văng và hấp thụ sóng xung kích từ các vụ oanh tạc đường không. Tuy không thể xem là hầm chống bom hạt nhân hay bom xuyên hạng nặng, công trình đã bảo toàn tính mạng cho hàng triệu người dân thường.',
      archivalNote: 'Tài liệu ghi nhận: Sự hiện diện của hầm tại chỗ giúp giảm thiểu thương vong tới hơn 80% trong các đợt rải bom bi và pháo kích tầm xa.'
    },
    {
      id: 'role-daily-life',
      icon: <Home className="w-6 h-6 text-archive-olive" />,
      number: '02',
      title: 'Duy trì mạch sống, sinh hoạt & lao động',
      summary: 'Gắn liền trực tiếp với từng mái nhà, ngõ xóm, đồng ruộng và xưởng máy thời chiến.',
      content: 'Khác với những công trình trú ẩn tập trung ở xa, hầm chữ A hiện diện ngay sát nơi ở và nơi làm việc. Người dân có thể tiếp tục cày cấy, thợ máy tiếp tục tiện chi tiết súng đạn, bác sĩ tiếp tục mổ cấp cứu; khi còi báo động vang lên, chỉ mất vài giây để tiếp cận nơi trú ẩn an toàn, rồi lập tức quay lại sản xuất khi dứt tiếng còi.',
      archivalNote: 'Tinh thần thời chiến: "Vừa sản xuất, vừa chiến đấu" – hầm chữ A là bệ đỡ vững chắc cho hậu phương lớn miền Bắc.'
    },
    {
      id: 'role-education',
      icon: <GraduationCap className="w-6 h-6 text-archive-umber" />,
      number: '03',
      title: 'Bảo vệ giáo dục & Những lớp học thời chiến',
      summary: 'Che chở cho tuổi thơ mũ rơm và những bài học không bao giờ tắt dưới bóng tre làng.',
      content: 'Khi các trường học ở thành phố sơ tán về làng quê, hầm chữ A được đào ngay sát cạnh bục giảng. Thầy và trò đội mũ rơm bện dày, tay mang túi cứu thương. Những bài giảng lịch sử, toán học vẫn vang lên thì thầm trong lòng hầm đất ẩm, chứng minh ý chí quật cường của nền giáo dục cách mạng.',
      archivalNote: 'Trưng bày "Để bầu trời mãi xanh" (Hỏa Lò): Ký ức về những bài học gián đoạn bởi tiếng còi ủ rồi lại tiếp tục khi máy bay vừa bay qua.'
    },
    {
      id: 'role-military',
      icon: <Crosshair className="w-6 h-6 text-archive-olive" />,
      number: '04',
      title: 'Môi trường quân sự & Căn cứ chỉ huy',
      summary: 'Bảo vệ cơ quan đầu não kháng chiến và các đơn vị bộ đội trực chiến.',
      content: 'Không chỉ phục vụ dân sự, hầm chữ A còn được lực lượng công binh ứng dụng trong các căn cứ quân sự chiến lược. Tiêu biểu là tại Căn cứ Quân ủy, Bộ Tư lệnh Miền tại Tà Thiết (Bình Phước), các căn hầm chữ A bằng gỗ rừng nguyên khối kiên cố đã bảo vệ an toàn tuyệt đối cho các đồng chí lãnh đạo chỉ huy chiến dịch giải phóng.',
      archivalNote: 'Nghiên cứu của Vũ Đình Tâm (2015): Hệ thống kiến trúc quân sự thời chiến tại Tà Thiết bảo tồn nguyên vẹn các cụm hầm chữ A.'
    }
  ];

  return (
    <section id="vai-tro" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG 03 • PURPOSE & ROLE
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            CÔNG DỤNG VÀ VAI TRÒ
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Không chỉ là nơi ẩn nấp tạm thời, hầm chữ A là trụ cột bảo đảm thế trận lòng dân và duy trì toàn diện sức sống quốc gia trong hoàn cảnh chiến tranh.
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
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-archive-border/70">
                  <div className="p-2.5 rounded bg-archive-ivory border border-archive-border">
                    {r.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-archive-stone/60">
                    {r.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-archive-charcoal mb-2">
                  {r.title}
                </h3>

                <p className="font-serif italic text-xs sm:text-sm text-archive-terracotta font-medium mb-3">
                  {r.summary}
                </p>

                <p className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify">
                  {r.content}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-archive-border/60 text-[11px] font-mono text-archive-stone flex items-start gap-1.5">
                <span className="text-archive-olive font-bold shrink-0">Ghi nhận:</span>
                <span>{r.archivalNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Holistic People's Air Defense Summary Banner */}
        <div className="mt-10 p-6 bg-archive-ivory rounded-lg border border-archive-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-archive-terracotta font-bold">
              VĂN KIỆN LỊCH SỬ • CHỈ THỊ 144-CT/TW
            </span>
            <h4 className="font-serif text-lg font-bold text-archive-charcoal">
              Hệ thống phòng không nhân dân toàn diện: Kết hợp Hầm hào – Sơ tán – Trực chiến
            </h4>
            <p className="text-xs sm:text-sm text-archive-umber max-w-3xl leading-relaxed">
              Hiệu quả của công tác phòng không nhân dân không chỉ phụ thuộc vào số lượng hầm xây dựng, mà là sự gắn kết nhịp nhàng giữa mạng lưới hầm chữ A với các trạm quan sát, còi báo động, sơ tán có trật tự và ý chí tương thân tương ái của toàn thể cộng đồng.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="#tu-lieu" 
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-archive-olive text-archive-paper text-xs font-mono hover:bg-archive-olive/90 transition-colors shadow-2xs"
            >
              Xem văn kiện gốc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
