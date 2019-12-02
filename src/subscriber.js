import { PubSub } from "@google-cloud/pubsub";
import { subscription, projectId } from "./config";

export default async () => {
  const pubsub = new PubSub({ projectId });
  pubsub.subscription(subscription).on("message", message => {
    console.log(JSON.parse(message.data.toString("utf8")));
    message.ack();
  });
  console.log("Subscriber started");
};
