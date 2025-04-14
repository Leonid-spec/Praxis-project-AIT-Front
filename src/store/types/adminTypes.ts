export interface AdminDto {
    id?: number;
    login: string;
    password?: string;
  }

  export interface ChangePasswordDto {
    login: string;
    oldPassword: string;
    newPassword: string;
  }
  
  export interface TokenResponseDto {
    login: string;
    token: string;
  }
  
  export interface RefreshRequestDto {
    refreshToken: string;
  }