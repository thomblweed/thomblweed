import {
  createSupabaseServerClient,
  getRoleDataForCurrentUser
} from './supabase/supabase.service';

export const getCurrentUserRole = async (request: Request) => {
  const supabase = createSupabaseServerClient(request);
  const roleData = await getRoleDataForCurrentUser(supabase);

  return roleData?.role || 'user';
};
