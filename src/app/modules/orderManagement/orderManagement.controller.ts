import { Request, Response } from 'express';
import { orderServices } from './orderManagement.service';

// Insert order
const createOrderData = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrderDataIntoDB(orderData);

    if ('success' in result && !result.success) {
      return res.status(400).json(result);
    }

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get order data
const getOrdersFromDB = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (email) {
    try {
      const result = await orderServices.searchOrderFromDB(email.toString());
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const result = await orderServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const orderController = {
  createOrderData,
  getOrdersFromDB,
};
