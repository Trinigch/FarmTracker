import app from './app';
import { getPool } from './config/connection';

const PORT = process.env.PORT || 3001;

getPool ()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error initializing database:', err);
  });