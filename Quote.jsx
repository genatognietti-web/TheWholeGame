import React from 'react';

export default function Quote() {
  return (
    <section className="twg-section twg-section-quote" id="stories">
      <div className="twg-quote-photo" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&auto=format&fit=crop&q=70)`
      }} aria-hidden="true" />
      <div className="twg-quote-overlay" aria-hidden="true" />
      <div className="twg-container twg-quote-inner">
        <div className="twg-eyebrow" style={{color:'var(--blush-300)'}}>What organizations say</div>
        <blockquote className="twg-quote">
          <p>
            <em>"Add a real customer quote here before launch."</em>
          </p>
          <div className="twg-quote-placeholder">
            <div className="twg-quote-placeholder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <p className="twg-quote-placeholder-text">
                This section is reserved for a real customer testimonial. Collect quotes from early customers before launch — even one genuine sentence from a real org director will outperform any placeholder.
              </p>
              <p className="twg-quote-placeholder-note">
                Until then, consider replacing this section with a stat or a clear "who this is for" statement.
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
