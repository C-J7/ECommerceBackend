import {pgTable, serial, integer, doublePrecision, varchar, text} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", {length: 100}).notNull(),
  price: doublePrecision("price").notNull(),
  description: text("description").notNull(),
  image: varchar("image", {length: 255}),// optional field
});