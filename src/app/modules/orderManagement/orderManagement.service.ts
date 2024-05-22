import { ECommerceDataModel } from '../eCommerce.model';
import { orderManagementDataModel } from '../orderManagement.model';
import { Order } from './orderManagement.interface';

// create order
const createOrderDataIntoDB = async (orderData: Order) => {
  const product = await ECommerceDataModel.findById(orderData.productId);

  if (!product) {
    return { success: false, message: 'Product not found' };
  }

  if (product.inventory.quantity < orderData.quantity) {
    return {
      success: false,
      message: 'Insufficient quantity available in inventory',
    };
  }

  const updatedQuantity = product.inventory.quantity - orderData.quantity;
  const inStock = updatedQuantity > 0;

  const updatedProduct = await ECommerceDataModel.findByIdAndUpdate(
    orderData.productId,
    {
      $set: {
        'inventory.quantity': updatedQuantity,
        'inventory.inStock': inStock,
      },
    },
    { new: true, runValidators: true },
  );

  if (!updatedProduct) {
    return { success: false, message: 'Product not updated' };
  }

  const result = await orderManagementDataModel.create(orderData);
  return result;
};

// get all orders
const getAllOrdersFromDB = async () => {
  const result = await orderManagementDataModel.find();
  return result;
};

// search order by email
const searchOrderFromDB = async (email: string) => {
  const result = await orderManagementDataModel.find({ email });
  return result;
};

export const orderServices = {
  createOrderDataIntoDB,
  getAllOrdersFromDB,
  searchOrderFromDB,
};
