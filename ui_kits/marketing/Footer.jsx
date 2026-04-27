// Footer.jsx
function Footer() {
  return (
    <footer className="twg-footer">
      <div className="twg-container twg-footer-inner">
        <div className="twg-footer-brand">
          <span style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:400, letterSpacing:'-0.01em', color:'var(--ink-900)'}}>The Whole Game</span>
          <p>The operations layer for youth sports. Less logistics. More game.</p>
        </div>
        <div className="twg-footer-cols">
          <div>
            <h5>Product</h5>
            <a href="#">Coach HR Starter</a>
            <a href="#">Parent & Athlete Conduct</a>
            <a href="#">Compliance & Incident System</a>
            <a href="#">Full Stack Bundle</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#">Help center</a>
            <a href="#">Status</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      <div className="twg-footer-bottom">
        <div className="twg-container">
          <span>© 2026 The Whole Game, Inc.</span>
          <span>Built for the people holding it all together.</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
