import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

type Credentials = {
  email: string;
  password: string;
};

export const loginUserWithEmailAndPassword = async (
  request: Request,
  { email, password }: Credentials
) => {
  const { supabase, headers } = createSupabaseServerClient(request);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  return { error, headers };
};
