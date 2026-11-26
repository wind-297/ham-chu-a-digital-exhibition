import React from 'react';
import { ArrowDown, BookOpen, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenReadingMode: () => void;
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReadingMode, onOpenSearch }) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-archive-border overflow-hidden paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Academic Publication Monograph Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-archive-stone">
          <span className="font-semibold text-archive-olive uppercase tracking-wider">
            CHUYÊN KHẢO LỊCH SỬ QUÂN SỰ
          </span>
          <span>•</span>
          <span className="text-archive-umber">PHÒNG KHÔNG NHÂN DÂN TRONG KHÁNG CHIẾN CHỐNG MỸ</span>
        </div>

        {/* Editorial Split Grid: Left Big Typography, Right Architectural Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Typography & Narrative Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-archive-charcoal leading-[1.12] tracking-tight">
                HẦM TRÚ ẨN <br className="hidden sm:block" />
                <span className="text-archive-olive">CHỮ A</span>
              </h1>
              <p className="font-serif italic text-base sm:text-xl text-archive-umber max-w-xl leading-relaxed">
                Dấu tích công trình phòng tránh bom đạn và đời sống của quân dân Việt Nam trong chiến tranh phá hoại.
              </p>
            </div>

            {/* Editorial Lead Paragraph */}
            <div className="p-4 sm:p-5 bg-archive-parchment rounded-lg border-l-4 border-archive-terracotta border border-archive-border/80 shadow-2xs">
              <p className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify">
                Hầm chữ A không phải một công trình có vẻ ngoài đồ sộ hay mang tính biểu tượng kỹ thuật phức tạp. 
                Giá trị lịch sử của hiện vật nằm ở tính phổ quát và sự hiện diện gắn liền với đời sống thường nhật: 
                những lớp học sơ tán, tiếng còi báo động, mũ rơm bện dày và nỗ lực bảo vệ tính mạng nhân dân 
                để duy trì sản xuất, học tập giữa hoàn cảnh chiến tranh ác liệt.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#tong-quan"
                className="flex items-center gap-2 px-5 py-3 rounded bg-archive-olive text-archive-paper hover:bg-archive-olive/90 transition-all font-medium text-xs sm:text-sm shadow-sm group"
              >
                <span>Bắt đầu đọc chuyên khảo</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenReadingMode}
                className="flex items-center gap-2 px-4 py-3 rounded border border-archive-border bg-archive-parchment hover:bg-archive-ivory text-archive-charcoal transition-colors font-medium text-xs sm:text-sm shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-archive-terracotta" />
                <span>Chế độ đọc tập trung</span>
              </button>

              <button
                onClick={onOpenSearch}
                className="hidden sm:flex items-center gap-2 px-3 py-3 rounded border border-archive-border bg-archive-paper hover:bg-archive-ivory text-archive-stone hover:text-archive-charcoal transition-colors text-xs font-mono"
              >
                <Compass className="w-4 h-4 text-archive-umber" />
                <span>Tra cứu từ khóa</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Form Illustration (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 bg-archive-parchment rounded-lg border border-archive-border shadow-archive archival-border">
              {/* Identification Header */}
              <div className="flex justify-between items-start pb-3 border-b border-archive-border/70 text-[11px] font-mono text-archive-stone">
                <span className="text-archive-olive font-bold">MÔ HÌNH NHẬN DIỆN HÌNH THÁI</span>
                <span className="text-archive-umber">GIAI ĐOẠN 1965 – 1975</span>
              </div>

              {/* Graphic Architectural A-Frame Representation */}
              <div className="my-5 py-5 px-4 bg-archive-ivory/60 rounded border border-archive-border/40 flex flex-col items-center justify-center">
                <svg viewBox="0 0 280 200" className="w-full max-w-[260px] h-auto drop-shadow-sm">
                  {/* Sky tone */}
                  <rect x="0" y="0" width="280" height="130" fill="#FAF7F2" opacity="0.6" rx="4" />
                  {/* Ground reference line */}
                  <line x1="10" y1="135" x2="270" y2="135" stroke="#665344" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="14" y="130" textAnchor="start" fontFamily="monospace" fontSize="6.5" fill="#665344" fontWeight="bold">MẶT ĐẤT</text>
                  
                  {/* Sunken subterranean pit */}
                  <path d="M 60,135 L 75,185 L 205,185 L 220,135 Z" fill="#EAE3D5" stroke="#665344" strokeWidth="1.5" />
                  <rect x="85" y="145" width="110" height="35" fill="#262723" opacity="0.85" rx="3" />
                  <text x="140" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#F5F0E6" fontWeight="bold">KHOANG TRÚ ẨN</text>

                  {/* Main A-Frame Timber/Bamboo Struts */}
                  <polygon points="140,25 45,135 62,135 140,48 218,135 235,135" fill="#A65F4B" stroke="#665344" strokeWidth="1" />
                  {/* Cross tie beam (Thanh ngang chữ A) */}
                  <rect x="85" y="88" width="110" height="9" fill="#665344" rx="2" />
                  
                  {/* Earth cover layer (Mái phủ đất) */}
                  <path d="M 140,16 Q 140,16 35,138 L 48,138 Q 140,30 232,138 L 245,138 Z" fill="#41483A" opacity="0.9" />
                  
                  {/* Label marker */}
                  <text x="140" y="12" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#41483A" fontWeight="bold">MÁI DỐC CHỮ A</text>
                </svg>

                <span className="text-[10px] font-mono text-archive-stone mt-2 text-center block">
                  Sơ đồ nguyên lý hình thái kết cấu hầm chữ A
                </span>
              </div>

              {/* Archival Spec Snapshot */}
              <div className="pt-3 border-t border-archive-border/60 space-y-1.5 text-xs">
                <div className="flex justify-between text-archive-charcoal font-sans">
                  <span className="text-archive-stone font-mono text-[11px]">Tên gọi khác:</span>
                  <span className="font-semibold text-archive-olive">Hầm kèo, hầm Triều Tiên</span>
                </div>
                <div className="flex justify-between text-archive-charcoal font-sans">
                  <span className="text-archive-stone font-mono text-[11px]">Nguồn gốc hình thái:</span>
                  <span className="font-semibold">Chiến tranh Triều Tiên (1950–1953)</span>
                </div>
                <div className="flex justify-between text-archive-charcoal font-sans">
                  <span className="text-archive-stone font-mono text-[11px]">Khởi phát tại Việt Nam:</span>
                  <span className="font-semibold">Đầu năm 1965 tại Quân khu IV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Verified Statistics Cards */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-archive-border/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Ghi nhận tại Việt Nam
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-olive">
              Đầu 1965
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Quân và dân Khu IV xây dựng những căn hầm đầu tiên khi Mỹ mở rộng đánh phá miền Bắc.
            </p>
          </div>

          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Mạng lưới trú ẩn tại Hà Nội
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-terracotta">
              630.000+
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Hố cá nhân và hầm tập thể che chở cho 900.000 dân cư Thủ đô (tính đến giữa 1972).
            </p>
          </div>

          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Quy mô sơ tán dân cư
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-charcoal">
              500.000
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Người dân cùng 1.200 cơ quan, trường học sơ tán về các vùng nông thôn ngoại thành an toàn.
            </p>
          </div>

          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Chỉ thị của Đảng
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-olive">
              144-CT/TW
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Ban hành ngày 10/03/1967: toàn dân đẩy mạnh đào và tu sửa hầm hào phòng không.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
