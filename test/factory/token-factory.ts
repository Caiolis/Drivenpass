import * as jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { createUser } from './users-factory';
import { createSession } from './session-factory';

export async function generateValidToken(user?: User) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, 'senha');

  await createSession(token);

  return { token, userId: incomingUser.id };
}