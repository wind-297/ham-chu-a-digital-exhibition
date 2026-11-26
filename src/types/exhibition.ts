export interface TimelineEvent {
  id: string;
  year: string;
  exactDate?: string;
  title: string;
  location: string;
  tag: string;
  summary: string;
  detailedDescription: string;
  historicalContext: string;
  archivalSource: string;
  verificationLevel: 'verified_document' | 'general_historical_phase';
}

export interface ShelterComponent {
  id: string;
  name: string;
  vietnameseRole: string;
  identificationSignificance: string;
  description: string;
  materialsRecorded: string[];
  historicalFunction: string;
  educationalCaveat: string;
  hotspot: { x: number; y: number };
}

export interface WartimeChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  narrativeParagraphs: string[];
  highlightQuote?: {
    text: string;
    author: string;
    source: string;
  };
  keyArtifacts: string[];
}

export interface GeographicalRegion {
  id: string;
  name: string;
  vietnameseTitle: string;
  strategicRole: string;
  historicalContext: string;
  recordedData: {
    label: string;
    value: string;
    note?: string;
  }[];
  archivalNarrative: string;
  cautions: string;
}

export interface ShelterComparisonItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  morphology: string;
  connection: string;
  duration: string;
  primaryPurpose: string;
  distinctionFromAFrame: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  brief: string;
  detailed: string;
  archivalContext: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceReference: string;
}

export interface ReferenceSource {
  id: string;
  number: number;
  title: string;
  authorOrOrg: string;
  publicationDate: string;
  publicationInfo: string;
  description: string;
  directUrl: string;
  category: 'Văn kiện Đảng' | 'Bách khoa quân sự' | 'Nghiên cứu di sản' | 'Bảo tàng & Di tích' | 'Báo chí & Hồi ức';
}

export interface GalleryItem {
  id: string;
  title: string;
  era: string;
  category: 'Di tích & Trưng bày' | 'Tư liệu thời chiến' | 'Không gian Vĩnh Linh' | 'Bản vẽ nhận diện';
  description: string;
  credit: string;
  license: string;
  sourceNote: string;
  badge: string;
}
