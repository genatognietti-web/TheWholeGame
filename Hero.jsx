import React from 'react';

function WaitlistConfirmed({ email }) {
  return (
    <div className="twg-waitlist-confirmed">
      <div className="twg-waitlist-confirmed-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div className="twg-waitlist-confirmed-body">
        <strong>You're on the list.</strong>
        <p>We'll email <span>{email}</span> when bundles go live at the end of May. No credit card, no commitment — just first access.</p>
        <div className="twg-waitlist-confirmed-expect">
          <div className="twg-waitlist-confirmed-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <span>Launching end of May 2026</span>
          </div>
          <div className="twg-waitlist-confirmed-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Waitlist members get 24-hour early access</span>
          </div>
          <div className="twg-waitlist-confirmed-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M20 6L9 17l-5-5"/></svg>
            <span>Check your inbox — a confirmation is on its way</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (email) setDone(true);
  };
  if (done) return <WaitlistConfirmed email={email} />;
  return (
    <form className="twg-waitlist" onSubmit={submit}>
      <input
        type="email" required
        placeholder="your@leagueemail.org"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit" className="twg-btn twg-btn-primary twg-btn-lg">
        Join the waitlist
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </form>
  );
}

export default function Hero() {
  return (
    <section className="twg-hero" id="hero-waitlist">
      <div className="twg-hero-bg" aria-hidden="true"></div>
      <div className="twg-container twg-hero-inner">
        <div className="twg-eyebrow">Youth sports HR &amp; compliance templates</div>
        <h1 className="twg-display-1">
          Turn chaos into culture.<br/>
          <em>One decision at a time.</em>
        </h1>
        <p className="twg-lede">
          Ready-to-use document bundles for youth sports organizations. Coach HR, parent conduct,
          compliance systems — built for the real situations you actually face. Download, customize, done.
        </p>
        <WaitlistForm />
        <div className="twg-hero-trust">
          <span className="twg-caption">No HR experience required</span>
          <span className="twg-dot" aria-hidden="true">·</span>
          <strong>Instant download via Google Drive</strong>
          <span className="twg-dot" aria-hidden="true">·</span>
          <strong>From $97</strong>
        </div>
      </div>
      <div className="twg-hero-photos" aria-hidden="true">
        <div className="twg-hero-photo-strip">
          {[
            'photo-1546519638405-a0a5d24a13fc',
            'photo-1529516548873-9ce57c8f155e',
            'photo-1560272564-c83b66b1ad12',
            'photo-1517649763962-0c623066013b',
            'photo-1551958219-acbc15d76dbe',
          ].map((id, i) => (
            <div key={i} className="twg-hero-photo" style={{
              backgroundImage: `url(https://images.unsplash.com/${id}?w=400&h=280&auto=format&fit=crop&q=70)`
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
