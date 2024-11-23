// backend/types/express.d.ts
import { UserPayload } from './UserPayload';

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; // Add a user property to the Request object
    }
  }
}
