// Nav.jsx — sticky top navigation for marketing site
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`twg-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="twg-nav-inner">
        <a href="#" className="twg-nav-brand">
          <img src="../../assets/logo/wordmark.svg" alt="The Whole Game" height="28" />
        </a>
        <div className="twg-nav-links">
          <a href="#how-it-works">Product</a>
          <a href="#bundles-pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <div className="twg-nav-cta">
          <a href="#" className="twg-btn twg-btn-ghost twg-btn-sm">Sign in</a>
          <a href="#hero-waitlist" className="twg-btn twg-btn-primary twg-btn-sm">Join the waitlist</a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
