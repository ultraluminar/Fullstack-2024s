import { integer, numeric, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

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

export const stocks = pgTable(
    "stocks",
    {
        id: serial('id').primaryKey(),
        symbol: varchar('symbol', { length: 6 }).unique().notNull(),
        // TODO: max of 999999.99 is enough? - currently most expensive stock is Berkshire Hathaway at ~600k
        price: numeric('price', { precision: 8, scale: 2 }).notNull()
    }
);

export const orderTypeEnum = pgEnum("order_type", ["buy", "sell"]);
export const orderStatusEnum = pgEnum("order_status", ["open", "closed"]);

export const orders = pgTable(
    "orders",
    {
        orderNumber: serial('orderNumber').primaryKey(),
        type: orderTypeEnum('type').notNull(),
        // TODO: can null be used with default?
        status: orderStatusEnum('status').notNull().default('open'),
        creationTime: timestamp('creationTime').notNull().defaultNow(),
        accountId: integer('accountId').references(() => accounts.id),
        stockId: integer('stockId').references(() => stocks.id),
    }
);
