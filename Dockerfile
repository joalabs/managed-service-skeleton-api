# First stage: build the TypeScript application
FROM node:24-alpine AS builder

# Create and use /app as the working directory inside the container
WORKDIR /app

# Copy package files first.
# This helps Docker reuse the dependency installation layer
# when only the source code changes.
COPY package*.json ./

# Install all dependencies, including devDependencies.
# We need devDependencies here because TypeScript is needed to build the app.
RUN npm ci

# Copy TypeScript configuration and source code
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript into JavaScript.
# This creates the dist/ folder inside the image.
RUN npm run build


# Second stage: create the runtime image
FROM node:24-alpine AS runner

# Create and use /app as the working directory inside the container
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Copy package files again so production dependencies can be installed
COPY package*.json ./

# Install only production dependencies.
# This keeps the final image smaller and cleaner.
RUN npm ci --omit=dev

# Copy the compiled JavaScript from the builder stage
COPY --from=builder /app/dist ./dist

# Document that the app listens on port 3000 by default.
# This does not publish the port by itself.
EXPOSE 3000

# Start the application
CMD ["npm", "start"]