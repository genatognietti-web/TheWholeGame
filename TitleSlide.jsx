// TitleSlide.jsx
function TitleSlide() {
  return (
    <section className="slide slide-title" data-screen-label="01 Title">
      <div className="slide-bg"></div>
      <div className="slide-inner">
        <img src="../assets/logo/wordmark.svg" height="40" alt="The Whole Game" />
        <div className="eyebrow" style={{marginTop: 80}}>Youth sports operations</div>
        <h1 className="title">Less logistics.<br/><em>More game.</em></h1>
        <p className="lede">An operations platform for youth sports organizations running on passion, spreadsheets, and sheer willpower.</p>
        <div className="meta">Board review · April 2026</div>
      </div>
    </section>
  );
}
window.TitleSlide = TitleSlide;
