import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ReadingProgress } from './components/ReadingProgress';
import { SearchModal } from './components/SearchModal';
import { ReadingModeModal } from './components/ReadingModeModal';
import { GlossaryModal } from './components/GlossaryModal';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';

import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { TimelineSection } from './sections/TimelineSection';
import { RoleSection } from './sections/RoleSection';
import { StructureSection } from './sections/StructureSection';
import { WartimeLifeSection } from './sections/WartimeLifeSection';
import { GeographySection } from './sections/GeographySection';
import { ComparisonSection } from './sections/ComparisonSection';
import { ValueSection } from './sections/ValueSection';
import { GallerySection } from './sections/GallerySection';
import { QuizSection } from './sections/QuizSection';
import { ReferencesSection } from './sections/ReferencesSection';

import { galleryItems } from './data/gallery';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('tong-quan');
  const [activeLabel, setActiveLabel] = useState<string>('01. Nhận diện hiện vật');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReadingModeOpen, setIsReadingModeOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Global Keyboard Shortcuts (Ctrl+K or Cmd+K for search)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // ScrollSpy for Active Section
  useEffect(() => {
    const sectionElements = [
      { id: 'tong-quan', label: '01. Nhận diện hiện vật' },
      { id: 'lich-su', label: '02. Hành trình lịch sử' },
      { id: 'vai-tro', label: '03. Công dụng và vai trò' },
      { id: 'cau-tao', label: '04. Khám phá đặc điểm cấu tạo' },
      { id: 'doi-song', label: '05. Đời sống dưới mái hầm' },
      { id: 'dia-ban', label: '06. Những địa bàn lịch sử' },
      { id: 'so-sanh', label: '07. So sánh các loại công trình' },
      { id: 'gia-tri', label: '08. Giá trị lịch sử & Quốc phòng' },
      { id: 'thu-vien-anh', label: 'Tư liệu hình ảnh & Hiện vật' },
      { id: 'kiem-tra-kien-thuc', label: 'Trải nghiệm tìm hiểu hiện vật' },
      { id: 'tu-lieu', label: '09. Tư liệu tham khảo chính thức' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            const match = sectionElements.find(s => s.id === entry.target.id);
            if (match) setActiveLabel(match.label);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    sectionElements.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-archive-paper text-archive-charcoal selection:bg-archive-terracotta/20 selection:text-archive-charcoal">
      {/* Sticky Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenReadingMode={() => setIsReadingModeOpen(true)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        activeSection={activeSection}
      />

      {/* Top Reading Progress Bar & Status Pill */}
      <ReadingProgress 
        currentSectionLabel={activeLabel} 
        isModalOpen={isSearchOpen || isReadingModeOpen || isGlossaryOpen || lightboxIndex !== null}
      />

      {/* Main Exhibition Sections */}
      <main className="flex-1">
        {/* Section 01: Hero Cover */}
        <HeroSection 
          onOpenReadingMode={() => setIsReadingModeOpen(true)} 
          onOpenSearch={() => setIsSearchOpen(true)} 
        />

        {/* Section 02: Overview & Identification */}
        <OverviewSection />

        {/* Section 03: Historical Timeline */}
        <TimelineSection />

        {/* Section 04: Purpose & Role */}
        <RoleSection />

        {/* Section 05: Structure Explorer */}
        <StructureSection />

        {/* Section 06: Life in Wartime */}
        <WartimeLifeSection />

        {/* Section 07: Geographical Context */}
        <GeographySection />

        {/* Section 08: Historical Comparison */}
        <ComparisonSection />

        {/* Section 09: Historical Value */}
        <ValueSection />

        {/* Historical Image & Artifact Gallery */}
        <GallerySection onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* Educational Knowledge Check */}
        <QuizSection />

        {/* Section 10: References & Museum Notes */}
        <ReferencesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <ReadingModeModal 
        isOpen={isReadingModeOpen} 
        onClose={() => setIsReadingModeOpen(false)} 
      />

      <GlossaryModal 
        isOpen={isGlossaryOpen} 
        onClose={() => setIsGlossaryOpen(false)} 
      />

      <LightboxModal 
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};

export default App;
