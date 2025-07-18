# Backend - Client Feedback Tool for Creatives

This is the backend API for the Client Feedback Tool for Creatives.

## Tech Stack
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JWT authentication

## Folder Structure
```
src/
  controllers/   # Route logic
  models/        # Sequelize models
  routes/        # API endpoints
  middleware/    # Express middleware
  utils/         # Utility functions
  app.js         # Main Express app
.env             # Environment variables
```

## Setup
1. Copy `.env.example` to `.env` and fill in your environment variables.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Next Steps
- Implement database models in `src/models/`
- Set up routes and controllers
- Add authentication and file upload logic
