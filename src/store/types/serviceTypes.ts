export interface ServiceData {
  [key: string]: any;
  id?: number;
  titleDe: string;
  titleEn: string;
  titleRu: string;
  descriptionDe: string;
  descriptionEn: string;
  descriptionRu: string;
  topImage: string;
  isActive?: boolean;
  images?: { id: number; path: string }[];
}
