"use client";

import { useState } from "react";

interface AssignmentProps {
  id: number;
  title: string;
  due_text: string;
  due_soon: boolean;
  completed: boolean;
  studentId: number | null;
}

export default function AssignmentItem({ id, title, due_text, due_soon, completed: initialCompleted, studentId }: AssignmentProps) {
  const [checked, setChecked] = useState(initialCompleted);

  async function toggle() {
    const newState = !checked;
    setChecked(newState);

    if (studentId) {
      await fetch("/api/assignments/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assignmentId: id, studentId, completed: newState }),
      });
    }
  }

  return (
    <div className="assignment-item">
      <div
        className={`assignment-check${checked ? " checked" : ""}`}
        onClick={toggle}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <div className="assignment-info">
        <h4 style={checked ? { textDecoration: "line-through", color: "var(--text-muted)" } : undefined}>
          {title}
        </h4>
        <span
          className={`due${!checked && due_soon ? " soon" : ""}`}
          style={checked ? { color: "var(--accent)" } : undefined}
        >
          {checked ? "Completed!" : due_text}
        </span>
      </div>
    </div>
  );
}
