import './Projects.css'

const PROJECTS = [
  {
    name: 'BenchFlow',
    slug: 'benchflow',
    tagline: 'Benchmark & Workflow Management',
    description:
      'Flask/SQLite web application für Gerätebenchmarks mit PDF-Export, QR-Code-Generierung und Gmail API Integration. REST API für eine SwiftUI Companion App.',
    tech: ['Python', 'Flask', 'SQLite', 'REST API', 'Gunicorn', 'Apache'],
    github: 'https://github.com/mosypka/benchflow',
    demo: null,
  },
  {
    name: 'PeopleDB',
    slug: 'peopledb',
    tagline: 'Personalverwaltung — Pure Vanilla JS',
    description:
      'CRUD-Anwendung zur Mitarbeiterverwaltung, komplett ohne Frameworks. Nutzt LocalStorage, FileReader, Canvas und Blob APIs für clientseitige Bild­verarbeitung.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Canvas API'],
    github: 'https://github.com/mosypka/PeopleDB',
    demo: null,
  },
  {
    name: 'Fan Monitor',
    slug: 'fan-monitor',
    tagline: 'CPU/GPU Temperature & Fan Control',
    description:
      'Python Desktop-Tool zur Echtzeit-Überwachung von CPU/GPU-Temperaturen und Lüfterdrehzahlen via lm-sensors und nvidia-smi. CustomTkinter UI mit matplotlib-Graphen.',
    tech: ['Python', 'CustomTkinter', 'matplotlib', 'lm-sensors', 'nvidia-smi'],
    github: 'https://github.com/mosypka/fan_monitor',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projekte</p>
        <h2>Ausgewählte Arbeiten</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.slug} className="project-card">
              <div className="card-top">
                <h3 className="card-name">{p.name}</h3>
                <p className="card-tagline">{p.tagline}</p>
                <p className="card-desc">{p.description}</p>
              </div>

              <div className="card-bottom">
                <ul className="tech-list">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="card-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
