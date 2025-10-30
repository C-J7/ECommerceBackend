import {pgTable, integer, timestamp} from "drizzle-orm/pg-core";

export const ordersTable = pgTable("orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer().notNull(),
  product_id: integer().notNull(),
  quantity: integer().notNull(),
  timestamp: timestamp().defaultNow().notNull(),
});