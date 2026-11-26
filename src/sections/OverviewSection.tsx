import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { verificationPrinciples } from '../data/references';

export const OverviewSection: React.FC = () => {
  const quickSpecs = [
    { label: 'Tên hiện vật', value: 'Hầm trú ẩn chữ A' },
    { label: 'Tên gọi khác', value: 'Hầm kèo, Hầm Triều Tiên' },
    { label: 'Phân loại công sự', value: 'Công trình phòng tránh bom đạn cấp cơ sở' },
    { label: 'Bối cảnh sử dụng', value: 'Kháng chiến chống Mỹ, cứu nước' },
    { label: 'Thời kỳ phổ biến', value: 'Từ giữa thập niên 1960' },
    { label: 'Hình dạng đặc trưng', value: 'Mặt cắt ngang hình tam giác, khung dạng chữ A' },
    { label: 'Vật liệu lịch sử', value: 'Tre ngâm, gỗ đồi, sắt dã chiến, bê tông đúc sẵn' },
    { label: 'Đối tượng bảo vệ', value: 'Nhân dân, học sinh, cán bộ, bộ đội trực chiến' },
    { label: 'Mục đích cốt lõi', value: 'Trú ẩn tức thời trong các đợt không kích và pháo kích' },
  ];

  return (
    <section id="tong-quan" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG 01 • OBJECT OVERVIEW
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            NHẬN DIỆN HIỆN VẬT
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Giải mã hình thái, nguồn gốc định danh và vị trí của công trình trong mạng lưới phòng không nhân dân.
          </p>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Presentation (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-archive-charcoal/90 editorial-justify">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-archive-olive pb-2 border-b border-archive-border/60">
              Bản chất và Ý nghĩa Định danh
            </h3>

            <p className="drop-cap text-xs sm:text-sm leading-relaxed">
              Hầm trú ẩn chữ A là một loại công trình phòng tránh bom đạn được sử dụng phổ biến trong cuộc kháng chiến chống Mỹ, cứu nước, 
              đặc biệt tại miền Bắc Việt Nam trong giai đoạn chiến tranh phá hoại bằng không quân và hải quân của Mỹ. 
              Với đặc trưng kết cấu có hình dáng tương tự chữ A, loại hầm này trở thành một bộ phận quen thuộc trong hệ thống 
              phòng không nhân dân, được bố trí tại khu dân cư, trường học, bệnh viện, cơ quan, nhà máy và nhiều địa điểm sinh hoạt, lao động khác.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              Tên gọi hầm chữ A xuất phát từ hình dạng mặt cắt ngang của công trình, với phần khung phía trên tạo thành hai mái nghiêng 
              gặp nhau ở đỉnh. Trong các tài liệu, loại hầm này còn được gọi là <strong className="text-archive-charcoal">hầm kèo</strong> hoặc <strong className="text-archive-charcoal">hầm Triều Tiên</strong>. 
              Hầm có thể được bố trí chìm một phần hoặc kết hợp với mặt đất, sử dụng những vật liệu sẵn có trong điều kiện chiến tranh 
              và được điều chỉnh linh hoạt theo hoàn cảnh từng địa phương.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              Khác với những công trình ngầm quy mô lớn hay hệ thống địa đạo, hầm chữ A chủ yếu phục vụ nhu cầu trú ẩn của người dân 
              và lực lượng quân sự trong những tình huống bị đánh phá. Giá trị của loại công trình này nằm ở khả năng tổ chức nơi trú ẩn 
              tại những địa điểm gắn trực tiếp với đời sống thường nhật, giúp con người có nơi tránh nguy hiểm mà không phải hoàn toàn ngừng 
              các hoạt động sinh hoạt, học tập và lao động.
            </p>

            {/* Archival Quotation Callout */}
            <div className="p-4 bg-archive-parchment rounded border border-archive-border border-l-4 border-l-archive-olive text-xs text-archive-umber italic">
              <p className="font-serif">
                "Hình ảnh những căn hầm nhỏ bên đường làng, trong sân trường hay cạnh nơi làm việc đã trở thành một phần ký ức đặc trưng của xã hội Việt Nam trong thời chiến."
              </p>
              <div className="mt-2 text-[11px] font-mono font-normal not-italic text-archive-stone text-right">
                — Trích dẫn: Bách khoa Toàn thư Việt Nam
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Metadata Table & 3 Verification Rules (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Identification Specs Table */}
            <div className="bg-archive-parchment p-5 sm:p-6 rounded-lg border border-archive-border shadow-archive archival-border">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-archive-border/80">
                <span className="font-mono text-xs uppercase tracking-wider text-archive-stone font-semibold">
                  HỒ SƠ GIÁM ĐỊNH HIỆN VẬT
                </span>
                <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-[11px] font-mono text-archive-olive font-bold">
                  BẢO TÀNG LƯU TRỮ
                </span>
              </div>

              <div className="divide-y divide-archive-border/50 text-xs">
                {quickSpecs.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-[11px] text-archive-stone sm:w-2/5 shrink-0">
                      {item.label}:
                    </span>
                    <span className="font-sans font-medium text-archive-charcoal sm:w-3/5 sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Strict Archival Museum Principles Callout */}
            <div className="p-5 bg-archive-ivory rounded-lg border border-archive-border">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-archive-olive font-bold">
                <ShieldCheck className="w-4 h-4 text-archive-terracotta" />
                <span>3 NGUYÊN TẮC BẢO TÀNG KHI TIẾP CẬN HIỆN VẬT</span>
              </div>

              <div className="space-y-3 text-xs text-archive-charcoal/90">
                {verificationPrinciples.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-archive-olive/15 text-archive-olive font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <strong className="text-archive-charcoal block mb-0.5">{rule.title}</strong>
                      <p className="text-archive-umber leading-relaxed text-[11.5px]">{rule.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
