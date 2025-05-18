import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull().unique(),
    username: text('username').notNull(),
    email: text('email').unique(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at'),
});

export type UserInsert = typeof usersTable.$inferInsert;
export type UserSelect = typeof usersTable.$inferSelect;
