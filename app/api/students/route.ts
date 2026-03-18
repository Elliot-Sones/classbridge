import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const sql = getDb();
  const students = await sql`SELECT id, name, created_at FROM students ORDER BY created_at DESC`;
  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const { name } = await request.json();

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const trimmed = name.trim().slice(0, 100);
  const sql = getDb();
  const [student] = await sql`INSERT INTO students (name) VALUES (${trimmed}) RETURNING id, name, created_at`;
  return NextResponse.json(student, { status: 201 });
}
