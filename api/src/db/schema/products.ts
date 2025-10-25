import {pgTable, serial, integer, varchar} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", {length: 100}).notNull(),
  price: integer("price").notNull(),
  description: varchar("description", {length: 255}).notNull()
});