export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profile: {
        Row: {
          id: number
          role_id: number | null
          user_id: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          role_id?: number | null
          user_id?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          role_id?: number | null
          user_id?: string | null
          created_at?: string | null
        }
      }
      user_roles: {
        Row: {
          role: string | null
          created_at: string | null
          id: number
        }
        Insert: {
          role?: string | null
          created_at?: string | null
          id?: number
        }
        Update: {
          role?: string | null
          created_at?: string | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

