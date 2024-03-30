/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users } from "./users";

export const individual = sqliteTable('individual', {
  id: integer('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  country: text('country').notNull(),
  createdBy: integer('createdBy').notNull().references(() => users.id).default(1),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});