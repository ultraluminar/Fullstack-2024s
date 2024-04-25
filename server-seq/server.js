import express, { request, response } from 'express';
//import { pool } from './db.js';

import { sequelize } from './db.js';
import './userModel.js';

const app = express();
app.use(express.json());

/*
app.get('/', async (request, response) => {
    try {
        const data = await pool.query('SELECT * FROM dbtable');
        response.status(200).send(data.rows);
    } catch (error){
        console.log(error);
        response.sendStatus(500);
    }
});

app.post('/', async (request, response) => {
    const user = request.body.user;
    const password = request.body.password;

    try {
        await pool.query('INSERT INTO dbtable ("user", "password") VALUES ($1, $2)', [user, password]);
        response.status(200).send(`Successfully added user ${user}.`);
    } catch (error){
        console.log(error);
        response.sendStatus(500);
    }
});

app.get('/setup', async (request, response) => {
    try {
        await pool.query('CREATE TABLE dbtable (id SERIAL PRIMARY KEY, "user" VARCHAR(100), "password" VARCHAR(100))');
        response.status(200).send(`Successfully created table: dbtable.`);
    } catch (error){
        console.log(error);
        response.sendStatus(500);
    }
});
*/
app.listen(process.env.SERVER_PORT_INTERN, () => {
    console.log(`Server listening on port: ${process.env.SERVER_PORT_INTERN}.`)
});