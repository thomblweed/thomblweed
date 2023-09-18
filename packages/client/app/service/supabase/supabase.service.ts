/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { SupabaseClient } from '@supabase/auth-helpers-remix';
import { createServerClient } from '@supabase/auth-helpers-remix';

import type { Database } from '@types';
import type { BlogData, UserRole } from './types';

export const createSupabaseServerClient = (
  request: Request,
  response?: Response
) =>
  createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response: response || new Response(),
      cookieOptions: {
        secure: true,
        name: 'thomblweed-auth-token',
        domain: process.env.SUPABASE_COOKIE_DOMAIN,
        path: '/',
        sameSite: 'lax'
      }
    }
  );

export const getRoleDataForCurrentUser = async (client: SupabaseClient) =>
  (
    await client
      .from('user_profile')
      .select(`user_roles(role)`)
      .limit(1)
      .single()
  ).data?.user_roles as UserRole | undefined;

export const getAllBlogs = async (client: SupabaseClient) =>
  (await client.from('blogs').select('*')).data as BlogData[] | null;
