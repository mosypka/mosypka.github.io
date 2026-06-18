import './index.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer>
        <div className="container">
          <p>© 2026 Matthias Osypka · Built with Vite + React · Deployed via GitHub Pages</p>
        </div>
      </footer>
    </>
  )
}
