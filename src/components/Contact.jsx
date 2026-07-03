import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const waLink = `https://wa.me/${profile.whatsapp}`;

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <Reveal>
          <h2 className="section-heading">
            <span className="num">04</span> Let's build something
          </h2>
          <p className="contact-copy">
            Have a project, an opportunity, or just want to talk through an
            idea? Reach out on whichever channel works best for you.
          </p>
        </Reveal>

        <Reveal delay={100} className="contact-links">
          <a
            className="contact-link spec-frame on-paper"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">WhatsApp</span>
            <span className="contact-link-value">+{profile.whatsapp}</span>
          </a>
          <a
            className="contact-link spec-frame on-paper"
            href={`mailto:${profile.email}`}
          >
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">{profile.email}</span>
          </a>
          <a
            className="contact-link spec-frame on-paper"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">View profile →</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
