export default function OtherProjectCard({ project }) {
  const Tag = project.link ? "a" : "div";
  const linkProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${project.name}`,
      }
    : {};

  return (
    <Tag className={`other-card spec-frame${project.link ? " other-card-linked" : ""}`} {...linkProps}>
      <div className="other-card-head">
        <span className="other-card-icon" aria-hidden="true">▸</span>
        {project.link && <span className="other-card-arrow">↗</span>}
      </div>
      <h4 className="other-card-name">{project.name}</h4>
      <p className="other-card-desc">{project.description}</p>
      <ul className="other-card-stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Tag>
  );
}
