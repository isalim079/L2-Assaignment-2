import { Schema, model } from 'mongoose';
import { Order } from './orderManagement/orderManagement.interface';

const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const orderManagementDataModel = model<Order>(
  'orderCollection',
  orderSchema,
);
