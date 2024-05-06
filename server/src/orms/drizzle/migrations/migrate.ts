import { migrate } from "drizzle-orm/node-postgres/migrator";

import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../schema.js'

import pg from 'pg';
const { Client } = pg;


const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

try {
    await client.connect();
    console.log('Successfully connected to database.');
} catch (error) {
    console.error('Unable to connect to database: \n', error);
}

export const db = drizzle(client, { schema });

try {
    await migrate(db, { migrationsFolder: 'src/orms/drizzle/migrations/' });
    console.log('Successfully tried migrating.')
} catch (error){
    console.error('Unable to migrate: \n', error)
} finally {
    client.end();
}