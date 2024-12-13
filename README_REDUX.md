# Eliza Reduxhq.ai

Welcome to the Reduxhq.ai fork of the Eliza project.

## Getting Started

### Prerequisites

**This is a work in progress. For now you can follow the default Eliza setup to get up and running.**

#### Setup [WIP]

- Database - Postgres - Docker compose for Postgres with Pgvector extension or compatible Database URL.
- Storage - Provide S3 credentials or setup compatible storage for logging or use docker compose which comes with Minio.

1. Clone the repository
2. [TODO]Run `docker compose -f compose-dev.yml up` to start the local Postgres + S3 Minio database.
3. Run `pnpm install`
4. Run `pnpm dev`

## TODO

- [ ] Update setup docs, refactor db to root folder
- [ ] Code quality - Refactor redux-extensions to follow Eliza plugin structure
- [ ] Remove hardcoded character files
- [ ] Move prompts/characters to database in prep for evals, admin api and multi-agent support
- [ ] Deployment docs to VPS/Fly/Fargate/GCP
- [ ] Multi-agent support
- [ ] Admin api and evals
- [ ] Update to latest eliza main branch

## Deployment

- [ ] S3 - R2/Tigris for cheap storage
- [ ] Postgres - Fly.io, Neon(free tier), Supabase(free tier)
- [ ] Multi-agent support
- [ ] Reuse existing client to provide a simple UI for admin and agent management.
