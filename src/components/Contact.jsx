import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <hr className="divider" />
        <br />
        <p className="section-label">Kontakt</p>
        <h2>Verfügbar ab August 2026</h2>

        <p className="contact-text">
          Ich suche eine Stelle als Fullstack- oder Webentwickler im Raum Aachen / Geilenkirchen
          oder remote. Offen für Festanstellung oder Einstiegspositionen mit Wachstumsperspektive.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/mosypka"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/mosypka ↗</span>
          </a>

          <a href="mailto:" className="contact-item" id="contact-email">
            <span className="contact-label">E-Mail</span>
            <span className="contact-value">mosypka@tutamail.com</span>
          </a>

          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Geilenkirchen, NRW</span>
          </div>
        </div>
      </div>
    </section>
  )
}
