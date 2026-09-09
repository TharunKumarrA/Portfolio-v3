export function SectionHeading({ number, title, children, id }) {
 return <div className="section-heading"><div><p className="eyebrow">{number}</p><h2 id={id}>{title}</h2></div>{children}</div>;
}
