/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { individual } from "./individual";
import { organisation } from "./organisation";
import { appUsers } from "./appUsers";

export const incidents = sqliteTable('incidents', {
  id: integer('id').primaryKey(),
  description: text('description').notNull(),
  status: text("status", { enum: ["active", "resolved"]}).default("active"),
  dateResolved: text('dateResolved'),
  individualsId: integer('individualsId').references(() => individual.id),
  organisationId: integer('organisationId').references(() => organisation.id),
  // needs to be "notnull"
  userId: integer('userId').references(() => appUsers.id),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});