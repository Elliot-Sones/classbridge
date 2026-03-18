"use client";

import { useState, useEffect } from "react";
import AssignmentItem from "./AssignmentItem";

interface Assignment {
  id: number;
  title: string;
  due_text: string;
  due_soon: boolean;
  completed: boolean;
}

export default function AssignmentList({ studentId }: { studentId: number | null }) {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = studentId ? `/api/assignments?studentId=${studentId}` : "/api/assignments";
    fetch(url)
      .then((r) => r.json())
      .then(setAssignments)
      .finally(() => setLoading(false));
  }, [studentId]);

  if (loading) {
    return <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>Loading assignments...</p>;
  }

  if (assignments.length === 0) {
    return <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>No assignments yet.</p>;
  }

  return (
    <>
      {assignments.map((a) => (
        <AssignmentItem
          key={a.id}
          id={a.id}
          title={a.title}
          due_text={a.due_text}
          due_soon={a.due_soon}
          completed={a.completed}
          studentId={studentId}
        />
      ))}
    </>
  );
}
