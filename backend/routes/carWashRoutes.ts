import express from 'express';
import { createCarWash, getCarWashes, getCarWashData } from '../controllers/carWashController';
//import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Create a new car wash
router.post('/', createCarWash);

// Get all car washes
router.get('/', getCarWashes);

router.get('/car-wash-data', getCarWashData);

export default router;
