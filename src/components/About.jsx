import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <h2 className="section-heading">
            <span className="num">01</span> Background
          </h2>
          {paragraphs.map((p, i) => (
            <p className="about-p" key={i}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="about-facts spec-frame on-paper" delay={120}>
          <div className="fact-block">
            <p className="fact-label">Education</p>
            <p className="fact-value">{profile.education.school}</p>
            <p className="fact-sub">{profile.education.program}</p>
            <p className="fact-sub">{profile.education.period}</p>
          </div>
          <div className="fact-divider" />
          <div className="fact-block">
            <p className="fact-label">Current Placement</p>
            <p className="fact-value">{profile.experience.org}</p>
            <p className="fact-sub">{profile.experience.role}</p>
            <p className="fact-sub">{profile.experience.period}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
