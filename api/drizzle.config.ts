import {defineConfig} from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./dist/src/db/schema",
  dbCredentials: {
    url: process.env.NEON_DB_CONNECTION_STRING || "Database connection URL not found",
  },
  verbose: true,
  strict: true
});