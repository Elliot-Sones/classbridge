"use client";

import { useState, useEffect } from "react";

interface Summary {
  id: number;
  icon: string;
  icon_class: string;
  title: string;
  description: string;
  subject: string | null;
  posted_at: string;
}

export default function LiveSummaries() {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/summaries")
      .then((r) => r.json())
      .then(setSummaries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>Loading summaries...</p>;
  }

  if (summaries.length === 0) {
    return <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>No summaries posted yet.</p>;
  }

  return (
    <>
      {summaries.map((s) => (
        <div key={s.id} className="summary-item">
          <div className={`summary-icon ${s.icon_class}`}>{s.icon}</div>
          <div className="summary-content">
            <h4>{s.title}</h4>
            <p>{s.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
