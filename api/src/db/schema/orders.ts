import {pgTable, serial, integer, varchar, timestamp} from "drizzle-orm/pg-core";

export const ordersTable = pgTable("orders", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer("user_id").notNull(),
  product_id: integer("product_id").notNull(),
  quantity: integer("quantity").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});