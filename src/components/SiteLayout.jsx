import { useCallback, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact, footerConfidential, gmailComposeHref } from '../capabilityContent'
import brandLogo from '../assets/logo.png'

function FooterSocialLinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FooterSocialXIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const headerPrimaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const headerMoreLinks = [
  { label: 'Memberships', href: '/memberships' },
  { label: 'Partnerships', href: '/partnerships' },
]

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerCompact, setHeaderCompact] = useState(false)
  const { pathname } = useLocation()
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const mobileFooterLinks = [
    { key: 'quick-home', label: 'Home', href: '/' },
    { key: 'quick-services', label: 'Services', href: '/services' },
    { key: 'quick-projects', label: 'Projects', href: '/projects' },
    { key: 'quick-memberships', label: 'Memberships', href: '/memberships' },
    { key: 'quick-partnerships', label: 'Partnerships', href: '/partnerships' },
    { key: 'quick-contact', label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 150)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className={`page${menuOpen ? ' page--menu-open' : ''}`}>
      <header className="hero hero--inner hero--floating">
        <div className="hero__layer">
          <div className={`hero__sticky section${headerCompact ? ' hero__sticky--compact' : ''}`}>
            <div className="nav-bar">
              <Link className="nav-bar__logo" to="/" onClick={closeMenu}>
                <span className="nav-bar__mark nav-bar__mark--logo">
                  <img src={brandLogo} alt="UNMAI logo" />
                </span>
                <span className="nav-bar__wordmark">UNMAI Carbon</span>
              </Link>
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
              <nav id="site-menu" className="nav-bar__menu" aria-label="Primary">
                {headerPrimaryLinks.map((link) => (
                  <NavLink key={link.href} to={link.href} onClick={closeMenu}>
                    {link.label}
                  </NavLink>
                ))}
                <div className="nav-dropdown">
                  <button type="button" className="nav-dropdown__toggle" aria-haspopup="true">
                    More
                  </button>
                  <div className="nav-dropdown__menu" role="menu" aria-label="More pages">
                    {headerMoreLinks.map((link) => (
                      <NavLink key={link.href} to={link.href} onClick={closeMenu} role="menuitem">
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <a
                  className="nav-bar__cta"
                  href={gmailComposeHref(contact.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Get in touch
                </a>
                <div className="nav-mobile-links">
                  <p className="nav-mobile-links__title">Quick links</p>
                  {mobileFooterLinks.map((link) => (
                    <NavLink key={link.key} to={link.href} onClick={closeMenu}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>
            <div className="nav-backdrop" onClick={closeMenu} aria-hidden={!menuOpen} />
          </div>
        </div>
      </header>

      <main className="site-main site-main--home">
        <Outlet />
      </main>

      <footer className="footer-new">
        <div className="footer-new__top section">
          <div className="footer-new__brand">
            <div className="footer-new__logo-box">
              <img src={brandLogo} alt="UNMAI logo" />
            </div>
            <div>
              <p className="footer-new__brand-name">UNMAI Carbon</p>
              <p className="footer-new__tagline">Truth · Transparency · Traceability · Integrity</p>
              <p className="footer-new__address">
                10, Sim Lim Tower, Jalan Besar #10-10, Singapore 208787
              </p>
              <div className="footer-new__social">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FooterSocialLinkedInIcon className="footer-new__social-icon" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                  <FooterSocialXIcon className="footer-new__social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-new__cols">
            <div>
              <p className="footer-new__head">What we offer</p>
              <Link to="/services">Net Zero Advisory</Link>
              <Link to="/services">Climate Finance</Link>
              <Link to="/services">Carbon Market Frameworks</Link>
              <Link to="/services">Digital Infrastructure</Link>
              <Link to="/services">Capacity Building</Link>
              <Link to="/services">Carbon Credit Projects</Link>
            </div>
            <div>
              <p className="footer-new__head">Engagements</p>
              <Link to="/">About</Link>
              <Link to="/projects">Assignments</Link>
              <Link to="/projects">Experience</Link>
              <Link to="/memberships">Memberships</Link>
              <Link to="/partnerships">Partnerships</Link>
            </div>
            <div>
              <p className="footer-new__head">Contact</p>
              <Link to="/contact">Get in Touch</Link>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={gmailComposeHref(contact.email)} target="_blank" rel="noopener noreferrer">
                Email Us
              </a>
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

export default SiteLayout
