export default function OtherProjectCard({ project }) {
  return (
    <div className="other-card spec-frame">
      <div className="other-card-head">
        <span className="other-card-icon" aria-hidden="true">
          ▸
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="other-card-link"
          >
            ↗
          </a>
        )}
      </div>
      <h4 className="other-card-name">{project.name}</h4>
      <p className="other-card-desc">{project.description}</p>
      <ul className="other-card-stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
