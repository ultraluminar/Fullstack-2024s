import express, { response } from 'express';

import { getAllOrders, getOrder, createOrder, removeOrder, updateOrder } from '../controllers/orderController.js';

export const orderRouter = express.Router();

orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrder);

orderRouter.post('/', createOrder);

orderRouter.delete('/:id', removeOrder);

orderRouter.put('/:id', updateOrder);