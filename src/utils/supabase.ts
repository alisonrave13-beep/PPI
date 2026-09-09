import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://uqdhxjqazauuxzikzfsm.supabase.co';
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_qe-CRFypN-zowcxDaJaROQ_kQ1IYE58';

export const supabase = createClient(supabaseUrl, supabaseKey);
