import { SummaryItem as SummaryItemType } from "@/data/mock";

export default function SummaryItem({ item }: { item: SummaryItemType }) {
  return (
    <div className="summary-item">
      <div className={`summary-icon ${item.iconClass}`}>{item.icon}</div>
      <div className="summary-content">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
