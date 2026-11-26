import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Printer, 
  Menu, 
  X, 
  Compass
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenReadingMode: () => void;
  onOpenGlossary: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenReadingMode,
  onOpenGlossary,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'tong-quan', label: 'Nhận diện', href: '#tong-quan' },
    { id: 'lich-su', label: 'Lịch sử', href: '#lich-su' },
    { id: 'vai-tro', label: 'Vai trò', href: '#vai-tro' },
    { id: 'cau-tao', label: 'Cấu tạo', href: '#cau-tao' },
    { id: 'doi-song', label: 'Đời sống', href: '#doi-song' },
    { id: 'dia-ban', label: 'Địa bàn', href: '#dia-ban' },
    { id: 'gia-tri', label: 'Giá trị', href: '#gia-tri' },
    { id: 'tu-lieu', label: 'Tài liệu', href: '#tu-lieu' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-archive-paper/95 backdrop-blur-md shadow-sm border-b border-archive-border py-2.5' 
        : 'bg-archive-paper/80 backdrop-blur-xs border-b border-archive-border/40 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Artifact Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-archive-olive text-archive-paper flex items-center justify-center font-serif text-lg sm:text-xl font-bold shadow-sm transition-transform group-hover:scale-105 border border-archive-umber shrink-0">
              A
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-archive-terracotta font-semibold leading-none mb-0.5">
                ẤN PHẨM LỊCH SỬ SỐ
              </span>
              <div className="font-serif text-sm sm:text-lg font-bold text-archive-charcoal leading-tight whitespace-nowrap">
                HẦM TRÚ ẨN CHỮ A
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-archive-umber">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'text-archive-olive font-semibold bg-archive-ivory border-b-2 border-archive-terracotta' 
                      : 'hover:text-archive-charcoal hover:bg-archive-ivory/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              title="Tìm kiếm nội dung (Ctrl+K)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-archive-border bg-archive-parchment hover:bg-archive-ivory text-archive-charcoal text-xs font-mono transition-colors shadow-2xs"
            >
              <Search className="w-3.5 h-3.5 text-archive-umber" />
              <span className="hidden sm:inline">Tìm kiếm</span>
              <kbd className="hidden md:inline-block px-1 py-0.2 bg-white/70 border border-archive-border rounded text-[10px] text-archive-stone">⌘K</kbd>
            </button>

            {/* Glossary Trigger */}
            <button
              onClick={onOpenGlossary}
              title="Tra cứu từ điển thuật ngữ"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-archive-border bg-archive-parchment hover:bg-archive-ivory text-archive-charcoal text-xs font-medium transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-archive-olive" />
              <span className="hidden sm:inline">Thuật ngữ</span>
            </button>

            {/* Reading Mode Trigger */}
            <button
              onClick={onOpenReadingMode}
              title="Chế độ đọc tập trung"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-archive-olive text-archive-paper hover:bg-archive-olive/90 text-xs font-medium transition-colors shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-archive-ivory" />
              <span className="hidden sm:inline">Chế độ đọc</span>
            </button>

            {/* Print Trigger */}
            <button
              onClick={handlePrint}
              title="In hoặc Lưu PDF"
              className="hidden lg:flex items-center justify-center p-1.5 rounded border border-archive-border bg-archive-parchment hover:bg-archive-ivory text-archive-umber text-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded border border-archive-border bg-archive-parchment hover:bg-archive-ivory text-archive-charcoal"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-archive-border/70 bg-archive-paper rounded-b-lg shadow-archive animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium mb-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded border border-archive-border/60 ${
                    activeSection === item.id 
                      ? 'bg-archive-olive text-archive-paper font-semibold' 
                      : 'bg-archive-parchment text-archive-charcoal hover:bg-archive-ivory'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 px-2 border-t border-archive-border/50 flex items-center justify-between text-xs text-archive-umber font-mono">
              <span className="truncate mr-2">TƯ LIỆU LỊCH SỬ QUÂN SỰ</span>
              <button onClick={handlePrint} className="flex items-center gap-1 text-archive-olive hover:underline">
                <Printer className="w-3.5 h-3.5" />
                In tư liệu
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
