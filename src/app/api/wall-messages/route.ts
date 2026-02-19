import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WallMessageRow = {
	id: string;
	name: string;
	relation: string | null;
	text: string;
	created_at: string;
};

function asTrimmedString(value: unknown): string {
	if (typeof value !== "string") return "";
	return value.trim();
}

function clampLimit(value: string | null): number {
	const n = Number(value);
	if (!Number.isFinite(n)) return 50;
	return Math.min(200, Math.max(1, Math.floor(n)));
}

export async function GET(request: Request) {
	try {
		const url = new URL(request.url);
		const limit = clampLimit(url.searchParams.get("limit"));

		const supabase = getSupabaseAdminClient();
		const { data, error } = await supabase
			.from("wall_messages")
			.select("id,name,relation,text,created_at")
			.order("created_at", { ascending: false })
			.limit(limit);

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ messages: (data ?? []) as WallMessageRow[] });
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as Record<string, unknown>;

		const name = asTrimmedString(body.name);
		const relationRaw = asTrimmedString(body.relation);
		const relation = relationRaw ? relationRaw : null;
		const text = asTrimmedString(body.text);

		if (!name || !text) {
			return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
		}

		if (name.length > 80) {
			return NextResponse.json({ error: "Name is too long." }, { status: 400 });
		}

		if (relation && relation.length > 80) {
			return NextResponse.json({ error: "Relation is too long." }, { status: 400 });
		}

		if (text.length > 500) {
			return NextResponse.json({ error: "Message is too long." }, { status: 400 });
		}

		const supabase = getSupabaseAdminClient();
		const { data, error } = await supabase
			.from("wall_messages")
			.insert({ name, relation, text })
			.select("id,name,relation,text,created_at")
			.single();

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ message: data as WallMessageRow }, { status: 201 });
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
