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

import Sequelize from "sequelize";

