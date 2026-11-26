import React, { useState } from 'react';
import { X, Minus, Plus, Printer, BookOpen } from 'lucide-react';
import { fullExhibitionContent } from '../data/content';
import { referenceSources, verificationPrinciples } from '../data/references';

interface ReadingModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadingModeModal: React.FC<ReadingModeModalProps> = ({ isOpen, onClose }) => {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [lineWidth, setLineWidth] = useState<'compact' | 'normal' | 'wide'>('normal');
  const [activeChapter, setActiveChapter] = useState('chap-1-overview');

  if (!isOpen) return null;

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'base': return 'text-base leading-loose';
      case 'lg': return 'text-lg leading-loose';
      case 'xl': return 'text-xl leading-loose';
    }
  };

  const getLineWidthClass = () => {
    switch (lineWidth) {
      case 'compact': return 'max-w-2xl';
      case 'normal': return 'max-w-3xl';
      case 'wide': return 'max-w-4xl';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-archive-parchment text-archive-charcoal font-sans">
      {/* Sticky Reader Toolbar */}
      <div className="sticky top-0 z-40 bg-archive-paper/95 backdrop-blur-md border-b border-archive-border px-4 sm:px-8 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-archive-olive" />
          <div>
            <span className="block text-[11px] font-mono uppercase tracking-wider text-archive-terracotta font-semibold">
              Chế Độ Đọc Tập Trung
            </span>
            <h2 className="font-serif font-bold text-sm sm:text-base text-archive-charcoal truncate max-w-[200px] sm:max-w-md">
              Bản Thuyết Minh Hiện Vật: Hầm Trú Ẩn Chữ A
            </h2>
          </div>
        </div>

        {/* Adjust controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Font Size controls */}
          <div className="flex items-center gap-1 bg-archive-ivory border border-archive-border rounded px-1.5 py-1 text-xs">
            <span className="text-[11px] font-mono text-archive-stone mr-1">Cỡ chữ:</span>
            <button
              onClick={() => {
                if (fontSize === 'xl') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('base');
                else if (fontSize === 'base') setFontSize('sm');
              }}
              title="Giảm cỡ chữ"
              className="p-1 hover:bg-archive-border rounded text-archive-charcoal"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono font-bold text-xs px-1 text-archive-olive">
              {fontSize === 'sm' ? 'S' : fontSize === 'base' ? 'M' : fontSize === 'lg' ? 'L' : 'XL'}
            </span>
            <button
              onClick={() => {
                if (fontSize === 'sm') setFontSize('base');
                else if (fontSize === 'base') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('xl');
              }}
              title="Tăng cỡ chữ"
              className="p-1 hover:bg-archive-border rounded text-archive-charcoal"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Line width control */}
          <div className="hidden md:flex items-center gap-1 bg-archive-ivory border border-archive-border rounded px-2 py-1 text-xs">
            <span className="text-[11px] font-mono text-archive-stone mr-1">Độ rộng:</span>
            {(['compact', 'normal', 'wide'] as const).map((w) => (
              <button
                key={w}
                onClick={() => setLineWidth(w)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-mono uppercase ${
                  lineWidth === w ? 'bg-archive-olive text-archive-paper font-bold' : 'text-archive-stone hover:text-archive-charcoal'
                }`}
              >
                {w === 'compact' ? 'Gọn' : w === 'normal' ? 'Chuẩn' : 'Rộng'}
              </button>
            ))}
          </div>

          {/* Print button */}
          <button
            onClick={handlePrint}
            title="In bản thuyết minh"
            className="p-1.5 rounded border border-archive-border bg-archive-ivory text-archive-charcoal hover:bg-archive-border/40 text-xs font-mono flex items-center gap-1"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">In</span>
          </button>

          {/* Exit Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-archive-charcoal text-archive-paper hover:bg-archive-charcoal/80 transition-colors"
            title="Đóng chế độ đọc (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Reading Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex gap-8">
        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-20 p-4 bg-archive-paper border border-archive-border rounded-lg archival-border">
            <h3 className="font-serif font-bold text-sm text-archive-charcoal uppercase tracking-wider mb-3 pb-2 border-b border-archive-border">
              Mục lục thuyết minh
            </h3>
            <nav className="space-y-1 text-xs">
              {fullExhibitionContent.map((chap) => (
                <a
                  key={chap.id}
                  href={`#read-${chap.id}`}
                  onClick={() => setActiveChapter(chap.id)}
                  className={`block p-2 rounded transition-colors ${
                    activeChapter === chap.id 
                      ? 'bg-archive-olive text-archive-paper font-semibold' 
                      : 'text-archive-umber hover:bg-archive-ivory'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-80 block">{chap.number}.</span>
                  <span className="line-clamp-2">{chap.title}</span>
                </a>
              ))}
              <a
                href="#read-references"
                className="block p-2 rounded text-archive-umber hover:bg-archive-ivory border-t border-archive-border/40 mt-2"
              >
                <span className="font-mono text-[11px] opacity-80 block">07.</span>
                <span>Tài liệu tham khảo & Lưu ý</span>
              </a>
            </nav>

            <div className="mt-4 pt-3 border-t border-archive-border/50 text-[11px] font-mono text-archive-stone">
              <span>Ấn phẩm Lịch sử Quân sự</span>
            </div>
          </div>
        </aside>

        {/* Longform Text Reading Area */}
        <article className={`flex-1 mx-auto ${getLineWidthClass()} bg-archive-paper p-6 sm:p-12 border border-archive-border rounded-lg shadow-sm archival-border`}>
          {/* Header Banner */}
          <div className="text-center pb-8 border-b border-archive-border mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-archive-terracotta font-bold">
              CHUYÊN KHẢO TƯ LIỆU LỊCH SỬ QUÂN SỰ
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-archive-charcoal mt-3 mb-4 leading-tight">
              HẦM TRÚ ẨN CHỮ A – DẤU ẤN CỦA CÔNG TÁC PHÒNG KHÔNG NHÂN DÂN TRONG KHÁNG CHIẾN CHỐNG MỸ
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-archive-umber max-w-2xl mx-auto leading-relaxed">
              Biểu tượng của tinh thần chủ động phòng tránh, ý chí bám trụ và sự kiên cường của quân và dân Việt Nam trong những năm tháng chiến tranh.
            </p>
          </div>

          {/* Chapters loop */}
          {fullExhibitionContent.map((chap, cIdx) => (
            <section key={chap.id} id={`read-${chap.id}`} className="mb-14 scroll-mt-24">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-archive-terracotta uppercase tracking-wider block">
                  CHƯƠNG {chap.number}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal mt-1">
                  {chap.title}
                </h2>
                <p className="text-xs font-mono text-archive-stone mt-1">
                  {chap.subtitle}
                </p>
              </div>

              {chap.sections.map((sec) => (
                <div key={sec.id} className="mb-8">
                  {sec.subNumber && (
                    <h3 className="font-serif font-bold text-base sm:text-lg text-archive-olive mb-3 pb-1 border-b border-archive-border/40">
                      {sec.subNumber}. {sec.subTitle}
                    </h3>
                  )}

                  <div className={`space-y-4 ${getFontSizeClass()} text-archive-charcoal/90 editorial-justify`}>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className={cIdx === 0 && pIdx === 0 ? 'drop-cap' : ''}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.archivalQuote && (
                    <div className="my-6 p-4 bg-archive-parchment border-l-4 border-archive-terracotta rounded-r italic text-sm text-archive-umber">
                      <p className="font-serif">"{sec.archivalQuote.quote}"</p>
                      <p className="text-xs font-mono text-archive-stone mt-2 font-normal not-italic text-right">
                        — {sec.archivalQuote.source}
                      </p>
                    </div>
                  )}

                  {sec.tableData && (
                    <div className="my-6 overflow-x-auto">
                      <table className="w-full text-xs font-sans border-collapse border border-archive-border">
                        <thead>
                          <tr className="bg-archive-ivory">
                            {sec.tableData.headers.map((h, hIdx) => (
                              <th key={hIdx} className="border border-archive-border p-2.5 text-left font-serif font-bold text-archive-charcoal">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-archive-paper' : 'bg-archive-parchment'}>
                              {row.map((cell, cCellIdx) => (
                                <td key={cCellIdx} className="border border-archive-border p-2.5 text-archive-charcoal/90">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* References & Verification in Reading Mode */}
          <section id="read-references" className="pt-8 border-t-2 border-archive-border scroll-mt-24">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal mb-4">
              Tài Liệu Tham Khảo và Lưu Ý Lịch Sử
            </h2>

            <div className="space-y-4 mb-8">
              {referenceSources.map((ref) => (
                <div key={ref.id} className="p-3 bg-archive-parchment rounded border border-archive-border text-xs">
                  <div className="font-serif font-bold text-sm text-archive-charcoal">
                    {ref.number}. {ref.title}
                  </div>
                  <div className="text-[11px] font-mono text-archive-stone mt-0.5">
                    {ref.authorOrOrg} • {ref.publicationDate}
                  </div>
                  <p className="mt-1 text-archive-umber">{ref.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-archive-ivory rounded border border-archive-border archival-border">
              <h3 className="font-serif font-bold text-sm text-archive-olive mb-2 uppercase tracking-wider">
                Ba Lưu Ý Về Tính Chính Xác Của Bảo Tàng:
              </h3>
              <ul className="space-y-2 text-xs text-archive-charcoal/90 list-disc list-inside">
                {verificationPrinciples.map((v, idx) => (
                  <li key={idx}>
                    <strong className="text-archive-charcoal">{v.title}:</strong> {v.content}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
