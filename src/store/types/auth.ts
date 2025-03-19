export enum UserRole {
    CLIENT = 'CLIENT',
    SPECIALIST = 'SPECIALIST',
    ADMINISTRATOR = 'ADMINISTRATOR',
}

export interface User {
    id: string;
    email: string;
    role: UserRole;
}

