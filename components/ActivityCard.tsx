import { Activity } from "@/data/mock";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="activity-card">
      <div className={`activity-badge ${activity.badgeClass}`}>{activity.badge}</div>
      <h4>{activity.title}</h4>
      <p>{activity.description}</p>
      {activity.materials && (
        <div className="materials-list">
          <h5>Materials Needed</h5>
          <ul>
            {activity.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}
      {activity.steps && (
        <ol className="activity-steps">
          {activity.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
