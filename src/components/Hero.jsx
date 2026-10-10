import ParticleCanvas from './ParticleCanvas'
import Typewriter from './Typewriter'
import { personalInfo, stats, typewriterWords } from '../data/content'

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <ParticleCanvas />
      
      <div className="wrap hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot" />
            <span className="badge-text">{personalInfo.availability}</span>
          </div>

          <h1 className="hero-headline">
            <span className="greeting">Hi, I'm</span>
            <span className="name-gradient">{personalInfo.name}</span>
            <span className="role-line">
              I'm a <Typewriter words={typewriterWords} />
            </span>
          </h1>

          <p className="hero-description">{personalInfo.bio}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View Work <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-stats-card">
          <div className="stats-header">
            <span className="code-tag">// Quick Stats</span>
            <h3>Key Highlights</h3>
          </div>

          <div className="stats-grid">
            {stats.map((st, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{st.count}</span>
                <span className="stat-label">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="featured-banner">
            <div className="banner-icon">🏆</div>
            <div className="banner-text">
              <strong>TechnoVision 2026 Winner</strong>
              <small>1st Prize in State-Level Project Expo</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
