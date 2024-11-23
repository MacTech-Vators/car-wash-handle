/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
//import app from './app';
import './config/db'; // Ensure DB is connected
import cors from 'cors';
import ownerRoutes from './routes/ownerRoutes';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
//const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post('/', (req: { body: { id_number: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; }; }) => {
  const { id_number } = req.body;

  // Example validation for South African ID
  const idRegex = /^[0-9]{13}$/; // Adjust regex for your needs
  if (!idRegex.test(id_number)) {
    return res.status(400).json({ error: "Invalid South African ID number" });
  }
// Mock response
res.status(200).json({ message: "Data submitted successfully" });
});

// Run server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
}));

app.use('/', ownerRoutes);
