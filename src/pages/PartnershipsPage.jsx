import PageBanner from '../components/PageBanner'
import { partnershipGroups, partnershipsIntro } from '../capabilityContent'

function PartnershipsPage() {
  return (
    <>
      <PageBanner
        title="Partnerships"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Partnerships' }]}
      />
      <section className="band band--muted partnerships-section">
        <div className="section partnerships-shell">
          <header className="partnerships-head">
            <p className="kicker kicker--forest">Ecosystem partners</p>
            <h1 className="section-title">Key partnerships &amp; collaborators</h1>
            <p className="partners-lede">{partnershipsIntro}</p>
          </header>
          <div className="partnership-flex-wrap">
            {partnershipGroups.map((group) => (
              <article key={group.label} className="partner-chip-card">
                <h2>{group.label}</h2>
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
    </>
  )
}

export default PartnershipsPage
