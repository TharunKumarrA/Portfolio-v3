export function OrbitMark({ label = "ORBIT / 01", className = "" }) {
  return <span aria-hidden="true" className={`orbit-mark ${className}`}><span className="orbit-ring" /><span className="orbit-star" /><span className="orbit-label">{label}</span></span>;
}
