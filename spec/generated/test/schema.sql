SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
ALTER SCHEMA public OWNER TO alec;
COMMENT ON SCHEMA public IS '';
SET default_tablespace = '';
SET default_table_access_method = heap;
CREATE TABLE public."featureFlag" (
    id integer NOT NULL,
    enabled boolean DEFAULT false
);
ALTER TABLE public."featureFlag" OWNER TO postgres;
CREATE TABLE public.follow (
    id integer NOT NULL,
    follower integer NOT NULL,
    author integer NOT NULL
);
ALTER TABLE public.follow OWNER TO postgres;
ALTER TABLE public.follow ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.follow_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
CREATE TABLE public.foo (
    id integer NOT NULL,
    id2 integer NOT NULL,
    json json,
    jsonb jsonb
);
ALTER TABLE public.foo OWNER TO postgres;
CREATE SEQUENCE public.foo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.foo_id_seq OWNER TO postgres;
CREATE TABLE public."like" (
    id integer NOT NULL,
    tweet integer NOT NULL,
    author integer NOT NULL
);
ALTER TABLE public."like" OWNER TO postgres;
ALTER TABLE public."like" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.like_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
CREATE TABLE public.tweet (
    id integer NOT NULL,
    author integer NOT NULL,
    text text NOT NULL,
    replies integer[] DEFAULT '{}'::integer[] NOT NULL
);
ALTER TABLE public.tweet OWNER TO postgres;
ALTER TABLE public.tweet ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tweet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
CREATE TABLE public."user" (
    id integer NOT NULL,
    name text NOT NULL,
    "joinedAt" timestamp with time zone DEFAULT now() NOT NULL,
    bio text,
    "featureFlags" integer[] DEFAULT '{}'::integer[] NOT NULL
);
ALTER TABLE public."user" OWNER TO alec;
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.user_id_seq OWNER TO alec;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public."featureFlag"
    ADD CONSTRAINT "featureFlag_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.follow
    ADD CONSTRAINT follow_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.foo
    ADD CONSTRAINT foo_pkey PRIMARY KEY (id, id2);
ALTER TABLE ONLY public."like"
    ADD CONSTRAINT like_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tweet
    ADD CONSTRAINT tweet_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
REVOKE USAGE ON SCHEMA public FROM PUBLIC;
