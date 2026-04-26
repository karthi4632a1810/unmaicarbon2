import PageBanner from '../components/PageBanner'
import { pillars } from '../capabilityContent'

function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Core Services"
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <section className="band band--dark services services--page">
        <div className="services__inner section">
          <header className="services__header">
            <p className="kicker kicker--lime">Core services</p>
            <h2 className="section-title section-title--on-dark">
              Three pillars - policy, finance, infrastructure
            </h2>
          </header>
          <div className="services__grid">
            <div className="services__columns">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="service-card">
                  <span className="service-card__badge">{pillar.shortTitle}</span>
                  <h2 className="service-card__title">{pillar.title}</h2>
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
    </>
  )
}

export default ServicesPage
