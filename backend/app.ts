import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ownerRoutes from './routes/ownerRoutes';
import userRoutes from './routes/userRoutes';
import carWashRoutes from './routes/carWashRoutes';
import tradingHoursRoutes from './routes/tradingHoursRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/owners', ownerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carwashes', carWashRoutes);
app.use('/api/tradinghours', tradingHoursRoutes);

export default app;
