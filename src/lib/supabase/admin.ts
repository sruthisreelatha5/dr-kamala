import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

let cachedAdminClient: SupabaseClient | null = null;

function getSupabaseUrl(): string {
	return process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
}

export function getSupabaseAdminClient(): SupabaseClient {
	if (cachedAdminClient) return cachedAdminClient;

	const supabaseUrl = getSupabaseUrl();
	const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

	if (!supabaseUrl) {
		throw new Error("Missing env var: NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL)");
	}

	if (!serviceRoleKey) {
		throw new Error("Missing env var: SUPABASE_SERVICE_ROLE_KEY");
	}

	cachedAdminClient = createClient(supabaseUrl, serviceRoleKey, {
		auth: { persistSession: false, autoRefreshToken: false },
	});

	return cachedAdminClient;
}
