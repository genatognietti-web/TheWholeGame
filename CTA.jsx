// CTA.jsx — bottom CTA band
function CTA() {
  return (
    <section className="twg-section twg-section-cta">
      <div className="twg-container twg-cta-inner">
        <h2 className="twg-display-2" style={{color:'var(--ivory-50)'}}>
          Build your HR foundation <em style={{color:'var(--blush-300)'}}>before you need it.</em>
        </h2>
        <p className="twg-lede" style={{color:'var(--clay-200)'}}>
          The best time to put these in place is before something goes wrong. Nine documents. One afternoon. Done.
        </p>
        <div className="twg-hero-cta" style={{justifyContent:'center', marginTop:32}}>
          <a href="#bundles-pricing" className="twg-btn twg-btn-primary twg-btn-lg">See the bundles</a>
          <a href="#hero-waitlist" className="twg-btn twg-btn-ghost-dark twg-btn-lg">Join the waitlist →</a>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
