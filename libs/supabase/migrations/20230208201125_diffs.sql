create policy "Only blog admin can delete blogs"
on "public"."blogs"
as permissive
for delete
to authenticated
using ((EXISTS ( SELECT user_profile.user_id,
    user_roles.role
   FROM (user_roles
     JOIN user_profile ON ((user_profile.role_id = user_roles.id)))
  WHERE ((user_roles.role = 'admin'::text) AND (auth.uid() = user_profile.user_id)))));



