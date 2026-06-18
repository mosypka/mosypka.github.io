import './Skills.css'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'TanStack Query', 'React Router'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Flask', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Podman', 'Linux (Fedora)', 'Apache'],
  },
  {
    category: 'Frühere Erfahrung',
    items: ['ColdFusion / CFML', 'ABAP Objects', 'ODBC / SQL', 'Hardware Repair & Diagnostics'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <hr className="divider" />
        <br />
        <p className="section-label">Skills</p>
        <h2>Technologien</h2>

        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
