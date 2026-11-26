import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types/exhibition';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % items.length;
        onNavigate(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-archive-charcoal/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-archive-paper border border-archive-border rounded-lg shadow-archive-lg overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-3 bg-archive-parchment border-b border-archive-border flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-olive font-semibold">
              {currentItem.badge}
            </span>
            <span className="text-archive-stone">{currentIndex + 1} / {items.length}</span>
            <span className="hidden sm:inline text-archive-stone">• {currentItem.era}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
              className="p-1 rounded hover:bg-archive-ivory text-archive-stone hover:text-archive-charcoal"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-archive-stone w-10 text-center">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.2, z + 0.2))}
              className="p-1 rounded hover:bg-archive-ivory text-archive-stone hover:text-archive-charcoal"
              title="Phóng to"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 ml-2 rounded-full bg-archive-charcoal text-archive-paper hover:bg-archive-charcoal/80"
              title="Đóng (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Display Canvas with Navigation arrows */}
        <div className="relative flex-1 bg-archive-dark/95 flex items-center justify-center p-6 min-h-[300px] overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-archive-charcoal/80 text-archive-paper hover:bg-archive-olive transition-colors border border-archive-border/30"
            title="Ảnh trước (Mũi tên trái)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Conceptual / Visual Render Display */}
          <div 
            className="transition-transform duration-200 ease-out flex flex-col items-center justify-center max-w-full max-h-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Museum Artifact Graphic Frame */}
            <div className="w-[320px] sm:w-[460px] md:w-[540px] aspect-4/3 bg-archive-paper rounded border-2 border-archive-border/80 shadow-2xl p-4 flex flex-col justify-between archival-border">
              {/* Graphic Motif */}
              <div className="flex-1 flex items-center justify-center bg-archive-ivory/50 rounded border border-archive-border/40 p-4">
                <svg viewBox="0 0 200 160" className="w-full h-full max-h-56">
                  {/* Ground layer */}
                  <rect x="0" y="110" width="200" height="50" fill="#EAE3D5" />
                  <line x1="0" y1="110" x2="200" y2="110" stroke="#665344" strokeWidth="2" />
                  {/* Sunken pit */}
                  <rect x="50" y="90" width="100" height="40" fill="#665344" rx="2" />
                  <rect x="56" y="94" width="88" height="32" fill="#262723" rx="2" />
                  {/* A-Frame Struts */}
                  <polygon points="100,28 40,110 56,110 100,52 144,110 160,110" fill="#A65F4B" />
                  {/* Roof cover */}
                  <polygon points="100,20 30,114 42,114 100,34 158,114 170,114" fill="#41483A" opacity="0.85" />
                  <rect x="68" y="76" width="64" height="6" fill="#665344" rx="1" />
                  {/* Archival Stamp */}
                  <circle cx="165" cy="40" r="18" fill="none" stroke="#A65F4B" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="165" y="38" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#A65F4B" fontWeight="bold">BTQP</text>
                  <text x="165" y="46" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#A65F4B">1965</text>
                </svg>
              </div>

              {/* Caption on frame bottom */}
              <div className="mt-3 pt-2 border-t border-archive-border/60 flex items-center justify-between text-[11px] font-mono text-archive-stone">
                <span>MÃ TƯ LIỆU: {currentItem.id.toUpperCase()}</span>
                <span>BẢO TÀNG LƯU TRỮ</span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-archive-charcoal/80 text-archive-paper hover:bg-archive-olive transition-colors border border-archive-border/30"
            title="Ảnh tiếp theo (Mũi tên phải)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Detailed Caption and Source Information */}
        <div className="p-4 bg-archive-paper border-t border-archive-border">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h3 className="font-serif font-bold text-base text-archive-charcoal">
                {currentItem.title}
              </h3>
              <p className="text-xs text-archive-umber mt-1 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-archive-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-archive-stone">
            <div>
              <strong className="text-archive-olive">Nguồn tư liệu:</strong> {currentItem.credit}
            </div>
            <div>
              <strong className="text-archive-olive">Ghi chú bảo tàng:</strong> {currentItem.sourceNote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
