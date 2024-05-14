import { eq } from "drizzle-orm";

import { stocks, StockType, NewStockType } from "../../db/schema/stock.js";
import { db } from "../../db/db.js";

export async function getAll() {
    return await db.select().from(stocks);
}

export async function getById(id: StockType['id']) {
    return await db.select().from(stocks).where(eq(stocks.id, id));
}

export async function create(stockData: NewStockType) {
    return await db.insert(stocks).values(stockData);
}

export async function remove(id: StockType['id']) {
    return await db.delete(stocks).where(eq(stocks.id, id));
}

export async function update(id: StockType['id'], stockData: NewStockType) {
    return await db.update(stocks).set(stockData).where(eq(stocks.id, id));
}