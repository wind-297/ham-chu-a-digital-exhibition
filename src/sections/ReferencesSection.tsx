import React from 'react';
import { referenceSources } from '../data/references';
import { ExternalLink, BookOpen } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="tu-lieu" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            THƯ MỤC TÀI LIỆU
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            Tài liệu Tham khảo
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Hệ thống văn kiện lịch sử, nghiên cứu quân sự, giáo trình công sự và tư liệu lưu trữ bảo chứng cho tính xác thực của ấn phẩm.
          </p>
        </div>

        {/* 7 Archival Reference Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {referenceSources.map((ref) => (
            <div 
              key={ref.id}
              className="p-6 bg-archive-parchment rounded-lg border border-archive-border hover:border-archive-olive transition-all shadow-2xs flex flex-col justify-between archival-border"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-archive-border/60 text-[11px] font-mono text-archive-stone">
                  <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-olive font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-archive-terracotta" />
                    NGUỒN {ref.number < 10 ? `0${ref.number}` : ref.number}
                  </span>
                  <span className="text-archive-terracotta font-medium">
                    {ref.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-archive-charcoal mb-1 leading-snug">
                  {ref.title}
                </h3>

                <div className="text-xs font-mono text-archive-stone mb-3">
                  <strong className="text-archive-olive font-sans">{ref.authorOrOrg}</strong> • {ref.publicationDate}
                </div>

                <p className="text-xs sm:text-[13px] text-archive-charcoal/90 leading-relaxed mb-4">
                  {ref.description}
                </p>

                <div className="text-[11px] font-mono text-archive-stone pt-2 border-t border-archive-border/40">
                  <span className="text-archive-olive font-semibold">Xuất bản:</span> {ref.publicationInfo}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-archive-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-archive-stone text-[11px]">Tư liệu nghiên cứu</span>
                <a
                  href={ref.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-archive-terracotta hover:text-archive-charcoal hover:underline font-semibold"
                >
                  <span>Truy cập nguồn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
