import { Request, Response } from 'express';
import db from '../config/db';
import bcrypt from 'bcrypt';
import { CreateUserInput } from '../schemas/userSchema';


// Create a new user
export const createUser = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
  const { username, user_password, user_role, owner_id } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(user_password, 10);

    const [result] = await db.query(
      'INSERT INTO users (username, user_password, user_role, owner_id) VALUES (?, ?, ?, ?)',
      [username, hashedPassword, user_role, owner_id]
    );

    res.status(201).json({ message: 'User created', id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error });
  }
};

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// User login
export const loginUser = async (req: Request, res: Response) => {
  const { username, user_password } = req.body;

  try {
    const [rows]: any = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];

    if (user && (await bcrypt.compare(user_password, user.user_password))) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};
