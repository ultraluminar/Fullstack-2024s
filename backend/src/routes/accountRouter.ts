import express, { response } from 'express';

import { AccountController } from '../controllers/accountController.js';

export const accountRouter = express.Router();

accountRouter.get('/', AccountController.getAll);
accountRouter.get('/:id', AccountController.get);

accountRouter.post('/', AccountController.create);

accountRouter.delete('/:id', AccountController.remove);

accountRouter.put('/:id', AccountController.update);