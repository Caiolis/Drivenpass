import { Router } from 'express';

import { userController } from '@/controllers';
import { validateSchema } from '@/middlewares';
import { userSchema } from "@/schemas";


const usersRouter = Router();

usersRouter.post('/sign-up', validateSchema(userSchema),  userController.signUp);
usersRouter.post('/sign-in', validateSchema(userSchema), userController.logIn);

export { usersRouter };