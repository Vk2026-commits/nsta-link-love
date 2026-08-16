import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://rmbmgpzmqrteefwxmhls.supabase.co";
const publishableKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtYm1ncHptcXJ0ZWVmd3htaGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NDM2MTMsImV4cCI6MjEwMjQxOTYxM30.Pmo1otfsa52cHOI_r1nD8taee8FsPfqb1J0o1biZHGo";

export function getSupabase() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || projectUrl;
  const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || publishableKey;

  return createClient(supabaseUrl, supabasePublishableKey);
}
