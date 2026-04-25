// StatSlide.jsx
function StatSlide() {
  const stats = [
    { n: '400+', l: 'seasons run' },
    { n: '12,000', l: 'rosters managed' },
    { n: '87%', l: 'drop in volunteer emails' },
    { n: '0', l: 'spreadsheets' },
  ];
  return (
    <section className="slide" data-screen-label="04 Stats">
      <div className="slide-inner">
        <div className="eyebrow">By the numbers · 2025 season</div>
        <h2 className="title" style={{fontSize:64, marginBottom: 80}}>What changes <em>when ops just work.</em></h2>
        <div className="stat-grid">
          {stats.map((s,i) => (
            <div className="stat" key={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StatSlide = StatSlide;
