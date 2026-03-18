"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import MessageThread from "@/components/MessageThread";
import StatCard from "@/components/StatCard";
import StudentRow from "@/components/StudentRow";
import PrivacyBadge from "@/components/PrivacyBadge";
import { useToast } from "@/components/Toast";
import {
  stats,
  teacherMessages,
  students,
  teacherResources,
} from "@/data/mock";

export default function TeacherPage() {
  const { showToast } = useToast();
  const [postText, setPostText] = useState("");

  function publishPost() {
    if (!postText.trim()) {
      showToast("Please write a summary first");
      return;
    }
    setPostText("");
    showToast("Summary published to all parents!");
  }

  return (
    <div className="dashboard">
      <div className="dash-header">
        <p className="dash-greeting">Good afternoon, Mrs. Sones</p>
        <h1>Teacher Dashboard</h1>
        <p>Grade 3 &middot; Maple Ridge Elementary &middot; 24 Students</p>
      </div>

      {/* Stats */}
      <div className="stat-grid">
        {stats.map((s) => (
          <StatCard key={s.label} number={s.number} label={s.label} />
        ))}
      </div>

      <div className="dash-grid dash-grid-2">
        {/* Left Column */}
        <div>
          {/* Quick Post */}
          <Card title="Post Daily Summary" icon={"\u{1F4DD}"} style={{ marginBottom: 24 }}>
            <div className="quick-post-form">
              <textarea
                placeholder={"What did your class learn today? Parents will see this summary...\n\nTip: Mention specific activities, what went well, and suggestions for practicing at home."}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              <div className="form-row">
                <div>
                  <select defaultValue="">
                    <option value="">All Subjects</option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="reading">Reading</option>
                    <option value="social">Social Studies</option>
                  </select>
                  <button className="btn btn-ghost btn-sm" onClick={() => showToast("Resource attached!")}>
                    {"\u{1F4CE}"} Attach Resource
                  </button>
                </div>
                <button className="btn btn-primary btn-sm" onClick={publishPost}>
                  Publish to Parents
                </button>
              </div>
            </div>
          </Card>

          {/* Message Inbox */}
          <Card
            title="Private Messages"
            icon={"\u{1F4AC}"}
            headerRight={<PrivacyBadge label="1-on-1 Private" />}
            style={{ marginBottom: 24 }}
          >
            <MessageThread
              initialMessages={teacherMessages}
              placeholder="Reply to a message..."
              toastMessage="Reply sent"
              senderName="Mrs. Sones"
              buttonLabel="Reply"
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
          {/* Student Activity */}
          <Card title="Student Activity" icon={"\u{1F465}"} style={{ marginBottom: 24 }}>
            {students.map((s) => (
              <StudentRow key={s.initials} student={s} />
            ))}
          </Card>

          {/* Quick Actions */}
          <Card title="Quick Actions" icon={"\u26A1"}>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }} onClick={() => showToast("Activity guide builder would open")}>
              {"\u270D\uFE0F"} Create Activity Guide
            </button>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }} onClick={() => showToast("Assignment creator would open")}>
              {"\u{1F4CB}"} Create Assignment
            </button>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }} onClick={() => showToast("Resource search would open")}>
              {"\u{1F50D}"} Search Resources
            </button>
            <Link href="/parent" className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start", marginBottom: 8 }}>
              {"\u{1F440}"} Preview Parent View
            </Link>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "flex-start" }} onClick={() => showToast("Weekly report generated!")}>
              {"\u{1F4C8}"} Generate Weekly Report
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
