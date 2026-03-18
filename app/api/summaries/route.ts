import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const sql = getDb();
  const summaries = await sql`
    SELECT id, icon, icon_class, title, description, subject, posted_at
    FROM summaries
    ORDER BY posted_at DESC
  `;
  return NextResponse.json(summaries);
}

export async function POST(request: Request) {
  const { icon, icon_class, title, description, subject } = await request.json();

  if (!title || !description) {
    return NextResponse.json({ error: "title and description are required" }, { status: 400 });
  }

  const sql = getDb();
  const [summary] = await sql`
    INSERT INTO summaries (icon, icon_class, title, description, subject)
    VALUES (${icon || "📝"}, ${icon_class || "math"}, ${title.slice(0, 200)}, ${description.slice(0, 2000)}, ${subject || null})
    RETURNING id, icon, icon_class, title, description, subject, posted_at
  `;
  return NextResponse.json(summary, { status: 201 });
}
