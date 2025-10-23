E-commerce backend
Using Drizzle ORM to integrate with postgres and also for easy DB migrations.

Tech Stack: 
nodeJS, expressJS, DrizzleOrm, PostgreSQL, Typecript, genezio

Genevio is for hosting fullstack applications, deploying severless apps and without the cold starts of render and aws lambda.

Setup Process
"node --version": a terminal command to check the current node version installed.
"npm init": generates the package.json
"npm install express": installs expressJS lol.
"npm install -D typescript tsx @types/express": setup typescript for developer use.
"npx tsx src/index.ts": example to run teh file (tested)
"node --import=tsx src/index.ts": Alternative to run the file, although not preferred.
Also, a dev script has been added in the package.json to allow the easy execution of the file with npm run dev. the --watch, makes sure nodeJS watches our file for changes and restarts the server.