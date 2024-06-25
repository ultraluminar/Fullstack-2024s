import { eq, exists } from 'drizzle-orm';

import { accounts, AccountType, NewAccountType } from '../../db/schema/account.js';
import { db } from '../../db/db.js';

export const Account = {
    async getAll(): Promise<AccountType[]> {
        return await db
            .select()
            .from(accounts);
    },

    async getById(id: AccountType['id']): Promise<AccountType[]> {
        return await db
            .select()
            .from(accounts)
            .where(eq(accounts.id, id));
    },

    async create(accountData: NewAccountType): Promise<AccountType[]> {
        return await db
            .insert(accounts)
            .values(accountData)
            .onConflictDoNothing({ target: accounts.id })
            .returning();
    },

    async remove(id: AccountType['id']): Promise<AccountType[]> {
        return await db
            .delete(accounts)
            .where(eq(accounts.id, id))
            .returning();
    },

    async update(id: AccountType['id'], accountData: NewAccountType): Promise<AccountType[]> {
        return await db
            .update(accounts)
            .set(accountData)
            .where(eq(accounts.id, id))
            .returning();
    },
};
