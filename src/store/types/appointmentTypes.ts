export interface AppointmentData {
    id?: number;
    dentalServiceId: number;
    firstName: string;
    lastName: string;
    phone1: string;
    phone2?: string;  
    email: string;
    availableTime: string;
    comment?: string; 
    language?: string;
    isNew?: boolean;
    // createdAt?: string;
  }
  