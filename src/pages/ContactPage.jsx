import PageBanner from '../components/PageBanner'
import { contact, footerConfidential } from '../capabilityContent'

function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        backgroundImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="band band--light contact-form-band">
        <div className="section contact-form-shell">
          <div className="contact-form-shell__intro">
            <p className="kicker kicker--forest">Send an inquiry</p>
            <h2 className="section-title">Tell us about your requirement</h2>
            <p>
              Share your goals, project timeline, and focus areas. Our team will get back with a
              tailored response.
            </p>
          </div>
          <form className="contact-form" action={`mailto:${contact.email}`} method="post" encType="text/plain">
            <label className="contact-form__field">
              <span>Full name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label className="contact-form__field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label className="contact-form__field">
              <span>Organization</span>
              <input type="text" name="organization" placeholder="Company or institution" />
            </label>
            <label className="contact-form__field contact-form__field--full">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Describe your project, scope, and how we can support."
                required
              />
            </label>
            <button type="submit" className="contact-form__submit">
              Submit inquiry
            </button>
          </form>
        </div>
      </section>
      <section className="band band--light contact-band">
        <div className="section contact-frame7">
          <div className="contact-frame7__left">
            <p className="kicker kicker--forest">Contact</p>
            <h1 className="contact-frame7__title">{`Let's build a greener future together`}</h1>
            <p className="contact-frame7__desc">
              Whether you&apos;re a government, corporate, or carbon market stakeholder - UNMAI
              Carbon Solutions is ready to deliver tailored advisory, infrastructure, and financing
              solutions.
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
              <p className="contact-frame7__label contact-frame7__label--dark">What we can help with</p>
              <ul className="contact-frame7__helps">
                <li>Net Zero strategies &amp; decarbonization roadmaps</li>
                <li>Article 6 readiness &amp; carbon market frameworks</li>
                <li>Carbon digital infrastructure &amp; registry design</li>
                <li>Climate finance structuring &amp; investment advisory</li>
                <li>Capacity building &amp; international negotiation support</li>
                <li>Carbon credit project development (NBS, RE, Waste)</li>
              </ul>
              <p className="contact-frame7__mini">Visit our LinkedIn Profile</p>
              <a className="contact-frame7__profile-link" href={contact.linkedin} target="_blank" rel="noreferrer">
                Nithyanandam Yuvaraj Dinesh Babu
              </a>
            </div>
            <div className="contact-frame7__confidential">{footerConfidential}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
