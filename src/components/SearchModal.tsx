import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Clock, MapPin, Compass, FileText } from 'lucide-react';
import { timelineEvents } from '../data/timeline';
import { shelterComponents } from '../data/structure';
import { glossaryTerms } from '../data/glossary';
import { geographicalRegions } from '../data/geography';
import { shelterComparisons } from '../data/comparison';
import { referenceSources } from '../data/references';
import { fullExhibitionContent } from '../data/content';

interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  category: 'Chương thuyết minh' | 'Mốc lịch sử' | 'Cấu tạo' | 'Thuật ngữ' | 'Địa bàn' | 'So sánh' | 'Tư liệu';
  targetHref: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const matched: SearchResult[] = [];

    // 1. Search in Full Exhibition Chapters
    fullExhibitionContent.forEach(chap => {
      if (chap.title.toLowerCase().includes(trimmed) || chap.subtitle.toLowerCase().includes(trimmed)) {
        matched.push({
          id: chap.id,
          title: `${chap.number}. ${chap.title}`,
          snippet: chap.summary || chap.subtitle,
          category: 'Chương thuyết minh',
          targetHref: `#tong-quan`
        });
      }
      chap.sections.forEach(sec => {
        sec.paragraphs.forEach(p => {
          if (p.toLowerCase().includes(trimmed) && matched.length < 25) {
            const idx = p.toLowerCase().indexOf(trimmed);
            const start = Math.max(0, idx - 40);
            const end = Math.min(p.length, idx + trimmed.length + 60);
            const snippet = (start > 0 ? '...' : '') + p.substring(start, end) + (end < p.length ? '...' : '');
            matched.push({
              id: `${sec.id}-${idx}`,
              title: sec.subTitle,
              snippet: snippet,
              category: 'Chương thuyết minh',
              targetHref: `#tong-quan`
            });
          }
        });
      });
    });

    // 2. Search in Timeline
    timelineEvents.forEach(evt => {
      if (
        evt.title.toLowerCase().includes(trimmed) ||
        evt.year.toLowerCase().includes(trimmed) ||
        evt.summary.toLowerCase().includes(trimmed) ||
        evt.detailedDescription.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          id: evt.id,
          title: `[${evt.year}] ${evt.title}`,
          snippet: evt.summary,
          category: 'Mốc lịch sử',
          targetHref: '#lich-su'
        });
      }
    });

    // 3. Search in Shelter Components
    shelterComponents.forEach(comp => {
      if (
        comp.name.toLowerCase().includes(trimmed) ||
        comp.description.toLowerCase().includes(trimmed) ||
        comp.vietnameseRole.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          id: comp.id,
          title: comp.name,
          snippet: comp.description.substring(0, 100) + '...',
          category: 'Cấu tạo',
          targetHref: '#cau-tao'
        });
      }
    });

    // 4. Search in Glossary
    glossaryTerms.forEach(term => {
      if (
        term.term.toLowerCase().includes(trimmed) ||
        term.brief.toLowerCase().includes(trimmed) ||
        term.detailed.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          id: term.id,
          title: term.term,
          snippet: term.brief,
          category: 'Thuật ngữ',
          targetHref: '#tong-quan'
        });
      }
    });

    // 5. Search in Geography
    geographicalRegions.forEach(geo => {
      if (
        geo.name.toLowerCase().includes(trimmed) ||
        geo.vietnameseTitle.toLowerCase().includes(trimmed) ||
        geo.historicalContext.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          id: geo.id,
          title: geo.vietnameseTitle,
          snippet: geo.strategicRole,
          category: 'Địa bàn',
          targetHref: '#dia-ban'
        });
      }
    });

    // 6. Search in References
    referenceSources.forEach(ref => {
      if (
        ref.title.toLowerCase().includes(trimmed) ||
        ref.authorOrOrg.toLowerCase().includes(trimmed) ||
        ref.description.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          id: ref.id,
          title: ref.title,
          snippet: `${ref.authorOrOrg} — ${ref.description.substring(0, 90)}...`,
          category: 'Tư liệu',
          targetHref: '#tu-lieu'
        });
      }
    });

    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  const handleResultClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mốc lịch sử': return <Clock className="w-3.5 h-3.5 text-archive-terracotta" />;
      case 'Cấu tạo': return <FileText className="w-3.5 h-3.5 text-archive-olive" />;
      case 'Thuật ngữ': return <Compass className="w-3.5 h-3.5 text-archive-umber" />;
      case 'Địa bàn': return <MapPin className="w-3.5 h-3.5 text-archive-terracotta" />;
      default: return <BookOpen className="w-3.5 h-3.5 text-archive-olive" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-archive-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-archive-paper border border-archive-border rounded-lg shadow-archive-lg overflow-hidden flex flex-col max-h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-archive-border bg-archive-parchment flex items-center gap-3">
          <Search className="w-5 h-5 text-archive-stone" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo từ khóa (vd: Khu IV, 144-CT/TW, mũ rơm, Hà Nội, Triều Tiên, Vĩnh Linh)..."
            className="flex-1 bg-transparent border-none outline-none text-archive-charcoal text-sm sm:text-base font-sans placeholder:text-archive-stone"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-archive-stone hover:text-archive-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1.5 rounded border border-archive-border text-archive-stone hover:text-archive-charcoal text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {!query.trim() && (
            <div className="text-center py-10 text-archive-stone text-xs sm:text-sm">
              <Compass className="w-8 h-8 mx-auto mb-2 opacity-50 text-archive-umber" />
              <p className="font-serif text-archive-umber font-semibold text-base mb-1">
                Tra cứu trong kho lưu trữ triển lãm
              </p>
              <p className="max-w-md mx-auto text-[12px] leading-relaxed">
                Nhập từ khóa về các mốc lịch sử, số liệu sơ tán, văn kiện Đảng, đặc điểm cấu tạo hầm hoặc thuật ngữ quốc phòng để tìm đến đúng vị trí.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[11px] font-mono">
                {['Khu IV 1965', 'Chỉ thị 144-CT/TW', 'Hà Nội 1972', 'Mũ rơm', 'Vĩnh Linh', 'Tà Thiết'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2 py-1 rounded bg-archive-ivory border border-archive-border text-archive-charcoal hover:bg-archive-border/40"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="text-center py-12 text-archive-stone text-sm">
              <p>Không tìm thấy nội dung phù hợp với từ khóa <span className="text-archive-charcoal font-semibold">"{query}"</span></p>
              <p className="text-xs mt-1">Hãy thử với từ khóa ngắn hơn hoặc kiểm tra chính tả tiếng Việt.</p>
            </div>
          )}

          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => handleResultClick(item.targetHref)}
              className="p-3 rounded border border-archive-border/60 bg-archive-parchment hover:bg-archive-ivory transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-archive-stone font-medium">
                  {getCategoryIcon(item.category)}
                  {item.category}
                </span>
                <span className="text-xs text-archive-terracotta opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                  Xem chi tiết <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm text-archive-charcoal group-hover:text-archive-olive transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-archive-umber mt-1 leading-relaxed line-clamp-2">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-archive-border bg-archive-ivory text-[11px] font-mono text-archive-stone flex justify-between items-center">
          <span>{results.length} kết quả phù hợp</span>
          <span>Chuyên khảo Lịch sử Số: Hầm Trú Ẩn Chữ A</span>
        </div>
      </div>
    </div>
  );
};
