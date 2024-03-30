/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { individual } from "./individual";
import { organisation } from "./organisation";
import { users } from "./users";

export const incidents = sqliteTable('incidents', {
  id: integer('id').primaryKey(),
  description: text('description').notNull(),
  status: text("status", { enum: ["active", "resolved"]}).default("active"),
  dateResolved: text('dateResolved'),
  individualsId: integer('individualsId').references(() => individual.id),
  organisationId: integer('organisationId').references(() => organisation.id),
  userId: integer('userId').notNull().references(() => users.id),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});