import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const sql = getDb();

  const [studentCount] = await sql`SELECT COUNT(*)::int as count FROM students`;
  const [messageCount] = await sql`SELECT COUNT(*)::int as count FROM messages WHERE channel = 'teacher' AND created_at > NOW() - INTERVAL '7 days'`;
  const [summaryCount] = await sql`SELECT COUNT(*)::int as count FROM summaries WHERE posted_at > NOW() - INTERVAL '7 days'`;
  const [assignmentCount] = await sql`SELECT COUNT(*)::int as count FROM assignments`;

  return NextResponse.json({
    students: studentCount.count,
    messages: messageCount.count,
    summaries: summaryCount.count,
    assignments: assignmentCount.count,
  });
}
