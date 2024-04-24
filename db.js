import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: 'db-service',
    port: 5432,
    user: 'db-user',
    password: 'db-password',
    database: 'db-database'
});

export { pool }