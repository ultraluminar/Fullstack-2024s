import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    //host: 'db-service',
    //port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

//TODO: complete pg orm