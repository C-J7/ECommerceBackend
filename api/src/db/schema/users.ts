import { timestamp, varchar, integer, pgTable } from "drizzle-orm/pg-core";

export const usersTable = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  username: varchar('username', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }), // optional field
  created_at: timestamp('created_at').defaultNow().notNull(),
})