import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import { UserPayload } from '../types/UserPayload';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET) as UserPayload;
    req.user = decoded; // Assign the decoded token to the request object
    next(); // Proceed to the next middleware or route handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
