
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { Pool } from "pg";


async function main() {
  const connectionString = process.env.NEON_DB_CONNECTION_STRING;
  
  const pool = new Pool({connectionString: process.env.NEON_DB_CONNECTION_STRING!});
  const db = drizzle(pool);
  const results = await db.select().from(pgTable("test_table", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  }));
  console.log(results);
}
main();



