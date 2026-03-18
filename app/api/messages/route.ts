import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channel = searchParams.get("channel");

  if (!channel) {
    return NextResponse.json({ error: "channel is required" }, { status: 400 });
  }

  const sql = getDb();
  const messages = await sql`
    SELECT id, channel, sender_name, text, is_sent, created_at
    FROM messages
    WHERE channel = ${channel}
    ORDER BY created_at ASC
  `;
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const { channel, sender_name, text, is_sent } = await request.json();

  if (!channel || !sender_name || !text) {
    return NextResponse.json({ error: "channel, sender_name, and text are required" }, { status: 400 });
  }

  const sql = getDb();
  const [message] = await sql`
    INSERT INTO messages (channel, sender_name, text, is_sent)
    VALUES (${channel}, ${sender_name.slice(0, 100)}, ${text.slice(0, 2000)}, ${is_sent ?? false})
    RETURNING id, channel, sender_name, text, is_sent, created_at
  `;
  return NextResponse.json(message, { status: 201 });
}
