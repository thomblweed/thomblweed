import type { LoaderFunction } from '@remix-run/node';
import { getSupabaseClient } from '~/service/supabase.service';

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response();
  const supabase = getSupabaseClient(request, response);
  const { status, data } = await supabase
    .from('user_profile')
    .select(`user_roles(role)`)
    .single();
  if (status === 200 && data != null) {
    const {
      user_roles: { role },
    } = data;
    console.log({ role });
  }
  return response;
};

export default function Index() {
  return (
    <section>
      <p>
        Hello! I&apos;m a web developer and welcome to my site with nothing in
        it :-)
      </p>
    </section>
  );
}
