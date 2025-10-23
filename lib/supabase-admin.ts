import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ssflbgewaecdpqqltglm.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZmxiZ2V3YWVjZHBxcWx0Z2xtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTIzMTk5NSwiZXhwIjoyMDc2ODA3OTk1fQ.uteym9Lrhd_fA5gJgsLzHAf5l14sphNHgclHbR803lc'

// Server-side client with service role (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
