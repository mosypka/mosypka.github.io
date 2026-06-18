import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const tx = t[lang]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">mosypka</a>
        <div className="nav-links">
          <a href="#projects">{tx.nav_projects}</a>
          <a href="#about">{tx.nav_about}</a>
          <a href="#contact">{tx.nav_contact}</a>
          <button className="lang-toggle" onClick={toggle}>
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </div>
    </nav>
  )
}
