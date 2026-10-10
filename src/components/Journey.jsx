import { timeline } from '../data/content'

export default function Journey() {
  return (
    <section className="section-padding" id="journey">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// Educational Journey</span>
          <h2 className="section-title">
            Timeline & <span className="gradient-text">Milestones.</span>
          </h2>
          <p className="section-desc">
            A chronological look at my academic progression, competitive wins, and major projects.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
