import { experienceData } from '../data/content'

export default function Experience() {
  return (
    <section className="section-padding section-alt" id="experience">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// Real World Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">Made An Impact.</span>
          </h2>
          <p className="section-desc">
            From delivering freelance client projects to winning state-level project competitions — practical experience beyond the classroom.
          </p>
        </div>

        {/* Experience Highlights / Case Studies */}
        <div className="experience-cards-grid">
          {experienceData.highlights.map((item, idx) => (
            <div
              key={idx}
              className="experience-card"
              style={{ '--accent-border': item.accentColor }}
            >
              <div className="exp-card-header">
                <span className="exp-badge">{item.type}</span>
                <div className="exp-icon-box">{item.icon}</div>
              </div>

              <h3 className="exp-card-title">{item.title}</h3>
              <p className="exp-card-subtitle">{item.subtitle}</p>
              <p className="exp-card-desc">{item.description}</p>

              <div className="deliverables-container">
                <h4>Deliverables & Outcomes</h4>
                <div className="deliverables-grid">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="del-card">
                      <span className="del-icon">{del.icon}</span>
                      <div>
                        <strong>{del.label}</strong>
                        <small>{del.detail}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="exp-tags-row">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitions & Achievements Showcase */}
        <div className="achievements-section">
          <div className="achievements-header">
            <span className="code-tag">// Awards & Competition Wins</span>
            <h3>Honors & Recognition</h3>
          </div>

          <div className="achievements-grid">
            {experienceData.achievements.map((ach, idx) => (
              <div key={idx} className="achievement-card">
                <div className="ach-badge-tag">{ach.badge}</div>
                <div className="ach-title">{ach.title}</div>
                <p className="ach-desc">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Deep Dive Strip */}
        <div className="case-deep-dive">
          <div className="case-header">
            <h3>Freelance Deep Dive: Mumbai Civil Construction Landing Page</h3>
            <p>A step-by-step breakdown of my first commercial paid project via Internshala.</p>
          </div>

          <div className="case-steps-grid">
            <div className="case-step">
              <span className="step-num">01</span>
              <h4>The Client</h4>
              <p>A civil construction company operating in Mumbai, Maharashtra requiring a digital footprint.</p>
            </div>
            <div className="case-step">
              <span className="step-num">02</span>
              <h4>The Challenge</h4>
              <p>Design a responsive web page and brand vector logo from scratch with strict turnaround time.</p>
            </div>
            <div className="case-step">
              <span className="step-num">03</span>
              <h4>Deliverables</h4>
              <p>Mobile-optimized HTML/CSS landing page, project showcases, lead forms, and corporate vector logo.</p>
            </div>
            <div className="case-step">
              <span className="step-num">04</span>
              <h4>Outcome</h4>
              <p>100% client satisfaction, completed on schedule, earning first commercial development revenue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
