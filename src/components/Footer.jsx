export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Samuel Adeoye — ALSOEM VENTURES / DEV</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
