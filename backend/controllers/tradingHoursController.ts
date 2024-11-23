import { Request, Response } from 'express';
import db from '../config/db';

// Create trading hours
export const createTradingHour = async (req: Request, res: Response) => {
  const { car_wash_id, day, start_time, end_time } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO trading_hours (car_wash_id, day, start_time, end_time) VALUES (?, ?, ?, ?)',
      [car_wash_id, day, start_time, end_time]
    );

    res.status(201).json({ message: 'Trading hour created', id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create trading hour', error });
  }
};

// Get all trading hours
export const getTradingHours = async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM trading_hours');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch trading hours', error });
  }
};
