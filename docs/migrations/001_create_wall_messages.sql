-- Migration: create wall_messages table (Remember Wall / comments)

create extension if not exists pgcrypto;

create table if not exists public.wall_messages (
	id uuid primary key default gen_random_uuid(),
	name text not null check (char_length(name) <= 80),
	relation text null check (relation is null or char_length(relation) <= 80),
	text text not null check (char_length(text) <= 500),
	created_at timestamptz not null default now()
);

create index if not exists wall_messages_created_at_idx on public.wall_messages (created_at desc);

-- Security:
-- This app writes via a Next.js API route using the Service Role key.
-- Enabling RLS prevents direct browser writes/reads unless you later add policies.
alter table public.wall_messages enable row level security;

