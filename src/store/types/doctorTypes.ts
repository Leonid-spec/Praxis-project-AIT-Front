// doctorTypes.ts або в іншому відповідному файлі

export interface Doctor {
    id: number;
    full_name: string;
    topimage: string;
    [key: string]: string | number | undefined; // Для інших полів, наприклад, спеціалізацій по мові
  }
  