import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './Skills.css'

const SKILLS = [
  { category_de: 'Frontend', category_en: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'TanStack Query', 'React Router'] },
  { category_de: 'Backend', category_en: 'Backend', items: ['Node.js', 'Express', 'Python', 'Flask', 'PostgreSQL', 'MongoDB', 'SQLite'] },
  { category_de: 'DevOps & Tools', category_en: 'DevOps & Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Podman', 'Linux (Fedora)', 'Nginx', 'Apache'] },
  { category_de: 'Frühere Erfahrung', category_en: 'Prior Experience', items: ['ColdFusion / CFML', 'ABAP Objects', 'ODBC / SQL', 'Hardware Repair & Diagnostics'] },
]

export default function Skills() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="skills">
      <div className="container">
        <hr className="divider" /><br />
        <p className="section-label">{tx.skills_label}</p>
        <h2>{tx.skills_heading}</h2>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.category_de} className="skill-group">
              <h3 className="skill-category">{lang === 'de' ? group.category_de : group.category_en}</h3>
              <ul className="skill-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
