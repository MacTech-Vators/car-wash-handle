import { Request, Response } from 'express';
import db from '../config/db';

export const createOwner = async (req: Request, res: Response) => {
  const { id_number, name_surname, date_of_birth, age_range, gender, contact_number, email_address, nacwo_joining_date } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO owner_information (id_number, name_surname, date_of_birth, age_range, gender, contact_number, email_address, nacwo_joining_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id_number, name_surname, date_of_birth, age_range, gender, contact_number, email_address, nacwo_joining_date]
    );
    res.status(201).json({ message: 'Owner created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create owner', error });
  }
};

export const getOwners = async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM owner_information');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch owners', error });
  }
};
