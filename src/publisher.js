import { PubSub } from "@google-cloud/pubsub";
import { topic, projectId } from "./config";

export default async ({ message }) => {
  const pubsub = new PubSub({ projectId });
  await pubsub.topic(topic).publish(Buffer.from(JSON.stringify({ message })));
  console.log("published");
};
