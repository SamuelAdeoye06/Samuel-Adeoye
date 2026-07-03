import { skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-heading">
            <span className="num">02</span> Skills
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 80} className="skills-group">
              <p className="skills-group-label">{group.group}</p>
              <ul>
                {group.items.map((item) => {
                  const isExploring = group.group === "Currently Exploring";
                  return (
                    <li key={item} className={isExploring ? "exploring-item" : ""}>
                      {item}
                      {isExploring && (
                        <span className="exploring-badge">Exploring</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
