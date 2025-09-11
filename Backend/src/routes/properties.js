import { Router } from 'express';

const router = Router();

// Mock properties
const PROPERTIES = [
  {
    id: 1,
    title: 'Historic Brownstone',
    address: '654 Brownstone Ave, Manhattan, NY 10025',
    price: 4200,
    beds: 3,
    baths: 2,
    sqft: 2000,
    tags: ['Historic Character', 'Fireplace', 'High Ceilings']
  },
  {
    id: 2,
    title: 'Waterfront Condo',
    address: '987 Harbor View, Jersey City, NJ 07302',
    price: 3800,
    beds: 2,
    baths: 2,
    sqft: 1400,
    tags: ['Water Views', 'Balcony', 'Gym']
  }
];

router.get('/', (req, res) => {
  res.json({ data: PROPERTIES });
});

export default router;


