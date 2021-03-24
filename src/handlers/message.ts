import { AzureFunction, Context } from "@azure/functions";
import { getUsers } from "../api/users";

export const handleMessage: AzureFunction = async (
  context: Context,
  message: any
) => {
  if (!message.resolve) return context.done("Error, resolved param not passed");
  const users = await getUsers();
  console.log(users);
  context.done();
};
