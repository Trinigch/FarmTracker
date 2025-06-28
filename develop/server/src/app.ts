import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/api/animals_routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(animalRoutes);

export default app;