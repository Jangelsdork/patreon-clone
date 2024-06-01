/* eslint-disable import/prefer-default-export */
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { incidents } from "./incidents";

export const appUsers = sqliteTable('appUsers', {
  id: integer('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  role: text("role", { enum: ["user", "admin"]}),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const appUsersRelations = relations(appUsers, ({ many }) => ({
  incidents: many(incidents)
}))

