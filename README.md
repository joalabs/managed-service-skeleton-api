# Managed Service Skeleton API

Small TypeScript/Node.js API built to practise cloud platform engineering basics.

The project currently includes:

* Express API
* `/health` endpoint
* `/ready` endpoint
* environment-based configuration
* Docker support
* automated tests
* GitHub Actions CI

PostgreSQL and Redis are planned next, but the first goal was to build a clean and working base before adding more services.

---

## Why this project exists

I built this project to practise concepts used in backend and cloud platform engineering, especially:

* Node.js and TypeScript
* API structure
* health and readiness checks
* Docker
* testing
* CI with GitHub Actions

It is intentionally small so each part is easy to understand and explain.

---

## Endpoints

### `GET /health`

Checks if the API process is alive.

```bash
curl http://localhost:3000/health
```

Example response:

```json
{
  "status": "ok",
  "service": "managed-service-skeleton-api"
}
```

### `GET /ready`

Checks if the service is ready to receive traffic.

```bash
curl http://localhost:3000/ready
```

Example response:

```json
{
  "status": "ready",
  "service": "managed-service-skeleton-api",
  "checks": {
    "configuration": "ok"
  }
}
```

---

## Tech stack

* TypeScript
* Node.js
* Express
* Docker
* Vitest
* Supertest
* GitHub Actions

---

## Running locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Run build and tests:

```bash
npm run verify
```

---

## Running with Docker

Build the image:

```bash
docker build -t managed-service-skeleton-api .
```

Run the container:

```bash
docker run --rm -p 3000:3000 managed-service-skeleton-api
```

---

## CI

The GitHub Actions workflow runs on push, pull request, or manual trigger.

It performs:

1. checkout repository
2. set up Node.js
3. install dependencies
4. build TypeScript
5. run tests

---

## Next steps

Planned improvements:

* add PostgreSQL for service instance metadata
* add Redis for caching
* add `/instances` endpoints
* improve readiness checks with dependency checks
* add basic structured request logging