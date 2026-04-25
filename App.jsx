// Onboarding App — simplified 3-step flow
// Step 1: Create account
// Step 2: Choose your bundle
// Step 3: You're in — Google Drive access

const BUNDLE_DATA = [
  {
    id: 1, price: '$97', label: 'Bundle 1',
    title: 'Coach HR Starter',
    hook: 'Onboard, manage, and document your coaching staff before anything goes wrong.',
    docs: 9,
    badge: 'Most popular',
    items: ['Coach Onboarding Checklist', 'Coach Code of Conduct', 'Incident Report Template', 'Written Warning Template', '+ 5 more documents'],
  },
  {
    id: 2, price: '$122', label: 'Bundle 2',
    title: 'Parent & Athlete Conduct',
    hook: 'Stop managing sideline chaos. Start managing expectations.',
    docs: 9,
    badge: null,
    items: ['Parent Code of Conduct', 'Athlete Expectations Framework', 'Behavior Violation Response Framework', 'Conflict Resolution System', '+ 5 more documents'],
  },
  {
    id: 3, price: '$147', label: 'Bundle 3',
    title: 'Compliance & Incident System',
    hook: "Your organization's compliance backbone — built for the real risks you face.",
    docs: 9,
    badge: null,
    items: ['Compliance Framework Overview', 'Incident Classification System', 'Youth Safety Compliance Standards', 'Liability Protection Guide', '+ 5 more documents'],
  },
];

const FULLSTACK = { price: '$297', save: 'Save $69', title: 'The Full Stack', hook: 'All three bundles. 27 documents. One complete HR foundation.' };

function App() {
  const [step, setStep] = React.useState(0);
  const [bundle, setBundle] = React.useState(null);

  return (
    <div className="ob-shell">
      <Sidebar step={step} bundle={bundle} />
      <main className="ob-stage">
        {step === 0 && <StepAccount next={() => setStep(1)} />}
        {step === 1 && <StepBundle bundle={bundle} setBundle={setBundle} next={() => setStep(2)} back={() => setStep(0)} />}
        {step === 2 && <StepDone bundle={bundle} />}
      </main>
    </div>
  );
}

function Sidebar({ step, bundle }) {
  const steps = [
    { t: 'Create your account', s: 'Takes about a minute' },
    { t: 'Choose your bundle', s: 'Buy one or all three' },
    { t: "You're in", s: 'Download + customize' },
  ];
  return (
    <aside className="ob-side">
      <div className="brand">
        <img src="../../assets/logo/wordmark-ondark.svg" height="28" alt="The Whole Game" />
      </div>
      <div className="side-intro">
        <p className="tag">"Turn chaos into culture. One decision at a time."</p>
        <p>9 documents. One afternoon. Done.</p>
      </div>
      <ol className="ob-steps">
        {steps.map((s, i) => (
          <li key={i} className={`ob-step ${i < step ? 'done' : ''} ${i === step ? 'current' : ''}`}>
            <span className="num">{i < step ? '✓' : i + 1}</span>
            <div>
              <div className="ttl">{s.t}</div>
              <div className="sub">{s.s}</div>
            </div>
          </li>
        ))}
      </ol>
      {bundle && step >= 1 && (
        <div className="ob-side-selection">
          <span className="ob-side-sel-label">Selected</span>
          <div className="ob-side-sel-bundle">
            <span>{bundle === 'fullstack' ? 'The Full Stack' : BUNDLE_DATA.find(b => b.id === bundle)?.title}</span>
            <span className="ob-side-sel-price">{bundle === 'fullstack' ? '$297' : BUNDLE_DATA.find(b => b.id === bundle)?.price}</span>
          </div>
        </div>
      )}
      <footer>Questions? hello@thewholegame.com</footer>
    </aside>
  );
}

// ---- Step 1: Account --------------------------------------------------------
function StepAccount({ next }) {
  return (
    <>
      <div className="ob-hello">Welcome</div>
      <h1 className="ob-title">Let's get you set up.</h1>
      <p className="ob-lede">Create your account to purchase and access your document bundles.</p>
      <div className="ob-form" style={{gridTemplateColumns:'1fr 1fr', maxWidth:560}}>
        <div className="ob-field"><label>First name</label><input placeholder="Jess" /></div>
        <div className="ob-field"><label>Last name</label><input placeholder="Rivera" /></div>
        <div className="ob-field span2"><label>Email</label><input type="email" placeholder="you@yourleague.org" /></div>
        <div className="ob-field span2"><label>Password</label><input type="password" placeholder="8+ characters" /></div>
        <div className="ob-field span2"><label>Organization name <span style={{fontWeight:400, color:'var(--fg-tertiary)'}}>· optional</span></label><input placeholder="Riverside Youth Soccer" /></div>
      </div>
      <div className="ob-actions" style={{paddingTop:0, borderTop:'none', maxWidth:560}}>
        <button className="ob-btn ob-btn-primary" onClick={next}>Create account
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
        <span style={{fontSize:12, color:'var(--fg-tertiary)'}}>Already have an account? <a href="#" style={{color:'var(--blush-500)'}}>Sign in</a></span>
      </div>
      <p style={{fontSize:12, color:'var(--fg-tertiary)', marginTop:16, maxWidth:460}}>
        By creating an account you agree to our <a href="#" style={{color:'var(--blush-500)'}}>terms of service</a> and <a href="#" style={{color:'var(--blush-500)'}}>privacy policy</a>.
      </p>
    </>
  );
}

// ---- Step 2: Bundle picker --------------------------------------------------
function StepBundle({ bundle, setBundle, next, back }) {
  return (
    <>
      <div className="ob-hello">Choose your bundle</div>
      <h1 className="ob-title">Which bundle <em>is right for you?</em></h1>
      <p className="ob-lede">Each bundle is a one-time purchase. Download all documents instantly from Google Drive.</p>

      <div className="ob-bundle-grid">
        {BUNDLE_DATA.map(b => (
          <button key={b.id} className={`ob-bundle-card ${bundle === b.id ? 'selected' : ''}`} onClick={() => setBundle(b.id)}>
            <div className="ob-bundle-top">
              <div>
                <div className="ob-bundle-label">{b.label}</div>
                <div className="ob-bundle-title">{b.title}</div>
              </div>
              <div className="ob-bundle-right">
                {b.badge && <span className="ob-badge">{b.badge}</span>}
                <div className="ob-bundle-price">{b.price}</div>
              </div>
            </div>
            <p className="ob-bundle-hook">{b.hook}</p>
            <ul className="ob-bundle-docs">
              {b.items.map((item, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="ob-bundle-docs-count">{b.docs} documents</div>
          </button>
        ))}
      </div>

      <button className={`ob-fullstack-card ${bundle === 'fullstack' ? 'selected' : ''}`} onClick={() => setBundle('fullstack')}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="ob-bundle-label">The Full Stack · Best value</div>
            <div className="ob-bundle-title" style={{fontSize:20}}>All three bundles — 27 documents. One complete HR foundation.</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div className="ob-bundle-price" style={{fontSize:40}}>$297</div>
            <div style={{fontSize:12, color:'var(--blush-600)', fontWeight:600, marginTop:2}}>Save $69</div>
          </div>
        </div>
      </button>

      <div className="ob-actions" style={{maxWidth:'100%'}}>
        <button className="ob-btn ob-btn-ghost" onClick={back}>← Back</button>
        <button className="ob-btn ob-btn-primary" onClick={next} disabled={!bundle} style={{opacity: bundle ? 1 : 0.4, cursor: bundle ? 'pointer' : 'not-allowed'}}>
          Continue to payment
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
        {!bundle && <span style={{fontSize:12, color:'var(--fg-tertiary)'}}>Select a bundle to continue</span>}
      </div>
    </>
  );
}

// ---- Step 3: Done ----------------------------------------------------------
function StepDone({ bundle }) {
  const sel = bundle === 'fullstack' ? FULLSTACK : BUNDLE_DATA.find(b => b.id === bundle);
  return (
    <div style={{maxWidth:640}}>
      <div className="ob-hello">You're in</div>
      <h1 className="ob-title">Your documents <em>are ready.</em></h1>
      <p className="ob-lede">
        {sel ? `${sel.title} — ${sel.docs || 27} documents — is ready to download.` : 'Your bundle is ready.'}
        {' '}We've sent a receipt to your email.
      </p>

      <div className="ob-done-box">
        <div className="ob-done-box-head">
          <div>
            <div style={{fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--blush-500)', marginBottom:4}}>Your purchase</div>
            <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:500, letterSpacing:'-0.01em', color:'var(--ink-900)'}}>{sel?.title || 'Your bundle'}</div>
          </div>
          <div style={{fontFamily:'var(--font-display)', fontSize:36, fontWeight:500, letterSpacing:'-0.025em', color:'var(--blush-500)'}}>{sel?.price || '$297'}</div>
        </div>
        <div className="ob-done-divider"></div>
        <a href="#" className="ob-btn ob-btn-primary" style={{justifyContent:'center', fontSize:15, padding:'14px 22px', gap:10}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Open your Google Drive folder
        </a>
        <p style={{fontSize:12, color:'var(--fg-tertiary)', marginTop:12, textAlign:'center'}}>
          Your folder link has also been emailed to you. Documents open in Google Docs — make a copy to edit.
        </p>
      </div>

      <div style={{marginTop:28}}>
        <div style={{fontSize:13, fontWeight:600, color:'var(--ink-800)', marginBottom:12}}>What to do next</div>
        <ol className="ob-done-steps">
          <li><span>1</span>Open your Google Drive folder and make a copy of each document.</li>
          <li><span>2</span>Replace the placeholder text (org name, dates, logo) with your details.</li>
          <li><span>3</span>Share the relevant documents with your coaches, parents, or board.</li>
        </ol>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
