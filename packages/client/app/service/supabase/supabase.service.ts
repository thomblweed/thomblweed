/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createServerClient, parse, serialize } from '@supabase/ssr';
import { type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@types';

import type { UserRole } from './types';

export const createSupabaseServerClient = (request: Request) => {
  const cookies = parse(request.headers.get('Cookie') ?? '');
  const headers = new Headers();

  const supabase = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append('Set-Cookie', serialize(key, value, options));
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options));
        }
      },
      cookieOptions: {
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: process.env.SUPABASE_COOKIE_DOMAIN
      }
    }
  );

  return { supabase, headers };
};

export const getRoleDataForCurrentUser = async (client: SupabaseClient) =>
  (
    await client
      .from('user_profile')
      .select(`user_roles(role)`)
      .limit(1)
      .single()
  ).data?.user_roles as UserRole | undefined;
