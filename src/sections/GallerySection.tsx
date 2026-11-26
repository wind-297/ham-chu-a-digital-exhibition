import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'Tất cả' || item.category === selectedCategory
  );

  return (
    <section id="thu-vien-anh" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            HISTORICAL GALLERY • TƯ LIỆU HÌNH ẢNH
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            KHÔNG GIAN LƯU TRỮ HÌNH ẢNH VÀ HIỆN VẬT
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Tập hợp tư liệu hình ảnh, hiện vật bảo tàng và sơ đồ nhận diện giáo dục có nguồn gốc xác minh rõ ràng.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-archive-olive text-archive-paper font-semibold shadow-2xs'
                  : 'bg-archive-parchment text-archive-charcoal border border-archive-border hover:bg-archive-ivory'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const actualIndex = galleryItems.findIndex(g => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(actualIndex)}
                className="group bg-archive-parchment rounded-lg border border-archive-border overflow-hidden shadow-2xs hover:shadow-archive hover:border-archive-olive transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Artwork / Conceptual Frame */}
                <div className="relative aspect-16/10 bg-archive-dark/90 flex items-center justify-center p-4 overflow-hidden border-b border-archive-border/60">
                  {/* Subtle Graphic Motif inside frame */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-archive-ivory/20 rounded border border-archive-border/30 p-2 text-center group-hover:scale-105 transition-transform duration-300">
                    <span className="font-mono text-[10px] text-archive-ivory uppercase tracking-widest block mb-1">
                      {item.era}
                    </span>
                    <span className="font-serif font-bold text-sm text-archive-paper line-clamp-2 px-2">
                      {item.title}
                    </span>
                    <span className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-archive-charcoal/80 text-archive-stone border border-archive-border/40">
                      {item.badge}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-archive-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-archive-charcoal/90 text-archive-paper text-xs font-mono flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-archive-terracotta" />
                      Phóng to tư liệu
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-archive-stone mb-1">
                      <span>{item.category}</span>
                      <span>MÃ: {item.id.substring(4).toUpperCase()}</span>
                    </div>
                    <h3 className="font-serif font-bold text-sm text-archive-charcoal group-hover:text-archive-olive transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-archive-umber mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-archive-border/50 text-[11px] font-mono text-archive-stone flex items-center justify-between">
                    <span className="truncate max-w-[200px]">{item.credit}</span>
                    <span className="text-archive-terracotta group-hover:underline">Chi tiết</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
