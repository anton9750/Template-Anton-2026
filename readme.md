Markdown

# template-js-tw

## Purpose

This template is intended for quickly starting small to medium-sized JavaScript projects with Tailwind CSS and sensible development defaults. It includes a structured architecture (`controllers`, `models`, `services`, `views`) to scale effectively as your project grows.

## Getting Started

1. **Install dependencies:**

```bash
   npm install
Start the development server:

Bash
   npm run dev
Architecture Overview
controllers/ : Bridges the UI and the data/services.

models/ : Data structures and class definitions.

services/ : API requests and external data fetching.

views/ : DOM rendering and UI components.

utils/ : Helper functions.

Database Setup (Prisma)
If your project requires a backend/database, you can integrate Prisma with these commands:

Install Prisma dependencies:

Bash
   npm install prisma --save-dev
   npm install @prisma/client
Initialize Prisma:
Run this to create the prisma/ directory and your initial schema.prisma file:

Bash
   npx prisma init --datasource-provider postgresql
Define your Schema:
Open prisma/schema.prisma and define your data models.

Push to Database:
Once your schema is defined, sync it with your database:

Bash
   npx prisma db push
Note: Ensure your .env file contains the correct DATABASE_URL after initialization.

Available Scripts
npm run dev: Starts the Vite development server.

npm run build: Builds the project for production.

npm run lint: Runs ESLint to check for code issues.

npm run format: Formats your code using Prettier.
```
