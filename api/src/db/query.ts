
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";



const connectionString = process.env.NEON_DB_CONNECTION_STRING;
if (!connectionString) {
	throw new Error("Environment variable NEON_DB_CONNECTION_STRING is not set.");
}
const pool = new pg.Pool({connectionString});

// The 'db' instance provides a configured Drizzle ORM connection using the PostgreSQL pool.
// You can use it to perform database queries throughout this application.
export const db = drizzle(pool);




