import { eq } from 'drizzle-orm';

import { accounts, AccountType, NewAccountType } from '../../db/schema/account.js';
import { db } from '../../db/db.js';

export const Account = {
    async getAll() {
        return await db.select().from(accounts);
    },
    
    async getById(id: AccountType['id']) {
        return await db.select().from(accounts).where(eq(accounts.id, id));
    },
    
    async create(accountData: NewAccountType) {
        return await db.insert(accounts).values(accountData);
    },
    
    async remove(id: AccountType['id']) {
        return await db.delete(accounts).where(eq(accounts.id, id));
    },
    
    async update(id:AccountType['id'], accountData: NewAccountType) {
        return await db.update(accounts).set(accountData).where(eq(accounts.id, id));
    }
};
