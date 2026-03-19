import { useEffect } from "react";

const heroPoints = [
  "Sustained focus",
  "Careful analysis",
  "Meaningful engagement",
];

const inquiryPoints = [
  {
    title: "Removed from daily demands",
    text: "The Conference setting creates distance from competing obligations so complex questions can be examined without interruption.",
  },
  {
    title: "Structured for deeper work",
    text: "The pace of the environment and the Conference format support thoughtful discussion rather than surface-level exchange.",
  },
  {
    title: "Foundational to the mission",
    text: "This setting is not incidental to the work. It helps make the work possible.",
  },
];

const guidanceCards = [
  {
    eyebrow: "In-depth study",
    title: "A setting for deliberate inquiry",
    text: "The Sedona Conference\u00AE Working Group Series was established to pursue in-depth study of tipping point issues in antitrust law, complex litigation, intellectual property rights, and data security and privacy law.",
  },
  {
    eyebrow: "Collaborative dialogue",
    title: "Diverse stakeholders in one room",
    text: "Each Working Group brings together members of the bench, practicing attorneys, academics, and industry experts.",
  },
  {
    eyebrow: "Practical benefit",
    title: "Guidance shaped through discussion",
    text: "The process produces high-quality, nonpartisan commentary intended to provide immediate, practical value to the bench and bar.",
  },
];

const communityCards = [
  {
    title: "Trust",
    text: "Participants can exchange ideas candidly, listen carefully, and test difficult questions with confidence in one another.",
  },
  {
    title: "Professionalism",
    text: "The setting supports disciplined, reasoned discussion shaped by expertise, respect for process, and balanced analysis.",
  },
  {
    title: "Shared Purpose",
    text: "Participants engage as collaborators working toward practical guidance for the legal community rather than narrow advocacy.",
  },
];

// Replace the empty vimeoId values with the real interview IDs when they are ready.
const interviews = [
  {
    title: "How the Setting Shapes the Conversation",
    speaker: "Featured interview",
    role: "Add participant name and title",
    description:
      "A reflection on how the Conference environment influences the seriousness, depth, and pace of the discussion.",
    vimeoId: "",
  },
  {
    title: "What Sustained Focus Feels Like",
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

const impactSteps = [
  "Time for serious examination",
  "Focus beyond daily practice",
  "Dialogue across perspectives",
  "Guidance with practical value",
];

function VideoFrame({ interview, featured = false, index }) {
  const frameClassName = featured
    ? "ws-video-frame ws-video-frame--featured"
    : "ws-video-frame";

  if (interview.vimeoId) {
    return (
      <div className={frameClassName}>
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
    <div className={`${frameClassName} ws-video-frame--placeholder`}>
      <div className="ws-video-placeholder">
        <span className="ws-video-index">
          Interview {String(index + 1).padStart(2, "0")}
        </span>
        <div className="ws-video-play" aria-hidden="true">
          <span />
        </div>
        <div className="ws-video-copy">
          <h3>Vimeo embed ready</h3>
          <p>
            Add the Vimeo ID in `src/WhySedonaPageRestart.jsx` to activate this
            interview.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  const className = light ? "ws-section-header ws-section-header--light" : "ws-section-header";

  return (
    <div className={`${className} reveal`} data-reveal>
      <p className="ws-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function WhySedonaPageRestart() {
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
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ws-page">
      <div className="ws-orb ws-orb--orange" aria-hidden="true" />
      <div className="ws-orb ws-orb--purple" aria-hidden="true" />

      <main className="ws-shell">
        <header className="ws-hero">
          <section className="ws-hero-card ws-hero-card--intro reveal" data-reveal>
            <p className="ws-eyebrow">Why Sedona</p>
            <h1>The environment shapes the quality of the work.</h1>
            <p className="ws-hero-lead">
              The Sedona Conference&reg; is defined not only by its work, but by
              the environment in which that work takes place.
            </p>
            <p className="ws-hero-body">
              Sedona provides a setting uniquely suited to thoughtful, in-depth
              examination of complex legal issues. Removed from the pace and
              competing demands of daily practice, it enables sustained focus,
              careful analysis, and meaningful engagement among participants.
            </p>
            <p className="ws-hero-body ws-hero-body--strong">
              This setting is not incidental. It is foundational to the
              Conference&apos;s mission.
            </p>

            <div className="ws-hero-actions">
              <a className="ws-button ws-button--primary" href="#voices">
                Watch the interviews
              </a>
              <a className="ws-button ws-button--secondary" href="#matters">
                Why it matters
              </a>
            </div>
          </section>

          <aside className="ws-hero-card ws-hero-card--context reveal" data-reveal>
            <div className="ws-context-block">
              <p className="ws-context-label">Conference setting</p>
              <h2>Serious questions need room, time, and the right conditions.</h2>
              <p>
                Participants are able to engage deeply with both the subject
                matter and one another.
              </p>
            </div>

            <div className="ws-point-list">
              {heroPoints.map((point) => (
                <div className="ws-point" key={point}>
                  <span className="ws-point-dot" aria-hidden="true" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </aside>
        </header>

        <section className="ws-section ws-section--voices" id="voices">
          <SectionHeader
            eyebrow="Voices of Sedona"
            title="Interviews are the center of the page."
            text="Members of The Sedona Conference\u00AE consistently point to the setting as an essential component of their experience. The interviews below are designed to sit at the center of this page and carry most of the visual weight."
          />

          <div className="ws-video-layout">
            <article className="ws-interview ws-interview--featured reveal" data-reveal>
              <div className="ws-interview-header">
                <p className="ws-card-eyebrow">{interviews[0].title}</p>
                <p className="ws-interview-meta">
                  {interviews[0].speaker} | {interviews[0].role}
                </p>
              </div>
              <VideoFrame interview={interviews[0]} featured index={0} />
              <p className="ws-interview-description">{interviews[0].description}</p>
            </article>

            <div className="ws-interview-stack">
              {interviews.slice(1).map((interview, index) => (
                <article className="ws-interview reveal" data-reveal key={interview.title}>
                  <div className="ws-interview-header">
                    <p className="ws-card-eyebrow">{interview.title}</p>
                    <p className="ws-interview-meta">
                      {interview.speaker} | {interview.role}
                    </p>
                  </div>
                  <VideoFrame interview={interview} index={index + 1} />
                  <p className="ws-interview-description">{interview.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ws-section">
          <div className="ws-story-grid">
            <article className="ws-copy-panel reveal" data-reveal>
              <p className="ws-eyebrow">A Setting for Deliberate Inquiry</p>
              <h2>The environment is part of the method.</h2>
              <p>
                The Sedona Conference\u00AE Working Group Series was established
                to pursue in-depth study of tipping point issues in antitrust
                law, complex litigation, intellectual property rights, and data
                security and privacy law.
              </p>
              <p>
                The surrounding environment, the pace of the setting, and the
                structure of the Conference itself contribute to a place where
                ideas can be examined rigorously and without distraction.
              </p>
            </article>

            <div className="ws-note-stack">
              {inquiryPoints.map((point) => (
                <article className="ws-note-card reveal" data-reveal key={point.title}>
                  <p className="ws-card-eyebrow">{point.title}</p>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ws-section">
          <SectionHeader
            eyebrow="Where Dialogue Produces Guidance"
            title="Collaborative exchange is built into the process."
            text="Each Working Group is designed to foster collaborative dialogue among diverse stakeholders. Through that process, the Conference develops high-quality, nonpartisan guidance intended to provide immediate practical benefit to the bench and bar."
          />

          <div className="ws-card-grid">
            {guidanceCards.map((card) => (
              <article className="ws-guidance-card reveal" data-reveal key={card.title}>
                <p className="ws-card-eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ws-section ws-section--community">
          <div className="ws-community-shell">
            <SectionHeader
              eyebrow="A Community of Shared Purpose"
              title="Trust and professionalism strengthen the work."
              text="The effectiveness of the Working Group Series depends on more than subject matter expertise. It depends on trust, professionalism, and a shared commitment to advancing the law in a reasoned and balanced way."
              light
            />

            <div className="ws-community-grid">
              {communityCards.map((card) => (
                <article className="ws-community-card reveal" data-reveal key={card.title}>
                  <p className="ws-card-eyebrow ws-card-eyebrow--light">{card.title}</p>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ws-section" id="matters">
          <SectionHeader
            eyebrow="Why It Matters"
            title="Complex legal challenges need more than surface-level discussion."
            text="They require time, focus, and an environment that supports rigorous, balanced analysis. Sedona provides that environment, making it possible for the Conference to fulfill its mission of producing practical, high-quality guidance for the legal community."
          />

          <div className="ws-impact-grid">
            {impactSteps.map((step, index) => (
              <article className="ws-impact-card reveal" data-reveal key={step}>
                <span className="ws-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="ws-footer reveal" data-reveal>
          <p className="ws-eyebrow ws-eyebrow--footer">Experience Sedona</p>
          <h2>
            Sedona is integral to how the work is done and why that work is
            effective.
          </h2>
          <p>
            The setting, the pace, and the community together create the
            conditions for sustained intellectual engagement.
          </p>
        </footer>
      </main>
    </div>
  );
}
