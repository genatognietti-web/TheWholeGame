function scrollToWaitlist(e) {
  e.preventDefault();
  const el = document.getElementById('hero-waitlist');
  if (el) el.scrollIntoView({ block: 'start' });
  // flash the waitlist input
  setTimeout(() => {
    const input = document.querySelector('.twg-waitlist input');
    if (input) { input.focus(); input.classList.add('twg-waitlist-pulse'); setTimeout(() => input.classList.remove('twg-waitlist-pulse'), 1000); }
  }, 400);
}

// Pricing.jsx — 3 bundle tiles, buy buttons → waitlist while pre-launch
function Pricing() {
  const tiers = [
    {
      num: '01',
      name: 'Coach HR Starter',
      badge: 'Most popular',
      price: '$97',
      desc: 'Onboard, manage, and document your coaching staff before anything goes wrong.',
      body: 'One undocumented incident, one unclear expectation — that\'s how small problems become big ones. A complete HR foundation for managing your coaching staff from day one. No HR experience required.',
      featured: true,
      bestFor: 'Club directors and league admins managing 1 or more coaches.',
      items: ['Coach Onboarding Checklist', 'Coach Code of Conduct', 'Communication & Chain of Command Guide', 'Discipline & Incident Management System', 'Incident Report Template', 'Written Warning Template', 'Youth Safety & Boundaries Guideline', 'Organizational Escalation Path', 'Implementation Guide (5-step rollout)'],
      cta: 'Get Bundle 1 — $97',
    },
    {
      num: '02',
      name: 'Parent & Athlete Conduct',
      badge: null,
      price: '$122',
      desc: 'Stop managing sideline chaos. Start managing expectations.',
      body: 'Parent conflicts, sideline blowups, athletes who don\'t know the rules — these aren\'t just uncomfortable, they\'re liability risks. Set expectations upfront and handle issues consistently.',
      featured: false,
      bestFor: 'Any org that has dealt with difficult parents or behavior issues.',
      items: ['Parent Code of Conduct', 'Athlete Expectations Framework', 'Communication Structure Guide', 'Escalation & Conflict Resolution System', 'Incident Reporting System', 'Behavior Violation Response Framework (4 levels)', 'Safety & Liability Protection Guidelines', 'Organizational Authority Structure', 'Implementation Guide'],
      cta: 'Get Bundle 2 — $122',
    },
    {
      num: '03',
      name: 'Compliance & Incident System',
      badge: null,
      price: '$147',
      desc: 'Your compliance backbone — built for the real risks youth sports organizations face.',
      body: 'Most orgs operate without a compliance framework. And it\'s fine — until it isn\'t. A safety incident, a misconduct allegation, a parent threatening legal action. Be ready before it happens.',
      featured: false,
      bestFor: 'Growing or established orgs, or anyone who has experienced an incident.',
      items: ['Compliance Framework Overview', 'Incident Classification System (4 severity levels)', 'Full Incident Reporting System', 'Compliance Escalation Chain (4-step process)', 'Youth Safety Compliance Standards', 'Jurisdictional Compliance Integration', 'Compliance Audit Requirements', 'Organizational Liability Protection Guide', 'Implementation Guide'],
      cta: 'Get Bundle 3 — $147',
    },
  ];

  return (
    <section className="twg-section" id="bundles-pricing">
      <div className="twg-container">
        <div className="twg-section-head">
          <div className="twg-eyebrow">Bundles &amp; pricing</div>
          <h2 className="twg-display-2">Nine documents. <em>One afternoon.</em></h2>
          <p className="twg-lede">
            Each bundle is a one-time purchase. Download, add your org's details, and you own them. No subscription, no renewal, no consultant required.
          </p>
          <div className="twg-launch-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Bundles launch end of May 2026 — <a href="#hero-waitlist" onClick={scrollToWaitlist}>join the waitlist</a> for 24-hour early access.
          </div>
        </div>

        <div className="twg-pricing-grid">
          {tiers.map((t, i) => <PricingCard key={i} {...t} />)}
        </div>

        <div className="twg-full-stack">
          <div className="twg-full-stack-text">
            <span className="twg-eyebrow" style={{color:'var(--blush-300)'}}>Best value</span>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:32, fontWeight:400, letterSpacing:'-0.02em', margin:'8px 0 10px', lineHeight:1.2, color:'var(--ivory-50)'}}>
              All three bundles. <em style={{fontStyle:'italic', color:'var(--blush-300)'}}>27 documents. One system.</em>
            </h3>
            <p style={{fontSize:14.5, color:'var(--clay-200)', maxWidth:520, lineHeight:1.6, margin:0}}>
              Staff management, conduct standards, and compliance — all connected. Everything you need to build a complete HR foundation from scratch.
            </p>
          </div>
          <div className="twg-full-stack-cta">
            <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:16}}>
              <span style={{fontFamily:'var(--font-display)', fontSize:52, fontWeight:500, letterSpacing:'-0.03em', color:'var(--ivory-50)', lineHeight:1}}>$297</span>
              <span style={{fontSize:13, fontWeight:600, color:'var(--blush-300)', background:'rgba(198,107,82,0.18)', padding:'5px 12px', borderRadius:999}}>Save $69</span>
            </div>
            <a href="#hero-waitlist" onClick={scrollToWaitlist} className="twg-btn twg-btn-primary twg-btn-lg">Join the waitlist to get early access
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <p style={{fontSize:12, color:'var(--clay-400)', margin:'10px 0 0', textAlign:'center'}}>Instant Google Drive access · Customize for your org</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ num, name, badge, price, desc, body, featured, bestFor, items, cta }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className={`twg-pricing-card ${featured ? 'featured' : ''}`}>
      <div className="twg-pricing-head">
        <div style={{display:'flex', flexDirection:'column', gap:4}}>
          <span style={{fontFamily:'var(--font-mono)', fontSize:10, color: featured ? 'var(--blush-400)' : 'var(--fg-tertiary)', letterSpacing:'0.1em'}}>{num}</span>
          <h3>{name}</h3>
        </div>
        {badge && <span className="twg-pill twg-pill-accent">{badge}</span>}
      </div>
      <div className="twg-pricing-price">
        <span className="amt">{price}</span>
        <span className="unit">one-time · 9 docs</span>
      </div>
      <p style={{fontSize:14.5, fontWeight:500, color:'var(--ink-800)', lineHeight:1.4, margin:'0 0 8px'}}>{desc}</p>
      <p className="twg-pricing-desc">{body}</p>
      <p style={{fontSize:12.5, color:'var(--fg-tertiary)', margin:'0 0 14px', lineHeight:1.45}}>
        <strong style={{color:'var(--ink-700)', fontWeight:500}}>Best for:</strong> {bestFor}
      </p>
      <a href="#hero-waitlist" onClick={scrollToWaitlist} className={`twg-btn ${featured ? 'twg-btn-primary' : 'twg-btn-secondary'} twg-btn-block`}>{cta}</a>
      <div style={{borderTop:'1px solid var(--border-subtle)', marginTop:16, paddingTop:14}}>
        <button className="twg-bundle-toggle" onClick={() => setOpen(o => !o)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" style={{transform: open ? 'rotate(180deg)' : 'none', transition:'transform .18s'}}><path d="M6 9l6 6 6-6"/></svg>
          {open ? 'Hide' : 'See all'} 9 documents
        </button>
        {open && (
          <ul className="twg-pricing-features" style={{marginTop:12}}>
            {items.map((f, i) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

window.Pricing = Pricing;
