import { AzureFunction, Context } from "@azure/functions";

export const handleMessage: AzureFunction = (
  context: Context,
  message: any
) => {
  if (message.resolve) context.done();
  context.done("O pedro só sabota");
};
