import { Request, Response } from 'express';
import { eCommerceServices } from './eCommerce.service';

// Insert products data
const createECommerceData = async (req: Request, res: Response) => {
  try {
    const eCommerceData = req.body;
    const result =
      await eCommerceServices.createECommerceDataIntoDB(eCommerceData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get products lists
const getProductListsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await eCommerceServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single product
const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await eCommerceServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const eCommerceControllers = {
  createECommerceData,
  getProductListsFromDB,
  getSingleProductFromDB,
};
