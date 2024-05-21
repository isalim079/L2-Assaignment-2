import express from 'express'
import { eCommerceControllers } from './eCommerce.controller'

const router = express.Router()

router.post('/api/products', eCommerceControllers.createECommerceData)
router.get('/api/products', eCommerceControllers.getProductListsFromDB)
router.get('/api/products/:productId', eCommerceControllers.getSingleProductFromDB)

export const eCommerceRoutes = router