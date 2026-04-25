import { useState, useCallback, useEffect } from 'react'
import './App.css'
import heroVideo from './assets/unmai-carbon.mp4'
import {
  company,
  aboutParagraphs,
  pillars,
  directAssignments,
  cxoIntro,
  cxoExperience,
  memberships,
  partnershipsIntro,
  partnershipGroups,
  headlineStats,
  impactStats,
  contact,
  footerConfidential,
  footerColumns,
} from './capabilityContent.js'

const figmaFooterLogo = 'http://localhost:3845/assets/ade6d550b16d16d016daf0975acea68f7d6c0069.png'
const figmaFooterLinkedinIcon =
  'http://localhost:3845/assets/4fcc6fef5dcaa3c08569ac4fb65239458e535d9f.svg'
const figmaFooterXIcon = 'http://localhost:3845/assets/f8e61a8c3254de0e282f9ecf50e95ac640c20d16.svg'

function MembershipIcon({ type }) {
  const commonProps = {
    className: 'membership-icon-svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  if (type === 'institution') {
    return (
      <svg {...commonProps}>
        <path d="M3 10L12 5L21 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'heart') {
    return (
      <svg {...commonProps}>
        <path
          d="M12 19C12 19 5 14.5 5 10.2C5 8.2 6.6 6.7 8.5 6.7C10 6.7 11 7.4 12 8.6C13 7.4 14 6.7 15.5 6.7C17.4 6.7 19 8.2 19 10.2C19 14.5 12 19 12 19Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'hub') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="4.5" r="1.4" fill="currentColor" />
        <circle cx="19.5" cy="12" r="1.4" fill="currentColor" />
        <circle cx="12" cy="19.5" r="1.4" fill="currentColor" />
        <circle cx="4.5" cy="12" r="1.4" fill="currentColor" />
        <path d="M12 6.2V9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17.8 12H14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 17.8V14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.2 12H6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'finance') {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 9.3H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 14.7H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'protocol') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 7.2H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.2 10.5V13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.5 10.5L10.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'community') {
    return (
      <svg {...commonProps}>
        <circle cx="8" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 18.3C4.9 15.9 6.6 14.5 8.8 14.5H15.2C17.4 14.5 19.1 15.9 19.5 18.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'committee') {
    return (
      <svg {...commonProps}>
        <path d="M12 3.8L18.8 7.2V12.8C18.8 16.4 16.3 19.3 12 20.3C7.7 19.3 5.2 16.4 5.2 12.8V7.2L12 3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 8.4V12.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 15.2H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8V12L14.8 14.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerCompact, setHeaderCompact] = useState(false)
  const membershipCards = [
    {
      icon: 'institution',
      title: 'ISO 14060 Net Zero Standards',
      subtitle: 'World Bank Representative — TC 207/SC 7/WG 18',
      date: 'Aug 2024–present',
    },
    {
      icon: 'heart',
      title: 'BioCarbon Standard',
      subtitle: 'Member, Digital MRV Working Group',
      date: 'Sept 2025–present',
    },
    {
      icon: 'hub',
      title: 'Climate Action Data Trust',
      subtitle: 'Member, User Forum',
      date: 'Aug 2025–present',
    },
    {
      icon: 'finance',
      title: 'ISO Sustainable Finance',
      subtitle: 'Member, TC 322/WG5 Carbon Data Model',
      date: 'Aug 2025–present',
    },
    {
      icon: 'protocol',
      title: 'Carbon Data Open Protocol',
      subtitle: 'Sylvera, UK & GCMU, US — Member, Technical Working Group',
      date: 'Aug 2024–present',
    },
    {
      icon: 'community',
      title: 'VCMI, UK',
      subtitle: 'Member, Stakeholders Forum',
      date: 'March 2024–present',
    },
    {
      icon: 'committee',
      title: 'EMSF, Singapore',
      subtitle:
        'Technical Committee for Environmental Management and Sustainable Finance',
      date: 'Active',
    },
    {
      icon: '🌐',
      title: 'UNFCCC Roster of Experts',
      subtitle: 'Expert participation and technical support roster',
      date: 'Active',
    },
  ]
  const mobileFooterLinks = footerColumns.flatMap((col) =>
    col.links.map((link) => ({
      ...link,
      key: `${col.title}-${link.label}`,
    })),
  )
  const headerPrimaryLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
  const headerMoreLinks = [
    { label: 'Leadership', href: '#cxo' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Impact', href: '#impact' },
  ]
  const headerMenuHrefs = new Set(
    [...headerPrimaryLinks, ...headerMoreLinks].map((link) => link.href),
  )
  const mobileQuickLinks = mobileFooterLinks.filter(
    (link) => !headerMenuHrefs.has(link.href),
  )

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => {
      setHeaderCompact(window.scrollY > 150)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const revealTargets = document.querySelectorAll(
      '.stats, .services, .assignments-section, .cxo-section, .memberships-section, .partnerships-section, .impact, .contact-band, .footer-new, .stat-card, .service-card, .assignment-card, .membership-card, .partner-chip-card, .impact-stat',
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    revealTargets.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`page${menuOpen ? ' page--menu-open' : ''}`}>
      <header className="hero" id="top">
        <div className="hero__bg" aria-hidden="true">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero__overlay" />
        </div>

        <div className="hero__layer">
          <div className={`hero__sticky section${headerCompact ? ' hero__sticky--compact' : ''}`}>
            <div className="nav-bar">
              <a className="nav-bar__logo" href="#top" onClick={closeMenu}>
                <span className="nav-bar__mark nav-bar__mark--logo">
                  <img src={figmaFooterLogo} alt="UNMAI logo" />
                </span>
                <span className="nav-bar__wordmark">UNMAI Carbon</span>
              </a>

              <button
                type="button"
                className="nav-bar__toggle"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="nav-bar__toggle-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>

              <div
                className="nav-backdrop"
                onClick={closeMenu}
                aria-hidden={!menuOpen}
              />

              <nav id="site-menu" className="nav-bar__menu" aria-label="Primary">
                {headerPrimaryLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
                <div className="nav-dropdown">
                  <button type="button" className="nav-dropdown__toggle" aria-haspopup="true">
                    More
                  </button>
                  <div className="nav-dropdown__menu" role="menu" aria-label="More sections">
                    {headerMoreLinks.map((link) => (
                      <a key={link.href} href={link.href} onClick={closeMenu} role="menuitem">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  className="nav-bar__cta"
                  href="mailto:ydb@unmaicarbon.earth"
                  onClick={closeMenu}
                >
                  Get in touch
                </a>
                {mobileQuickLinks.length > 0 ? (
                  <div className="nav-mobile-links">
                    <p className="nav-mobile-links__title">Quick links</p>
                    {mobileQuickLinks.map((link) => (
                      <a key={link.key} href={link.href} onClick={closeMenu}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </nav>
            </div>
          </div>

          <section id="about" className="hero__main section">
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
                <a className="btn btn--solid" href="#services">
                  Our services
                </a>
                <a className="btn btn--outline" href="#projects">
                  View projects
                </a>
              </div>
            </div>
            <aside className="hero__aside" aria-label="About the firm">
              <div className="hero__aside-card">
                <p className="hero__aside-label">Global climate advisory</p>
                <p>
                  Policy, finance, and digital innovation for high-integrity
                  carbon markets.
                </p>
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
              Highlights from UNMAI Carbon&apos;s direct assignments and CXO
              experience across climate finance, carbon markets, and digital
              infrastructure.
            </p>
          </div>
          <div className="stats__grid">
            {headlineStats.map((metric) => (
              <article key={metric.label} className="stat-card">
                <p className={`stat-card__value stat-card__value--${metric.tone}`}>
                  {metric.value}
                </p>
                <p className="stat-card__label">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="band band--dark services">
        <div className="services__inner section">
          <header className="services__header">
            <p className="kicker kicker--lime">Core services</p>
            <h2 className="section-title section-title--on-dark">
              Three pillars — policy, finance, infrastructure
            </h2>
          </header>
          <div className="services__grid">
            <div className="services__columns">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="service-card">
                  <span className="service-card__badge">{pillar.shortTitle}</span>
                  <h3 className="service-card__title">{pillar.title}</h3>
                  <p className="service-card__label">{pillar.servicesLabel}</p>
                  <ul className="service-card__list">
                    {pillar.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="band band--muted assignments-section">
        <div className="section assignments-shell">
          <header className="assignments-head">
            <p className="kicker kicker--forest">Execution track</p>
            <h2 className="section-title">Direct assignments</h2>
          </header>
          <div id="assignments" className="assignments-timeline">
            {directAssignments.map((block, i) => (
              <article key={block.id} className="assignment-card" data-tone={i % 3}>
                <h3 className="assignment-card__title">
                  <span className="assignment-card__id">{block.id}</span>
                  {block.title}
                </h3>
                {block.note ? <p className="doc-card__note">{block.note}</p> : null}
                {block.bullets ? (
                  <ul className="doc-card__list">
                    {block.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
                {block.subsections
                  ? block.subsections.map((sub) => (
                      <div key={sub.heading} className="doc-card__sub">
                        <h5>{sub.heading}</h5>
                        <ul className="doc-card__list">
                          {sub.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cxo" className="band cxo-section">
        <div className="section cxo-shell">
          <header className="cxo-head">
            <p className="kicker kicker--lime">Leadership advisory</p>
            <h2 className="section-title section-title--on-dark">
              Experience of UNMAI CXO team
            </h2>
          </header>
          <div className="cxo-intro cxo-intro--on-dark">
            {cxoIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="cxo-accordion cxo-accordion--dark">
            {cxoExperience.map((block) => (
              <details key={block.id} className="cxo-details cxo-details--dark">
                <summary>
                  <span className="cxo-details__id">{block.id}</span>
                  {block.title}
                </summary>
                <div className="cxo-details__body">
                  {block.bullets ? (
                    <ul className="doc-card__list doc-card__list--on-dark">
                      {block.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {block.tableRows ? (
                    <div className="table-scroll">
                      <table className="data-table data-table--dark">
                        <thead>
                          <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Engagement details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {block.tableRows.map((row) => (
                            <tr key={row[0]}>
                              <td>{row[0]}</td>
                              <td>{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="memberships" className="band memberships-section">
        <div className="section memberships-shell">
          <header className="memberships-head">
            <p className="kicker kicker--forest">Global affiliations</p>
            <h2 className="section-title">Memberships &amp; standards participation</h2>
            <div className="memberships-underline" />
          </header>
          <div className="membership-card-grid">
            {membershipCards.map((item) => (
              <article key={item.title} className="membership-card">
                <div className="membership-card__icon">
                  <MembershipIcon type={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p className="membership-card__subtitle">{item.subtitle}</p>
                <p className="membership-card__date">{item.date}</p>
              </article>
            ))}
          </div>
          <div className="memberships-note" aria-label="Additional active affiliations">
            <p className="memberships-note__title">Additional active affiliations</p>
            <div className="memberships-note__list">
              {memberships.map((item) => (
                <span key={item} className="memberships-note__item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partnerships" className="band band--muted partnerships-section">
        <div className="section partnerships-shell">
          <header className="partnerships-head">
            <p className="kicker kicker--forest">Ecosystem partners</p>
            <h2 className="section-title">Key partnerships &amp; collaborators</h2>
            <p className="partners-lede">{partnershipsIntro}</p>
          </header>
          <div className="partnership-flex-wrap">
            {partnershipGroups.map((group) => (
              <article key={group.label} className="partner-chip-card">
                <h4>{group.label}</h4>
                <div className="partner-chip-list">
                  {group.items.map((item) => (
                    <span key={item} className="partner-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="band band--light impact" aria-labelledby="impact-heading">
        <div className="impact__inner section">
          <div className="impact__intro">
            <p className="kicker kicker--forest">Delivery footprint</p>
            <h2 id="impact-heading" className="section-title">
              Selected CXO &amp; platform metrics
            </h2>
          </div>
          <div className="impact__stats">
            {impactStats.map((stat) => (
              <article key={stat.label} className="impact-stat">
                <p className={`impact-stat__value impact-stat__value--${stat.tone}`}>
                  {stat.value}
                </p>
                <p className="impact-stat__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="band band--light contact-band">
        <div className="section contact-frame7">
          <div className="contact-frame7__left">
            <p className="kicker kicker--forest">Contact</p>
            <h2 className="contact-frame7__title">{`Let's build a greener future together`}</h2>
            <p className="contact-frame7__desc">
              Whether you&apos;re a government, corporate, or carbon market
              stakeholder — UNMAI Carbon Solutions is ready to deliver tailored
              advisory, infrastructure, and financing solutions.
            </p>
            <a className="contact-frame7__mail-btn" href={`mailto:${contact.email}`}>
              Send us an email
            </a>

            <div className="contact-frame7__person-card">
              <p className="contact-frame7__label">Contact person</p>
              <p className="contact-frame7__name">{contact.name}</p>
              <p className="contact-frame7__role">{contact.role}</p>
              <ul className="contact-frame7__list">
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>{contact.phone}</li>
                <li>{contact.address}</li>
                <li>
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

      <footer className="footer-new">
        <div className="footer-new__top section">
          <div className="footer-new__brand">
            <div className="footer-new__logo-box">
              <img src={figmaFooterLogo} alt="UNMAI logo" />
            </div>
            <div>
              <p className="footer-new__brand-name">UNMAI Carbon</p>
              <p className="footer-new__tagline">
                Truth · Transparency · Traceability · Integrity
              </p>
              <p className="footer-new__address">
                10, Sim Lim Tower, Jalan Besar #10-10, Singapore 208787
              </p>
              <div className="footer-new__social">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <img src={figmaFooterLinkedinIcon} alt="" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                  <img src={figmaFooterXIcon} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-new__cols">
            <div>
              <p className="footer-new__head">What we offer</p>
              <a href="#services">Net Zero Advisory</a>
              <a href="#services">Climate Finance</a>
              <a href="#services">Carbon Market Frameworks</a>
              <a href="#services">Digital Infrastructure</a>
              <a href="#services">Capacity Building</a>
              <a href="#services">Carbon Credit Projects</a>
            </div>
            <div>
              <p className="footer-new__head">Engagements</p>
              <a href="#about">About</a>
              <a href="#assignments">Assignments</a>
              <a href="#cxo">Experience</a>
              <a href="#memberships">Memberships</a>
              <a href="#partnerships">Partnerships</a>
            </div>
            <div>
              <p className="footer-new__head">Contact</p>
              <a href="#contact">Get in Touch</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${contact.email}`}>Email Us</a>
            </div>
          </div>
        </div>
        <div className="footer-new__bottom-wrap">
          <div className="footer-new__bottom section">
            <p>© 2026 UNMAI Carbon Solutions Pte Ltd. All rights reserved.</p>
            <p>{footerConfidential}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
