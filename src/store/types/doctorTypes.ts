// doctorTypes.ts або в іншому відповідному файлі

// export interface Doctor {
//     id: number;
//     full_name: string;
//     topimage: string;
//     [key: string]: string | number | undefined; // Для інших полів, наприклад, спеціалізацій по мові
//   }
  
export interface Doctor {
  id: number;
  title_de: string;
  title_en: string;
  title_ru: string;
  full_name: string;
  biography_de: string;
  biography_en: string;
  biography_ru: string;
  specialisation_de: string;
  specialisation_en: string;
  specialisation_ru: string;
  topimage: string;
  isActive: boolean;
  images?: { id: number; path: string }[]; 
}
