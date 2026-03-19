import { useEffect } from "react";
import upcomingEvents from "./data/upcomingEvents.json";

const heroThemes = [
  "Sustained Focus",
  "Rigorous Analysis",
  "Consensus Through Dialogue",
];

const inquiryItems = [
  {
    title: "Removed from daily practice",
    text: "Participants step outside the demands of practice to engage fully with complex, unsettled legal questions.",
  },
  {
    title: "Dialogue, not debate",
    text: "Issues are explored through disciplined, collaborative exchange, where perspectives are tested, refined, and developed.",
  },
  {
    title: "Built for rigorous examination",
    text: "The structure supports sustained, in-depth analysis rather than surface-level discussion.",
  },
  {
    title: "Foundational to the mission",
    text: "This is not simply how the work is organized. It is how the work advances.",
  },
];

const guidanceItems = [
  {
    number: "01",
    title: "Deliberate Inquiry",
    text: "The Working Group Series is designed to pursue in-depth study of tipping point issues across key areas of law.",
  },
  {
    number: "02",
    title: "Dialogue Across Perspectives",
    text: "Participants engage across disciplines and viewpoints in a setting that supports open exchange and careful listening.",
  },
  {
    number: "03",
    title: "Practical Guidance",
    text: "This process produces high-quality, nonpartisan commentary intended to provide immediate, practical benefit to the bench and bar.",
  },
];

const communityItems = [
  {
    title: "Trust",
    text: "Participants engage candidly, test ideas openly, and work through difficult questions with confidence in one another.",
  },
  {
    title: "Professionalism",
    text: "Discussion is disciplined and grounded in expertise, respect for process, and balanced analysis.",
  },
  {
    title: "Shared Purpose",
    text: "Participants collaborate to develop practical guidance for the legal community, rather than advocate for individual positions.",
  },
];

const impactItems = [
  "Addressing Tipping Point Issues",
  "Cross-Disciplinary Insight",
  "Dialogue that Builds Understanding",
  "Guidance with Real-World Impact",
];

// Replace the empty vimeoId values with the real interview IDs when they are ready.
const interviews = [
  {
    title: "Inside the Dialogue",
    speaker: "Featured interview",
    role: "Add participant name and title",
    description:
      "A reflection on how the Conference environment influences the seriousness, depth, and pace of the discussion.",
    vimeoId: "1152666735",
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

function SectionIntro({ eyebrow, title, text, light = false }) {
  const className = light ? "fb-section-intro fb-section-intro--light" : "fb-section-intro";

  return (
    <div className={`${className} reveal`} data-reveal>
      <p className="fb-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function InterviewFrame({ interview, featured = false, index }) {
  const className = featured ? "fb-video fb-video--featured" : "fb-video";

  if (interview.vimeoId) {
    return (
      <div className={className}>
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
    <div className={`${className} fb-video--placeholder`}>
      <div className="fb-video-placeholder">
        <span className="fb-video-index">
          Interview {String(index + 1).padStart(2, "0")}
        </span>
        <div className="fb-video-play" aria-hidden="true">
          <span />
        </div>
        <div className="fb-video-copy">
          <h3>Vimeo embed ready</h3>
          <p>
            Add the Vimeo ID in `src/WhySedonaPageFullBleed.jsx` to activate this
            interview.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhySedonaPageFullBleed() {
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
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fb-page">
      <div className="fb-orb fb-orb--orange" aria-hidden="true" />
      <div className="fb-orb fb-orb--purple" aria-hidden="true" />

      <header className="fb-topbar">
        <div className="fb-wrap fb-topbar__wrap">
          <img
            className="fb-topbar__logo"
            src="/tsc-logo.svg"
            alt="The Sedona Conference logo"
          />
          <a className="fb-topbar__home" href="https://www.thesedonaconference.org/">
            Back to home
          </a>
        </div>
      </header>

      <section className="fb-hero">
        <div className="fb-wrap fb-hero__wrap">
          <div className="fb-hero__grid">
            <div className="fb-hero__copy reveal" data-reveal>
              <p className="fb-eyebrow">Why Sedona</p>
              <h1>Dialogue is where the work happens.</h1>
              <p className="fb-hero__lead">
                The Sedona Conference® is defined not only by what it
                produces, but by the way participants engage in that work.
              </p>
              <p className="fb-hero__body">
                Through sustained, deliberate dialogue, complex legal issues are
                examined from multiple perspectives. Ideas are tested, refined,
                and developed into practical, nonpartisan guidance.
              </p>
              <p className="fb-hero__body fb-hero__body--strong">
                This process is not incidental. It is foundational to the
                Conference&apos;s mission.
              </p>

              <div className="fb-hero__actions">
                <a className="fb-button fb-button--primary" href="#voices">
                  Watch the interviews
                </a>
                <a className="fb-button fb-button--secondary" href="#matters">
                  Dialogue in Action
                </a>
              </div>
            </div>

            <aside className="fb-hero__rail reveal" data-reveal>
              <p className="fb-rail__statement">
                Dialogue and consensus drive the work forward.
              </p>
              <div className="fb-rail__themes">
                {heroThemes.map((theme, index) => (
                  <div className="fb-rail__theme" key={theme}>
                    <span className="fb-rail__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{theme}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="fb-interviews" id="voices">
        <div className="fb-wrap">
          <SectionIntro
            eyebrow="Voices of Sedona"
            title="Reflections from those doing the work."
            text="Through these conversations, members describe how dialogue—not debate—drives the careful examination of complex legal issues."
            light
          />

          <article className="fb-feature reveal" data-reveal>
            <div className="fb-feature__topline">
              <div>
                <p className="fb-meta-label">{interviews[0].title}</p>
                <p className="fb-meta-subtitle">
                  {interviews[0].speaker} | {interviews[0].role}
                </p>
              </div>
            </div>
            <InterviewFrame interview={interviews[0]} featured index={0} />
            <p className="fb-feature__description">{interviews[0].description}</p>
          </article>

          <div className="fb-support-grid">
            {interviews.slice(1).map((interview, index) => (
              <article className="fb-support reveal" data-reveal key={interview.title}>
                <div className="fb-support__header">
                  <p className="fb-meta-label">{interview.title}</p>
                  <p className="fb-meta-subtitle">
                    {interview.speaker} | {interview.role}
                  </p>
                </div>
                <InterviewFrame interview={interview} index={index + 1} />
                <p className="fb-support__description">{interview.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-editorial">
        <div className="fb-wrap fb-editorial__wrap">
          <div className="fb-editorial__intro reveal" data-reveal>
            <p className="fb-eyebrow">Deliberate Inquiry</p>
            <h2>Dialogue is the method.</h2>
            <p>
              The Sedona Conference® Working Group Series was established to
              examine tipping point issues in antitrust law, complex litigation,
              intellectual property rights, and data security and privacy law.
            </p>
          </div>

          <div className="fb-editorial__body">
            {inquiryItems.map((item) => (
              <article className="fb-line-item reveal" data-reveal key={item.title}>
                <p className="fb-line-item__title">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-guidance">
        <div className="fb-wrap">
          <SectionIntro
            eyebrow="Where Dialogue Produces Guidance"
            title="Collaborative exchange is built into the process."
            text="Each Working Group brings together diverse stakeholders, including members of the bench, practicing attorneys, academics, and industry experts, to examine complex legal issues through sustained dialogue."
          />

          <div className="fb-guidance__grid">
            {guidanceItems.map((item, index) => (
              <article
                className={`fb-guidance__item fb-guidance__item--${index + 1} reveal`}
                data-number={item.number}
                data-reveal
                key={item.number}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-community">
        <div className="fb-wrap">
          <SectionIntro
            eyebrow="A Community of Shared Purpose"
            title="Trust and professionalism strengthen the work."
            text="The effectiveness of the Working Group Series depends not only on expertise, but on a shared commitment to advancing the law through reasoned, balanced dialogue."
            light
          />

          <div className="fb-community__grid">
            {communityItems.map((item, index) => (
              <article
                className={`fb-community__item fb-community__item--${index + 1} reveal`}
                data-reveal
                key={item.title}
              >
                <p className="fb-community__title">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-matters" id="matters">
        <div className="fb-wrap">
          <SectionIntro
            eyebrow="Dialogue in Action"
            title="Complex legal challenges need more than surface-level discussion."
            text="They require time, focus, and an environment that supports rigorous, balanced analysis. Sedona provides that environment, making it possible for the Conference to fulfill its mission of producing practical, high-quality guidance for the legal community."
          />

          <div className="fb-impact">
            {impactItems.map((item, index) => (
              <article
                className={`fb-impact__item fb-impact__item--${index + 1} reveal`}
                data-reveal
                key={item}
              >
                <span className="fb-impact__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="fb-footer">
        <div className="fb-wrap fb-footer__wrap">
          <p className="fb-eyebrow fb-eyebrow--footer">Experience Sedona</p>
          <h2>
            Deliberate Dialogue.
            <br />
            Lasting Impact.
          </h2>
          <p>
            The setting, the pace, and the community together create the
            conditions for sustained intellectual engagement.
          </p>

          <div className="fb-upcoming">
            <div className="fb-upcoming__intro">
              <p className="fb-upcoming__eyebrow">Upcoming Events</p>
              <p className="fb-upcoming__text">
                The next opportunities to continue the dialogue.
              </p>
            </div>

            <div className="fb-upcoming__grid">
              {upcomingEvents.map((meeting) => (
                <article className="fb-upcoming__item" key={meeting.href}>
                  <div className="fb-upcoming__media">
                    <img
                      src={meeting.image}
                      alt={meeting.imageAlt}
                      loading="lazy"
                    />
                  </div>
                  <p className="fb-upcoming__label">{meeting.label}</p>
                  <h3>{meeting.title}</h3>
                  <p className="fb-upcoming__date">{meeting.date}</p>
                  <p className="fb-upcoming__location">{meeting.location}</p>
                  <a
                    className="fb-upcoming__link"
                    href={meeting.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View event
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

