import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { assignmentId, studentId, completed } = await request.json();

  if (!assignmentId || !studentId) {
    return NextResponse.json({ error: "assignmentId and studentId are required" }, { status: 400 });
  }

  const sql = getDb();

  if (completed) {
    await sql`
      INSERT INTO assignment_completions (assignment_id, student_id)
      VALUES (${assignmentId}, ${studentId})
      ON CONFLICT (assignment_id, student_id) DO NOTHING
    `;
  } else {
    await sql`
      DELETE FROM assignment_completions
      WHERE assignment_id = ${assignmentId} AND student_id = ${studentId}
    `;
  }

  return NextResponse.json({ ok: true });
}
