import { eq } from 'drizzle-orm';
import { users, UserType, NewUserType, UserIdType } from '../schema.js'
import { db } from '../db.js';


async function getAll() {
    //return db.query.users.findMany();
    return await db.select().from(users);
}

async function get(id: typeof users.$inferSelect.id) {
    //return db.query.users.findFirst({ where: eq(users.id, id) });
    return db.select().from(users).where(eq(users.id, id))
}

async function add(user_json: NewUserType){
    return db.insert(users).values(user_json);
}

async function remove(id: UserIdType){
    return db.delete(users).where(eq(users.id, id));
}

async function update(user_json: NewUserType, id: UserIdType){
    return db.update(users).set(user_json).where(eq(users.id, id))
}

export { getAll, get, add, remove, update }