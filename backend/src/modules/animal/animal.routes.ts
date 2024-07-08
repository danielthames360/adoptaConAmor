import { Router } from 'express'
import { createAnimal, deleteAnimal, getAnimalById, getAnimals, getAnimalsByType, updateAnimal } from './animal.controller';

const router = Router()

// Examples of endpoints for this module

router.get('/', getAnimals);
router.get('/:id', getAnimalById);
router.get('/byType/:type', getAnimalsByType);
router.post('/', createAnimal);
router.put('/', updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;
