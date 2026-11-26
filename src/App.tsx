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
import { ValueSection } from './sections/ValueSection';
import { QuizSection } from './sections/QuizSection';
import { ReferencesSection } from './sections/ReferencesSection';

import { galleryItems } from './data/gallery';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('tong-quan');
  const [activeLabel, setActiveLabel] = useState<string>('Nhận diện hiện vật');
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
      { id: 'tong-quan', label: 'Nhận diện hiện vật' },
      { id: 'lich-su', label: 'Lịch sử hình thành' },
      { id: 'vai-tro', label: 'Vai trò phòng không' },
      { id: 'cau-tao', label: 'Cấu tạo & Vật liệu' },
      { id: 'doi-song', label: 'Đời sống dưới mái hầm' },
      { id: 'dia-ban', label: 'Địa bàn trọng điểm' },
      { id: 'gia-tri', label: 'Giá trị lịch sử' },
      { id: 'tu-lieu', label: 'Tài liệu tham khảo' },
      { id: 'kiem-tra-kien-thuc', label: 'Trắc nghiệm lịch sử' },
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

        {/* Section 02: Overview & Identification (includes comparative distinctions) */}
        <OverviewSection />

        {/* Section 03: Historical Timeline */}
        <TimelineSection />

        {/* Section 04: Purpose & Role */}
        <RoleSection />

        {/* Section 05: Structure & Materials Explorer */}
        <StructureSection />

        {/* Section 06: Life in Wartime */}
        <WartimeLifeSection />

        {/* Section 07: Geographical Context */}
        <GeographySection />

        {/* Section 08: Historical Value & Defense Significance */}
        <ValueSection />

        {/* Educational Knowledge Check */}
        <QuizSection />

        {/* Section 09: Archival References & Bibliography */}
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
