/*
  This file creates the Express application
  - app.ts defines the API routes and middleware
  - it does NOT start the server
*/

import express, { Request, Response } from "express";

export const app = express();

// This middleware allows the API to understand JSON request bodies
app.use(express.json());

// GET /health
// This endpoint checks if the API process is alive and responding.
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: "managed-service-skeleton-api"
  });
});