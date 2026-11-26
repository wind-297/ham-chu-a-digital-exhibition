import React from 'react';

export const OverviewSection: React.FC = () => {
  const quickSpecs = [
    { label: 'Tên gọi chính thức', value: 'Hầm trú ẩn chữ A' },
    { label: 'Tên gọi khác trong tư liệu', value: 'Hầm kèo, hầm Triều Tiên' },
    { label: 'Phân loại công trình', value: 'Công trình phòng tránh bom đạn cấp cơ sở' },
    { label: 'Bối cảnh lịch sử', value: 'Kháng chiến chống Mỹ, cứu nước (1965 – 1975)' },
    { label: 'Thời kỳ phổ biến', value: 'Từ giữa thập niên 1960' },
    { label: 'Hình thái đặc trưng', value: 'Mặt cắt ngang hình tam giác cân dạng chữ A' },
    { label: 'Vật liệu ghi nhận', value: 'Tre ngâm, gỗ đồi, sắt dã chiến, bê tông đúc sẵn' },
    { label: 'Đối tượng sử dụng', value: 'Dân cư, học sinh, cán bộ, lực lượng quân sự' },
    { label: 'Mục đích cốt lõi', value: 'Trú ẩn tức thời trước không kích và pháo kích' },
  ];

  return (
    <section id="tong-quan" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Tổng quan và Định danh Hiện vật
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Đặc trưng hình thái, xuất xứ tên gọi và vị trí của công trình trong mạng lưới phòng không nhân dân.
          </p>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Academic Presentation (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-archive-charcoal/90 editorial-justify">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-archive-olive pb-2 border-b border-archive-border/60">
              Bản chất và Xuất xứ Tên gọi
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

            {/* Archival Quotation */}
            <div className="p-4 bg-archive-parchment rounded border border-archive-border border-l-4 border-l-archive-olive text-xs text-archive-umber italic">
              <p className="font-serif">
                "Hình ảnh những căn hầm nhỏ bên đường làng, trong sân trường hay cạnh nơi làm việc đã trở thành một phần ký ức đặc trưng của xã hội Việt Nam trong thời chiến."
              </p>
              <div className="mt-2 text-[11px] font-mono font-normal not-italic text-archive-stone text-right">
                — Bách khoa Toàn thư Việt Nam
              </div>
            </div>
          </div>

          {/* Right Column: Identification Table & Structural Distinction (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Identification Specs Table */}
            <div className="bg-archive-parchment p-5 sm:p-6 rounded-lg border border-archive-border shadow-archive archival-border">
              <div className="pb-3 mb-4 border-b border-archive-border/80">
                <h3 className="font-serif font-bold text-base text-archive-charcoal">
                  Thông Tin Nhận Diện Hiện Vật
                </h3>
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

            {/* Distinction Paragraph (Integrated from former Section 8) */}
            <div className="p-5 bg-archive-ivory rounded-lg border border-archive-border">
              <h4 className="font-serif font-bold text-sm text-archive-olive mb-2">
                Phân biệt với các loại hình công trình phòng tránh khác
              </h4>
              <p className="text-xs text-archive-charcoal/90 leading-relaxed editorial-justify">
                Trong hệ thống công trình phòng không thời chiến, hầm chữ A có vị trí riêng biệt so với các loại hình khác:
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-archive-umber list-disc list-inside">
                <li>
                  <strong className="text-archive-charcoal">Hố cá nhân (tăng-xê):</strong> Chỉ phục vụ 1–2 người ẩn nấp tức thời trên đường đi, không có mái dốc.
                </li>
                <li>
                  <strong className="text-archive-charcoal">Hầm tập thể:</strong> Khoang chứa lớn bằng gạch đá hoặc bê tông tại nhà máy, bệnh viện, công sở.
                </li>
                <li>
                  <strong className="text-archive-charcoal">Giao thông hào:</strong> Hạ tầng rãnh sâu lộ thiên phục vụ cơ động, kết nối giữa các cụm hầm.
                </li>
                <li>
                  <strong className="text-archive-charcoal">Địa đạo (như Vịnh Mốc, Củ Chi):</strong> Đại công trình ngầm liên hoàn nhiều tầng phục vụ sinh sống trường kỳ, khác hoàn toàn về quy mô và chức năng so với một căn hầm chữ A đơn lẻ.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
