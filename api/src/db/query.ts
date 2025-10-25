
import { drizzle } from "drizzle-orm/node-postgres";
import {orders} from "../db/schema/orders.js";
import { Pool } from "pg";


const pool = new Pool({ connectionString: process.env.NEON_DB_CONNECTION_STRING});
const db = drizzle(pool);
const result = await db.select().from(orders);
console.log(result);

