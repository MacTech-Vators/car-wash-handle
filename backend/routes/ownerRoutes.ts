import express from 'express';
import { createOwner, getOwners } from '../controllers/ownerController';

const router = express.Router();

router.post('/', createOwner); // Add a new owner
router.get('/', getOwners);    // Fetch all owners

export default router;
