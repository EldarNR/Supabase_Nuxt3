import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(
  config.public.SUPABASE_PUBLIC_URL as string,
  config.public.supabase.key as string
);
export default supabase;
