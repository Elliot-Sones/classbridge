"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import MessageThread from "@/components/MessageThread";
import LiveStats from "@/components/LiveStats";
import StudentList from "@/components/StudentList";
import PrivacyBadge from "@/components/PrivacyBadge";
import TeacherPostForm from "@/components/TeacherPostForm";
import CreateAssignmentForm from "@/components/CreateAssignmentForm";
import AssignmentList from "@/components/AssignmentList";
import { useToast } from "@/components/Toast";
import { teacherResources } from "@/data/mock";

const CLASS_CODE = "maple2026";

export default function TeacherPage() {
  const [codeInput, setCodeInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const { showToast } = useToast();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (codeInput.trim().toLowerCase() === CLASS_CODE) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Incorrect class code. Please try again.");
    }
  }

  if (!loggedIn) {
    return (
      <div className="dashboard">
        <div className="gate-screen">
          <div className="gate-icon">{"👩‍🏫"}</div>
          <h1>Teacher Login</h1>
          <p>Maple Ridge Elementary</p>
          <p className="gate-subtitle">Enter your class code to access the teacher dashboard.</p>
          <form onSubmit={handleLogin} className="gate-form">
            <input
              type="text"
              className="message-input"
              placeholder="Class code"
              value={codeInput}
              onChange={(e) => { setCodeInput(e.target.value); setError(""); }}
              required
            />
            {error && <p className="gate-error">{error}</p>}
            <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
              Sign In
            </button>
          </form>
          <p className="gate-hint">Demo code: <strong>maple2026</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dash-header">
        <p className="dash-greeting">Good afternoon, Mrs. Sones</p>
        <h1>Teacher Dashboard</h1>
        <p>Grade 3 &middot; Maple Ridge Elementary</p>
      </div>

      {/* Live Stats */}
      <LiveStats />

      <div className="dash-grid dash-grid-2">
        {/* Left Column */}
        <div>
          {/* Quick Post */}
          <Card title="Post Daily Summary" icon={"\u{1F4DD}"} style={{ marginBottom: 24 }}>
            <TeacherPostForm />
          </Card>

          {/* Message Inbox */}
          <Card
            title="Private Messages"
            icon={"\u{1F4AC}"}
            headerRight={<PrivacyBadge label="1-on-1 Private" />}
            style={{ marginBottom: 24 }}
          >
            <MessageThread
              channel="teacher"
              placeholder="Reply to a message..."
              toastMessage="Reply sent"
              senderName="Mrs. Sones"
              buttonLabel="Reply"
              isSent={false}
            />
          </Card>

          {/* Resource Library */}
          <Card
            title="Resource Library"
            icon={"\u{1F4DA}"}
            headerRight={
              <button className="btn btn-ghost btn-sm" onClick={() => showToast("Add resource form would open here")}>
                + Add Resource
              </button>
            }
          >
            {teacherResources.map((r) => (
              <div key={r.name} className="resource-lib-item">
                <span className="emoji">{r.emoji}</span>
                <div className="resource-lib-info">
                  <strong>{r.name}</strong>
                  <span>{r.attachment}</span>
                </div>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  View
                </a>
              </div>
            ))}
          </Card>
        </div>

        {/* Right Column */}
        <div>
          {/* Live Student Roster */}
          <StudentList />

          {/* Assignments */}
          <Card title="Assignments" icon={"\u{1F4CB}"} style={{ marginBottom: 24 }}>
            <AssignmentList studentId={null} />
            <div style={{ marginTop: 16 }}>
              <CreateAssignmentForm />
            </div>
          </Card>

          {/* Quick Actions */}
          <Card title="Quick Actions" icon={"\u26A1"}>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }} onClick={() => showToast("Activity guide builder would open")}>
              {"\u270D\uFE0F"} Create Activity Guide
            </button>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }} onClick={() => showToast("Resource search would open")}>
              {"\u{1F50D}"} Search Resources
            </button>
            <Link href="/parent" className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }}>
              {"\u{1F440}"} Preview Parent View
            </Link>
            <Link href="/student" className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start" }}>
              {"\u{1F440}"} Preview Student View
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
