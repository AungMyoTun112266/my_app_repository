import { createSale, getSaleById, updateSale, deleteSale } from '../repositories/saleRepository';
import { ISale } from '../models/saleModel';

// Service to create a new sale
export const registerSale = async (saleData: Partial<ISale>): Promise<ISale> => {
  return await createSale(saleData);
};

// Service to fetch a sale by ID
export const fetchSaleById = async (id: string): Promise<ISale | null> => {
  return await getSaleById(id);
};

// Service to update a sale by ID
export const modifySale = async (id: string, saleData: Partial<ISale>): Promise<ISale | null> => {
  return await updateSale(id, saleData);
};

// Service to delete a sale by ID
export const removeSale = async (id: string): Promise<ISale | null> => {
  return await deleteSale(id);
};
