import { personalInfo, certifications } from '../data/content'

export default function About() {
  const interests = [
    { icon: '📊', title: 'Data Science & ML', desc: 'Predictive models, NLP sentiment classification, & data visualization.' },
    { icon: '💻', title: 'Full Stack Web Dev', desc: 'Building responsive, high-performance web applications.' },
    { icon: '🧠', title: 'DSA & Algorithms', desc: 'Solving logic challenges with clean algorithmic complexity.' },
    { icon: '🤝', title: 'Freelancing & Client Work', desc: 'Collaborating with real clients to deliver high-quality code.' },
    { icon: '🏠', title: 'IoT & Microcontrollers', desc: 'Connecting web platforms to hardware sensors and microcontrollers.' },
    { icon: '📖', title: 'Continuous Growth', desc: 'Participating in hackathons, ideathons, and technical expos.' }
  ]

  return (
    <section className="section-padding" id="about">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// About Me</span>
          <h2 className="section-title">
            The Story Behind <span className="gradient-text">The Code.</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left Profile Card */}
          <div className="profile-card">
            <div className="avatar-wrap">
              <div className="avatar-circle">
                <span>{personalInfo.shortName}</span>
              </div>
              <div className="avatar-ring" />
            </div>

            <h3 className="profile-name">{personalInfo.name}</h3>
            <p className="profile-title">{personalInfo.degree}</p>

            <ul className="profile-details-list">
              <li>
                <span className="icon">🎓</span>
                <span>{personalInfo.college}</span>
              </li>
              <li>
                <span className="icon">📍</span>
                <span>{personalInfo.location}</span>
              </li>
              <li>
                <span className="icon">📧</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <span className="icon">🔗</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  in/satyamgonkar
                </a>
              </li>
            </ul>

            <div className="profile-cta">
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary btn-full">
                Email Me
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-full"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content">
            <div className="about-text-card">
              <h3>Hello, World! 👋</h3>
              <p>
                I'm <strong>{personalInfo.name}</strong>, a passionate Computer Science student at{' '}
                <strong>Bansal College of Engineering</strong>, Bhopal. Currently in Semester 5, I specialize in combining data science techniques with modern web application frameworks to create software that solves real problems.
              </p>
              <p>
                My journey began with <strong>C and C++</strong>, where I built fundamental CLI tools and games like Snake and Tic-Tac-Toe. It quickly expanded into <strong>Python, Data Science, and Machine Learning</strong> libraries like Pandas, NumPy, Scikit-learn, and NLTK — resulting in projects like <em>Sentify</em> (sentiment analysis) and <em>MusafirHub</em> (travel booking analytics).
              </p>
              <p>
                Beyond academics, I have hands-on client experience delivering web applications and branding for a Mumbai-based civil construction company, and I actively compete in state-level technical exhibitions and hackathons.
              </p>
            </div>

            {/* Certifications strip */}
            <div className="certifications-block">
              <h4>Certifications & Credentials</h4>
              <div className="cert-chips">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-chip">
                    <span className="cert-badge">✓</span>
                    <div>
                      <strong>{cert.name}</strong>
                      <small>{cert.issuer} ({cert.year})</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="interests-wrapper">
          <h3 className="subheading-title">Core Areas of Focus</h3>
          <div className="interests-grid">
            {interests.map((item, idx) => (
              <div key={idx} className="interest-card">
                <span className="interest-icon">{item.icon}</span>
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
