CREATE TABLE IF NOT EXISTS public.accounts (
    id uuid NOT NULL,
    "createdAt" timestamptz,
    name text,
    username text,
    email text NOT NULL,
    "avatarUrl" text,
    details jsonb
);

CREATE TABLE IF NOT EXISTS public.agent_settings (
    id uuid NOT NULL,
    agent_id text NOT NULL,
    setting_key text NOT NULL,
    setting_value text,
    created_at timestamptz,
    updated_at timestamptz
);

CREATE TABLE IF NOT EXISTS public.cache (
    key text NOT NULL,
    "agentId" text NOT NULL,
    value jsonb,
    "createdAt" timestamp,
    "expiresAt" timestamp
);

CREATE TABLE IF NOT EXISTS public.consciousness_streams (
    id uuid NOT NULL,
    agent_id text,
    topic text NOT NULL,
    title text NOT NULL,
    content jsonb NOT NULL,
    status text NOT NULL,
    timestamp timestamp
);

CREATE TABLE IF NOT EXISTS public.goals (
    id uuid NOT NULL,
    "createdAt" timestamptz,
    "userId" uuid,
    name text,
    status text,
    description text,
    "roomId" uuid,
    objectives jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS public.logs (
    id uuid NOT NULL,
    "createdAt" timestamptz,
    user_id uuid,
    body jsonb NOT NULL,
    type text NOT NULL,
    "roomId" uuid,
    "userId" uuid,
    room_id uuid
);

CREATE TABLE IF NOT EXISTS public.memories (
    id uuid NOT NULL,
    type text NOT NULL,
    "createdAt" timestamptz,
    content jsonb NOT NULL,
    embedding vector,
    "userId" uuid,
    "agentId" uuid,
    "roomId" uuid,
    unique bool NOT NULL
);

CREATE TABLE IF NOT EXISTS public.participants (
    id uuid NOT NULL,
    "createdAt" timestamptz,
    "userId" uuid,
    "roomId" uuid,
    "userState" text,
    last_message_read text
);

CREATE TABLE IF NOT EXISTS public.relationships (
    id uuid NOT NULL,
    "createdAt" timestamptz,
    "userA" uuid NOT NULL,
    "userB" uuid NOT NULL,
    status text,
    "userId" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS public.rooms (
    id uuid NOT NULL,
    "createdAt" timestamptz
);

CREATE TABLE IF NOT EXISTS public.stream_settings (
    id uuid NOT NULL,
    agent_id text,
    enabled bool,
    interval int4,
    last_run timestamp
);

CREATE TABLE IF NOT EXISTS public.tweets (
    id uuid NOT NULL,
    content text NOT NULL,
    status text NOT NULL,
    created_at timestamptz,
    scheduled_for timestamptz,
    sent_at timestamptz,
    error text,
    agent_id text,
    prompt text,
    home_timeline json,
    new_tweet_content text,
    media_type text,
    media_url text
);