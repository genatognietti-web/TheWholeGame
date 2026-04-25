// CloseSlide.jsx
function CloseSlide() {
  return (
    <section className="slide slide-close" data-screen-label="06 Close">
      <div className="slide-inner" style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <img src="../assets/logo/wordmark-ondark.svg" height="40" alt="" />
        <h2 className="title" style={{color:'var(--ivory-50)', fontSize:96, marginTop:80}}>One system.<br/><em>Every season.</em></h2>
        <p className="lede" style={{color:'var(--clay-200)', textAlign:'center', marginTop: 32}}>thewholegame.com · hello@thewholegame.com</p>
      </div>
    </section>
  );
}
window.CloseSlide = CloseSlide;
