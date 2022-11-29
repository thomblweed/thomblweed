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
          role_id: number
          user_id: string
          created_at: string
        }
        Insert: {
          id?: number
          role_id: number
          user_id: string
          created_at?: string
        }
        Update: {
          id?: number
          role_id?: number
          user_id?: string
          created_at?: string
        }
      }
      user_roles: {
        Row: {
          id: number
          created_at: string
          role: string
        }
        Insert: {
          id?: number
          created_at?: string
          role?: string
        }
        Update: {
          id?: number
          created_at?: string
          role?: string
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

