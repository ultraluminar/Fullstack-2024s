import { eq } from 'drizzle-orm';

import { orders, OrderType, NewOrderType } from '../../db/schema/order.js';
import { db } from '../../db/db.js';

export async function getAll() {
    return await db.select().from(orders);
}

export async function getByOrderNumber(orderNumber: OrderType['orderNumber']) {
    return await db.select().from(orders).where(eq(orders.orderNumber, orderNumber));
}

export async function create(orderData: NewOrderType) {
    return await db.insert(orders).values(orderData);
}

export async function remove(orderNumber: OrderType['orderNumber']) {
    return await db.delete(orders).where(eq(orders.orderNumber, orderNumber));
}

export async function update(orderNumber: OrderType['orderNumber'], orderData: NewOrderType) {
    return await db.update(orders).set(orderData).where(eq(orders.orderNumber, orderNumber));
}
