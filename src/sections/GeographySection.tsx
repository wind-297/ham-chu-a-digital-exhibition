import React, { useState } from 'react';
import { geographicalRegions } from '../data/geography';
import { Compass } from 'lucide-react';
import { VietnamMap } from '../components/VietnamMap';

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
          {/* Left Column: Authentic Vietnam Geographic Map highlighting regions (5 cols) */}
          <div className="lg:col-span-5 bg-archive-paper p-6 sm:p-7 rounded-lg border-2 border-archive-border shadow-archive archival-border">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-archive-border/70 text-xs font-mono text-archive-stone">
              <span className="font-bold text-archive-olive uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-archive-terracotta" />
                BẢN ĐỒ VIỆT NAM
              </span>
              <span className="text-[11px] text-archive-stone">ĐỊA BÀN LỊCH SỬ</span>
            </div>

            {/* Authentic Vietnam Map Component */}
            <VietnamMap 
              selectedRegionId={selectedRegionId} 
              onSelectRegion={(id) => setSelectedRegionId(id)} 
            />

            <p className="text-[11px] font-mono text-archive-stone mt-3 text-center">
              Bản đồ Việt Nam (bao gồm Quần đảo Hoàng Sa và Trường Sa)
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
          </div>
        </div>
      </div>
    </section>
  );
};
