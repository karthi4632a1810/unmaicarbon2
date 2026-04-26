import MembershipIcon from '../components/MembershipIcon'
import PageBanner from '../components/PageBanner'
import { additionalActiveAffiliations, additionalAffiliationsIntro } from '../capabilityContent'

function AffiliationsUserIcon() {
  return (
    <svg className="memberships-note__svg-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AffiliationsCalendarIcon() {
  return (
    <svg className="memberships-note__svg-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const membershipCards = [
  {
    icon: 'institution',
    title: 'ISO 14060',
    description: 'Net zero pathways and greenhouse gas management in line with the ISO 14060 series.',
    role: 'World bank representative — TC 207 / SC 7 / WG 18',
    date: 'Aug 2024 – Present',
  },
  {
    icon: 'heart',
    title: 'BioCarbon Standard',
    description: 'Methodology, digital MRV, and integrity for land use and nature-based projects.',
    role: 'Member, digital MRV working group',
    date: 'Sept 2025 – Present',
  },
  {
    icon: 'hub',
    title: 'Climate Action Data Trust',
    description: 'Decentralized metadata and market transparency for high-integrity carbon data.',
    role: 'Member, user forum',
    date: 'Aug 2025 – Present',
  },
  {
    icon: 'finance',
    title: 'ISO Sustainable Finance',
    description: 'Technical frameworks for climate finance and investment-grade reporting.',
    role: 'Member, TC 322 / WG5 carbon data model',
    date: 'Aug 2025 – Present',
  },
  {
    icon: 'protocol',
    title: 'Carbon Data Open Protocol',
    description: 'Open-source interoperability for carbon data exchange across platforms.',
    role: 'Member, technical working group (Sylvera, UK & GCMU, US)',
    date: 'Aug 2024 – Present',
  },
  {
    icon: 'community',
    title: 'VCMI',
    description: 'Voluntary carbon market integrity, claims, and use of high-quality credits.',
    role: 'Member, stakeholders forum (UK)',
    date: 'March 2024 – Present',
  },
  {
    icon: 'committee',
    title: 'EMSF, Singapore',
    description: 'Environmental management, sustainable finance, and regional standards alignment.',
    role: 'Technical committee — EMSF',
    date: 'Active',
  },
  {
    icon: 'clock',
    title: 'UNFCCC',
    description: 'Expert roster participation and technical support to national and UN processes.',
    role: 'Rostered expert',
    date: 'Active',
  },
]

function MembershipsPage() {
  return (
    <>
      <PageBanner
        title="Memberships"
        backgroundImage="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Memberships' }]}
      />
      <section className="band memberships-section">
        <div className="section memberships-shell">
          <header className="memberships-head">
            <p className="kicker kicker--forest">Global affiliations</p>
            <h2 className="section-title memberships-head__title">Memberships &amp; standards participation</h2>
            <p className="memberships-head__lede">
              Active contribution and alignment with leading global standards bodies.
            </p>
          </header>
          <div className="membership-card-grid">
            {membershipCards.map((item) => (
              <article key={item.title} className="membership-card">
                <div className="membership-card__icon" aria-hidden="true">
                  <MembershipIcon type={item.icon} />
                </div>
                <h3 className="membership-card__title">{item.title}</h3>
                <p className="membership-card__description">{item.description}</p>
                <div className="membership-card__divider" />
                <footer className="membership-card__foot">
                  <p className="membership-card__role">{item.role}</p>
                  <p className="membership-card__date">{item.date}</p>
                </footer>
              </article>
            ))}
          </div>
          <div className="memberships-note" aria-label="Additional active affiliations">
            <header className="memberships-note__head">
              <p className="memberships-note__kicker">Network &amp; standards</p>
              <h2 className="memberships-note__heading">Additional active affiliations</h2>
              <p className="memberships-note__lede">{additionalAffiliationsIntro}</p>
            </header>
            <div className="memberships-note__grid">
              {additionalActiveAffiliations.map((item) => (
                <article key={`${item.title}-${item.badge}`} className="memberships-note__card">
                  <div className="memberships-note__badge">{item.badge}</div>
                  <h3 className="memberships-note__card-title">{item.title}</h3>
                  <div className="memberships-note__row">
                    <span className="memberships-note__row-icon" aria-hidden="true">
                      <AffiliationsUserIcon />
                    </span>
                    <span className="memberships-note__role">{item.role}</span>
                  </div>
                  <div className="memberships-note__row">
                    <span className="memberships-note__row-icon" aria-hidden="true">
                      <AffiliationsCalendarIcon />
                    </span>
                    <span className="memberships-note__date">{item.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MembershipsPage
