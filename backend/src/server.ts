import express from "express";
import bodyParser from "body-parser";

import { accountRouter } from './routes/accountRouter.js';
import { stockRouter } from './routes/stockRouter.js';
import { orderRouter } from './routes/orderRouter.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/account/', accountRouter);
app.use('/account/:id', accountRouter);  // TODO: test if this extra statement is needed

app.use('/stock/', stockRouter);
app.use('/stock/:id', stockRouter);

app.use('/order/', orderRouter);
app.use('/order/:id', orderRouter);

app.listen(process.env.BACKEND_PORT_INTERNAL, () => {
    console.log(`Server is listening on port ${process.env.BACKEND_PORT_INTERNAL}`);
});
