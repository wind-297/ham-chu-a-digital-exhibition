import React, { useState } from 'react';
import { geographicalRegions } from '../data/geography';
import { AlertCircle, Compass } from 'lucide-react';

export const GeographySection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(geographicalRegions[0].id);

  const selectedRegion = geographicalRegions.find(r => r.id === selectedRegionId) || geographicalRegions[0];

  return (
    <section id="dia-ban" className="py-16 sm:py-24 border-b border-archive-border bg-archive-parchment scroll-mt-16 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG VI • ĐỊA BÀN TRỌNG ĐIỂM
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Địa bàn Sử dụng Trọng điểm
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Hầm chữ A hiện diện rộng khắp từ tuyến lửa Khu IV, Vĩnh Linh đến các vùng sơ tán tại miền Bắc và căn cứ kháng chiến miền Nam.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {geographicalRegions.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  isSelected 
                    ? 'bg-archive-olive text-archive-paper border-archive-olive shadow-archive font-bold' 
                    : 'bg-archive-paper text-archive-charcoal border-archive-border hover:bg-archive-ivory'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75">
                  ĐỊA BÀN CHIẾN LƯỢC
                </span>
                <span className="font-serif text-base sm:text-lg block mt-0.5">
                  {region.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Display: Left Stylized Map Vector, Right Detailed Regional Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stylized Vector Map of Vietnam highlighting regions (5 cols) */}
          <div className="lg:col-span-5 bg-archive-paper p-6 sm:p-7 rounded-lg border-2 border-archive-border shadow-archive archival-border">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-archive-border/70 text-xs font-mono text-archive-stone">
              <span className="font-bold text-archive-olive uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-archive-terracotta" />
                BẢN ĐỒ KHÁI QUÁT ĐỊA BÀN
              </span>
              <span className="text-[11px] text-archive-stone">MINH HỌA LỊCH SỬ</span>
            </div>

            {/* Stylized Vietnam Vector Graphic */}
            <div className="relative w-full aspect-3/4 max-h-[380px] bg-archive-ivory/50 rounded border border-archive-border/40 p-3 flex items-center justify-center">
              <svg viewBox="0 0 240 340" className="w-full h-full max-h-[360px]">
                {/* Stylized S-curve of Vietnam */}
                <path 
                  d="M 110,25 Q 155,20 170,45 Q 160,80 135,100 Q 110,120 115,145 Q 130,175 145,210 Q 155,240 130,280 Q 95,310 75,290 Q 70,260 95,240 Q 110,210 100,170 Q 90,130 95,95 Q 85,55 110,25 Z" 
                  fill="#EAE3D5" 
                  stroke="#665344" 
                  strokeWidth="1.5" 
                  strokeDasharray="1 1"
                />

                {/* Hanoi Marker */}
                <g 
                  className="cursor-pointer group"
                  onClick={() => setSelectedRegionId('hanoi')}
                >
                  <circle cx="125" cy="65" r={selectedRegionId === 'hanoi' ? 10 : 6} fill={selectedRegionId === 'hanoi' ? '#A65F4B' : '#41483A'} />
                  <circle cx="125" cy="65" r="2.5" fill="#FAF7F2" />
                  <text x="140" y="68" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9" fill={selectedRegionId === 'hanoi' ? '#A65F4B' : '#262723'} fontWeight="bold">
                    Hà Nội (1972)
                  </text>
                </g>

                {/* Khu IV / Nghe An Marker */}
                <g 
                  className="cursor-pointer group"
                  onClick={() => setSelectedRegionId('khu-iv')}
                >
                  <circle cx="118" cy="115" r={selectedRegionId === 'khu-iv' ? 10 : 6} fill={selectedRegionId === 'khu-iv' ? '#A65F4B' : '#41483A'} />
                  <circle cx="118" cy="115" r="2.5" fill="#FAF7F2" />
                  <text x="133" y="118" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9" fill={selectedRegionId === 'khu-iv' ? '#A65F4B' : '#262723'} fontWeight="bold">
                    Khu IV (Đầu 1965)
                  </text>
                </g>

                {/* Nghe An Marker */}
                <g 
                  className="cursor-pointer group"
                  onClick={() => setSelectedRegionId('nghe-an')}
                >
                  <circle cx="112" cy="130" r={selectedRegionId === 'nghe-an' ? 9 : 5} fill={selectedRegionId === 'nghe-an' ? '#A65F4B' : '#665344'} />
                  <circle cx="112" cy="130" r="2" fill="#FAF7F2" />
                  <text x="50" y="133" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="8" fill={selectedRegionId === 'nghe-an' ? '#A65F4B' : '#665344'} fontWeight="bold">
                    Nghệ An
                  </text>
                </g>

                {/* Vinh Linh Marker (17th Parallel) */}
                <g 
                  className="cursor-pointer group"
                  onClick={() => setSelectedRegionId('vinh-linh')}
                >
                  {/* 17th Parallel reference line */}
                  <line x1="85" y1="160" x2="165" y2="160" stroke="#A65F4B" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="128" cy="160" r={selectedRegionId === 'vinh-linh' ? 10 : 6} fill={selectedRegionId === 'vinh-linh' ? '#A65F4B' : '#41483A'} />
                  <circle cx="128" cy="160" r="2.5" fill="#FAF7F2" />
                  <text x="143" y="163" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9" fill={selectedRegionId === 'vinh-linh' ? '#A65F4B' : '#262723'} fontWeight="bold">
                    Vĩnh Linh (Vĩ tuyến 17)
                  </text>
                </g>

                {/* Southern base indicator (Tà Thiết) */}
                <circle cx="110" cy="255" r="4" fill="#665344" />
                <text x="120" y="258" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="7.5" fill="#665344">
                  Căn cứ Tà Thiết (Bình Phước)
                </text>
              </svg>
            </div>

            <p className="text-[11px] font-mono text-archive-stone mt-3 text-center">
              Sơ đồ khái quát các địa bàn trọng điểm theo tư liệu lịch sử
            </p>
          </div>

          {/* Right Column: Detailed Regional Archival Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-archive-paper p-6 sm:p-8 rounded-lg border-2 border-archive-border shadow-archive archival-border space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-archive-terracotta font-bold block mb-1">
                {selectedRegion.strategicRole}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal">
                {selectedRegion.vietnameseTitle}
              </h3>
            </div>

            {/* Historical Narrative */}
            <div className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify pt-2 border-t border-archive-border/60">
              <p>{selectedRegion.historicalContext}</p>
              <p className="mt-2 text-archive-umber">{selectedRegion.archivalNarrative}</p>
            </div>

            {/* Recorded Statistics Cards */}
            <div className="pt-3 border-t border-archive-border/60">
              <span className="text-xs font-mono font-bold text-archive-olive uppercase tracking-wider block mb-2.5">
                DỮ LIỆU TƯ LIỆU LỊCH SỬ:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedRegion.recordedData.map((data, idx) => (
                  <div key={idx} className="p-3 bg-archive-parchment rounded border border-archive-border/80">
                    <span className="text-[11px] font-mono text-archive-stone block">{data.label}</span>
                    <strong className="font-serif text-sm sm:text-base text-archive-charcoal block mt-0.5">
                      {data.value}
                    </strong>
                    {data.note && (
                      <span className="text-[10px] font-mono text-archive-olive mt-1 block">
                        • {data.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Museum Caution Note */}
            <div className="p-3.5 bg-archive-ivory rounded border border-archive-border text-xs text-archive-umber flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-archive-terracotta shrink-0 mt-0.5" />
              <p className="text-[11.5px] leading-relaxed">
                <strong className="text-archive-charcoal">{selectedRegion.cautions}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
