import express from 'express';
import { createTradingHour, getTradingHours } from '../controllers/tradingHoursController';
//import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Create trading hours
router.post('/', createTradingHour);

// Get all trading hours
router.get('/', getTradingHours);

export default router;
