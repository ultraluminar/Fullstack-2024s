import express, { request, response } from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
app.use('/:id', router);


app.listen(process.env.SERVER_PORT_INTERN, () => {
    console.log(`Server listening on port: ${process.env.SERVER_PORT_INTERN}.`)
});