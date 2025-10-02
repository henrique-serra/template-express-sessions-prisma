require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const pgSession = require('connect-pg-simple')(session);
const pool = require('./db/pool');

// Import Passport configuration
require('./config/passport');

// Import routes
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');

const app = express();

// Session configuration
// Stores sessions in PostgreSQL for:
// - Persistence across server restarts
// - Multi-server deployments (load balancing)
// - Better than memory for production
app.use(
  session({
    store: new pgSession({
      pool,
      tableName: 'Session',
      createTableIfMissing: false,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    },
  })
);
app.use(passport.session());

// Basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`✅ Server running on port ${PORT}`);
});
