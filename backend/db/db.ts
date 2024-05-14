import pg from "pg";
const { Pool } = pg;

import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";

export const pool = new Pool({
    host: process.env.POSTGRES_HOST!,
    port: Number(process.env.POSTGRES_PORT!),
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DB!,
    
    idleTimeoutMillis: 1000,
});

export const db = drizzle(pool, { schema });
