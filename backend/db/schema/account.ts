import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const accounts = pgTable(
    "accounts",
    {
        id: serial('id').primaryKey(),
        username: text('username').unique().notNull(),
        email: text('email').unique().notNull(),
        password: text('passwort').notNull(),
        fullName: text('fullName').notNull()
    }
);

export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;