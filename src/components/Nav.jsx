import { profile } from "../data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-name">S. ADEOYE</span>
          <span className="nav-brand-sub">ALSOEM VENTURES / DEV</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-status">
          <span className="status-dot" />
          <span>{profile.status}</span>
        </div>
      </div>
    </header>
  );
}
