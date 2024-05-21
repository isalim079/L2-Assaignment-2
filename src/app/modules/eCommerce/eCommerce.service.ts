import { ECommerceDataModel } from "../eCommerce.model";
import { EcommerceData } from "./eCommerce.interface";

// Insert product
const createECommerceDataIntoDB = async (eCommerceData: EcommerceData) => {
    const result = await ECommerceDataModel.create(eCommerceData)
    return result
}

// Get All Product
const getAllProductsFromDB = async() => {
    const result = await ECommerceDataModel.find()
    return result
}



export const eCommerceServices = {
    createECommerceDataIntoDB,
    getAllProductsFromDB,
}