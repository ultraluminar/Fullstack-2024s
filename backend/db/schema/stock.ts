import { pgTable, serial, varchar, numeric } from "drizzle-orm/pg-core";

export const stocks = pgTable(
    "stocks",
    {
        id: serial('id').primaryKey(),
        symbol: varchar('symbol', { length: 6 }).unique().notNull(),
        // TODO: max of 999999.99 is enough? - currently most expensive stock is Berkshire Hathaway at ~600k
        price: numeric('price', { precision: 8, scale: 2 }).notNull()
    }
);

export type StockType = typeof stocks.$inferSelect;
export type NewStockType = typeof stocks.$inferInsert;