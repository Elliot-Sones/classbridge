import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get("studentId");

  const sql = getDb();

  if (studentId) {
    const assignments = await sql`
      SELECT a.id, a.title, a.due_text, a.due_soon,
             CASE WHEN ac.id IS NOT NULL THEN true ELSE false END as completed
      FROM assignments a
      LEFT JOIN assignment_completions ac ON ac.assignment_id = a.id AND ac.student_id = ${parseInt(studentId)}
      ORDER BY a.created_at ASC
    `;
    return NextResponse.json(assignments);
  }

  const assignments = await sql`
    SELECT id, title, due_text, due_soon, created_at
    FROM assignments
    ORDER BY created_at ASC
  `;
  return NextResponse.json(assignments);
}

export async function POST(request: Request) {
  const { title, due_text, due_soon } = await request.json();

  if (!title || !due_text) {
    return NextResponse.json({ error: "title and due_text are required" }, { status: 400 });
  }

  const sql = getDb();
  const [assignment] = await sql`
    INSERT INTO assignments (title, due_text, due_soon)
    VALUES (${title.slice(0, 200)}, ${due_text.slice(0, 100)}, ${due_soon ?? false})
    RETURNING id, title, due_text, due_soon, created_at
  `;
  return NextResponse.json(assignment, { status: 201 });
}
