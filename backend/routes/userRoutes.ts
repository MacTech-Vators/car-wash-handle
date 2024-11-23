import express from 'express';
import { createUser, getUsers, loginUser } from '../controllers/userController';
//import { authenticate } from '../middleware/authMiddleware';
import { validationMiddleware } from '../middleware/validationMiddleware';
import { createUserSchema } from '../schemas/userSchema';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Login user
router.post('/login', loginUser);
// Use validationMiddleware to validate request body before calling the controller
router.post('/', validationMiddleware(createUserSchema), createUser);


export default router;
