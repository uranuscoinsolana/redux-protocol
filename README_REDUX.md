# Eliza Reduxhq.ai

## Getting Started

Reduxhq.ai relies on a postgres database to store the data.

### Prerequisites

Postgres - Docker compose for postgres with pgvector extension or compatible Database URL.
S3 - S3 compatible storage for logging or use docker compose which comes with minio.

### Setup

1. Clone the repository
2. Run `docker compose up -d` to start the Postgres database or add a `POSTGRES_URL` to the `.env` file.
3. Run `pnpm install`
4. Run `pnpm dev`

## December Roadmap

Minor

- [ ] Setup docs, refactor db to root folder
- [ ] Remove hardcoded character files
- [ ] Add prompt to database
- [ ] Deployment to VPS
- [ ] Deployment to fly.io instructions

Major

- [ ] Multi-agent support
- [ ] Simple s3 backed logging service
- [ ] Reuse existing client to provide a simple UI for admin and agent management.
