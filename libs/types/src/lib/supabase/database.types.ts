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
      blogs: {
        Row: {
          id: number
          created_on: string
          title: string
          created_by: string
        }
        Insert: {
          id?: number
          created_on: string
          title: string
          created_by: string
        }
        Update: {
          id?: number
          created_on?: string
          title?: string
          created_by?: string
        }
      }
      user_profile: {
        Row: {
          id: number
          created_at: string | null
          role_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          role_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          role_id?: number | null
          user_id?: string | null
        }
      }
      user_roles: {
        Row: {
          id: number
          created_at: string | null
          role: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          role?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          role?: string | null
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

