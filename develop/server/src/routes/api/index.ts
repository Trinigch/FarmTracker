import  animals  from './animals_routes';

import express from 'express';
const router = express.Router();

router.use('/animals',  animals);
export default router;
