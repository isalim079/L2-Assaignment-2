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
const getSingleProductFromDB = async (id: string) => {
  const objectId = new Types.ObjectId(id);
  const result = await ECommerceDataModel.findById(objectId);
  return result;
};

// update product information
const updateProductInfoFromDB = async (
  id: string,
  updateInfo: EcommerceData,
) => {
  const objectId = new Types.ObjectId(id);
  const updatedData = {
    $set: {
      name: updateInfo.name,
      description: updateInfo.description,
      price: updateInfo.price,
      category: updateInfo.category,
      tags: updateInfo.tags,
      variants: updateInfo.variants,
      inventory: updateInfo.inventory,
    },
  };
  const result = ECommerceDataModel.findOneAndUpdate(
    { _id: objectId },
    updatedData,
    { new: true, runValidators: true },
  );
  return result;
};

// delete product information
const deleteProductInfoFromDB = async (id: string) => {
    const objectId = new Types.ObjectId(id)
    const result = await ECommerceDataModel.deleteOne(objectId)
    return result
}

export const eCommerceServices = {
  createECommerceDataIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInfoFromDB,
  deleteProductInfoFromDB
};
