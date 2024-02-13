import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://urwdaodcnihrkabbcsqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyd2Rhb2RjbmlocmthYmJjc3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0OTkzNDEsImV4cCI6MjAxMzA3NTM0MX0.UlrzaveLHD0q23H7KNFmH_5yigKAdAxrvf7YwvmuARc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
