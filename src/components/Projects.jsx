import { useState, useRef } from "react";
import { projects, otherProjects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import OtherProjectCard from "./OtherProjectCard";
import Reveal from "./Reveal";

const INITIAL_SHOW = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const carouselRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);
  const hasMore = projects.length > INITIAL_SHOW;

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    // Scroll by one card width + gap
    const cardWidth = carouselRef.current.querySelector(".other-card")?.offsetWidth ?? 280;
    const gap = 18;
    carouselRef.current.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-heading">
            <span className="num">03</span> Projects
          </h2>
        </Reveal>

        <div className="projects-list">
          {visibleProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <Reveal>
            <div className="show-more-wrap">
              <button
                className="show-more-btn"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
              >
                {showAll ? "SHOW LESS ↑" : "SHOW MORE ↓"}
              </button>
            </div>
          </Reveal>
        )}

        {otherProjects.length > 0 && (
          <>
            <Reveal className="workshop-heading-wrap">
              <p className="workshop-label">The Workshop</p>
              <p className="workshop-sublabel">
                Practice builds &amp; learning experiments
              </p>
            </Reveal>

            <div className="carousel-outer">
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={() => scrollCarousel("prev")}
                aria-label="Scroll to previous project"
              >
                ‹
              </button>

              <div className="carousel-track" ref={carouselRef}>
                {otherProjects.map((p) => (
                  <OtherProjectCard key={p.id} project={p} />
                ))}
              </div>

              <button
                className="carousel-btn carousel-btn-next"
                onClick={() => scrollCarousel("next")}
                aria-label="Scroll to next project"
              >
                ›
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
