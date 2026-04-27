// ComparisonSlide.jsx
function ComparisonSlide() {
  return (
    <section className="slide" data-screen-label="05 Comparison">
      <div className="slide-inner">
        <div className="eyebrow">Before · after</div>
        <h2 className="title" style={{fontSize:60, marginBottom: 56}}>From <em>chaos</em> to <em>handled.</em></h2>
        <div className="compare">
          <div className="col col-before">
            <h4>Before</h4>
            <ul>
              <li>9pm text from the treasurer</li>
              <li>Six spreadsheets, three stale</li>
              <li>Background checks half-expired</li>
              <li>Ref cancels → group-chat panic</li>
              <li>Manual payment follow-up</li>
            </ul>
          </div>
          <div className="col col-after">
            <h4>After</h4>
            <ul>
              <li>"Here's my recommendation…" in your inbox</li>
              <li>One source of truth, always current</li>
              <li>Renewals tracked and auto-nudged</li>
              <li>Three backup refs already contacted</li>
              <li>"Want me to send a nudge?"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ComparisonSlide = ComparisonSlide;
