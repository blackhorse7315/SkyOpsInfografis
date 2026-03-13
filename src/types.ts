export type TabType = 'Standard' | 'Instant' | 'Ads' | 'Idea Corner';

export type ToneType = 'Formal' | 'Semi Formal' | 'Casual' | 'Lucu';

export type WatermarkPosition = 'Pojok kanan bawah' | 'Pojok kiri bawah' | 'Pojok kanan atas' | 'Pojok kiri atas' | 'Tengah bawah' | 'Tengah atas';

export type DesignTheme =
  | 'Clean & Minimal'
  | 'Modern'
  | '2D Flat Design'
  | 'Playful'
  | 'Elegant'
  | 'Fun'
  | 'Artistik'
  | '3D Claymorphism'
  | '3D Pixar Style'
  | '3D Illustrated Infographic'
  | 'Paper Graphic'
  | 'Glass Morphism'
  | 'Neon'
  | 'Hand Writing';

export type OutputFormat = 'Feed (1:1)' | 'Portrait (4:5)' | 'Landscape (16:9)' | 'Story (9:16)';

export type InfographicType =
  | 'Timeline'
  | 'Comparison'
  | 'Process'
  | 'List'
  | 'Statistics'
  | 'Flowchart'
  | 'Step Guide';

export interface InstantFormData {
  topic: string;
  tone: ToneType;
  brandCustomization: boolean;
  bgColor: string;
  accentColor: string;
  creatorIdentity: boolean;
  createdBy: string;
  watermarkPosition: WatermarkPosition;
  theme: DesignTheme;
  format: OutputFormat;
}

export interface StandardFormData {
  infographicType: InfographicType;
  theme: DesignTheme;
  brandCustomization: boolean;
  bgColor: string;
  accentColor: string;
  creatorIdentity: boolean;
  createdBy: string;
  watermarkPosition: WatermarkPosition;
  mainTitle: string;
  content: string;
  format: OutputFormat;
}
