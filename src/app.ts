/*
  This file creates the Express application
  - app.ts defines the API routes and middleware
  - it does NOT start the server
*/

import express, { Request, Response } from "express";
import { config } from "./config.js"

export const app = express();

// This middleware allows the API to understand JSON request bodies
app.use(express.json());

// GET /health
// This endpoint checks if the API proccess is alive and responding
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: config.appName
  });
});

// GET /ready
// This endpoint checks if the API proccess is ready to receive traffic
app.get("/ready", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: config.appName,
    checks: {
      configuration: "ok"
    }
  });
});