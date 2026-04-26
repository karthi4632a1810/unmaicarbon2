import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { directAssignments } from '../capabilityContent'
import { buildProjectSlug } from '../projectUtils'

const projectDetailImages = [
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
]

function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = directAssignments.find((item) => buildProjectSlug(item) === projectSlug)

  if (!project) {
    return (
      <>
        <PageBanner
          title="Project Detail"
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects', to: '/projects' }, { label: 'Detail' }]}
        />
        <section className="band band--light project-detail">
          <div className="section project-detail__inner">
            <p className="kicker kicker--forest">Project</p>
            <h1 className="section-title">Project not found</h1>
            <p className="project-detail__intro">
              The project link may be outdated. You can return to the full project list.
            </p>
            <Link className="btn btn--solid" to="/projects">
              Back to projects
            </Link>
          </div>
        </section>
      </>
    )
  }

  const highlights = project.bullets ?? []
  const sectionCount = project.subsections?.length ?? 0
  const totalPoints =
    highlights.length +
    (project.subsections?.reduce((acc, section) => acc + section.bullets.length, 0) ?? 0)
  const projectIndex = directAssignments.findIndex((item) => item.id === project.id)
  const heroImage = projectDetailImages[projectIndex % projectDetailImages.length]
  const summaryLine =
    highlights[0] ??
    project.subsections?.[0]?.bullets?.[0] ??
    'End-to-end climate market advisory and execution support.'

  return (
    <>
      <section className="band band--light project-detail">
        <div className="section project-detail__inner">
          <div className="project-hero-card" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="project-hero-card__overlay" />
            <div className="project-hero-card__content">
              <div className="project-hero-card__chips">
                <span>Environmental</span>
                <span>Active</span>
              </div>
              <h1 className="project-hero-card__title">
                {project.id} {project.title}
              </h1>
            </div>
          </div>

          <div className="project-detail__meta project-detail__meta--flat">
            <article className="project-meta-card">
              <p className="project-meta-card__label">Project ID</p>
              <p className="project-meta-card__value">{project.id.replace('.', '')}</p>
            </article>
            <article className="project-meta-card">
              <p className="project-meta-card__label">Status</p>
              <p className="project-meta-card__value">Active</p>
            </article>
            <article className="project-meta-card">
              <p className="project-meta-card__label">Location</p>
              <p className="project-meta-card__value">Global</p>
            </article>
            <article className="project-meta-card">
              <p className="project-meta-card__label">Registry</p>
              <p className="project-meta-card__value">Verra / Gold Standard</p>
            </article>
          </div>

          <div className="project-detail__content project-detail__content--split">
            <div className="project-detail-main">
              <article className="project-detail-block">
                <h2>Overview</h2>
                <p>
                  This project focuses on the end-to-end development of high-quality carbon credit
                  projects, from initial feasibility assessment through issuance and retirement.
                  Our approach ensures adherence to the most rigorous international standards,
                  providing transparent, verifiable, and impactful climate solutions.
                </p>
                {project.note ? <p className="project-detail__note">{project.note}</p> : null}
              </article>
              <article className="project-detail-block">
                <h2>Key highlights</h2>
                <ul className="project-detail-list">
                  {(highlights.length ? highlights : [summaryLine]).slice(0, 6).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className="project-delivery-card">
              <h2>Delivery Model</h2>
              <ol className="project-delivery-card__steps">
                <li>
                  <p>Phase 1</p>
                  <strong>Feasibility &amp; Design</strong>
                </li>
                <li>
                  <p>Phase 2</p>
                  <strong>Validation &amp; Registration</strong>
                </li>
                <li>
                  <p>Phase 3</p>
                  <strong>Monitoring &amp; Issuance</strong>
                </li>
              </ol>
              <Link className="project-delivery-card__cta" to="/contact">
                Request Proposal
              </Link>
              <p className="project-delivery-card__small">
                Workstreams: {sectionCount} | Detail points: {totalPoints}
              </p>
            </aside>
          </div>

          <div className="project-detail__actions">
            <Link className="btn btn--outline" to="/projects">
              Back to all projects
            </Link>
            <Link className="btn btn--solid" to="/contact">
              Discuss this project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetailPage
