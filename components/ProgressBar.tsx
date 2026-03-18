import { ProgressItem } from "@/data/mock";

export default function ProgressBar({ item }: { item: ProgressItem }) {
  return (
    <div className="week-topic">
      <span className="week-topic-subject">{item.subject}</span>
      <div className="progress-bar">
        <div className={`progress-fill ${item.fillClass}`} style={{ width: `${item.percent}%` }} />
      </div>
      <span className="week-topic-pct">{item.percent}%</span>
    </div>
  );
}
