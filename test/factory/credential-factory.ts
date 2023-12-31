import { faker } from '@faker-js/faker';
import { prisma } from '../../src/config/database';
import { CredentialParams } from '../../src/protocols';

export async function createCredential(userId: number) {
  return prisma.credential.create({
    data: {
      title: faker.lorem.word(),
      url: faker.internet.url(),
      username: faker.internet.userName(),
      password: faker.internet.password(6),
      userId,
    },
  });
}

export async function createCredentialByData(data: CredentialParams) {
  return prisma.credential.create({
    data,
  });
}