"use client";

import { useState, useEffect, useCallback } from "react";
import { useToast } from "./Toast";

interface DbMessage {
  id: number;
  channel: string;
  sender_name: string;
  text: string;
  is_sent: boolean;
  created_at: string;
}

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;

  const isToday = d.toDateString() === now.toDateString();
  const timeStr = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  if (isToday) return `Today, ${timeStr}`;

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) return `Yesterday, ${timeStr}`;

  return d.toLocaleDateString("en-US", { weekday: "long" }) + `, ${timeStr}`;
}

export default function MessageThread({
  channel,
  placeholder,
  toastMessage,
  senderName,
  buttonLabel,
  isSent,
}: {
  channel: string;
  placeholder: string;
  toastMessage: string;
  senderName: string;
  buttonLabel?: string;
  isSent?: boolean;
}) {
  const [messages, setMessages] = useState<DbMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch(`/api/messages?channel=${channel}`);
      if (res.ok) setMessages(await res.json());
    } finally {
      setLoading(false);
    }
  }, [channel]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  async function send() {
    const msg = input.trim();
    if (!msg) return;

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        channel,
        sender_name: senderName,
        text: msg,
        is_sent: isSent ?? true,
      }),
    });

    if (res.ok) {
      const newMsg = await res.json();
      setMessages((prev) => [...prev, newMsg]);
      setInput("");
      showToast(toastMessage);
    }
  }

  if (loading) {
    return <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", padding: "12px 0" }}>Loading messages...</p>;
  }

  return (
    <>
      {messages.map((m) => (
        <div key={m.id} className={`message-bubble${m.is_sent ? " sent" : ""}`}>
          <div className="message-meta">
            <span className="message-sender">{m.sender_name}</span>
            <span className="message-time">{formatTime(m.created_at)}</span>
          </div>
          <p className="message-text">{m.text}</p>
        </div>
      ))}
      <div className="message-input-area">
        <input
          type="text"
          className="message-input"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="btn btn-primary btn-sm" onClick={send}>
          {buttonLabel || "Send"}
        </button>
      </div>
    </>
  );
}
