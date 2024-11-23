export interface User {
    user_id?: number; // Auto-incremented
    username: string;
    user_password: string; // Store hashed passwords
    user_role: 'owner' | 'employee';
    owner_id: number; // Foreign key referencing owner_information
  }
  