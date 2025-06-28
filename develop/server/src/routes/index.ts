import { Router } from 'express';
import { crearAnimal } from '../controllers/animal.controller';

const router = Router();
router.post('/animales', crearAnimal);
export default router;
