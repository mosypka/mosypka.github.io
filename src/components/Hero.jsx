import { useEffect, useState } from 'react'
import { useLang } from '../LanguageContext'
import { t } from '../translations'
import './Hero.css'

const ROLES = [
  'Fullstack Developer',
  'React & Node.js',
  'Python & Flask',
  'Linux & Open Source',
]

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIndex]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="hero">
      <div className="container hero-inner fade-up">
        <p className="hero-prompt">
          <span className="prompt-user">mosypka</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">dev</span>
          <span className="prompt-sep">:~$</span>
          <span className="prompt-cmd"> whoami</span>
        </p>
        <h1 className="hero-name">Matthias Osypka</h1>
        <p className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor" aria-hidden="true">▋</span>
        </p>
        <p className="hero-bio">{tx.hero_bio}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">{tx.hero_btn_projects}</a>
          <a href="#about" className="btn btn-ghost">{tx.nav_about}</a>
          <a href="#contact" className="btn btn-ghost">{tx.hero_btn_contact}</a>
          <a href="https://github.com/mosypka" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
