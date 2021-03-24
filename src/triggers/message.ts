import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { QueueClient } from "@azure/storage-queue";
import * as dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.CONNECTION_STRING || "";

export const sendMessage: AzureFunction = (
  context: Context,
  req: HttpRequest
) => {
  try {
    const client = new QueueClient(connectionString, "cashback-queue");
    const obj = req.query;
    const objJsonStr = JSON.stringify(obj);
    const objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    client.sendMessage(objJsonB64);
  } catch (e) {
    console.log(e);
  }
  context.done();
};
