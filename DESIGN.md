# DESIGN.md

Short entries: decision, why, trade-off. These become my interview answers.

## 1. Run Mongo and Redis with Docker Compose
**Decision:** Define Mongo and Redis in one `docker-compose.yml` and start them with `docker compose up -d`.
**Why:** One versioned file describes the whole environment, so setup is one command and the same on any machine. No manual installs, no version mismatches. `docker compose down` removes the containers cleanly.
**Trade-off:** Docker adds a learning curve. The alternative, installing Mongo and Redis directly, is quicker on day one but fragile and hard to reproduce or deploy.

## 2. Volume for Mongo, none for Redis
**Decision:** Mongo stores its data in a named volume (`mongo_data:/data/db`). Redis has no volume.
**Why:** A container's own filesystem is thrown away when the container is removed, so Mongo needs a volume to keep users, classes and submissions. Redis holds only the job queue, and the source of truth is Mongo (each submission has a `status`), so a lost queue can be rebuilt by re-queuing submissions still marked `submitted`.
**Trade-off:** After a Redis restart, queued jobs are lost until re-queued. Accepted for the prototype. Later: Redis persistence (AOF) or a startup job that re-queues unfinished submissions.

## 3. Hostnames come from environment variables
**Decision:** The API reads the Mongo and Redis addresses from env vars, never hardcoded.
**Why:** Outside Docker (app on my laptop) the address is `localhost` with the published ports. Inside Compose, `localhost` is the container itself, so services reach each other by service name (`redis`, `mongo`).
**Trade-off:** One more thing to configure, but the same code runs in both setups.

## 4. Stack (details and reasons in CLAUDE.md)
Next.js (frontend), Express (API), MongoDB, Redis + BullMQ (queue), separate worker process, Docker Compose, Zod.
The screens and minimum API routes are also listed in CLAUDE.md. They get their own entries here as we build each one.
