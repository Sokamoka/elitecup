export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      videos: {
        Row: {
          id: number | null;
          created_at: string | null;
          game_id: string | null;
          game_name: string;
          game_date: string;
          url: string;
        };
        Insert: {
          id?: number | null;
          created_at?: string;
          game_id: string | null;
          game_name: string;
          game_date: string;
          url: string;
        };
        Update: {
          id?: number | null;
          created_at?: string;
          game_id: string | null;
          game_name: string;
          game_date: string;
          url: string;
        };
        Upsert: {
          id?: number | null;
          created_at?: string;
          game_id: string | null;
          game_name: string;
          game_date: string;
          url: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
