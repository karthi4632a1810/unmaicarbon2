import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { cxoExperience, cxoIntro, directAssignments } from '../capabilityContent'
import { buildProjectSlug, getProjectSpotlightImage, getProjectSummary } from '../projectUtils'

function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Projects"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />
      <section className="band band--muted assignments-section">
        <div className="section assignments-shell">
          <header className="assignments-head">
            <p className="kicker kicker--forest">Execution track</p>
            <h1 className="section-title">Direct assignments</h1>
          </header>
          <div className="project-catalog-grid">
            {directAssignments.map((project, index) => (
              <Link key={project.id} to={`/project/${buildProjectSlug(project)}`} className="project-catalog-card">
                <div
                  className="project-catalog-card__media"
                  style={{ backgroundImage: `url(${getProjectSpotlightImage(index)})` }}
                  aria-hidden="true"
                />
                <div className="project-catalog-card__body">
                  <p className="project-catalog-card__meta">Project {project.id}</p>
                  <h2 className="project-catalog-card__title">{project.title}</h2>
                  <p className="project-catalog-card__summary">{getProjectSummary(project)}...</p>
                  <span className="project-catalog-card__cta">
                    View full project
                    {' '}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band cxo-section">
        <div className="section cxo-shell">
          <header className="cxo-head">
            <p className="kicker kicker--lime">Leadership advisory</p>
            <h2 className="section-title section-title--on-dark">Experience of UNMAI CXO team</h2>
          </header>
          <div className="cxo-intro cxo-intro--on-dark">
            {cxoIntro.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="cxo-accordion cxo-accordion--dark">
            {cxoExperience.map((block, index) => (
              <details key={block.id} className="cxo-details cxo-details--dark" open={index === 0}>
                <summary>
                  <span className="cxo-details__id">{block.id}</span>
                  {block.title}
                </summary>
                <div className="cxo-details__body">
                  {block.bullets ? (
                    <ul className="doc-card__list doc-card__list--on-dark">
                      {block.bullets.map((item) => (
                        <li key={item}>{item}</li>
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
    </>
  )
}

export default ProjectsPage
