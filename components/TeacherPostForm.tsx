"use client";

import { useState } from "react";
import { useToast } from "./Toast";

const SUBJECT_CONFIG: Record<string, { icon: string; iconClass: string }> = {
  math: { icon: "🔢", iconClass: "math" },
  science: { icon: "🌱", iconClass: "science" },
  reading: { icon: "📖", iconClass: "reading" },
  social: { icon: "🌎", iconClass: "social" },
  "": { icon: "📝", iconClass: "math" },
};

export default function TeacherPostForm() {
  const [postText, setPostText] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [publishing, setPublishing] = useState(false);
  const { showToast } = useToast();

  async function publishPost() {
    if (!postText.trim()) {
      showToast("Please write a summary first");
      return;
    }
    if (!title.trim()) {
      showToast("Please add a title");
      return;
    }

    setPublishing(true);
    try {
      const config = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG[""];
      const res = await fetch("/api/summaries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          icon: config.icon,
          icon_class: config.iconClass,
          title: title.trim(),
          description: postText.trim(),
          subject: subject || null,
        }),
      });

      if (res.ok) {
        setPostText("");
        setTitle("");
        setSubject("");
        showToast("Summary published to all parents!");
      }
    } finally {
      setPublishing(false);
    }
  }

  return (
    <div className="quick-post-form">
      <input
        type="text"
        className="message-input"
        placeholder="Summary title (e.g. Math — Fractions Review)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: 12 }}
      />
      <textarea
        placeholder={"What did your class learn today? Parents will see this summary...\n\nTip: Mention specific activities, what went well, and suggestions for practicing at home."}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <div className="form-row">
        <div>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
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
        <button className="btn btn-primary btn-sm" onClick={publishPost} disabled={publishing}>
          {publishing ? "Publishing..." : "Publish to Parents"}
        </button>
      </div>
    </div>
  );
}
