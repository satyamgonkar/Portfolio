import { personalInfo } from '../data/content'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="wrap footer-container">
        <div className="footer-left">
          <a href="#top" className="footer-logo">
            {personalInfo.shortName}<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} {personalInfo.name} — Bhopal, M.P.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-right">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
