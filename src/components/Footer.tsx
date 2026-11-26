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
                  CHUYÊN KHẢO LỊCH SỬ SỐ
                </span>
                <h3 className="font-serif text-lg font-bold text-archive-paper">
                  HẦM TRÚ ẨN CHỮ A
                </h3>
              </div>
            </div>

            <p className="text-xs text-archive-stone leading-relaxed max-w-md">
              Ấn phẩm nghiên cứu và lưu trữ số hóa về nguồn gốc, cấu tạo kỹ thuật, đời sống sinh hoạt và ý nghĩa lịch sử của công trình hầm trú ẩn chữ A trong hệ thống phòng không nhân dân Việt Nam (1964–1972).
            </p>

            <div className="pt-2 text-[11px] font-mono text-archive-stone/80">
              CHUYÊN ĐỀ TƯ LIỆU LỊCH SỬ QUÂN SỰ VÀ DÂN SỰ THỜI CHIẾN
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-archive-paper uppercase tracking-wider">
              Nội dung chuyên khảo
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#tong-quan" className="hover:text-archive-paper transition-colors">Nhận diện hiện vật</a></li>
              <li><a href="#lich-su" className="hover:text-archive-paper transition-colors">Lịch sử hình thành</a></li>
              <li><a href="#vai-tro" className="hover:text-archive-paper transition-colors">Vai trò phòng không</a></li>
              <li><a href="#cau-tao" className="hover:text-archive-paper transition-colors">Cấu tạo & Vật liệu</a></li>
              <li><a href="#doi-song" className="hover:text-archive-paper transition-colors">Đời sống dưới mái hầm</a></li>
              <li><a href="#dia-ban" className="hover:text-archive-paper transition-colors">Địa bàn trọng điểm</a></li>
              <li><a href="#gia-tri" className="hover:text-archive-paper transition-colors">Giá trị lịch sử</a></li>
              <li><a href="#tu-lieu" className="hover:text-archive-paper transition-colors">Tài liệu tham khảo</a></li>
              <li><a href="#kiem-tra-kien-thuc" className="hover:text-archive-paper transition-colors">Trắc nghiệm lịch sử</a></li>
            </ul>
          </div>

          {/* Archival Sources & Verification (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-archive-paper uppercase tracking-wider">
              Cơ sở tư liệu
            </h4>
            <p className="text-xs text-archive-stone leading-relaxed">
              Dữ liệu và nội dung công trình được khảo cứu từ Văn kiện Đảng Toàn tập (Chỉ thị 144-CT/TW), tài liệu Bách khoa Toàn thư Quân sự Việt Nam, di tích Căn cứ Tà Thiết, tài liệu Bảo tàng Lịch sử Quốc gia và hiện vật lịch sử kháng chiến.
            </p>

            <div className="p-3 bg-archive-charcoal/40 rounded border border-archive-charcoal text-[11px] font-mono leading-relaxed text-archive-stone">
              <strong className="text-archive-paper block mb-1">ĐỊNH HƯỚNG XUẤT BẢN:</strong>
              Công trình học thuật số phục vụ mục đích nghiên cứu, giáo dục lịch sử và lưu trữ di sản phòng không nhân dân Việt Nam.
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-archive-stone">
          <div>
            © 2026 Chuyên khảo Lịch sử Số — Hầm Trú Ẩn Chữ A trong Kháng Chiến Chống Mỹ.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-archive-paper hover:text-archive-terracotta transition-colors group cursor-pointer"
          >
            <span>Quay lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
