import { useEffect } from "react";

const heroSignals = [
  "Thoughtful setting",
  "Open exchange",
  "Balanced analysis",
];

const participants = [
  "Bench",
  "Practitioners",
  "Academics",
  "Industry experts",
];

const focusSignals = [
  {
    number: "01",
    title: "Removed from the daily pace",
    text: "Sedona creates distance from competing demands so participants can stay with consequential legal questions longer.",
  },
  {
    number: "02",
    title: "Structured for rigorous discussion",
    text: "The environment supports sustained focus, careful analysis, and meaningful engagement among participants.",
  },
  {
    number: "03",
    title: "Foundational to the mission",
    text: "This setting is not incidental to the Conference's work. It helps make that work possible.",
  },
];

const principleCards = [
  {
    eyebrow: "In-depth study",
    title: "A setting for deliberate inquiry",
    text: "The Sedona Conference® Working Group Series was established to pursue in-depth study of tipping point issues in antitrust law, complex litigation, intellectual property rights, and data security and privacy law.",
  },
  {
    eyebrow: "Collaborative dialogue",
    title: "Diverse perspectives in one room",
    text: "Each Working Group fosters dialogue among members of the bench, practicing attorneys, academics, and industry experts.",
  },
  {
    eyebrow: "Practical benefit",
    title: "Guidance shaped through discussion",
    text: "Through that process, the Conference develops high-quality, nonpartisan commentary intended to provide immediate value to the bench and bar.",
  },
];

const communityCards = [
  {
    title: "Trust",
    text: "The work depends on an atmosphere where participants can exchange ideas candidly, listen carefully, and test difficult questions with confidence in one another.",
  },
  {
    title: "Professionalism",
    text: "Sedona fosters a disciplined, reasoned mode of discussion shaped by expertise, respect for process, and a commitment to balanced analysis.",
  },
  {
    title: "Shared Purpose",
    text: "Participants engage as collaborators working toward common goals and practical guidance for the legal community.",
  },
];

// Replace the empty vimeoId values with the real interview IDs when they are ready.
const interviews = [
  {
    title: "Why Sedona Changes the Conversation",
    speaker: "Interview slot",
    role: "Add participant name and title",
    description:
      "A reflection on how place influences the quality, pace, and seriousness of the discussion.",
    vimeoId: "",
  },
  {
    title: "What Focus Feels Like Here",
    speaker: "Interview slot",
    role: "Add participant name and title",
    description:
      "A perspective on why time, distance, and concentration matter in this setting.",
    vimeoId: "",
  },
  {
    title: "How Dialogue Becomes Guidance",
    speaker: "Interview slot",
    role: "Add participant name and title",
    description:
      "An interview centered on collaboration, careful listening, and practical outcomes.",
    vimeoId: "",
  },
];

const processSteps = [
  {
    title: "Time",
    text: "Complex issues receive the room they need rather than a quick pass.",
  },
  {
    title: "Focus",
    text: "Participants can work without the pace and interruptions of daily practice.",
  },
  {
    title: "Dialogue",
    text: "Ideas are refined through careful exchange among diverse stakeholders.",
  },
  {
    title: "Guidance",
    text: "The result is practical, high-quality commentary for the legal community.",
  },
];

function SectionHeading({ eyebrow, title, text, className = "" }) {
  const headingClassName = `section-heading reveal ${className}`.trim();

  return (
    <div className={headingClassName} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function InterviewFrame({ interview, index }) {
  if (interview.vimeoId) {
    return (
      <div className="video-shell">
        <iframe
          src={`https://player.vimeo.com/video/${interview.vimeoId}?title=0&byline=0&portrait=0`}
          title={interview.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="video-shell video-shell--placeholder">
      <div className="video-placeholder">
        <span className="video-placeholder__index">
          Interview {String(index + 1).padStart(2, "0")}
        </span>
        <div className="video-placeholder__play" aria-hidden="true">
          <span />
        </div>
        <h3>Vimeo embed ready</h3>
        <p>Add the Vimeo ID in `src/WhySedonaPage.jsx` to activate this interview.</p>
      </div>
    </div>
  );
}

export default function WhySedonaPage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 60, 360)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="brand-orb brand-orb--orange" aria-hidden="true" />
      <div className="brand-orb brand-orb--purple" aria-hidden="true" />

      <main className="shell">
        <header className="hero">
          <div className="hero__content reveal" data-reveal>
            <div className="hero__topline">
              <span className="brand-chip">The Sedona Conference&reg;</span>
              <span className="hero__stamp">Why place matters</span>
            </div>

            <p className="eyebrow eyebrow--light">Why Sedona</p>
            <h1>Sedona gives consequential legal work the room it needs.</h1>
            <p className="hero__lede">
              The Sedona Conference&reg; is defined not only by its work, but by
              the environment in which that work takes place.
            </p>
            <p className="hero__body">
              Sedona provides a setting uniquely suited to thoughtful, in-depth
              examination of complex legal issues. Removed from the pace and
              competing demands of daily practice, it enables sustained focus,
              careful analysis, and meaningful engagement among participants.
            </p>
            <p className="hero__body hero__body--strong">
              This setting is not incidental. It is foundational to the
              Conference&apos;s mission.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#voices">
                Watch the interviews
              </a>
              <a className="button button--secondary" href="#matters">
                Why it matters
              </a>
            </div>

            <div className="hero__signals" aria-label="Key themes">
              {heroSignals.map((signal) => (
                <div className="signal-pill" key={signal}>
                  <span className="signal-pill__line" aria-hidden="true" />
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual reveal" data-reveal>
            <div className="hero-stage">
              <div className="hero-stage__rings" aria-hidden="true">
                <span className="ring ring--one" />
                <span className="ring ring--two" />
                <span className="ring ring--three" />
                <span className="beam beam--one" />
                <span className="beam beam--two" />
              </div>

              <div className="hero-stage__panel">
                <p className="panel-kicker">Conference conditions</p>
                <h2>Time, focus, and dialogue create better guidance.</h2>
                <p>
                  Participants are able to engage deeply with both the subject
                  matter and one another.
                </p>
              </div>

              <div className="hero-stage__cards">
                <div className="floating-card floating-card--orange">
                  <p className="floating-card__label">Mission</p>
                  <p>
                    The environment supports rigorous, balanced analysis and
                    open exchange.
                  </p>
                </div>

                <div className="floating-card floating-card--purple">
                  <p className="floating-card__label">Who is in the room</p>
                  <div className="badge-cluster">
                    {participants.map((participant) => (
                      <span key={participant}>{participant}</span>
                    ))}
                  </div>
                </div>

                <div className="floating-card floating-card--glass">
                  <p className="floating-card__label">Practical outcome</p>
                  <p>
                    High-quality, nonpartisan commentary intended to provide
                    immediate benefit to the bench and bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <SectionHeading
            eyebrow="A Setting for Deliberate Inquiry"
            title="The environment is part of the method."
            text="The Sedona Conference® Working Group Series was established to pursue in-depth study of tipping point issues in antitrust law, complex litigation, intellectual property rights, and data security and privacy law."
          />

          <div className="editorial-grid">
            <article className="editorial-card reveal" data-reveal>
              <p className="editorial-card__kicker">Why place matters</p>
              <h3>Deep questions benefit from distance, pace, and structure.</h3>
              <p>
                Sedona supports that work by creating the conditions necessary
                for deliberate inquiry. The surrounding landscape, the pace of
                the environment, and the structure of the Conference itself all
                contribute to a setting where ideas can be examined rigorously
                and without distraction.
              </p>

              <div className="quote-band">
                <span className="quote-band__line" aria-hidden="true" />
                <p>
                  Participants are able to engage deeply with both the subject
                  matter and one another.
                </p>
              </div>
            </article>

            <div className="focus-stack">
              {focusSignals.map((item) => (
                <article className="focus-card reveal" data-reveal key={item.title}>
                  <span className="focus-card__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Where Dialogue Produces Guidance"
            title="Collaborative exchange is built into the process."
            text="Each Working Group is designed to foster collaborative dialogue among a diverse group of stakeholders. Sedona's environment reinforces that model by encouraging open exchange, careful listening, and the refinement of ideas through discussion."
          />

          <div className="principle-grid">
            {principleCards.map((card) => (
              <article className="principle-card reveal" data-reveal key={card.title}>
                <p className="principle-card__eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--community">
          <div className="community-shell">
            <SectionHeading
              eyebrow="A Community of Shared Purpose"
              title="Trust and professionalism are part of the outcome."
              text="The effectiveness of the Working Group Series depends on more than subject matter expertise. It depends on trust, professionalism, and a shared commitment to advancing the law in a reasoned and balanced way. Sedona fosters these qualities."
              className="section-heading--light"
            />

            <div className="community-grid">
              {communityCards.map((card) => (
                <article className="community-card reveal" data-reveal key={card.title}>
                  <p className="principle-card__eyebrow">{card.title}</p>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--voices" id="voices">
          <SectionHeading
            eyebrow="Voices of Sedona"
            title="Interviews from members of The Sedona Conference."
            text="Members of The Sedona Conference® consistently point to the setting as an essential component of their experience. Through the interviews below, participants reflect on how Sedona contributes to the depth, quality, and impact of the Conference's work."
            className="section-heading--light"
          />

          <div className="interview-grid">
            {interviews.map((interview, index) => (
              <article className="interview-card reveal" data-reveal key={interview.title}>
                <div className="interview-card__header">
                  <p className="principle-card__eyebrow">{interview.title}</p>
                  <p className="interview-card__meta">
                    {interview.speaker} | {interview.role}
                  </p>
                </div>
                <InterviewFrame interview={interview} index={index} />
                <p className="interview-card__description">{interview.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="matters">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Complex legal challenges need more than surface-level discussion."
            text="They require time, focus, and an environment that supports rigorous, balanced analysis. Sedona provides that environment, making it possible for the Conference to fulfill its mission of producing practical, high-quality guidance for the legal community."
          />

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card reveal" data-reveal key={step.title}>
                <span className="process-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer-card reveal" data-reveal>
          <p className="eyebrow eyebrow--footer">Experience Sedona</p>
          <h2>
            Sedona is not simply the location of The Sedona Conference. It is
            integral to how the work is done and why it is effective.
          </h2>
          <p>
            The setting, the pace, and the community together create the
            conditions for sustained intellectual engagement.
          </p>
          <a className="button button--inverted" href="#voices">
            Return to the interviews
          </a>
        </footer>
      </main>
    </div>
  );
}
