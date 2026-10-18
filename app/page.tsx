import Trace from "./components/Trace";
import { site, hero, offers, work, steps, background, stack } from "@/content/site";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="masthead wrap">
        <a href="/" className="wordmark">{site.name}</a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#process" className="nav-optional">How we’d work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>{hero.headline}</h1>
            <p className="lede">{hero.lede}</p>
            <p className="hero-actions">
              <a className="button" href={`mailto:${site.email}?subject=Project%20enquiry`}>Email me about a project</a>
              <a className="quiet" href="#work">See selected work</a>
            </p>
          </div>
          <Trace />
        </section>

        <section className="band wrap" aria-labelledby="offers-h">
          <h2 id="offers-h">What I build</h2>
          <dl className="offers">
            {offers.map((o) => (
              <div key={o.title} className="offer">
                <dt>{o.title}</dt>
                <dd>{o.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="band wrap" aria-labelledby="work-h">
          <h2 id="work-h">Selected work</h2>
          <p className="section-note">Employer and client work is described without internal detail.</p>
          <ul className="work">
            {work.map((w) => (
              <li key={w.title} className="work-row">
                <div className="work-meta">
                  <p className="work-context">{w.context}</p>
                  {w.status && <p className="work-status">{w.status}</p>}
                </div>
                <div className="work-main">
                  <h3>{w.title}</h3>
                  <p>{w.summary}</p>
                  {w.outcome && <p className="work-outcome">{w.outcome}</p>}
                  <ul className="tags" aria-label="Stack">
                    {w.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="process" className="band wrap" aria-labelledby="process-h">
          <h2 id="process-h">How we’d work together</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title} <span className="step-length">{s.length}</span></h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="band wrap split" aria-labelledby="bg-h">
          <div>
            <h2 id="bg-h">Background</h2>
            <p>Thirteen years building software in financial services, where systems move real money and get audited.</p>
            <ul className="history">
              {background.map((b) => (
                <li key={b.org}>
                  <strong>{b.org}</strong>
                  <span>{b.role}{b.when ? `, ${b.when.toLowerCase()}` : ""}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Tools I use</h2>
            <dl className="stack">
              {stack.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="contact wrap" aria-labelledby="contact-h">
          <h2 id="contact-h">Tell me about the workflow you want off your team’s plate.</h2>
          <p>{site.availability}</p>
          <p className="contact-links">
            <a className="button" href={`mailto:${site.email}?subject=Project%20enquiry`}>{site.email}</a>
            <a href={site.links.linkedin}>LinkedIn</a>
            <a href={site.links.github}>GitHub</a>
            <a href={site.links.upwork}>Upwork</a>
          </p>
        </section>
      </main>

      <footer className="wrap footer">
        <p>© {year} {site.name}. Based in the UK, working with teams anywhere.</p>
      </footer>
    </>
  );
}
