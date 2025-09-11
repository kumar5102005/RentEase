import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info?.message || 'Signup failed' });
    req.logIn(user, (loginErr) => {
      if (loginErr) return next(loginErr);
      return res.status(201).json({ user });
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info?.message || 'Login failed' });
    req.logIn(user, (loginErr) => {
      if (loginErr) return next(loginErr);
      return res.json({ user });
    });
  })(req, res, next);
});

router.get('/me', (req, res) => {
  if (req.isAuthenticated()) return res.json({ user: req.user });
  return res.status(401).json({ message: 'Not authenticated' });
});

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie('rentease.sid');
      res.json({ message: 'Logged out' });
    });
  });
});

export default router;


