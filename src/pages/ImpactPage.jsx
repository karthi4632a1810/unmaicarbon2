import PageBanner from '../components/PageBanner'
import { impactStats } from '../capabilityContent'

function ImpactPage() {
  return (
    <>
      <PageBanner
        title="Impact"
        backgroundImage="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Impact' }]}
      />
      <section className="band band--light impact" aria-labelledby="impact-heading">
        <div className="impact__inner section">
          <div className="impact__intro">
            <p className="kicker kicker--forest">Delivery footprint</p>
            <h1 id="impact-heading" className="section-title">
              Selected CXO &amp; platform metrics
            </h1>
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
    </>
  )
}

export default ImpactPage
