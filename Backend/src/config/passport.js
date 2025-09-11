import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User.js';

export default function configurePassport(passport) {
  passport.use(
    'local-login',
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false, { message: 'Invalid credentials' });
          const valid = await user.verifyPassword(password);
          if (!valid) return done(null, false, { message: 'Invalid credentials' });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    'local-signup',
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password', passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          const normalizedEmail = String(email).trim().toLowerCase();
          const existing = await User.findOne({ email: normalizedEmail });
          if (existing) return done(null, false, { message: 'Email already registered' });

          const passwordHash = await User.hashPassword(password);
          const user = await User.create({
            fullName: req.body.fullName,
            email: normalizedEmail,
            passwordHash,
            address: {
              street: req.body.street,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              country: req.body.country,
            },
            subscribe: Boolean(req.body.subscribe),
          });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id).select('-passwordHash');
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}


