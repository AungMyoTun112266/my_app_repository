import mongoose, { Document, Schema } from 'mongoose';
import { IEmployee } from './employeeModel'; // Import the IEmployee interface

export interface ISale extends Document {
  employee: IEmployee['_id']; // Reference to the employee who made the sale
  amount: number;
  date: Date;
}

const SaleSchema: Schema = new Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const Sale = mongoose.model<ISale>('Sale', SaleSchema);

export default Sale;
