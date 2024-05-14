import { pgTable, pgEnum, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { accounts } from "./account.js";
import { stocks } from "./stock.js";

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

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;