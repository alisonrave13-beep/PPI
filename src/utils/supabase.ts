import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uqdhxjqazauuxzikzfsm.supabase.co';
const supabaseKey = 'sb_publishable_qe-CRFypN-zowcxDaJaROQ_kQ1IYE58';

export const supabase = createClient(supabaseUrl, supabaseKey);