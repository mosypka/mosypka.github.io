import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './Contact.css'

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="contact">
      <div className="container">
        <hr className="divider" /><br />
        <p className="section-label">{tx.contact_label}</p>
        <h2>{tx.contact_heading}</h2>
        <p className="contact-text">{tx.contact_text}</p>
        <div className="contact-links">
          <a href="https://github.com/mosypka" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/mosypka ↗</span>
          </a>
          <a href="mailto:" className="contact-item">
            <span className="contact-label">E-Mail</span>
            <span className="contact-value">→ eintragen</span>
          </a>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">{tx.contact_location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
