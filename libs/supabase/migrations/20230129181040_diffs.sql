create policy "All users can view blogs"
on "public"."blogs"
as permissive
for select
to public
using (true);



