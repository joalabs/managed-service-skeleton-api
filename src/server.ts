/*
    This file starts the HTTP server
        - app.ts defines what the API does
        - server.ts decides how the API is started
*/

/*
    TypeScript: app.ts, server.ts -> app.js, server.js
    Node.js runs the .js files
*/
import { app } from "./app.js";

/* 
    The port comes from an environment variable
    Configuration should come from the environment, not be hardcoded. (12-factor)
    Using 3000 if PORT not provided
*/
const port = Number(process.env.PORT) || 3000;

/*
    The app must listen on 0.0.0.0 so it can receive traffic
    when running inside Docker.
*/
app.listen(port, "0.0.0.0", () => {
    // JSON logs are easier for log systems to parse later
    console.log(
    JSON.stringify({
      level: "info",
      message: "API server started",
      service: "managed-service-skeleton-api",
      port
    })
  );
});