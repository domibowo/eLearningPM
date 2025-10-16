import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `https://${import.meta.env.VITE_PROJECT_ID}.supabase.co`;

export const supabase = createClient(supabaseUrl, import.meta.env.VITE_PUBLIC_ANON_KEY);
