import { Request, Response } from 'express';
import db from '../config/db';
//import { getCarWashData } from '../models/carWashModel';


// Create a new car wash
export const createCarWash = async (req: Request, res: Response) => {
  const {
    nacwo_membership_number,
    car_wash_name,
    registered_business_name,
    registration_no,
    sars_pin,
    business_bank_account,
    business_type,
    business_premises,
    business_level,
    owner_id,
  } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO car_wash_information 
      (nacwo_membership_number, car_wash_name, registered_business_name, registration_no, sars_pin, 
      business_bank_account, business_type, business_premises, business_level, owner_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nacwo_membership_number,
        car_wash_name,
        registered_business_name,
        registration_no,
        sars_pin,
        business_bank_account,
        business_type,
        business_premises,
        business_level,
        owner_id,
      ]
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(201).json({ message: 'Car wash created', id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create car wash', error });
  }
};

// Get all car washes
export const getCarWashes = async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM car_wash_information');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch car washes', error });
  }
};
export async function getCarWashData(req: Request, res: Response) {
  try {
      // Simulating fetching car wash data from the database
      const carWashData = { name: "Super Clean Car Wash", location: "Downtown" };
      res.json({ success: true, data: carWashData });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car wash data' });
  }
}