import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-archive-dark text-archive-stone border-t-2 border-archive-border py-14 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-archive-charcoal/80">
          {/* Identity & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-archive-olive text-archive-paper flex items-center justify-center font-serif text-xl font-bold border border-archive-border/40">
                A
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-archive-terracotta font-bold block">
                  TRIỂN LÃM SỐ TƯ LIỆU LỊCH SỬ
                </span>
                <h3 className="font-serif text-lg font-bold text-archive-paper">
                  HẦM TRÚ ẨN CHỮ A
                </h3>
              </div>
            </div>

            <p className="text-xs text-archive-stone leading-relaxed max-w-md">
              Dự án giáo dục truyền thống: <strong className="text-archive-paper">"Em là nhà sáng tạo – Bảo tàng Quốc phòng Việt Nam"</strong>. 
              Thực hiện Nhiệm vụ 2: Thuyết minh khoa học về hiện vật lịch sử Hầm trú ẩn chữ A trong công tác phòng không nhân dân.
            </p>

            <div className="pt-2 text-[11px] font-mono text-archive-stone/80">
              MÃ ĐỊNH DANH HỒ SƠ: BTQP-1965-HA • KHÁNG CHIẾN CHỐNG MỸ
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-archive-paper uppercase tracking-wider">
              Khám phá triển lãm
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#tong-quan" className="hover:text-archive-paper transition-colors">01. Nhận diện hiện vật</a></li>
              <li><a href="#lich-su" className="hover:text-archive-paper transition-colors">02. Hành trình lịch sử (Timeline)</a></li>
              <li><a href="#vai-tro" className="hover:text-archive-paper transition-colors">03. Công dụng và vai trò</a></li>
              <li><a href="#cau-tao" className="hover:text-archive-paper transition-colors">04. Khám phá đặc điểm cấu tạo</a></li>
              <li><a href="#doi-song" className="hover:text-archive-paper transition-colors">05. Đời sống dưới mái hầm</a></li>
              <li><a href="#dia-ban" className="hover:text-archive-paper transition-colors">06. Những địa bàn lịch sử</a></li>
              <li><a href="#so-sanh" className="hover:text-archive-paper transition-colors">07. So sánh các loại công trình</a></li>
              <li><a href="#gia-tri" className="hover:text-archive-paper transition-colors">08. Giá trị lịch sử & Quốc phòng</a></li>
              <li><a href="#tu-lieu" className="hover:text-archive-paper transition-colors">09. Tư liệu tham khảo chính thức</a></li>
            </ul>
          </div>

          {/* Archival Sources & Verification (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-archive-paper uppercase tracking-wider">
              Cơ sở dữ liệu lưu trữ
            </h4>
            <p className="text-xs text-archive-stone leading-relaxed">
              Nội dung biên soạn dựa trên Văn kiện Đảng Toàn tập (Chỉ thị 144-CT/TW), Bách khoa Toàn thư Việt Nam, 
              nghiên cứu Căn cứ Tà Thiết, tài liệu Bảo tàng Lịch sử Quốc gia, Bảo tàng Hà Nội và Khu Di tích Nhà tù Hỏa Lò.
            </p>

            <div className="p-3 bg-archive-charcoal/40 rounded border border-archive-charcoal text-[11px] font-mono leading-relaxed text-archive-stone">
              <strong className="text-archive-paper block mb-1">GHI CHÚ BẢO TÀNG:</strong>
              Website triển lãm số độc lập phục vụ mục đích giáo dục truyền thống và nghiên cứu lịch sử; 
              không tự nhận là website chính thức của Bảo tàng.
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-archive-stone">
          <div>
            © 2026 Triển lãm số Hầm Trú Ẩn Chữ A. Dự án Em là nhà sáng tạo.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-archive-paper hover:text-archive-terracotta transition-colors group"
          >
            <span>Quay lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
