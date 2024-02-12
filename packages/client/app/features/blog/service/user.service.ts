import {
  createSupabaseServerClient,
  getRoleDataForCurrentUser
} from '~/service/supabase/supabase.service';

export const getCurrentUserRole = async (request: Request) => {
  const { supabase } = createSupabaseServerClient(request);
  const roleData = await getRoleDataForCurrentUser(supabase);

  return roleData?.role || 'user';
};
