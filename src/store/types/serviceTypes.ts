export interface Service {
  id: number;
  descriptionDe?: string;
  descriptionEn?: string;
  descriptionRu?: string;
  titleDe?: string;
  titleEn?: string;
  titleRu?: string;
  topImage?: string;
  isActive?: string;
  images?: { id: number; path: string }[];
}
