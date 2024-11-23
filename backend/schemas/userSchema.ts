// backend/schemas/userSchema.ts
import { z } from 'zod';

// Zod schema for creating a user
export const createUserSchema = z.object({
  username: z.string().min(3).max(50),
  user_password: z.string().min(8), // Ensure strong passwords
  user_role: z.enum(['owner', 'employee', 'Customer']),
  owner_id: z.number().positive(),
});

// Type inferred from Zod schema
export type CreateUserInput = z.infer<typeof createUserSchema>;

