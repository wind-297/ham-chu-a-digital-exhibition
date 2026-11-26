import React from 'react';

export const ValueSection: React.FC = () => {
  return (
    <section id="gia-tri" className="py-16 sm:py-24 border-b border-archive-border bg-archive-parchment scroll-mt-16 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG VII • GIÁ TRỊ LỊCH SỬ
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Giá trị Lịch sử và Ý nghĩa Quốc phòng
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Bài học về sức mạnh thế trận lòng dân, tinh thần chủ động phòng tránh và ý thức trân trọng hòa bình.
          </p>
        </div>

        {/* Big Editorial Feature Box */}
        <div className="bg-archive-paper p-8 sm:p-12 rounded-lg border-2 border-archive-border shadow-archive archival-border">
          <div className="max-w-3xl mx-auto space-y-6 text-archive-charcoal/90 editorial-justify">
            <h3 className="font-serif text-xl sm:text-3xl font-extrabold text-archive-olive text-center mb-6 leading-tight">
              Sức Mạnh Quốc Phòng Không Chỉ Tạo Nên Từ Vũ Khí Hiện Đại
            </h3>

            <p className="drop-cap text-xs sm:text-sm leading-relaxed">
              Hầm trú ẩn chữ A là một loại hình công trình gắn liền với ký ức về cuộc kháng chiến chống Mỹ, cứu nước. 
              Từ những căn hầm nhỏ trong khu dân cư, trường học và cơ sở sản xuất đến những công trình trong các căn cứ quân sự, 
              loại hình này phản ánh một giai đoạn mà nhiệm vụ bảo vệ con người trước bom đạn trở thành yêu cầu thường trực của toàn xã hội.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              Giá trị lịch sử của hầm chữ A không chỉ nằm ở hình dáng hay vật liệu cấu tạo. Đó còn là dấu tích của quá trình tổ chức 
              phòng không nhân dân, trong đó quân đội, chính quyền và nhân dân cùng tham gia xây dựng hệ thống phòng tránh, duy trì sản xuất 
              và bảo vệ đời sống. Những công trình tưởng chừng nhỏ bé ấy đã góp phần tạo nên một mạng lưới phòng tránh rộng khắp, 
              gắn với nhiều hoạt động thiết yếu trong hoàn cảnh chiến tranh.
            </p>

            {/* Editorial Blockquote */}
            <div className="my-8 p-6 bg-archive-parchment rounded border-l-4 border-l-archive-terracotta border border-archive-border/80">
              <p className="font-serif italic text-sm sm:text-base text-archive-charcoal leading-relaxed text-center">
                "Thông qua việc tìm hiểu hầm chữ A, người học có thể nhận thức rõ hơn rằng lịch sử quốc phòng không chỉ được hình thành 
                từ những trận đánh hay những loại vũ khí, trang bị quân sự hiện đại. Lịch sử ấy còn được tạo nên bởi những hoạt động 
                bảo vệ đời sống thường ngày, những nỗ lực tổ chức cộng đồng và sự hy sinh thầm lặng của những con người đã sống, học tập 
                và lao động trong hoàn cảnh vô cùng khó khăn."
              </p>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              Đối với thế hệ trẻ hôm nay, hầm chữ A là một hiện vật có giá trị giáo dục đặc biệt. Nó giúp kết nối kiến thức lịch sử 
              với những trải nghiệm cụ thể về đời sống thời chiến, đồng thời nhắc nhở người xem về giá trị của hòa bình, sự an toàn 
              và điều kiện học tập, lao động mà các thế hệ hiện tại đang được thụ hưởng.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              Nhìn lại lịch sử của hầm chữ A cũng là nhìn lại tinh thần chủ động, đoàn kết và ý chí vượt qua khó khăn của quân và dân Việt Nam. 
              Những căn hầm từng nằm lặng lẽ bên đường làng, trong sân trường hay giữa các khu dân cư ngày nay đã trở thành dấu tích lịch sử, 
              lưu giữ câu chuyện về một thời chiến tranh và khát vọng bảo vệ cuộc sống của con người.
            </p>
          </div>

          {/* 3 Core Educational Takeaways */}
          <div className="mt-12 pt-8 border-t border-archive-border/70 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-archive-parchment rounded border border-archive-border/60">
              <span className="font-mono text-xs text-archive-terracotta font-bold block mb-1">BÀI HỌC 01</span>
              <h4 className="font-serif font-bold text-base text-archive-charcoal mb-1">Thế trận lòng dân</h4>
              <p className="text-xs text-archive-umber leading-relaxed editorial-justify">
                Đường lối chiến tranh nhân dân: lấy dân làm gốc, toàn dân tham gia đào hầm hào bảo vệ tính mạng con người và hậu phương.
              </p>
            </div>

            <div className="p-4 bg-archive-parchment rounded border border-archive-border/60">
              <span className="font-mono text-xs text-archive-olive font-bold block mb-1">BÀI HỌC 02</span>
              <h4 className="font-serif font-bold text-base text-archive-charcoal mb-1">Ý chí vượt khó & Thích ứng</h4>
              <p className="text-xs text-archive-umber leading-relaxed editorial-justify">
                Khả năng tiếp thu sáng tạo kinh nghiệm quốc tế, tận dụng tre ngâm, gỗ đồi tự nhiên để tạo nên công trình bảo vệ thiết thực.
              </p>
            </div>

            <div className="p-4 bg-archive-parchment rounded border border-archive-border/60">
              <span className="font-mono text-xs text-archive-charcoal font-bold block mb-1">BÀI HỌC 03</span>
              <h4 className="font-serif font-bold text-base text-archive-charcoal mb-1">Giá trị của Hòa bình</h4>
              <p className="text-xs text-archive-umber leading-relaxed editorial-justify">
                Nhắc nhở thế hệ hôm nay trân trọng môi trường hòa bình, ghi nhớ sự chở che thầm lặng và hy sinh của các thế hệ cha anh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
