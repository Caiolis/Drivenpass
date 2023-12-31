import { Router } from 'express';
import { credentialController } from '@/controllers';
import { validateSchema, authenticateToken } from '@/middlewares';

import { credentialSchema } from '@/schemas';

const credentialRouter = Router();

credentialRouter.post('/', authenticateToken, validateSchema(credentialSchema), credentialController.createCredential);
credentialRouter.get('/', authenticateToken, credentialController.getCredentials);
credentialRouter.get('/:id', authenticateToken, credentialController.getCredentialById);
credentialRouter.delete('/:id', authenticateToken, credentialController.deleteCredential);

export { credentialRouter };