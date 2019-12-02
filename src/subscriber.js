import { PubSub } from "@google-cloud/pubsub";
import { subscription, projectId } from "./config";

export default async () => {
  const pubsub = new PubSub({ projectId });
  pubsub.subscription(subscription).on("message", message => {
    try {
      console.log(JSON.parse(message.data.toString("utf8")));
      message.ack();
    } catch (e) {
      console.error("cannot parse message: " + message.data);
    }
  });
  console.log("Subscriber started");
};
