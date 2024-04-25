import express, { request, response } from 'express';
import bodyParser from 'body-parser';

import { getAllUsers, getCustomerByID, addCustomer } from './controllers/user.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (request, response) => {
    try {
        await getAllUsers(request, response);
    } catch (error){
        console.log('Unable to GET: ', error);
    }
});

/* TODO: getCustomerByID */

app.post('/', async (request, response) => {
    try {
        await addCustomer(request, response);
    } catch (error) {
        console.log('Unable to add User', error);
    }
});


app.listen(process.env.SERVER_PORT_INTERN, () => {
    console.log(`Server listening on port: ${process.env.SERVER_PORT_INTERN}.`)
});