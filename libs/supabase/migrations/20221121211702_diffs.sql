-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.user_profile
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    role_id bigint,
    user_id uuid,
    CONSTRAINT user_profile_pkey PRIMARY KEY (id),
    CONSTRAINT user_profile_role_id_fkey FOREIGN KEY (role_id)
        REFERENCES public.user_roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_profile_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_profile
    OWNER to postgres;

ALTER TABLE IF EXISTS public.user_profile
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_profile TO anon;

GRANT ALL ON TABLE public.user_profile TO authenticated;

GRANT ALL ON TABLE public.user_profile TO postgres;

GRANT ALL ON TABLE public.user_profile TO service_role;

ALTER TABLE public.user_roles
    ALTER COLUMN id TYPE bigint;
ALTER TABLE IF EXISTS public.user_roles
    ALTER COLUMN id SET INCREMENT 1 RESTART SET START 1 SET MINVALUE 1 SET MAXVALUE 9223372036854775807 SET CACHE 1;
