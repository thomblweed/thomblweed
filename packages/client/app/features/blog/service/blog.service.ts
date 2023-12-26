import { createSupabaseServerClient } from '~/service/supabase/supabase.service';
import { BlogData } from '~/service/supabase/types';

export const getBlogById = async (request: Request, blogId: string) => {
  const { supabase } = createSupabaseServerClient(request);
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('id, title')
    .eq('id', `${blogId}`)
    .single();

  return { blog, error };
};

export const getAllBlogs = async (request: Request) => {
  const { supabase } = createSupabaseServerClient(request);

  return (await supabase.from('blogs').select('id, title')).data as
    | BlogData[]
    | null;
};
