import { profile } from "../data/portfolio";
import photo from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero grid-bg">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="hero-name">{profile.name}.</h1>
          <p className="hero-greeting-line">{profile.heroIntro}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              View work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-card spec-frame">
          <div className="hero-card-photo">
            <img src={photo} alt={profile.name} />
          </div>
          <dl className="hero-card-fields">
            <div className="hero-card-row">
              <dt>Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div className="hero-card-row">
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div className="hero-card-row">
              <dt>Base</dt>
              <dd>{profile.base}</dd>
            </div>
            <div className="hero-card-row">
              <dt>Status</dt>
              <dd className="hero-card-status">
                <span className="status-dot" />
                {profile.status}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
