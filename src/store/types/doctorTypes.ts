export interface Doctor {
  id: number;
  fullName: string;
  titleDe: string;
  titleEn: string;
  titleRu: string;
  biographyDe: string;
  biographyEn: string;
  biographyRu: string;
  specialisationDe: string;
  specialisationEn: string;
  specialisationRu: string;
  topImage: string;
  isActive: boolean;
  images?: { id: number; path: string }[]; 
}