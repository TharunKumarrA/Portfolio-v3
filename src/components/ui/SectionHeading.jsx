import { MinecraftAccent } from "./MinecraftAccent";

export function SectionHeading({ number, title, children, id, icon }) {
  return (
    <div className="section-heading">
      <div>
        {number && <p className="eyebrow">{number}</p>}
        {icon && <MinecraftAccent icon={icon} decorative className="section-heading-icon" />}
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </div>
  );
}
