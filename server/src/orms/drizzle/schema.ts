import { pgTable, serial, text, date } from 'drizzle-orm/pg-core';

export const users = pgTable(
    'users', 
    {
        id: serial('id').primaryKey(),
        firstName: text('firstName').notNull(),
        lastName: text('lastName').notNull(),
        dateOfBirth: date('dateOfBirth', { mode: 'string' })
    }
);

export type UserType = typeof users.$inferSelect;
export type NewUserType = typeof users.$inferInsert;
export type UserIdType = typeof users.$inferSelect.id;