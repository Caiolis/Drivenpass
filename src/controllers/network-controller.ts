import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { NetworkBodyParams } from "@/schemas";
import { networkService } from "@/services";
import { DeleteProcess } from "@/protocols";

async function postNetwork(req: AuthenticatedRequest, res: Response) {
  const userId = Number(req.userId);
  const { network, title, password } = req.body as NetworkBodyParams;

  await networkService.createNetwork(userId, title, network, password);
  return res.sendStatus(httpStatus.CREATED);
}

async function getNetwork(req: AuthenticatedRequest, res: Response) {
  const userId = Number(req.userId);
  const result = await networkService.getAllNetwork(userId);

  return res.status(httpStatus.OK).send(result);
}

async function getNetworkById(req: AuthenticatedRequest, res: Response) {
  const { id } = req.params; 
  const userId = Number(req.userId);
  const result = await networkService.getNetworkById(Number(id), userId);

  return res.status(httpStatus.OK).send(result);
}

async function deleteNetwork(req: AuthenticatedRequest, res: Response) {
  const userId = Number(req.userId);
  const { id } = req.body as DeleteProcess;

  await networkService.deleteNetwork(userId, id);
  return res.sendStatus(httpStatus.OK);
}

export const networkController = {
  postNetwork,
  getNetwork,
  getNetworkById,
  deleteNetwork,
};
