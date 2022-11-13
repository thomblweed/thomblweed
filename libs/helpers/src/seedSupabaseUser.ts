import { createClient } from '@supabase/supabase-js';

export const seedUser = async () => {
  const supabase = createClient('http://localhost:54321', '');
  const { data: user, error } = await supabase.auth.admin.createUser({
    email: '',
    password: '',
    email_confirm: true,
  });
  console.log({ user, error });
};

seedUser();
