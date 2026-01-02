import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InquiryData {
  id?: number;
  name: string;
  phone: string;
  inquiry: string;
  created_at?: string;
  status: 'new' | 'contacted' | 'completed';
}
