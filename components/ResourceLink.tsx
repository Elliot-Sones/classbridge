import { Resource } from "@/data/mock";

export default function ResourceLink({ resource }: { resource: Resource }) {
  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
      <div className={`resource-link-icon ${resource.iconClass}`}>{resource.icon}</div>
      <div className="resource-link-text">
        <strong>{resource.name}</strong>
        <span>{resource.description}</span>
      </div>
      <span className="resource-arrow">&rarr;</span>
    </a>
  );
}
