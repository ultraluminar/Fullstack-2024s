import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema.js";

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: process.env.POSTGRES_HOST!,
    port: Number(process.env.BACKEND_PORT!),
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DB!
});

// try {
//     await pool.connect();
//     console.log("Successfully connected to database");
// } catch (error) {
//     console.error("Failed to connect to database", error);
// }

export const db = drizzle(pool, { schema });

try {
    await migrate(db, { migrationsFolder: "./migrations/" });
    console.log("Successfully migrated database");
} catch (error) {
    console.error("Failed to migrate database", error);
}
