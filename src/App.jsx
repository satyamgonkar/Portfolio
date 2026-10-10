import { useState } from 'react'
import useTheme from './hooks/useTheme'
import useScroll from './hooks/useScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Floating, CookieBanner } from './components/Floating'
import Modal from './components/Modal'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const { y, pct } = useScroll()
  const [modalData, setModalData] = useState(null)

  return (
    <>
      <a className="skip-to-content" href="#top">
        Skip to main content
      </a>

      {/* Progress Bar */}
      <div
        id="scroll-progress-bar"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${pct}%` }}
      />

      <Header theme={theme} onToggle={toggleTheme} scrolled={y > 30} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects openModal={setModalData} />
        <Skills />
        <Journey />
        <Faq />
        <Contact openModal={setModalData} />
      </main>

      <Footer />
      <Floating showTop={y > 500} />
      <CookieBanner />
      <Modal data={modalData} onClose={() => setModalData(null)} />
    </>
  )
}
