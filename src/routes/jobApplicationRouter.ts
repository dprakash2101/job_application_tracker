import { Router } from 'express';
import { jobApplicationController } from '../controllers/jobApplicationController';

const router = Router();

router.post('/', jobApplicationController.create);
router.get('/', jobApplicationController.findAll);
router.get('/:id', jobApplicationController.findById);
router.put('/:id', jobApplicationController.update);
router.delete('/:id', jobApplicationController.delete);

export default router;
