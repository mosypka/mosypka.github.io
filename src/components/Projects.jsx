import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './Projects.css'

const PROJECT_META = [
  { slug: 'benchflow', tech: ['Python', 'Flask', 'SQLite', 'REST API', 'Gunicorn', 'Apache'], github: 'https://github.com/mosypka/benchflow', demo: null },
  { slug: 'peopledb', tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Canvas API'], github: 'https://github.com/mosypka/PeopleDB', demo: null },
  { slug: 'fan-monitor', tech: ['Python', 'CustomTkinter', 'matplotlib', 'lm-sensors', 'nvidia-smi'], github: 'https://github.com/Matzorator/fan_monitor', demo: null },
]

export default function Projects() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">{tx.projects_label}</p>
        <h2>{tx.projects_heading}</h2>
        <div className="projects-grid">
          {tx.projects.map((p, i) => {
            const meta = PROJECT_META[i]
            return (
              <article key={meta.slug} className="project-card">
                <div className="card-top">
                  <h3 className="card-name">{p.name}</h3>
                  <p className="card-tagline">{p.tagline}</p>
                  <p className="card-desc">{p.description}</p>
                </div>
                <div className="card-bottom">
                  <ul className="tech-list">
                    {meta.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="card-links">
                    {meta.github && <a href={meta.github} target="_blank" rel="noopener noreferrer">{tx.projects_github}</a>}
                    {meta.demo && <a href={meta.demo} target="_blank" rel="noopener noreferrer">{tx.projects_demo}</a>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
