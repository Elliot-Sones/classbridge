"use client";

import { useState } from "react";
import { calendarDays } from "@/data/mock";
import { useToast } from "./Toast";

export default function BookCallModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { showToast } = useToast();

  function handleSelect(fullLabel: string) {
    setSelectedSlot(fullLabel);
  }

  function handleConfirm() {
    onClose();
    showToast(`Call booked: ${selectedSlot} \u2014 Mrs. Sones will confirm shortly!`);
    setSelectedSlot(null);
  }

  function handleClose() {
    onClose();
    setSelectedSlot(null);
  }

  return (
    <div
      className={`modal-overlay${open ? " open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>{"\u{1F4C5}"} Book a Call with Mrs. Sones</h2>
          <button className="modal-close" onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: "0.88rem", color: "var(--text-light)", marginBottom: "20px" }}>
            Select an available time slot for a 15-minute phone or video call. Mrs. Sones will confirm via message.
          </p>

          {calendarDays.map((day) => (
            <div key={day.label}>
              <div className="cal-day-label">{day.label}</div>
              <div className="cal-slots">
                {day.slots.map((slot) => (
                  <button
                    key={slot.fullLabel}
                    className={`cal-slot${!slot.available ? " unavailable" : ""}${selectedSlot === slot.fullLabel ? " selected" : ""}`}
                    onClick={() => slot.available && handleSelect(slot.fullLabel)}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {selectedSlot && (
            <div className="cal-confirm-area">
              <span className="cal-selected-display">
                Selected: <strong>{selectedSlot}</strong>
              </span>
              <button className="btn btn-cta btn-sm" onClick={handleConfirm}>
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
