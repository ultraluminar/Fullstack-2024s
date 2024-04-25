import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: 'db-service',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export { pool }

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST
});