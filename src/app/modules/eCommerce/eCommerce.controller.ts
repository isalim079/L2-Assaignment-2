import { Request, Response } from 'express';
import { eCommerceServices } from './eCommerce.service';

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

export const eCommerceControllers = {
    createECommerceData
}
