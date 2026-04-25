// SectionSlide.jsx — section divider
function SectionSlide() {
  return (
    <section className="slide slide-section" data-screen-label="02 Section">
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <div className="eyebrow" style={{color:'var(--blush-300)'}}>Chapter one</div>
        <h2 className="title" style={{color:'var(--ivory-50)',fontSize:96}}>The problem with <em>running a league.</em></h2>
      </div>
    </section>
  );
}
window.SectionSlide = SectionSlide;
