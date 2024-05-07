import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema.js";
import { pool } from "./db.js";

export const db = drizzle(pool, { schema });

try {
    await migrate(db, { migrationsFolder: "./db/migrations/" });
    console.log("Successfully migrated database");
} catch (error) {
    console.error("Failed to migrate database", error);
}
