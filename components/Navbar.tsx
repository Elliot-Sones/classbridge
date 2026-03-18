"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDashboard = pathname === "/parent" || pathname === "/student" || pathname === "/teacher";

  const roleLabel =
    pathname === "/parent" ? "Parent Dashboard" :
    pathname === "/student" ? "Student View" :
    pathname === "/teacher" ? "Teacher Dashboard" :
    null;

  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="rgba(255,255,255,0.2)" />
            <path d="M7 10h14M7 14h14M7 18h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="18" r="3.5" fill="#2d8a4e" stroke="#fff" strokeWidth="1.5" />
            <path d="M20 18l1 1 2-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ClassBridge
        </Link>
        {isDashboard && (
          <span className="nav-role-label">{roleLabel}</span>
        )}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <ul className={`nav-tabs${menuOpen ? " open" : ""}`}>
          {!isDashboard ? (
            <>
              <li>
                <Link href="/parent" className="nav-tab" onClick={() => setMenuOpen(false)}>
                  For Parents
                </Link>
              </li>
              <li>
                <Link href="/student" className="nav-tab" onClick={() => setMenuOpen(false)}>
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/teacher" className="nav-tab" onClick={() => setMenuOpen(false)}>
                  For Teachers
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/" className="nav-tab" onClick={() => setMenuOpen(false)}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
