import express from 'express'
import { orderController } from './orderManagement.controller'

const router = express.Router()

router.post('/api/orders', orderController.createOrderData)
router.get('/api/orders', orderController.getOrdersFromDB)

export const orderRoutes = router