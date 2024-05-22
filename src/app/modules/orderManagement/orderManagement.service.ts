import { orderManagementDataModel } from '../orderManagement.model';
import { Order } from './orderManagement.interface';

// create order
const createOrderDataIntoDB = async (orderData: Order) => {
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