import { BlogFeature } from '~/features/blog';

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const blogsData = await getAllBlogs(request);
//
//   return json({
//     blogsData
//   });
// };
//
// export const action = async ({ request }: ActionFunctionArgs) => {
//   const formData = await request.formData();
//   const { title } = Object.fromEntries(formData);
//   if (title == null || typeof title !== 'string') {
//     console.error('blog title is null, undefined or not a string');
//     return json({ message: 'bad request' }, 400);
//   }
//
//   const { supabase } = createSupabaseServerClient(request);
//   const { data: userData, error: userError } = await supabase.auth.getUser();
//   if (userError) {
//     console.error({ userError });
//     return json({ message: 'bad request' }, 400);
//   }
//
//   const { data: blog, error } = await supabase
//     .from('blogs')
//     .insert({
//       title: title.trim(),
//       created_on: new Date().toDateString(),
//       created_by: userData.user.id
//     })
//     .select('id')
//     .single();
//
//   if (error) {
//     console.error(error);
//     return json({ message: 'bad request' }, 400);
//   }
//
//   return redirect(`/blogs/${blog.id}`);
// };
//
// export default function BlogRoute() {
//   const { blogsData } = useLoaderData<typeof loader>();
//   const { isAdmin } = useOutletContext<AdminContext>();
//
//   return <BlogsFeature data={blogsData} isAdmin={isAdmin} />;
// }
//

export default function BlogRoute() {
  return <BlogFeature />;
}

export const handle = { hydrate: true };
