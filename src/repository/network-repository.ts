import { prisma } from "@/config";
import { NetworkParams } from "@/protocols";

async function createNetwork(data: NetworkParams) {
  return prisma.network.create({
    data,
  });
}

async function getNetwork(userId: number) {
  return prisma.network.findMany({
    where: {
      userId,
    },
  });
}

async function getNetworkById(id: number, userId: number) {
  return prisma.network.findFirst({
      where: { id, userId }
  })
}

async function deleteNetwork(userId: number, id: number) {
  return prisma.network.delete({
    where: {
      id,
      userId,
    },
  });
}

async function verifyNetworkById(userId: number, id: number) {
  return prisma.network.findMany({
    where: {
      userId,
      id,
    },
  });
}

export const networkRepository = {
  createNetwork,
  getNetwork,
  getNetworkById,
  deleteNetwork,
  verifyNetworkById,
};
