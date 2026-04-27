// Features.jsx — clean 3-step "how it works"
function Features() {
  const steps = [
    {
      num: '01',
      title: 'Create your account',
      body: 'Sign up in under a minute. Free to browse — purchase when you\'re ready.',
    },
    {
      num: '02',
      title: 'Choose your bundle',
      body: 'Pick the bundle that fits where your organization is right now. Buy one or get all three.',
    },
    {
      num: '03',
      title: 'Download and customize',
      body: 'Instant access to a Google Drive folder with all nine documents. Add your org name and details — done.',
    },
  ];

  return (
    <section className="twg-section twg-section-muted" id="how-it-works">
      <div className="twg-container">
        <div className="twg-section-head">
          <div className="twg-eyebrow">How it works</div>
          <h2 className="twg-display-2">
            Three steps. <em>Done in an afternoon.</em>
          </h2>
          <p className="twg-lede">
            No HR team required. No setup call. Download, open a doc, fill in your details — and you have an HR foundation.
          </p>
        </div>

        <div className="twg-steps-row">
          {steps.map((s, i) => (
            <div className="twg-step-card" key={i}>
              <div className="twg-step-num">{s.num}</div>
              <h3 className="twg-feature-title">{s.title}</h3>
              <p className="twg-feature-body">{s.body}</p>
              {i < steps.length - 1 && <div className="twg-step-arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name, size = 22 }) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    fetch(`../../assets/icons/${name}.svg`).then(r => r.text()).then(setSvg);
  }, [name]);
  return <span className="twg-icon" style={{width: size, height: size}} dangerouslySetInnerHTML={{__html: svg}} />;
}

window.Features = Features;
window.Icon = Icon;
