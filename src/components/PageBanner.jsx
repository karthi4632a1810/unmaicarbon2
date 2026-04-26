import { Link } from 'react-router-dom'

function PageBanner({ title, backgroundImage, breadcrumbs }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="page-banner__overlay" />
      <div className="page-banner__content section">
        <nav className="page-banner__breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="page-banner__crumb-wrap">
              {crumb.to ? (
                <Link to={crumb.to} className="page-banner__crumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="page-banner__crumb-current">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 ? (
                <span className="page-banner__crumb-sep" aria-hidden="true">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </nav>
        <h1 className="page-banner__title">{title}</h1>
      </div>
    </section>
  )
}

export default PageBanner
