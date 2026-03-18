"use client";

import { useState } from "react";
import { useToast } from "./Toast";

export default function CreateAssignmentForm({ onCreated }: { onCreated?: () => void }) {
  const [title, setTitle] = useState("");
  const [dueText, setDueText] = useState("");
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !dueText.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), due_text: dueText.trim(), due_soon: false }),
      });
      if (res.ok) {
        setTitle("");
        setDueText("");
        setOpen(false);
        showToast("Assignment created!");
        onCreated?.();
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start" }} onClick={() => setOpen(true)}>
        {"\u{1F4CB}"} Create Assignment
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: 16 }}>
      <input
        type="text"
        className="message-input"
        placeholder="Assignment title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: 8 }}
        required
      />
      <input
        type="text"
        className="message-input"
        placeholder="Due date (e.g. Due Friday)"
        value={dueText}
        onChange={(e) => setDueText(e.target.value)}
        style={{ marginBottom: 12 }}
        required
      />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>
          {submitting ? "Creating..." : "Create"}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>Cancel</button>
      </div>
    </form>
  );
}
