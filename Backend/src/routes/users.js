import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      password,
      street,
      city,
      state,
      zip,
      country,
      subscribe,
    } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'fullName, email and password are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const passwordHash = await User.hashPassword(password);

    const user = await User.create({
      fullName,
      phone,
      email,
      passwordHash,
      address: { street, city, state, zip, country },
      subscribe: Boolean(subscribe),
    });

    return res.status(201).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      subscribe: user.subscribe,
      createdAt: user.createdAt,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;


