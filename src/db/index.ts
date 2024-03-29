/* eslint-disable import/prefer-default-export */
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const url: string = process.env.DATABASE_URL || '';
const authToken: string = process.env.DATABASE_AUTH_TOKEN || '';


const client = createClient({ url, authToken});
export  const db = drizzle(client);
