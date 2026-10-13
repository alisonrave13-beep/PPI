import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() ||
  'https://uqdhxjqazauuxzikzfsm.supabase.co';
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_qe-CRFypN-zowcxDaJaROQ_kQ1IYE58';

if (
  !URL.canParse(supabaseUrl) ||
  !['http:', 'https:'].includes(new URL(supabaseUrl).protocol)
) {
  throw new Error('Invalid VITE_SUPABASE_URL: set it to a valid HTTP or HTTPS URL.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
