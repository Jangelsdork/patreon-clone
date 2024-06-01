/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { sql, relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { individual } from "./individual";
import { organisation } from "./organisation";
import { appUsers } from "./appUsers";

export const incidents = sqliteTable('incidents', {
  id: integer('id').primaryKey(),
  description: text('description').notNull(),
  status: text("status", { enum: ["active", "resolved"]}).default("active"),
  dateResolved: text('dateResolved'),
  individualsId: integer('individualsId'),
  organisationId: integer('organisationId'),
  // needs to be "notnull"
  userId: integer('userId'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const incidentsRelations = relations(incidents, ({ one }) => ({
  individual: one(appUsers, {
    fields: [incidents.individualsId],
    references: [appUsers.id]
  }),
  organisation: one(organisation, {
    fields: [incidents.individualsId],
    references: [organisation.id]
  }),
  author: one(individual , {
    fields: [incidents.userId], 
    references: [individual.id]
  })
}))