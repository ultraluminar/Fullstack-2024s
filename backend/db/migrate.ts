import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db.js";

try {
    await migrate(db, { migrationsFolder: "./db/migrations/" });
    console.log("Successfully migrated database");
} catch (error) {
    console.error("Failed to migrate database", error);
}
