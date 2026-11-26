import React from 'react';
import { ArrowDown, BookOpen, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenReadingMode: () => void;
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReadingMode, onOpenSearch }) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-archive-border overflow-hidden paper-grain">
      {/* Decorative Archival Corner Stamps */}
      <div className="absolute top-28 left-6 hidden xl:block text-archive-stone/50 font-mono text-[10px] tracking-widest uppercase rotate-90 origin-top-left pointer-events-none">
        VIETNAM DEFENSE MUSEUM ARCHIVE • CODE: BTQP-1965-HA
      </div>
      <div className="absolute top-28 right-6 hidden xl:block text-archive-stone/50 font-mono text-[10px] tracking-widest uppercase -rotate-90 origin-top-right pointer-events-none">
        PEOPLE'S AIR DEFENSE • WARTIME HISTORICAL HERITAGE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Archival Catalog Header Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-archive-olive text-archive-paper font-semibold tracking-wider uppercase">
            HỒ SƠ HIỆN VẬT SỐ 02
          </span>
          <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-umber">
            DỰ ÁN: EM LÀ NHÀ SÁNG TẠO
          </span>
          <span className="text-archive-stone hidden sm:inline">•</span>
          <span className="text-archive-umber hidden sm:inline">BẢO TÀNG QUỐC PHÒNG VIỆT NAM</span>
        </div>

        {/* Editorial Split Grid: Left Big Typography, Right Archival Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Typography & Narrative Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="block font-mono text-xs uppercase tracking-widest text-archive-terracotta font-bold">
                THE WAR-TIME ARCHIVE • DẤU TÍCH ĐỜI SỐNG THỜI CHIẾN
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-archive-charcoal leading-[1.12] tracking-tight">
                HẦM TRÚ ẨN <br className="hidden sm:block" />
                <span className="text-archive-olive">CHỮ A</span>
              </h1>
              <p className="font-serif italic text-base sm:text-xl text-archive-umber max-w-xl leading-relaxed pt-1">
                Dấu tích của công tác phòng không nhân dân trong kháng chiến chống Mỹ, cứu nước.
              </p>
            </div>

            {/* Editorial Lead Paragraph */}
            <div className="p-4 sm:p-5 bg-archive-parchment rounded-lg border-l-4 border-archive-terracotta border border-archive-border/80 shadow-2xs">
              <p className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify">
                Hầm chữ A không phải một hiện vật có vẻ ngoài đồ sộ hay mang tính biểu tượng công nghệ như một chiếc máy bay quân sự. 
                Giá trị của hiện vật nằm ở hình dáng giản dị, sự hiện diện thầm lặng trong đời sống thường ngày: những lớp học thời chiến, 
                tiếng còi báo động, mũ rơm bện dày và tinh thần kiên cường bảo vệ sinh mạng con người của quân và dân Việt Nam.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#tong-quan"
                className="flex items-center gap-2 px-5 py-3 rounded bg-archive-olive text-archive-paper hover:bg-archive-olive/90 transition-all font-medium text-xs sm:text-sm shadow-sm group"
              >
                <span>Khám phá hiện vật</span>
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
                <span>Tra cứu nhanh</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Identification Emblem & Archival Plate (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 bg-archive-parchment rounded-lg border-2 border-archive-border shadow-archive archival-border">
              {/* Corner Stamp */}
              <div className="flex justify-between items-start pb-4 border-b border-archive-border/70 text-[11px] font-mono text-archive-stone">
                <div>
                  <span className="text-archive-olive font-bold block">HIỆN VẬT LỊCH SỬ</span>
                  <span>PHÒNG KHÔNG NHÂN DÂN</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-terracotta font-bold">
                    1965 – 1975
                  </span>
                </div>
              </div>

              {/* Graphic Architectural A-Frame Representation */}
              <div className="my-6 py-6 px-4 bg-archive-ivory/60 rounded border border-archive-border/40 flex flex-col items-center justify-center">
                <svg viewBox="0 0 280 200" className="w-full max-w-[260px] h-auto drop-shadow-sm">
                  {/* Sky tone */}
                  <rect x="0" y="0" width="280" height="130" fill="#FAF7F2" opacity="0.6" rx="4" />
                  {/* Ground reference line */}
                  <line x1="10" y1="135" x2="270" y2="135" stroke="#665344" strokeWidth="2.5" strokeDasharray="4 2" />
                  <text x="265" y="130" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#A69E8F">MẶT ĐẤT TỰ NHIÊN</text>
                  
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
                  
                  {/* Dimension marker indicator */}
                  <path d="M 140,14 L 140,5" stroke="#A65F4B" strokeWidth="1" />
                  <text x="140" y="0" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#A65F4B" fontWeight="bold">ĐỈNH KÈO CHỮ A</text>

                  {/* Archival Circular Seal */}
                  <circle cx="230" cy="50" r="22" fill="none" stroke="#A65F4B" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="230" y="47" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#A65F4B" fontWeight="bold">BẢO TÀNG</text>
                  <text x="230" y="55" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#A65F4B">QUỐC PHÒNG</text>
                </svg>

                <span className="text-[10px] font-mono text-archive-stone mt-2 text-center block">
                  [Sơ đồ minh họa nhận diện hình thái kiến trúc hầm chữ A]
                </span>
              </div>

              {/* Archival Spec Snapshot */}
              <div className="pt-3 border-t border-archive-border/60 space-y-1.5 text-xs">
                <div className="flex justify-between text-archive-charcoal font-sans">
                  <span className="text-archive-stone font-mono text-[11px]">Tên gọi khác:</span>
                  <span className="font-semibold text-archive-olive">Hầm kèo, Hầm Triều Tiên</span>
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
              Khởi nguồn tại Việt Nam
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-olive">
              Đầu 1965
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Quân và dân Khu IV xây dựng những căn hầm đầu tiên khi Mỹ mở rộng đánh phá.
            </p>
          </div>

          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Quy mô hầm hố tại Hà Nội
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
              Sơ tán bảo vệ dân cư
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-charcoal">
              500.000
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Người dân cùng 1.200 cơ quan, trường học sơ tán về ngoại thành Hà Nội an toàn.
            </p>
          </div>

          <div className="p-4 bg-archive-parchment rounded border border-archive-border/70 hover:border-archive-olive transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-wider text-archive-stone block mb-1">
              Chỉ thị lịch sử của Đảng
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-archive-olive">
              144-CT/TW
            </div>
            <p className="text-xs text-archive-umber mt-1">
              Ban hành ngày 10/03/1967: toàn dân làm và tu sửa hầm hào, đẩy mạnh phòng không.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
