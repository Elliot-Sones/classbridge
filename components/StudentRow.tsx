import { Student } from "@/data/mock";

export default function StudentRow({ student }: { student: Student }) {
  return (
    <div className="student-row">
      <div className="student-avatar" style={{ background: student.color }}>{student.initials}</div>
      <span className="student-name">{student.name}</span>
      <span className={`student-status ${student.statusClass}`}>{student.status}</span>
    </div>
  );
}
