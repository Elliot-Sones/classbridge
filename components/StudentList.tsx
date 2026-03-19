"use client";

import { useState, useEffect, useCallback } from "react";
import Card from "./Card";

interface StudentRecord {
  id: number;
  name: string;
  created_at: string;
}

const COLORS = ["#3b82f6", "#8b5cf6", "#2d8a4e", "#e8634a", "#f59e0b", "#6366f1", "#ec4899", "#14b8a6", "#ef4444", "#0ea5e9"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getColor(id: number) {
  return COLORS[id % COLORS.length];
}

export default function StudentList() {
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = useCallback(async () => {
    try {
      const res = await fetch("/api/students");
      if (res.ok) {
        setStudents(await res.json());
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <Card title="Class Roster" icon={"\u{1F465}"} style={{ marginBottom: 24 }}>
      <div>
        {loading ? (
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>
            Loading students...
          </p>
        ) : students.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>
            No students have joined yet. Be the first!
          </p>
        ) : (
          students.map((s) => (
            <div key={s.id} className="student-row">
              <div className="student-avatar" style={{ background: getColor(s.id) }}>
                {getInitials(s.name)}
              </div>
              <span className="student-name">{s.name}</span>
              <span className="student-status active">Joined</span>
            </div>
          ))
        )}
      </div>

      {!loading && students.length > 0 && (
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 12, textAlign: "center" }}>
          {students.length} student{students.length !== 1 ? "s" : ""} in class
        </p>
      )}
    </Card>
  );
}
