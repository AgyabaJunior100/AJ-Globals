# AJ Globals Backend

## Tech Stack
- Node.js (Express.js)
- PostgreSQL (Prisma ORM)
- Redis (cart/session/currency cache)
- JWT Auth
- Stripe, Paystack/Flutterwave
- i18next for i18n

## Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Set up PostgreSQL and Redis, update `.env` with connection strings.
3. Run Prisma migrations:
   ```
   npm run prisma:migrate
   npm run prisma:generate
   ```
4. Start the server:
   ```
   npm run dev
   ```

## Deployment
- Use Docker for easy deployment (see Dockerfile)
- Recommended: Heroku, Render, AWS, GCP, Azure

## API Endpoints
See blueprint for full list. Start with `/products`, `/cart`, `/checkout`, `/config`, `/user/preferences`.
