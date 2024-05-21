import { Schema, model } from 'mongoose';
import {
  EcommerceData,
  Inventory,
  Variants,
} from './eCommerce/eCommerce.interface';

const variantsSchema = new Schema<Variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const eCommerceDataSchema = new Schema<EcommerceData>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: [variantsSchema],
  inventory: inventorySchema,
});

export const ECommerceDataModel = model<EcommerceData>('productsCollection', eCommerceDataSchema)
