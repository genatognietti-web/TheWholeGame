// QuoteSlide.jsx
function QuoteSlide() {
  return (
    <section className="slide slide-quote" data-screen-label="03 Quote">
      <div className="slide-inner">
        <div className="eyebrow" style={{color:'var(--blush-300)'}}>Why they switched</div>
        <blockquote className="big-quote">
          "Last season I was the treasurer, the ref coordinator, and the person writing <em>every parent email at 10pm.</em> Now I mostly just review what The Whole Game drafted and hit send."
        </blockquote>
        <div className="quote-cite">
          <div className="av">MR</div>
          <div><strong>Mara Ruiz</strong><span>President, Riverside Youth Soccer · 380 players</span></div>
        </div>
      </div>
    </section>
  );
}
window.QuoteSlide = QuoteSlide;
