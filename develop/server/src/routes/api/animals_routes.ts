import { Router } from 'express';
import { crearAnimal} from '../../controllers/animal.controller'



const router = Router();
router.post('/api/animals', crearAnimal);


export default router;