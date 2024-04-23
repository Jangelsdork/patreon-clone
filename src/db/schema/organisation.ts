/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { individual } from "./individual";
import { appUsers } from "./appUsers";

export const organisation = sqliteTable('organisation', {
  id: integer('id').primaryKey(),
  orgName: text('orgName').notNull(),
  individuals: integer('individuals').notNull().references(() => individual.id),
  // make not null once entries in user table
  createdBy: integer('createdBy').references(() => appUsers.id),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
});