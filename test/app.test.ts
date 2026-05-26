import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("API health endpoints", () => {
  it("GET /health returns status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      service: "managed-service-skeleton-api"
    });
  });

  it("GET /ready returns readiness status", async () => {
    const response = await request(app).get("/ready");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      service: "managed-service-skeleton-api",
      checks: {
        configuration: "ok"
      }
    });
  });
});