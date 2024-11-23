// backend/types/UserPayload.ts
export interface UserPayload {
    id: number; // User ID
    username: string; // (Optional) You can add more fields based on your token
    iat?: number; // Issued At (JWT default field)
    exp?: number; // Expiration Time (JWT default field)
  }
  