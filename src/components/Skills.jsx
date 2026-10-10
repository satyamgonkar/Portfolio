import { useEffect, useRef } from 'react'
import { skillsData } from '../data/content'

export default function Skills() {
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-bar-fill')
            fills.forEach((fill) => {
              const width = fill.getAttribute('data-width')
              fill.style.width = `${width}%`
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (barsRef.current) {
      observer.observe(barsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding section-alt" id="skills">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// Technical Skills</span>
          <h2 className="section-title">
            My Technical <span className="gradient-text">Arsenal.</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of programming languages, machine learning packages, web technologies, and computer science concepts.
          </p>
        </div>

        {/* Top Two Column: Progress Bars & Core Concepts */}
        <div className="skills-two-col">
          {/* Skill Bars */}
          <div className="skill-bars-card" ref={barsRef}>
            <span className="code-tag">// Proficiency Overview</span>
            <h3>Core Proficiency</h3>

            <div className="bars-list">
              {skillsData.bars.map((bar, idx) => (
                <div key={idx} className="bar-item">
                  <div className="bar-header">
                    <span className="bar-name">
                      <span className="bar-icon">{bar.icon}</span> {bar.name}
                    </span>
                    <span className="bar-percent">{bar.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="skill-bar-fill" data-width={bar.level} style={{ width: '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concepts Grid */}
          <div className="concepts-card">
            <span className="code-tag">// Fundamentals</span>
            <h3>Computer Science Concepts</h3>

            <div className="concepts-grid">
              {skillsData.concepts.map((concept, idx) => (
                <div key={idx} className="concept-item">
                  <span className="concept-icon">{concept.icon}</span>
                  <div className="concept-body">
                    <strong>{concept.title}</strong>
                    <small>{concept.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="skill-categories-container">
          <h3 className="subheading-title">Tools & Ecosystem</h3>
          <div className="categories-grid">
            {skillsData.categories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="cat-title-row">
                  <span className="cat-icon">{cat.icon}</span>
                  <h4>{cat.title}</h4>
                </div>
                <div className="chips-wrapper">
                  {cat.items.map((item, iIdx) => (
                    <span key={iIdx} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning Cards */}
        <div className="learning-section">
          <h3 className="subheading-title">Currently Leveling Up</h3>
          <div className="learning-grid">
            {skillsData.learning.map((item, idx) => (
              <div key={idx} className="learning-card">
                <span className="learning-badge">{item.status}</span>
                <span className="learning-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
