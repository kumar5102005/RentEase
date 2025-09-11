import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import configurePassport from './config/passport.js';

import healthRouter from './routes/health.js';
import propertiesRouter from './routes/properties.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: clientOrigin, credentials: true }));

// Logging
const isTest = process.env.NODE_ENV === 'test';
if (!isTest) {
  app.use(morgan('dev'));
}

// Sessions
app.use(
  session({
    name: 'rentease.sid',
    secret: process.env.SESSION_SECRET || 'dev_secret_change_me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport);

// Routes
app.use('/api/health', healthRouter);
app.use('/api/properties', propertiesRouter);
app.use('/api/users', usersRouter);
app.use('/auth', authRouter);

// Fallback
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;


