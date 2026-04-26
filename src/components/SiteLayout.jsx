import { useCallback, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact, footerConfidential } from '../capabilityContent'
import brandLogo from '../assets/logo.png'

const figmaFooterLinkedinIcon =
  'http://localhost:3845/assets/4fcc6fef5dcaa3c08569ac4fb65239458e535d9f.svg'
const figmaFooterXIcon = 'http://localhost:3845/assets/f8e61a8c3254de0e282f9ecf50e95ac640c20d16.svg'

const headerPrimaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const headerMoreLinks = [
  { label: 'Memberships', href: '/memberships' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Impact', href: '/impact' },
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
    { key: 'quick-impact', label: 'Impact', href: '/impact' },
    { key: 'quick-contact', label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 150)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
              <div className="nav-backdrop" onClick={closeMenu} aria-hidden={!menuOpen} />
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
                <a className="nav-bar__cta" href="mailto:ydb@unmaicarbon.earth" onClick={closeMenu}>
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

export default SiteLayout
