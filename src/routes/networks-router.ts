import { Router } from 'express';
import { networkController } from '@/controllers';
import { authenticateToken, validateSchema } from '@/middlewares';
import { networkBody, networkDelete } from '@/schemas';

const networkRouter = Router();

networkRouter.post('/', authenticateToken, validateSchema(networkBody), networkController.postNetwork)
networkRouter.get('/', authenticateToken, networkController.getNetwork)
networkRouter.get('/:id', authenticateToken, networkController.getNetworkById)
networkRouter.delete('/', authenticateToken, validateSchema(networkDelete), networkController.deleteNetwork);

export { networkRouter };