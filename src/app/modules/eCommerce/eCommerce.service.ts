import { Types } from 'mongoose';
import { ECommerceDataModel } from '../eCommerce.model';
import { EcommerceData } from './eCommerce.interface';

// Insert product
const createECommerceDataIntoDB = async (eCommerceData: EcommerceData) => {
  const result = await ECommerceDataModel.create(eCommerceData);
  return result;
};

// Get All Product
const getAllProductsFromDB = async () => {
  const result = await ECommerceDataModel.find();
  return result;
};

// get single product
const getSingleProductFromDB = async(id: string) => {
    const objectId = new Types.ObjectId(id)
    const result = await ECommerceDataModel.findById(objectId)
    return result
}

export const eCommerceServices = {
  createECommerceDataIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB
};
