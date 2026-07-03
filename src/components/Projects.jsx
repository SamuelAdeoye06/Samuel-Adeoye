import { projects, otherProjects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import OtherProjectCard from "./OtherProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-heading">
            <span className="num">03</span> Projects
          </h2>
        </Reveal>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <Reveal className="other-projects-heading">
              <p className="other-projects-label">Other projects</p>
            </Reveal>
            <div className="other-projects-grid">
              {otherProjects.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <OtherProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
