import { Request, Response } from 'express';
import { registerSale, fetchSaleById, modifySale, removeSale } from '../services/saleService';

// Controller to create a new sale
export const registerSaleController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const sale = await registerSale(req.body);
    return res.status(201).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating sale' });
  }
};

// Controller to get a sale by ID
export const getSaleByIdController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const sale = await fetchSaleById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching sale' });
  }
};

// Controller to update a sale by ID
export const updateSaleController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const sale = await modifySale(req.params.id, req.body);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating sale' });
  }
};

// Controller to delete a sale by ID
export const deleteSaleController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const sale = await removeSale(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json({ message: 'Sale deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting sale' });
  }
};
