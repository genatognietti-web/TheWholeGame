// ProductSummary.jsx — cleaner 3-bundle layout
const BUNDLES = [
  {
    num: '01', price: '$97', eyebrow: 'Bundle 1',
    title: 'Coach HR Starter',
    hook: 'Onboard, manage, and document your coaching staff before anything goes wrong.',
    count: 9,
    highlights: ['Coach Onboarding Checklist', 'Code of Conduct', 'Incident Report Template', 'Written Warning Template', 'Youth Safety Guidelines', '+ 4 more'],
    bestFor: 'Club directors and league admins managing 1 or more coaches.',
  },
  {
    num: '02', price: '$122', eyebrow: 'Bundle 2',
    title: 'Parent & Athlete Conduct',
    hook: 'Set expectations upfront. Handle issues consistently. Protect your org when things go sideways.',
    count: 9,
    highlights: ['Parent Code of Conduct', 'Athlete Expectations Framework', 'Behavior Violation Response', 'Conflict Resolution System', 'Liability Protection Guidelines', '+ 4 more'],
    bestFor: 'Any org that has dealt with difficult parents or behavior issues — or wants to prevent them.',
  },
  {
    num: '03', price: '$147', eyebrow: 'Bundle 3',
    title: 'Compliance & Incident System',
    hook: 'The compliance backbone for orgs that are growing — or have already seen what happens without one.',
    count: 9,
    highlights: ['Compliance Framework Overview', 'Incident Classification System', 'Full Incident Reporting System', 'Youth Safety Compliance Standards', 'Liability Protection Guide', '+ 4 more'],
    bestFor: 'Growing or established orgs, or anyone who has experienced an incident and needs better infrastructure.',
  },
];

function ProductSummary() {
  return (
    <section className="twg-section twg-section-summary" id="bundles">
      <div className="twg-container">
        <div className="twg-section-head">
          <div className="twg-eyebrow">What's included</div>
          <h2 className="twg-display-2">
            Three bundles. <em>One complete HR foundation.</em>
          </h2>
          <p className="twg-lede">
            Each bundle is nine ready-to-use documents. Download, add your org's details, and you're covered. Buy separately or get all three for the full system.
          </p>
        </div>

        <div className="twg-bundles-stack">
          {BUNDLES.map((b, i) => <BundleRow key={i} {...b} />)}
        </div>

        <div className="twg-fullstack-band">
          <div className="twg-fullstack-band-left">
            <div className="twg-eyebrow" style={{color:'var(--blush-300)'}}>Best value</div>
            <h3>The Full Stack — all three bundles.</h3>
            <p>27 documents. Complete coverage of staff management, conduct standards, and compliance. Everything connected, nothing missing.</p>
          </div>
          <div className="twg-fullstack-band-right">
            <div className="twg-fullstack-price-row">
              <span className="twg-fullstack-amt">$297</span>
              <span className="twg-fullstack-save">Save $69</span>
            </div>
            <a href="#bundles-pricing" className="twg-btn twg-btn-primary twg-btn-lg">
              Get the Full Stack
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BundleRow({ num, price, eyebrow, title, hook, count, highlights, bestFor }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="twg-bundle-row">
      <div className="twg-bundle-row-left">
        <span className="twg-bundle-row-num">{num}</span>
        <div className="twg-bundle-row-meta">
          <div className="twg-eyebrow">{eyebrow}</div>
          <h3 className="twg-bundle-row-title">{title}</h3>
          <p className="twg-bundle-row-hook">{hook}</p>
          <p className="twg-bundle-row-bestfor"><em>Best for:</em> {bestFor}</p>
        </div>
      </div>
      <div className="twg-bundle-row-right">
        <div className="twg-bundle-row-price">{price}</div>
        <div className="twg-bundle-row-count">{count} documents</div>
        <button className="twg-bundle-toggle" onClick={() => setOpen(o => !o)}>
          {open ? 'Hide list' : "What's included"}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" style={{transform: open ? 'rotate(180deg)' : 'none', transition:'transform .18s'}}><path d="M6 9l6 6 6-6"/></svg>
        </button>
        {open && (
          <ul className="twg-bundle-row-doclist">
            {highlights.map((d, i) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M20 6L9 17l-5-5"/></svg>
                {d}
              </li>
            ))}
          </ul>
        )}
        <a href="#bundles-pricing" className="twg-btn twg-btn-secondary" style={{marginTop: open ? 14 : 'auto'}}>
          Get this bundle
        </a>
      </div>
    </div>
  );
}

window.ProductSummary = ProductSummary;
