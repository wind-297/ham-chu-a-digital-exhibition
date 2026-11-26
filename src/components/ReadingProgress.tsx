import React, { useState, useEffect } from 'react';
import { ArrowUp, BookMarked } from 'lucide-react';

interface ReadingProgressProps {
  currentSectionLabel: string;
  isModalOpen?: boolean;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ currentSectionLabel, isModalOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isModalOpen) return null;

  return (
    <>
      {/* Top thin reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-archive-border/40 z-50 pointer-events-none">
        <div 
          className="h-full bg-archive-terracotta transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating status pill on bottom-left for reading status */}
      <div className="no-print fixed bottom-4 left-4 z-20 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-archive-charcoal/90 text-archive-paper text-[11px] font-mono shadow-archive backdrop-blur-sm border border-archive-border/30 pointer-events-none">
        <BookMarked className="w-3.5 h-3.5 text-archive-terracotta" />
        <span className="text-archive-stone font-semibold">{Math.round(scrollProgress)}%</span>
        <span className="text-white/40">|</span>
        <span className="text-white/90 truncate max-w-[280px]">
          {currentSectionLabel || 'Hầm Trú Ẩn Chữ A'}
        </span>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Quay lên đầu trang"
          aria-label="Quay lên đầu trang"
          className="no-print fixed bottom-4 right-4 z-30 p-2.5 rounded-full bg-archive-olive text-archive-paper shadow-archive hover:bg-archive-olive/90 transition-all duration-200 border border-archive-border group animate-in fade-in zoom-in-90 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  );
};
