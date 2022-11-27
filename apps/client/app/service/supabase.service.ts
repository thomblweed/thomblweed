/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createServerClient } from '@supabase/auth-helpers-remix';

export const getSupabaseClient = (request: Request, response: Response) =>
  createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
      cookieOptions: {
        secure: true,
        maxAge: 48000,
      },
    }
  );
