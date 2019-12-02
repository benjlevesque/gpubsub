import { config } from "dotenv";
config();

export const topic = process.env.TOPIC || "topic";
export const subscription = process.env.SUBSCRIPTION || "subscription";
export const projectId = process.env.GOOGLE_PROJECT_ID || "project";
