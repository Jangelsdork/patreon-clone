// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'drizzle-kit'

export default defineConfig({

 schema: "./src/db/schema",
  driver: 'turso',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,

})