import Cryptr from 'cryptr';
import { networkRepository } from '@/repository';
import { notFoundError, unauthorizedError } from '@/errors';

async function createNetwork(userId: number, title: string, network: string, password: string) {
  const cryptr = new Cryptr(password);
  const encrypt = cryptr.encrypt(password);

  await networkRepository.createNetwork({ network, title, password: encrypt, userId });
}

async function getAllNetwork(userId: number) {
  const reponse = await networkRepository.getNetwork(userId);

  return reponse;
}

async function getNetworkById(id: number, userId: number) {
  const reponse = await networkRepository.getNetworkById(id, userId);
  if (!reponse) throw unauthorizedError();

  return reponse;
}

async function deleteNetwork(userId: number, id: number) {
  const verify = await networkRepository.verifyNetworkById(userId, id);
  if (!verify) throw notFoundError();

  const result = await networkRepository.deleteNetwork(userId, id);
  if (!result) notFoundError();
}

export const networkService = {
  createNetwork,
  getAllNetwork,
  getNetworkById,
  deleteNetwork,
};