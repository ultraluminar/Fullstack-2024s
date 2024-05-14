import pg from "pg";
const { Pool } = pg;

import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

import { accounts } from "./schema/account.js";
import { stocks } from "./schema/stock.js";
import { orders } from "./schema/order.js";

export const pool = new Pool({
    host: process.env.POSTGRES_HOST!,
    port: Number(process.env.POSTGRES_PORT!),
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DB!,
    
    idleTimeoutMillis: 1000,
});

const schema = { accounts, stocks, orders };
export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
