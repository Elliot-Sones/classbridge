"use client";

import { useState } from "react";
import { Assignment } from "@/data/mock";

export default function AssignmentItem({ assignment }: { assignment: Assignment }) {
  const [checked, setChecked] = useState(assignment.completed ?? false);

  return (
    <div className="assignment-item">
      <div
        className={`assignment-check${checked ? " checked" : ""}`}
        onClick={() => setChecked(!checked)}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <div className="assignment-info">
        <h4 style={checked ? { textDecoration: "line-through", color: "var(--text-muted)" } : undefined}>
          {assignment.title}
        </h4>
        <span
          className={`due${!checked && assignment.dueSoon ? " soon" : ""}`}
          style={checked ? { color: "var(--accent)" } : undefined}
        >
          {checked ? "Completed!" : assignment.due}
        </span>
      </div>
    </div>
  );
}
