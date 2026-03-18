import Link from "next/link";
import { features, problems, solutions, testimonials } from "@/data/mock";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">For Elementary Educators &amp; Families</div>
          <h1>Bridge the Gap Between Classroom and Home</h1>
          <p>ClassBridge gives parents real-time visibility into what their child is learning, private channels to communicate with teachers, and curated resources to extend learning at home.</p>
          <div className="hero-buttons">
            <Link href="/parent" className="btn btn-cta">I&apos;m a Parent</Link>
            <Link href="/teacher" className="btn btn-outline">I&apos;m a Teacher</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="section-header">
          <h2>Everything Parents Need to Stay Involved</h2>
          <p>No more guessing what happened in class today. ClassBridge keeps you connected and empowered.</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className={`feature-icon ${f.iconClass}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="problem-solution">
        <div className="ps-inner">
          <div className="ps-header">
            <h2>Why ClassBridge?</h2>
            <p>Real problems teachers and parents face every day &mdash; solved.</p>
          </div>
          <div className="ps-grid">
            <div className="ps-col">
              <h3>{"\u{1F6A8}"} The Problem</h3>
              {problems.map((p) => (
                <div key={p.text} className="ps-item problem">
                  <span className="ps-item-icon">{p.icon}</span>
                  <span className="ps-item-text">{p.text}</span>
                </div>
              ))}
            </div>
            <div className="ps-col">
              <h3>{"\u2705"} The Solution</h3>
              {solutions.map((s) => (
                <div key={s.text} className="ps-item solution">
                  <span className="ps-item-icon">{s.icon}</span>
                  <span className="ps-item-text">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="section-header">
          <h2>Loved by Families and Educators</h2>
          <p>Hear from parents and teachers who&apos;ve experienced the ClassBridge difference.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Connect Classroom and Home?</h2>
        <p>Choose your role to explore the demo.</p>
        <div className="role-cards">
          <Link href="/parent" className="role-card">
            <span className="role-card-icon">{"👨‍👩‍👧"}</span>
            <strong>I&apos;m a Parent</strong>
            <span>See learning summaries, message the teacher, and track homework</span>
          </Link>
          <Link href="/student" className="role-card">
            <span className="role-card-icon">{"🎒"}</span>
            <strong>I&apos;m a Student</strong>
            <span>View today&apos;s lessons, check your to-do list, and ask questions</span>
          </Link>
          <Link href="/teacher" className="role-card">
            <span className="role-card-icon">{"👩‍🏫"}</span>
            <strong>I&apos;m a Teacher</strong>
            <span>Post summaries, manage assignments, and message families</span>
          </Link>
        </div>
      </section>
    </>
  );
}
