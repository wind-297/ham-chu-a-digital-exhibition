import React, { useState } from 'react';
import { X, Compass, Search } from 'lucide-react';
import { glossaryTerms } from '../data/glossary';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  if (!isOpen) return null;

  const categories = ['Tất cả', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.brief.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.detailed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-archive-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-archive-paper border border-archive-border rounded-lg shadow-archive-lg overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-archive-parchment border-b border-archive-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-archive-olive" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-archive-terracotta font-semibold">
                Từ Điển Thuật Ngữ Triển Lãm
              </span>
              <h3 className="font-serif font-bold text-base text-archive-charcoal">
                Thuật Ngữ Lịch Sử Phòng Không Nhân Dân
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-archive-charcoal text-archive-paper hover:bg-archive-charcoal/80"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 bg-archive-ivory/60 border-b border-archive-border flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-archive-stone absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tra cứu thuật ngữ (vd: Hầm chữ A, Mũ rơm, Địa đạo)..."
              className="w-full pl-9 pr-3 py-1.5 bg-archive-paper border border-archive-border rounded text-xs text-archive-charcoal placeholder:text-archive-stone focus:outline-none focus:border-archive-olive"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-1 rounded whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-archive-olive text-archive-paper font-semibold'
                    : 'bg-archive-parchment text-archive-umber hover:bg-archive-border/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-10 text-archive-stone text-xs">
              Không tìm thấy thuật ngữ phù hợp với từ khóa "{searchTerm}".
            </div>
          ) : (
            filteredTerms.map((t) => (
              <div 
                key={t.id}
                className="p-4 bg-archive-parchment border border-archive-border/70 rounded-md hover:border-archive-olive/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-serif font-bold text-base text-archive-charcoal">
                    {t.term}
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-[10px] font-mono text-archive-olive shrink-0">
                    {t.category}
                  </span>
                </div>
                <p className="text-xs font-semibold text-archive-umber mb-2 leading-relaxed">
                  {t.brief}
                </p>
                <p className="text-xs text-archive-charcoal/90 leading-relaxed editorial-justify">
                  {t.detailed}
                </p>
                <div className="mt-2.5 pt-2 border-t border-archive-border/50 text-[11px] font-mono text-archive-stone">
                  <span className="text-archive-olive font-semibold">Tư liệu dẫn chiếu:</span> {t.archivalContext}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 bg-archive-ivory border-t border-archive-border text-[11px] font-mono text-archive-stone text-center">
          Tổng cộng {glossaryTerms.length} thuật ngữ đã được xác minh từ tài liệu lịch sử chính thức
        </div>
      </div>
    </div>
  );
};
