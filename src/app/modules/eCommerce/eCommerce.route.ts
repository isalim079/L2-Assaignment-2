import express from 'express'
import { eCommerceControllers } from './eCommerce.controller'

const router = express.Router()

router.post('/api/products', eCommerceControllers.createECommerceData)

export const eCommerceRoutes = router