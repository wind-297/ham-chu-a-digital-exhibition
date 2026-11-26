import React, { useState } from 'react';
import { shelterComponents } from '../data/structure';
import { Info, Layers, Hammer } from 'lucide-react';

export const StructureSection: React.FC = () => {
  const [selectedComponentId, setSelectedComponentId] = useState<string>(shelterComponents[0].id);

  const selectedComp = shelterComponents.find(c => c.id === selectedComponentId) || shelterComponents[0];

  return (
    <section id="cau-tao" className="py-16 sm:py-24 border-b border-archive-border bg-archive-parchment scroll-mt-16 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG IV • CẤU TẠO CÔNG TRÌNH
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Đặc điểm Cấu tạo và Vật liệu
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Hình thái giàn kèo tam giác chữ A, mái nghiêng phân tán xung lực và sự vận dụng linh hoạt vật liệu tự nhiên địa phương.
          </p>
        </div>

        {/* Interactive Structure Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive SVG Architectural Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-archive-paper p-6 sm:p-8 rounded-lg border-2 border-archive-border shadow-archive archival-border">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-archive-border/70 text-xs font-mono text-archive-stone">
              <span className="font-bold text-archive-olive uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-archive-terracotta" />
                MẶT CẮT HÌNH THÁI CÔNG TRÌNH
              </span>
              <span className="text-[11px] text-archive-stone">
                Bấm vào các điểm chấm tròn để khám phá
              </span>
            </div>

            {/* Interactive SVG Diagram with Interactive Hotspot Pins */}
            <div className="relative w-full aspect-4/3 bg-archive-parchment/60 rounded border border-archive-border/60 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 360" className="w-full h-full drop-shadow">
                <defs>
                  <pattern id="soilPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="20" x2="20" y2="0" stroke="#665344" strokeWidth="0.7" opacity="0.15" />
                  </pattern>
                </defs>

                {/* Subterranean Earth Background */}
                <rect x="0" y="180" width="500" height="180" fill="#EAE3D5" />
                <rect x="0" y="180" width="500" height="180" fill="url(#soilPattern)" />
                
                {/* Ground Reference Level */}
                <line x1="0" y1="180" x2="500" y2="180" stroke="#665344" strokeWidth="2" strokeDasharray="5 3" />
                <rect x="410" y="186" width="84" height="16" fill="#F5F0E6" stroke="#665344" strokeWidth="0.8" rx="3" opacity="0.95" />
                <text x="452" y="197" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#665344" fontWeight="bold">MẶT ĐẤT</text>

                {/* Sunken Pit excavation */}
                <polygon points="90,180 120,310 380,310 410,180" fill="#D8D0C2" stroke="#665344" strokeWidth="1.5" />
                
                {/* Inner Shelter Chamber floor */}
                <rect x="140" y="220" width="220" height="85" fill="#262723" rx="4" />
                <line x1="145" y1="300" x2="355" y2="300" stroke="#665344" strokeWidth="3" />
                <text x="250" y="268" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="12" fill="#FAF7F2" fontWeight="bold">KHOANG TRÚ ẨN BÁN ÂM</text>
                <text x="250" y="284" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#A69E8F">(Ván sàn hoặc rơm rạ lót chống ẩm)</text>

                {/* Two Entry/Exit portals left and right with label badges */}
                {/* Left Portal */}
                <path d="M 60,180 L 110,240 L 140,240" fill="none" stroke="#A65F4B" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="15" y="142" width="85" height="20" fill="#F5F0E6" stroke="#A65F4B" strokeWidth="1" rx="3" />
                <text x="57" y="156" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#A65F4B" fontWeight="bold">CỬA VÀO SỐ 1</text>
                
                {/* Right Portal */}
                <path d="M 440,180 L 390,240 L 360,240" fill="none" stroke="#A65F4B" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="395" y="142" width="90" height="20" fill="#F5F0E6" stroke="#A65F4B" strokeWidth="1" rx="3" />
                <text x="440" y="156" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#A65F4B" fontWeight="bold">CỬA THOÁT SỐ 2</text>

                {/* A-Frame Primary Truss Struts (Mặt cắt khung giàn chữ A) */}
                {/* Left sloping strut */}
                <line x1="250" y1="45" x2="110" y2="240" stroke="#A65F4B" strokeWidth="12" strokeLinecap="round" />
                {/* Right sloping strut */}
                <line x1="250" y1="45" x2="390" y2="240" stroke="#A65F4B" strokeWidth="12" strokeLinecap="round" />
                {/* Horizontal tie beam (Thanh ngang chữ A) */}
                <line x1="160" y1="160" x2="340" y2="160" stroke="#665344" strokeWidth="10" strokeLinecap="round" />
                
                {/* Outer Earth & Bamboo Shield Mounds */}
                <path 
                  d="M 250,30 Q 250,30 80,185 L 105,185 Q 250,55 395,185 L 420,185 Q 250,30 250,30 Z" 
                  fill="#41483A" 
                  opacity="0.88" 
                />
                <text x="250" y="24" textAnchor="middle" fontFamily="'Source Serif 4', Georgia, serif" fontSize="12" fill="#41483A" fontWeight="bold">
                  MÁI ĐẮP ĐẤT & PHÊN TRE BẢO VỆ
                </text>

                {/* Static Architectural Hotspot Pins (No motion/ping) */}
                {shelterComponents.map((comp) => {
                  const isSelected = comp.id === selectedComponentId;
                  const cx = (comp.hotspot.x / 100) * 500;
                  const cy = (comp.hotspot.y / 100) * 360;

                  return (
                    <g 
                      key={comp.id} 
                      className="cursor-pointer"
                      onClick={() => setSelectedComponentId(comp.id)}
                    >
                      {/* Static Outer Indicator Ring */}
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={isSelected ? 14 : 10} 
                        fill={isSelected ? '#A65F4B' : '#41483A'} 
                        opacity={isSelected ? 0.3 : 0.15}
                      />
                      {/* Pin Center */}
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={isSelected ? 9 : 7} 
                        fill={isSelected ? '#A65F4B' : '#FAF7F2'} 
                        stroke={isSelected ? '#FAF7F2' : '#665344'} 
                        strokeWidth="2"
                      />
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r="3" 
                        fill={isSelected ? '#FAF7F2' : '#A65F4B'} 
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Component Selector Buttons on bottom */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              {shelterComponents.map((comp) => {
                const isSelected = comp.id === selectedComponentId;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponentId(comp.id)}
                    className={`p-2 rounded border text-left truncate transition-colors ${
                      isSelected 
                        ? 'bg-archive-olive text-archive-paper border-archive-olive font-bold shadow-2xs' 
                        : 'bg-archive-parchment text-archive-charcoal border-archive-border hover:bg-archive-ivory'
                    }`}
                  >
                    {comp.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Component Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 bg-archive-paper p-6 rounded-lg border-2 border-archive-border shadow-archive archival-border space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-archive-border/80 text-[11px] font-mono text-archive-stone">
              <span className="text-archive-olive font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-archive-terracotta" />
                CHI TIẾT NHẬN DIỆN BỘ PHẬN
              </span>
              <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-charcoal font-semibold">
                BỘ PHẬN {shelterComponents.findIndex(c => c.id === selectedComponentId) + 1} / {shelterComponents.length}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-archive-terracotta font-bold block mb-1">
                {selectedComp.vietnameseRole}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal">
                {selectedComp.name}
              </h3>
              <p className="font-serif italic text-xs text-archive-umber mt-1">
                {selectedComp.identificationSignificance}
              </p>
            </div>

            {/* Description */}
            <div className="text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify pt-2 border-t border-archive-border/50">
              <p>{selectedComp.description}</p>
            </div>

            {/* Historical Materials Recorded */}
            <div className="pt-3 border-t border-archive-border/60">
              <span className="text-xs font-mono font-bold text-archive-olive uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Hammer className="w-3.5 h-3.5 text-archive-terracotta" />
                VẬT LIỆU LỊCH SỬ GHI NHẬN:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedComp.materialsRecorded.map((mat, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 rounded bg-archive-ivory border border-archive-border text-xs text-archive-charcoal font-sans"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
