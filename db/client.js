import {Client} from 'pg';
export const client = new Client({
	connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/grace-shopper',
	ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
})
