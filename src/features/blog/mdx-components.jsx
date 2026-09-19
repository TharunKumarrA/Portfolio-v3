export const mdxComponents = {
  Callout: function Callout({ children }) { return <aside className="post-callout">{children}</aside>; },
  table: function Table(props) { return <div className="post-table" role="region" aria-label="Data table" tabIndex={0}><table {...props} /></div>; },
};
