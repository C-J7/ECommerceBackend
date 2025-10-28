# E-commerce Backend

A minimal E-commerce backend using Drizzle ORM with PostgreSQL. Includes basic database migrations and a TypeScript + Express server.

## Features
- Drizzle ORM for type-safe queries and migrations
- PostgreSQL database
- Built with TypeScript and Express
- Simple dev workflow using tsx

## Tech stack
- Node.js
- Express
- Drizzle ORM (Object relational model)
- NeonDb for Serverless PostgreSql
- TypeScript


## Prerequisites
- Node.js (check with `node --version`)
- PostgreSQL running and accessible
- Postman or thunderClient or whatever tool you use to test API endpoints.

## Setup
1. Initialize project (if not done already):
  - `npm init`
2. Install dependencies:
  - `npm i express`
  - `npm i -D typescript tsx @types/express pg @types/pg`
  - `npm i drizzle-orm`
  - `npm i -D drizzle-kit` 
3. Configure TypeScript (add `tsconfig.json`) and Drizzle ORM per your project needs.
4. Initialize database and migrations with Drizzle ORM (see Drizzle docs for commands and config).

## Run
- Development (uses tsx):
  - Run the server directly:
    - `npx tsx src/index.ts`
  - Recommended: use an npm script for development:
    - Add to package.json: `"dev": "tsx --watch src/index.ts"` and run `npm run dev`
  - Important: compile TypeScript output before running Drizzle commands
    - Execute `npx tsc` to emit `.js` files to your configured output directory (e.g `dist`, `prod`, etx)
    - Run `npx drizzle-kit push` only after compilation so Drizzle can detect the emitted `.js` files
  - Verify Drizzle configuration:
    - Adjust `drizzle.config.ts` so the `schema`/migrations paths point to your project’s compiled output and migration directories
  - Ensure environment-specific paths and build output in `tsconfig.json` and `drizzle.config.ts` are consistent between development and CI/CD environments
- Production:
  - Build and run compiled output, or run with `node --import=tsx src/index.ts` if required (less common)

## Notes
- Drizzle ORM handles migrations; keep migration scripts committed.
- Update database connection settings using environment variables for security.

Replace or expand any sections to match your repository structure and migration setup.

### TypeScript — common confusing setups and quick fixes

- Files and extensions
  - Node ESM requires runtime file extensions (usually `.js`). During development you may import `./routes/index.js` even if the source is `index.ts`; and the endpoint will still function as intended as tools like tsx/ts-node/esbuild handle this mapping. When compiling, ensure your imports match the emitted extensions.
  - `allowImportingTsExtensions` — when enabled, you can import paths ending with `.ts` (rarely needed).
  - `esModuleInterop` / `allowSyntheticDefaultImports` — fixes default import mismatch

  - Keep a consistent build/dev setup so imports behave the same in development and production.

### Testing the endpoints with Postman

1. Start your server and note the base URL (e.g., http://localhost:<Port>).
2. Create a Postman collection for this API and set an environment variable `baseUrl`.
3. Common requests to add:
   - GET /products
   - GET /products/:id
   - POST /products — set header `Content-Type: application/json` and provide a JSON body
   - DELETE /products/:id
4. Use variables in request URLs: `{{baseUrl}}/products`




The router is to control the flow of data.
While the controller is to specify how we handle the request.

## Collaboration
This is a NodeJS "Practice Project" but Collaborations are welcome!