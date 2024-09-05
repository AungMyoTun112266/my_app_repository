import express from 'express';
import {
  registerSaleController,
  getSaleByIdController,
  updateSaleController,
  deleteSaleController,
} from '../controllers/saleController';

const router = express.Router();

// Routes
router.post('/sales', registerSaleController); // Create a new sale
router.get('/sales/:id', getSaleByIdController); // Get a sale by ID
router.put('/sales/:id', updateSaleController); // Update a sale by ID
router.delete('/sales/:id', deleteSaleController); // Delete a sale by ID

export default router;
