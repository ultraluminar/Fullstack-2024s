import express, { response } from 'express';

import { getAllStocks, getStock, createStock, removeStock, updateStock } from '../controllers/stockController.js';

export const stockRouter = express.Router();

stockRouter.get('/', getAllStocks);
stockRouter.get('/:id', getStock);

stockRouter.post('/', createStock);

stockRouter.delete('/:id', removeStock);

stockRouter.put('/:id', updateStock);