import Sale, { ISale } from '../models/saleModel';

// Create a new sale
export const createSale = async (saleData: Partial<ISale>): Promise<ISale> => {
  const sale = new Sale(saleData);
  return await sale.save();
};

// Get a sale by ID
export const getSaleById = async (id: string): Promise<ISale | null> => {
  return await Sale.findById(id).populate('employee'); // Populate employee field
};

// Update a sale by ID
export const updateSale = async (id: string, saleData: Partial<ISale>): Promise<ISale | null> => {
  return await Sale.findByIdAndUpdate(id, saleData, { new: true }).populate('employee');
};

// Delete a sale by ID
export const deleteSale = async (id: string): Promise<ISale | null> => {
  return await Sale.findByIdAndDelete(id);
};
