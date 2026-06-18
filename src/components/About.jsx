import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './About.css'

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="about">
      <div className="container">
        <hr className="divider" />
        <br />
        <p className="section-label">{tx.about_label}</p>
        <h2>{tx.about_heading}</h2>

        <p className="about-intro">{tx.about_intro}</p>
        <p className="about-available">{tx.about_available}</p>

        <div className="timeline">
          {tx.about_timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
