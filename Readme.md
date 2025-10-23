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
- Drizzle ORM
- PostgreSQL
- TypeScript


## Prerequisites
- Node.js (check with `node --version`)
- PostgreSQL running and accessible

## Setup
1. Initialize project (if not already):
  - `npm init`
2. Install dependencies:
  - `npm install express`
  - `npm install -D typescript tsx @types/express`
3. Configure TypeScript (add `tsconfig.json`) and Drizzle ORM per your project needs.
4. Initialize database and migrations with Drizzle ORM (see Drizzle docs for commands and config).

## Run
- Development (uses tsx):
  - `npx tsx src/index.ts`
  - Or via npm script (recommended): add a dev script such as `"dev": "tsx --watch src/index.ts"` and run `npm run dev`
- Production:
  - Build and run compiled output, or run with `node --import=tsx src/index.ts` if required (less common)

## Notes
- Drizzle ORM handles migrations; keep migration scripts committed.
- Update database connection settings using environment variables for security.

Replace or expand any sections to match your repository structure and migration setup.


## Collaboration
Collaborations are welcome!