import {pgTable, serial, integer, varchar} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey().notNull(),
  user_name: varchar("user_name", {length: 100}).notNull(),
  product_id: integer("product_id").notNull(),
  quantity: integer("quantity").notNull()
});