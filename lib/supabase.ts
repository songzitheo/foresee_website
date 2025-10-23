import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ssflbgewaecdpqqltglm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZmxiZ2V3YWVjZHBxcWx0Z2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzE5OTUsImV4cCI6MjA3NjgwNzk5NX0.-Pfh-IWGS22_63MKLF90UKUW9kUbv9uEApgzgYZIEts'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
