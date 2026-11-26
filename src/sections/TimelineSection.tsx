import React, { useState } from 'react';
import { timelineEvents } from '../data/timeline';
import { MapPin, ChevronRight, Bookmark } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>(timelineEvents[1].id);

  const selectedEvent = timelineEvents.find(e => e.id === selectedEventId) || timelineEvents[0];

  return (
    <section id="lich-su" className="py-16 sm:py-24 border-b border-archive-border bg-archive-parchment scroll-mt-16 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG 02 • HISTORICAL TIMELINE
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            HÀNH TRÌNH LỊCH SỬ
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Từ kinh nghiệm chiến hào Triều Tiên đến sự thích ứng diệu kỳ và thế trận phòng không nhân dân toàn diện tại Việt Nam.
          </p>
        </div>

        {/* Interactive Layout: Timeline Grid with Selected Event Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Timeline Milestone Track (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-archive-border/80 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-8">
              {timelineEvents.map((evt) => {
                const isSelected = evt.id === selectedEventId;
                return (
                  <div 
                    key={evt.id} 
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedEventId(evt.id)}
                  >
                    {/* Node Dot on Timeline */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                      isSelected 
                        ? 'bg-archive-terracotta border-archive-paper ring-4 ring-archive-terracotta/20 scale-110' 
                        : 'bg-archive-ivory border-archive-stone group-hover:border-archive-olive'
                    }`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-archive-paper"></span>}
                    </div>

                    {/* Milestone Card */}
                    <div className={`p-4 sm:p-5 rounded-lg border transition-all ${
                      isSelected 
                        ? 'bg-archive-paper border-archive-olive shadow-archive ring-1 ring-archive-olive/30' 
                        : 'bg-archive-paper/70 border-archive-border/60 hover:bg-archive-paper hover:border-archive-stone'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs sm:text-sm text-archive-olive">
                            {evt.year}
                          </span>
                          {evt.exactDate && (
                            <span className="px-1.5 py-0.5 rounded bg-archive-ivory border border-archive-border text-[10px] font-mono text-archive-terracotta font-semibold">
                              {evt.exactDate}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-archive-stone px-2 py-0.5 rounded bg-archive-ivory border border-archive-border/60">
                          {evt.tag}
                        </span>
                      </div>

                      <h3 className={`font-serif font-bold text-base sm:text-lg transition-colors ${
                        isSelected ? 'text-archive-charcoal' : 'text-archive-charcoal/90 group-hover:text-archive-olive'
                      }`}>
                        {evt.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-archive-umber mt-1.5 leading-relaxed">
                        {evt.summary}
                      </p>

                      <div className="mt-3 pt-2 border-t border-archive-border/40 flex items-center justify-between text-[11px] font-mono text-archive-stone">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-archive-terracotta" />
                          {evt.location}
                        </span>
                        <span className="text-archive-olive font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                          {isSelected ? 'Đang xem hồ sơ' : 'Xem chi tiết'} <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Milestone Dossier Drawer (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 bg-archive-paper rounded-lg border-2 border-archive-border shadow-archive archival-border space-y-5">
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-3 border-b border-archive-border/80 text-[11px] font-mono text-archive-stone">
                <span className="text-archive-olive font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-archive-terracotta" />
                  HỒ SƠ TƯ LIỆU SỐ HÓA
                </span>
                <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${
                  selectedEvent.verificationLevel === 'verified_document'
                    ? 'bg-archive-olive/10 text-archive-olive border-archive-olive/30'
                    : 'bg-archive-ivory text-archive-umber border-archive-border'
                }`}>
                  {selectedEvent.verificationLevel === 'verified_document' ? 'Văn bản xác minh' : 'Giai đoạn lịch sử'}
                </span>
              </div>

              {/* Event Title & Metadata */}
              <div>
                <div className="font-mono text-xs text-archive-terracotta font-bold">
                  {selectedEvent.exactDate ? `${selectedEvent.exactDate} (${selectedEvent.year})` : selectedEvent.year}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal mt-1 leading-snug">
                  {selectedEvent.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-archive-stone font-mono mt-1">
                  <MapPin className="w-3.5 h-3.5 text-archive-stone" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              {/* Detailed Historical Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify pt-2 border-t border-archive-border/60">
                <p>{selectedEvent.detailedDescription}</p>
                <p className="text-archive-umber bg-archive-parchment p-3 rounded border border-archive-border/70 text-xs italic">
                  "{selectedEvent.historicalContext}"
                </p>
              </div>

              {/* Archival Provenance Citation */}
              <div className="pt-3 border-t border-archive-border/70 text-[11px] font-mono text-archive-stone">
                <span className="text-archive-olive font-bold block mb-1">NGUỒN DẪN CHIẾU TƯ LIỆU:</span>
                <p className="text-archive-charcoal font-sans text-xs bg-archive-ivory/50 p-2 rounded border border-archive-border/40">
                  {selectedEvent.archivalSource}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
