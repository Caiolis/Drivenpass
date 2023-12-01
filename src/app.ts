import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb, disconnectDB } from "./config";

import { usersRouter } from "@/routes";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/users', usersRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;