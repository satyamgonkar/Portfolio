import { useState } from 'react'
import { projects } from '../data/content'

export default function Projects({ openModal }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ds', label: 'Data Science & AI' },
    { key: 'web', label: 'Web Applications' },
    { key: 'freelance', label: 'Freelance & Client' },
    { key: 'cpp', label: 'C/C++ & Games' },
    { key: 'iot', label: 'IoT & Hardware' }
  ]

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const query = searchTerm.toLowerCase().trim()
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })

  return (
    <section className="section-padding" id="projects">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// Portfolio Showcase</span>
          <h2 className="section-title">
            Projects I've <span className="gradient-text">Built & Loved.</span>
          </h2>
          <p className="section-desc">
            Explore data science models, full-stack applications, freelance websites, and C/C++ game engines.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="projects-control-bar">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, Python, React, NLP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <div className="empty-projects">
              <span className="empty-icon">📂</span>
              <h3>No projects match your filter</h3>
              <p>Try clearing your search terms or picking another category.</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('all')
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-banner">
                  <div className="proj-icon">{project.icon}</div>
                  <span className="proj-badge">{project.badge}</span>
                  <span className={`status-indicator ${project.statusClass}`}>
                    ● {project.status}
                  </span>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <button
                      className="btn-details"
                      onClick={() =>
                        openModal({
                          title: project.name,
                          body: project.description,
                          highlights: project.highlights,
                          tags: project.tags,
                          year: project.year,
                          status: project.status,
                          github: project.github
                        })
                      }
                    >
                      Read Full Details →
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
