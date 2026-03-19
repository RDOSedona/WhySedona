import { useEffect } from "react";

const inquiryHighlights = [
  "Removed from the pace and competing demands of daily practice",
  "Built for sustained focus, careful analysis, and meaningful engagement",
  "A setting where ideas can be examined rigorously and without distraction",
];

const dialogueParticipants = [
  "Members of the bench",
  "Practicing attorneys",
  "Academics",
  "Industry experts",
];

const communityValues = [
  {
    title: "Trust",
    text: "Progress depends on an atmosphere where participants can exchange ideas candidly, listen closely, and work through difficult issues with confidence in one another.",
  },
  {
    title: "Professionalism",
    text: "The Sedona Conference creates room for reasoned, balanced discussion shaped by expertise, discipline, and respect for the process.",
  },
  {
    title: "Shared Purpose",
    text: "Participants engage as collaborators pursuing practical, high-quality guidance for the legal community rather than advocates for a single point of view.",
  },
];

// Replace the empty vimeoId values with the real interview IDs when they are ready.
const interviews = [
  {
    title: "Why Place Matters",
    speaker: "Member interview",
    role: "Add participant name and title",
    description:
      "A reflection on how Sedona changes the quality, pace, and depth of legal discussion.",
    vimeoId: "",
  },
  {
    title: "Focus Beyond Daily Practice",
    speaker: "Member interview",
    role: "Add participant name and title",
    description:
      "A conversation about the value of time, attention, and uninterrupted inquiry.",
    vimeoId: "",
  },
  {
    title: "Dialogue That Produces Guidance",
    speaker: "Member interview",
    role: "Add participant name and title",
    description:
      "An interview centered on collaboration, careful listening, and practical outcomes.",
    vimeoId: "",
  },
];

const impactSteps = ["Time", "Focus", "Dialogue", "Guidance"];

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
        <span className="video-placeholder__eyebrow">
          Interview {String(index + 1).padStart(2, "0")}
        </span>
        <h3>Vimeo embed ready</h3>
        <p>Drop in a Vimeo ID in the interview list to activate the player.</p>
      </div>
    </div>
  );
}

export default function App() {
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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="ambient ambient--top" aria-hidden="true" />
      <div className="ambient ambient--bottom" aria-hidden="true" />

      <main className="page-shell">
        <header className="hero">
          <div className="hero__copy reveal" data-reveal>
            <p className="eyebrow">Why Sedona</p>
            <h1>
              The Sedona Conference&apos;s work is shaped by the place where that
              work happens.
            </h1>
            <p className="lede">
              The Sedona Conference&reg; is defined not only by its work, but by
              the environment in which that work takes place.
            </p>
            <p className="hero__body">
              Sedona provides a setting uniquely suited to thoughtful, in-depth
              examination of complex legal issues. Removed from the pace and
              competing demands of daily practice, it enables sustained focus,
              careful analysis, and meaningful engagement among participants.
            </p>
            <p className="hero__body hero__body--emphasis">
              This setting is not incidental. It is foundational to the
              Conference&apos;s mission.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#voices">
                Watch the interviews
              </a>
              <a className="button button--ghost" href="#matters">
                Why it matters
              </a>
            </div>

            <div className="hero__tags" aria-label="Key themes">
              <span>Thoughtful setting</span>
              <span>Open exchange</span>
              <span>Practical guidance</span>
            </div>
          </div>

          <div className="hero__panel reveal" data-reveal>
            <div className="hero-card">
              <div className="hero-card__landscape" aria-hidden="true">
                <span className="mesa mesa--far" />
                <span className="mesa mesa--mid" />
                <span className="mesa mesa--near" />
                <span className="sun" />
              </div>
              <p className="hero-card__label">A Setting for Deliberate Inquiry</p>
              <p className="hero-card__quote">
                The surrounding landscape, the pace of the environment, and the
                structure of the Conference all contribute to a setting where
                ideas can be examined rigorously and without distraction.
              </p>
            </div>

            <div className="hero-note">
              <span className="hero-note__title">Why the environment matters</span>
              <p>
                Participants are able to engage deeply with both the subject
                matter and one another.
              </p>
            </div>
          </div>
        </header>

        <section className="section section--split">
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">Deliberate Inquiry</p>
            <h2>A Setting for in-depth study.</h2>
            <p>
              The Sedona Conference&reg; Working Group Series was established to
              pursue in-depth study of tipping point issues in antitrust law,
              complex litigation, intellectual property rights, and data
              security and privacy law.
            </p>
          </div>

          <div className="glass-panel reveal" data-reveal>
            {inquiryHighlights.map((item) => (
              <div className="feature-row" key={item}>
                <span className="feature-row__dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">Guidance Through Dialogue</p>
            <h2>Where dialogue produces guidance.</h2>
            <p>
              Each Working Group is designed to foster collaborative dialogue
              among a diverse group of stakeholders. Through that process, the
              Conference develops high-quality, nonpartisan commentary and
              guidance intended to provide immediate, practical benefit to the
              bench and bar.
            </p>
          </div>

          <div className="dialogue-grid">
            <article className="dialogue-card reveal" data-reveal>
              <p className="dialogue-card__kicker">How the model works</p>
              <h3>Careful listening improves the work.</h3>
              <p>
                Sedona&apos;s environment reinforces the Working Group model by
                encouraging open exchange, careful listening, and the refinement
                of ideas through discussion.
              </p>
            </article>

            <article className="stakeholder-card reveal" data-reveal>
              <p className="dialogue-card__kicker">Who is in the room</p>
              <div className="stakeholder-cloud">
                {dialogueParticipants.map((participant) => (
                  <span key={participant}>{participant}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">Shared Purpose</p>
            <h2>A community built on trust and professionalism.</h2>
            <p>
              The effectiveness of the Working Group Series depends on more than
              subject matter expertise. It depends on trust, professionalism,
              and a shared commitment to advancing the law in a reasoned and
              balanced way. Sedona fosters these qualities.
            </p>
          </div>

          <div className="value-grid">
            {communityValues.map((value) => (
              <article className="value-card reveal" data-reveal key={value.title}>
                <p className="dialogue-card__kicker">{value.title}</p>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="voices">
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">Voices of Sedona</p>
            <h2>Interviews from members of The Sedona Conference.</h2>
            <p>
              Members of The Sedona Conference&reg; consistently point to the
              setting as an essential component of their experience. Through the
              interviews below, participants reflect on how Sedona
              contributes to the depth, quality, and impact of the
              Conference&apos;s work.
            </p>
          </div>

          <div className="interview-grid">
            {interviews.map((interview, index) => (
              <article className="interview-card reveal" data-reveal key={interview.title}>
                <div className="interview-card__header">
                  <p className="dialogue-card__kicker">{interview.title}</p>
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

        <section className="section impact-section" id="matters">
          <div className="impact-card reveal" data-reveal>
            <div>
              <p className="eyebrow">Why It Matters</p>
              <h2>Complex challenges demand more than surface-level discussion.</h2>
            </div>
            <p>
              The challenges addressed by The Sedona Conference&reg; are complex
              and consequential. They require time, focus, and an environment
              that supports rigorous, balanced analysis. Sedona provides that
              environment, making it possible for the Conference to fulfill its
              mission of producing practical, high-quality guidance for the
              legal community.
            </p>
          </div>

          <div className="process-strip reveal" data-reveal>
            {impactSteps.map((step, index) => (
              <div className="process-strip__step" key={step}>
                <span className="process-strip__count">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer-callout reveal" data-reveal>
          <p className="eyebrow">Experience Sedona</p>
          <h2>
            Sedona is not simply the location of The Sedona Conference. It is
            integral to how the work is done and why it is effective.
          </h2>
          <p>
            The setting, the pace, and the community together create a place
            where rigorous analysis and meaningful collaboration can thrive.
          </p>
          <a className="button button--primary" href="#voices">
            Return to the interviews
          </a>
        </footer>
      </main>
    </div>
  );
}
