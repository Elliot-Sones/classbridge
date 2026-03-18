"use client";

import { useState } from "react";
import { Message } from "@/data/mock";
import { useToast } from "./Toast";

export default function MessageThread({
  initialMessages,
  placeholder,
  toastMessage,
  senderName,
  buttonLabel,
}: {
  initialMessages: Message[];
  placeholder: string;
  toastMessage: string;
  senderName: string;
  buttonLabel?: string;
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const { showToast } = useToast();

  function send() {
    const msg = input.trim();
    if (!msg) return;
    setMessages([
      ...messages,
      { sender: senderName, time: "Just now", text: msg, sent: true },
    ]);
    setInput("");
    showToast(toastMessage);
  }

  return (
    <>
      {messages.map((m, i) => (
        <div key={i} className={`message-bubble${m.sent ? " sent" : ""}`}>
          <div className="message-meta">
            <span className="message-sender">{m.sender}</span>
            <span className="message-time">{m.time}</span>
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
