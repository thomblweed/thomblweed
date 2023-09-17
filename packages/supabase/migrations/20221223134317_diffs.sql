-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.blogs
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_on timestamp without time zone NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    created_by uuid NOT NULL,
    CONSTRAINT blogs_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.blogs
    OWNER to postgres;

ALTER TABLE IF EXISTS public.blogs
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.blogs TO anon;

GRANT ALL ON TABLE public.blogs TO authenticated;

GRANT ALL ON TABLE public.blogs TO postgres;

GRANT ALL ON TABLE public.blogs TO service_role;
CREATE POLICY "Only blog admin can insert blogs"
    ON public.blogs
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK ((EXISTS ( SELECT user_profile.user_id,
    user_roles.role
   FROM (user_roles
     JOIN user_profile ON ((user_profile.role_id = user_roles.id)))
  WHERE ((user_roles.role = 'admin'::text) AND (auth.uid() = user_profile.user_id)))));

REVOKE ALL ON TABLE public.user_profile FROM authenticated;
REVOKE ALL ON TABLE public.user_profile FROM postgres;
REVOKE ALL ON TABLE public.user_profile FROM service_role;
GRANT ALL ON TABLE public.user_profile TO authenticated;

GRANT ALL ON TABLE public.user_profile TO service_role;

GRANT ALL ON TABLE public.user_profile TO postgres;