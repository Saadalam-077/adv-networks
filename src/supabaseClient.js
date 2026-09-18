import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zxqpcuncbpzxsaqmfcby.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cXBjdW5jYnB6eHNhcW1mY2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4Mjk5NzYsImV4cCI6MjA4NjQwNTk3Nn0.Bdt0xkGJ1BxuwCitZ9doxTKzbuUvJfS52yygEY7l0aw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
