import "./Badge.css";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="Badge-container">
      {children}
      <span className="Badge-circle" />
    </div>
  );
}
