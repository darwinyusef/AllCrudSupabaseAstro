import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://eglxewwgvluxmrkgrumu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnbHhld3dndmx1eG1ya2dydW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1OTM5NDAsImV4cCI6MjAwODE2OTk0MH0.51paB1h8te9yHt5IpeKN5bpHsGjr_hD0EOo6FkhYU6A')