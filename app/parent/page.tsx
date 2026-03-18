"use client";

import { useState } from "react";
import Card from "@/components/Card";
import LiveSummaries from "@/components/LiveSummaries";
import MessageThread from "@/components/MessageThread";
import ActivityCard from "@/components/ActivityCard";
import ProgressBar from "@/components/ProgressBar";
import ResourceLink from "@/components/ResourceLink";
import PrivacyBadge from "@/components/PrivacyBadge";
import BookCallModal from "@/components/BookCallModal";
import {
  activities,
  weeklyProgress,
  parentResources,
} from "@/data/mock";

export default function ParentPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="dash-header">
          <p className="dash-greeting">Welcome back, Emma&apos;s family</p>
          <h1>Parent Dashboard</h1>
          <p>Mrs. Sones&apos;s Grade 3 Class &middot; Maple Ridge Elementary &middot; Tuesday, March 17</p>
        </div>

        <div className="dash-grid dash-grid-3">
          {/* Main Column */}
          <div>
            {/* Today's Learning Summary */}
            <Card title="Today's Learning Summary" icon={"\u{1F4DA}"} style={{ marginBottom: 24 }}>
              <LiveSummaries />
            </Card>

            {/* Messages */}
            <Card
              title="Messages from Mrs. Sones"
              icon={"\u{1F4AC}"}
              headerExtra={
                <button className="btn-book-call" onClick={() => setModalOpen(true)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Call
                </button>
              }
              headerRight={<PrivacyBadge label="Private — Only your family sees these" />}
              style={{ marginBottom: 24 }}
            >
              <MessageThread
                channel="parent"
                placeholder="Reply to Mrs. Sones..."
                toastMessage="Message sent to Mrs. Sones"
                senderName="You (Parent)"
                isSent={true}
              />
            </Card>

            {/* Activities */}
            <Card title="Upcoming Activities & Homework" icon={"\u270D\uFE0F"}>
              {activities.map((a) => (
                <ActivityCard key={a.title} activity={a} />
              ))}
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Weekly Progress */}
            <Card title="Weekly Progress" icon={"\u{1F4C8}"} style={{ marginBottom: 24 }}>
              {weeklyProgress.map((p) => (
                <ProgressBar key={p.subject} item={p} />
              ))}
            </Card>

            {/* Resources */}
            <Card title="Resources for This Week" icon={"\u{1F517}"} bodyStyle={{ padding: 16 }}>
              {parentResources.map((r) => (
                <ResourceLink key={r.name} resource={r} />
              ))}
            </Card>
          </div>
        </div>
      </div>

      <BookCallModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
