const statusColor = {
  live: "circuit",
  progress: "signal",
  client: "circuit",
};

export default function ProjectCard({ project }) {
  const dotClass = statusColor[project.status] === "signal" ? "amber" : "";

  return (
    <article
      className={`project-card spec-frame tone-${project.tone}`}
      id={project.id}
    >
      {project.image ? (
        <a
          className="project-shot"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
        >
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        </a>
      ) : (
        <div className="project-shot project-shot-placeholder">
          <span>In development — no live preview yet</span>
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-head">
          <div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <span className={`project-status status-${project.status}`}>
            <span className={`status-dot ${dotClass}`} />
            {project.statusLabel}
          </span>
        </div>

        <p className="project-desc">{project.description}</p>

        <ul className="project-stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="project-foot">
          {project.link ? (
            <a
              className="btn btn-ghost"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel} →
            </a>
          ) : (
            <span className="tag">{project.linkLabel}</span>
          )}
        </div>
      </div>
    </article>
  );
}
