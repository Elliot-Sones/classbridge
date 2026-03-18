"use client";

import { useState, useEffect } from "react";
import StatCard from "./StatCard";

export default function LiveStats() {
  const [stats, setStats] = useState({ students: 0, messages: 0, summaries: 0, assignments: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="stat-grid">
        <StatCard number="—" label="Students" />
        <StatCard number="—" label="Messages" />
        <StatCard number="—" label="Summaries" />
        <StatCard number="—" label="Assignments" />
      </div>
    );
  }

  return (
    <div className="stat-grid">
      <StatCard number={String(stats.students)} label="Students" />
      <StatCard number={String(stats.messages)} label="Messages" />
      <StatCard number={String(stats.summaries)} label="Summaries" />
      <StatCard number={String(stats.assignments)} label="Assignments" />
    </div>
  );
}
