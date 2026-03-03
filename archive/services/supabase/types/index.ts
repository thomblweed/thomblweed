import type { Database } from '@types';

export type UserRole = Database['public']['Tables']['user_roles']['Row'];
export type BlogData = Database['public']['Tables']['blogs']['Row'];
