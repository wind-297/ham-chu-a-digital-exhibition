import React from 'react';
import { wartimeChapters } from '../data/wartimeLife';
import { Quote, Tag } from 'lucide-react';

export const WartimeLifeSection: React.FC = () => {
  return (
    <section id="doi-song" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG V • ĐỜI SỐNG THỜI CHIẾN
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Đời sống Dân cư Dưới Mái Hầm
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Không chỉ là công trình kỹ thuật phòng thủ, mái hầm chữ A là không gian che chở sinh hoạt, lớp học sơ tán và tinh thần kiên cường của nhân dân.
          </p>
        </div>

        {/* 3 Emotional Chapters */}
        <div className="space-y-16">
          {wartimeChapters.map((chap, idx) => (
            <div 
              key={chap.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Chapter Title & Editorial Text (7 cols) */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-archive-terracotta font-bold">
                    PHẦN {idx + 1}
                  </span>
                  <span className="text-archive-stone">•</span>
                  <span className="font-mono text-xs text-archive-stone">TƯ LIỆU KÝ ỨC</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-archive-charcoal leading-snug">
                  {chap.title}
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-archive-olive font-medium">
                  {chap.subtitle}
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-archive-charcoal/90 leading-relaxed editorial-justify pt-2">
                  {chap.narrativeParagraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Key Artifacts Tag Pills */}
                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-archive-stone flex items-center gap-1 mr-1">
                    <Tag className="w-3.5 h-3.5 text-archive-terracotta" />
                    Hiện vật biểu trưng:
                  </span>
                  {chap.keyArtifacts.map((art, aIdx) => (
                    <span 
                      key={aIdx} 
                      className="px-2.5 py-1 rounded-full bg-archive-parchment border border-archive-border text-xs text-archive-umber font-mono"
                    >
                      {art}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Historical Quote & Archival Illustration Card (5 cols) */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="p-6 sm:p-7 bg-archive-parchment rounded-lg border-2 border-archive-border shadow-archive archival-border space-y-4">
                  <Quote className="w-8 h-8 text-archive-terracotta/40" />
                  
                  {chap.highlightQuote && (
                    <div className="space-y-3">
                      <p className="font-serif italic text-sm sm:text-base text-archive-charcoal leading-relaxed">
                        "{chap.highlightQuote.text}"
                      </p>
                      <div className="pt-3 border-t border-archive-border/60 text-xs font-mono text-archive-stone">
                        <strong className="text-archive-olive block text-xs font-sans not-italic">
                          {chap.highlightQuote.author}
                        </strong>
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-archive-border/40 text-[11px] font-mono text-archive-stone flex items-center justify-between">
                    <span>GHI CHÉP LỊCH SỬ</span>
                    <span className="text-archive-olive font-medium">TƯ LIỆU DÂN SỰ THỜI CHIẾN</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
