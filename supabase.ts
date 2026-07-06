import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR-PROJECT.supabase.co';   // ← Change this
const supabaseAnonKey = 'YOUR-ANON-KEY-HERE';             // ← Change this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
