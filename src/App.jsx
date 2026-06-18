import './index.css'
import { LanguageProvider, useLang } from './LanguageContext'
import { t } from './translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function AppContent() {
  const { lang } = useLang()
  const tx = t[lang]
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>{tx.footer}</p>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
