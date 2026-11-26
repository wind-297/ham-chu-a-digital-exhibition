import React from 'react';
import { referenceSources, verificationPrinciples, editorialDirective } from '../data/references';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="tu-lieu" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG 09 • REFERENCES & ARCHIVAL SOURCES
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            TƯ LIỆU THAM KHẢO VÀ LƯU Ý BẢO TÀNG
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Hệ thống văn kiện lịch sử, nghiên cứu di sản và tư liệu bảo tàng bảo chứng cho tính xác thực của triển lãm.
          </p>
        </div>

        {/* 7 Archival Reference Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {referenceSources.map((ref) => (
            <div 
              key={ref.id}
              className="p-6 bg-archive-parchment rounded-lg border border-archive-border hover:border-archive-olive transition-all shadow-2xs flex flex-col justify-between archival-border"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-archive-border/60 text-[11px] font-mono text-archive-stone">
                  <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-olive font-bold">
                    NGUỒN SỐ {ref.number < 10 ? `0${ref.number}` : ref.number}
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
                <span className="text-archive-stone text-[11px]">Bảo tàng Quốc phòng</span>
                <a
                  href={ref.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-archive-terracotta hover:text-archive-charcoal hover:underline"
                >
                  <span>Truy cập nguồn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Verification Principles Callout Box */}
        <div className="p-8 bg-archive-ivory rounded-lg border-2 border-archive-border shadow-archive archival-border mb-12">
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-archive-border/80">
            <ShieldCheck className="w-6 h-6 text-archive-olive" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-archive-terracotta font-bold block">
                NGHIÊN CỨU & GIÁM ĐỊNH LỊCH SỬ
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-archive-charcoal">
                Ba Lưu Ý Về Tính Chính Xác Khi Sử Dụng Nội Dung
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verificationPrinciples.map((principle, idx) => (
              <div key={idx} className="p-4 bg-archive-parchment rounded border border-archive-border/70">
                <span className="font-mono text-xs font-bold text-archive-terracotta block mb-1">
                  {principle.code}
                </span>
                <h4 className="font-serif font-bold text-base text-archive-charcoal mb-2">
                  {principle.title}
                </h4>
                <p className="text-xs text-archive-charcoal/90 leading-relaxed editorial-justify">
                  {principle.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Museum Editorial Directive */}
        <div className="p-6 sm:p-8 bg-archive-dark text-archive-paper rounded-lg border border-archive-charcoal shadow-archive-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-archive-terracotta font-bold">
              {editorialDirective.title}
            </span>
            <p className="font-serif italic text-sm sm:text-base leading-relaxed text-archive-ivory/95 max-w-3xl">
              "{editorialDirective.statement}"
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs text-archive-stone border-l border-archive-stone/30 pl-4 py-1">
            <span>DỰ ÁN SỐ HÓA</span>
            <br />
            <strong className="text-archive-paper">BTQP VIỆT NAM</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
