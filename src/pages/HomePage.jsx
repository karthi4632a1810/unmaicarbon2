import { Link } from 'react-router-dom'
import heroHomeBg from '../assets/hero-home.jpg'
import heroHomeMob from '../assets/hero-home-mob.jpg'
import heroVideo from '../assets/unmai-carbon.mp4'
import {
  ContactIconLinkedIn,
  ContactIconMail,
  ContactIconMapPin,
  ContactIconPhone,
} from '../components/ContactInfoIcons'
import {
  aboutParagraphs,
  company,
  contact,
  gmailComposeHref,
  directAssignments,
  footerConfidential,
  headlineStats,
  impactStats,
  pillars,
} from '../capabilityContent'
import { buildProjectSlug, getProjectSpotlightImage, getProjectSummary } from '../projectUtils'

function ServicePillarIcon({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3L19 6V11C19 15.2 16.2 18.6 12 20C7.8 18.6 5 15.2 5 11V6L12 3Z" />
        <path d="M12 8V12" />
        <circle cx="12" cy="15.2" r="1" />
      </svg>
    )
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10L12 5L21 10" />
        <path d="M5 10V18" />
        <path d="M9 10V18" />
        <path d="M15 10V18" />
        <path d="M19 10V18" />
        <path d="M3 19H21" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </svg>
  )
}

function HomePage() {
  const heroBgVars = {
    '--hero-bg-desktop': `url(${heroHomeBg})`,
    '--hero-bg-mobile': `url(${heroHomeMob})`,
  }

  return (
    <>
      <section className="home-video-strip home-video-strip--lead mt-10" aria-label="UNMAI Carbon introduction video">
        <div className="home-video-strip__inner">
          <div className="home-video-strip__frame">
            <video
              className="home-video-strip__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <header className="hero hero--home" id="top" style={heroBgVars}>
        <div className="hero__bg hero__bg--fixed-image" aria-hidden="true">
          <div className="hero__overlay" />
        </div>
        <div className="hero__layer">
          <section className="hero__main section">
            <div className="hero__copy">
              <p className="kicker kicker--lime">Capability statement</p>
              <h1 className="hero__title">
                UNMAI CARBON
                <br />
                SOLUTIONS PTE LTD
              </h1>
              <p className="hero__tagline">{company.tagline}</p>
              <p className="hero__lede">{aboutParagraphs[0]}</p>
              <div className="hero__actions">
                <Link className="btn btn--solid" to="/services">
                  Our services
                </Link>
                <Link className="btn btn--outline" to="/projects">
                  View projects
                </Link>
              </div>
            </div>
            <aside className="hero__aside" aria-label="About the firm">
              <div className="hero__aside-card">
                <p className="hero__aside-label">Global climate advisory</p>
                <p>Policy, finance, and digital innovation for high-integrity carbon markets.</p>
              </div>
              <p className="hero__aside-detail">{aboutParagraphs[1]}</p>
              <p className="hero__aside-detail">{aboutParagraphs[2]}</p>
            </aside>
          </section>
        </div>
      </header>

      <section className="band band--light stats" aria-labelledby="stats-heading">
        <div className="stats__inner section">
          <div className="stats__intro">
            <p className="kicker kicker--forest">At a glance</p>
            <h2 id="stats-heading" className="section-title">
              Scale &amp; depth
            </h2>
            <p className="stats__lede">
              Highlights from UNMAI CARBON&apos;s direct assignments and CXO experience.
            </p>
          </div>
          <div className="stats__grid">
            {headlineStats.map((metric) => (
              <article key={metric.label} className="stat-card">
                <p className={`stat-card__value stat-card__value--${metric.tone}`}>{metric.value}</p>
                <p className="stat-card__label">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--dark services services--home">
        <div className="services__inner section">
          <header className="services__header">
            <p className="kicker kicker--lime">Core services</p>
            <h2 className="section-title section-title--on-dark">
              Three pillars - policy, finance, infrastructure
            </h2>
          </header>
          <div className="services__grid">
            <div className="services__columns">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="service-card">
                  <div className="service-card__top">
                    <p className="service-card__number">{String(index + 1).padStart(2, '0')}</p>
                    <span className="service-card__glyph" aria-hidden="true">
                      <ServicePillarIcon index={index} />
                    </span>
                  </div>
                  <span className="service-card__badge">
                    Pillar {index + 1} - {pillar.shortTitle}
                  </span>
                  <h3 className="service-card__title">{pillar.title}</h3>
                  {pillar.overview ? <p className="service-card__overview">{pillar.overview}</p> : null}
                  <p className="service-card__label">{pillar.servicesLabel}</p>
                  <ul className="service-card__list">
                    {pillar.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band--muted project-teasers" aria-labelledby="project-teasers-heading">
        <div className="section project-teasers__inner">
          <header className="project-teasers__head">
            <p className="kicker kicker--forest">Project spotlight</p>
            <h2 id="project-teasers-heading" className="section-title">
              Our project highlights
            </h2>
          </header>
          <div className="project-teasers__grid">
            {directAssignments.slice(0, 5).map((project, index) => {
              const slug = buildProjectSlug(project)
              const summary = getProjectSummary(project)
              const cardClass =
                index === 0
                  ? 'project-teaser-card project-teaser-card--featured'
                  : index === 1
                    ? 'project-teaser-card project-teaser-card--top-right'
                    : 'project-teaser-card'
              return (
                <Link key={project.id} to={`/project/${slug}`} className={cardClass}>
                  <div
                    className="project-teaser-card__media"
                    style={{ backgroundImage: `url(${getProjectSpotlightImage(index)})` }}
                    aria-hidden="true"
                  />
                  <div className="project-teaser-card__body">
                    <p className="project-teaser-card__meta">Project {project.id}</p>
                    <h3 className="project-teaser-card__title">{project.title}</h3>
                    <p className="project-teaser-card__summary">{summary}...</p>
                    <span className="project-teaser-card__cta">
                      View full project
                      {' '}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="band band--light impact"
        id="impact-cxo"
        aria-labelledby="impact-cxo-heading"
      >
        <div className="impact__inner section">
          <div className="impact__intro">
            <p className="kicker kicker--forest">Delivery footprint</p>
            <h2 id="impact-cxo-heading" className="section-title">
              Selected CXO &amp; platform metrics
            </h2>
          </div>
          <div className="impact__stats">
            {impactStats.map((stat) => (
              <article key={stat.label} className="impact-stat">
                <p className={`impact-stat__value impact-stat__value--${stat.tone}`}>{stat.value}</p>
                <p className="impact-stat__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--light contact-band">
        <div className="section contact-frame7">
          <div className="contact-frame7__left">
            <p className="kicker kicker--forest">Contact</p>
            <h2 className="contact-frame7__title">{`Let's build a greener future together`}</h2>
            <p className="contact-frame7__desc">
              Whether you&apos;re a government, corporate, or carbon market stakeholder - UNMAI
              Carbon Solutions is ready to deliver tailored advisory, infrastructure, and financing
              solutions.
            </p>
            <a
              className="contact-frame7__mail-btn"
              href={gmailComposeHref(contact.email)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us an email
            </a>
            <div className="contact-frame7__person-card">
              <p className="contact-frame7__label">Contact person</p>
              <p className="contact-frame7__name">{contact.name}</p>
              <p className="contact-frame7__role">{contact.role}</p>
              <ul className="contact-frame7__list">
                <li>
                  <span className="contact-frame7__row-icon-wrap" aria-hidden="true">
                    <ContactIconMail />
                  </span>
                  <a href={gmailComposeHref(contact.email)} target="_blank" rel="noopener noreferrer">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="contact-frame7__row-icon-wrap" aria-hidden="true">
                    <ContactIconPhone />
                  </span>
                  <span>{contact.phone}</span>
                </li>
                <li>
                  <span className="contact-frame7__row-icon-wrap" aria-hidden="true">
                    <ContactIconMapPin />
                  </span>
                  <span>{contact.address}</span>
                </li>
                <li>
                  <span className="contact-frame7__row-icon-wrap" aria-hidden="true">
                    <ContactIconLinkedIn />
                  </span>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-frame7__right">
            <div className="contact-frame7__dark">
              <p className="contact-frame7__label contact-frame7__label--dark">
                What we can help with
              </p>
              <ul className="contact-frame7__helps">
                <li>Net Zero strategies &amp; decarbonization roadmaps</li>
                <li>Article 6 readiness &amp; carbon market frameworks</li>
                <li>Carbon digital infrastructure &amp; registry design</li>
                <li>Climate finance structuring &amp; investment advisory</li>
                <li>Capacity building &amp; international negotiation support</li>
                <li>Carbon credit project development (NBS, RE, Waste)</li>
              </ul>
              <p className="contact-frame7__mini">Visit our LinkedIn Profile</p>
              <a
                className="contact-frame7__profile-link"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Nithyanandam Yuvaraj Dinesh Babu
              </a>
            </div>
            <div className="contact-frame7__confidential">{footerConfidential}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
