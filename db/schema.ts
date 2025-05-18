import { index, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
    'users_table',
    {
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
    },
    table => [
        uniqueIndex('user_table_user_id_unique').on(table.userId),
        uniqueIndex('user_table_email_unique').on(table.email),
        index('user_table_username_index').on(table.username),
        index('user_table_created_at_index').on(table.createdAt),
        index('user_table_updated_at_index').on(table.updatedAt),
        index('user_table_deleted_at_index').on(table.deletedAt),
    ],
);

export type UserInsert = typeof usersTable.$inferInsert;
export type UserSelect = typeof usersTable.$inferSelect;
