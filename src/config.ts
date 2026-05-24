import "dotenv/config";

const appName = process.env.APP_NAME || "managed-service-skeleton-api";
const nodeEnv = process.env.NODE_ENV || "development";
const port = Number(process.env.PORT) || 3000;

if (!Number.isInteger(port) || port <= 0) {
  throw new Error("PORT must be a positive number");
}

export const config = {
  appName,
  nodeEnv,
  port
};