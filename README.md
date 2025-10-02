# Express + Passport + Prisma Template

Template for Node.js projects with authentication and PostgreSQL database.

## 🚀 Technologies

- **Express**: Minimalist web framework
- **Passport**: Session-based authentication
- **Prisma**: ORM for PostgreSQL
- **Express-session**: Session management
- **Bcrypt**: Password hashing

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL installed and running
- npm or yarn

## 🔧 Installation

```bash
# Clone the repository
git clone <your-repository>
cd <project-name>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Configure DATABASE_URL in .env
# Example: DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Run Prisma migrations
npx prisma migrate dev

# Start the server
npm run dev
```

## 📁 Project Structure

```
├── src/
│   ├── config/
│   │   └── passport.js      # Passport configuration
│   ├── middlewares/
│   │   └── auth.js          # Authentication middleware
│   ├── routes/
│       ├── auth.js          # Authentication routes
│       └── index.js         # Main routes
│   
├── prisma/
│   └── schema.prisma        # Database schema
├── .env.example
├── .gitignore
|—— app.js                   # Entry point
└── package.json
```

## 🔐 Available Routes

- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout
- `GET /auth/me` - Get authenticated user
- `GET /` - Protected route (example)

## 📝 Scripts

```bash
npm run dev      # Start in development mode
npm start        # Start in production mode
npm run migrate  # Run Prisma migrations
```

## 🎯 How to Use

1. Configure your PostgreSQL connection string in `.env`
2. Run the migrations
3. Start the server
4. Register a user via POST `/auth/register`
5. Login via POST `/auth/login`
6. Use protected routes with active session
