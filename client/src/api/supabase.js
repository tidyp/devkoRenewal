import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hlcnwrulbgheyhthjldj.supabase.co";

// Project API keys
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY253cnVsYmdoZXlodGhqbGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODAwOTgsImV4cCI6MjAzMzg1NjA5OH0.ltg-1CKkaxS5C2OtFYhnl06XUTIdXJ91ffCAhx9f_i0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
