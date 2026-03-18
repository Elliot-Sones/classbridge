"use client";

import { useState } from "react";
import { useToast } from "./Toast";

interface StudentRecord {
  id: number;
  name: string;
  created_at: string;
}

export default function StudentJoinForm({ onJoin }: { onJoin: (student: StudentRecord) => void }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) throw new Error("Failed to join");
      const student = await res.json();
      onJoin(student);
      setName("");
      showToast(`Welcome to the class, ${student.name}!`);
    } catch {
      showToast("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        className="message-input"
        placeholder="Enter your name to join the class..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
      />
      <button className="btn btn-accent btn-sm" type="submit" disabled={loading}>
        {loading ? "Joining..." : "Join Class"}
      </button>
    </form>
  );
}
