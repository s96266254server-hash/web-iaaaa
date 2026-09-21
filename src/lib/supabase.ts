import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://polxdnsvntiufvdtqsqc.supabase.co';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_cF0nFy_kN_w7buiNx2XLmg_cM_sObIi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
