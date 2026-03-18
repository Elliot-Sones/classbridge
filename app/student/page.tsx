"use client";

import { useState } from "react";
import Card from "@/components/Card";
import LiveSummaries from "@/components/LiveSummaries";
import MessageThread from "@/components/MessageThread";
import ResourceLink from "@/components/ResourceLink";
import PrivacyBadge from "@/components/PrivacyBadge";
import PrivacyBanner from "@/components/PrivacyBanner";
import AssignmentList from "@/components/AssignmentList";
import StudentJoinForm from "@/components/StudentJoinForm";
import { studentResources } from "@/data/mock";

interface StudentRecord {
  id: number;
  name: string;
  created_at: string;
}

export default function StudentPage() {
  const [student, setStudent] = useState<StudentRecord | null>(null);

  if (!student) {
    return (
      <div className="dashboard">
        <div className="dash-header" style={{ textAlign: "center", maxWidth: 480, margin: "0 auto", paddingTop: 60, paddingBottom: 40 }}>
          <h1>Join Your Classroom</h1>
          <p style={{ marginBottom: 24 }}>Mrs. Sones&apos;s Grade 3 &middot; Maple Ridge Elementary</p>
          <StudentJoinForm onJoin={(s) => setStudent(s)} />
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dash-header">
        <p className="dash-greeting">Hi, {student.name}!</p>
        <h1>My Classroom</h1>
        <p>Mrs. Sones&apos;s Grade 3 &middot; Maple Ridge Elementary</p>
      </div>

      <PrivacyBanner />

      <div className="dash-grid dash-grid-3">
        {/* Main Column */}
        <div>
          {/* Ask Mrs. Sones */}
          <Card
            title="Ask Mrs. Sones"
            icon={"\u{1F4AC}"}
            headerRight={<PrivacyBadge label="Private — No one else sees this" />}
            style={{ marginBottom: 24 }}
          >
            <MessageThread
              channel="student"
              placeholder="Type your question here... (only Mrs. Sones will see this)"
              toastMessage="Message sent privately to Mrs. Sones"
              senderName={student.name}
              isSent={true}
            />
          </Card>

          {/* Today's Recap */}
          <Card title="What We Learned Today" icon={"\u{1F4DA}"} style={{ marginBottom: 24 }}>
            <LiveSummaries />
          </Card>

          {/* Fun Learning Links */}
          <Card title="Fun Learning Links" icon={"\u{1F393}"} bodyStyle={{ padding: 16 }}>
            {studentResources.map((r) => (
              <ResourceLink key={r.name} resource={r} />
            ))}
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card title="My To-Do List" icon={"\u2611\uFE0F"}>
            <AssignmentList studentId={student.id} />
          </Card>
        </div>
      </div>
    </div>
  );
}
