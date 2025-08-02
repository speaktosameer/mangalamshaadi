import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://sfpgwskdcdhxcjizqakq.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcGd3c2tkY2RoeGNqaXpxYWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDAxNDksImV4cCI6MjA2OTcxNjE0OX0.76CmGkb2ihKE4Gu7WRMYDipCY3WeOLa3GiDbeqAsVOE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
