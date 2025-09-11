import 'dotenv/config';
import app from './app.js';
import { connectToDatabase } from './config/db.js';

const port = process.env.PORT || 5000;

async function start() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend listening on http://localhost:${port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();


