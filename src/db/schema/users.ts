/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  role: text("role", { enum: ["user", "admin"]}),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

