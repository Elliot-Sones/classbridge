import { ReactNode } from "react";

export default function Card({
  title,
  icon,
  headerRight,
  headerExtra,
  bodyStyle,
  style,
  children,
}: {
  title?: string;
  icon?: string;
  headerRight?: ReactNode;
  headerExtra?: ReactNode;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className="card" style={style}>
      {title && (
        <div className="card-header" style={headerExtra ? { flexWrap: "wrap", gap: "8px" } : undefined}>
          {headerExtra ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {headerExtra}
                <h2>{icon} {title}</h2>
              </div>
            </>
          ) : (
            <h2>{icon} {title}</h2>
          )}
          {headerRight}
        </div>
      )}
      <div className="card-body" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
