Drizzle ORM — quick start:

1. npm install drizzle-orm and your DB driver.
2. Define schema in src/db/schema.ts.
3. Optionally split table definitions into separate files (e.g., orders.ts, products.ts, users.ts) in the directory src/db/schema.
4. Create a DB client and run migrations.
5. Use generated query builders in services.

See https://orm.drizzle.team/docs for details.