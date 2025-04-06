export interface AppointmentData {
    id?: number | null;
    dentalServiceSectionId?: number | null;
    firstName: string;
    lastName: string;
    phone1: string;
    phone2?: string;  
    email: string;
    availableTime: string;
    comment?: string; 
    language?: string;
    isNew?: boolean;
  }
  