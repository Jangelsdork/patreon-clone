/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { individual } from "./individual";
import { users } from "./users";

export const organisation = sqliteTable('organisation', {
  id: integer('id').primaryKey(),
  orgName: text('orgName').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  country: text('country').notNull(),
  city: text('city').notNull().references(() => individual.id),
  content: text('name').notNull(),
  // remove default once user model is created
  createdBy: integer('createdBy').notNull().references(() => users.id).default(1),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
});