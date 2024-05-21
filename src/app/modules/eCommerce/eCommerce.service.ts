import { ECommerceDataModel } from "../eCommerce.model";
import { EcommerceData } from "./eCommerce.interface";

const createECommerceDataIntoDB = async (eCommerceData: EcommerceData) => {
    const result = await ECommerceDataModel.create(eCommerceData)
    return result
}

export const eCommerceServices = {
    createECommerceDataIntoDB,
}