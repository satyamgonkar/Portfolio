import { useState } from 'react'
import { personalInfo } from '../data/content'

export default function Contact({ openModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Internship Opportunity',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [phoneRevealed, setPhoneRevealed] = useState(false)
  const [copyEmailStatus, setCopyEmailStatus] = useState('Copy')
  const [submitting, setSubmitting] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopyEmailStatus('Copied! ✓')
      setTimeout(() => setCopyEmailStatus('Copy'), 2000)
    } catch {
      setCopyEmailStatus('Failed to copy')
      setTimeout(() => setCopyEmailStatus('Copy'), 2000)
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters in your message.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    // Simulate sending / opening mailto client
    setTimeout(() => {
      const subject = encodeURIComponent(`[${formData.topic}] Contact from ${formData.name.trim()}`)
      const body = encodeURIComponent(
        `${formData.message.trim()}\n\nSender: ${formData.name.trim()} (${formData.email.trim()})`
      )

      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

      setSubmitting(false)
      setSentSuccess(true)

      if (openModal) {
        openModal({
          title: 'Message Initiated! ✉️',
          body: `Your default email application has opened with your message pre-filled to ${personalInfo.email}. If it did not open, you can copy the email directly.`,
          status: 'Sent'
        })
      }
    }, 600)
  }

  return (
    <section className="section-padding" id="contact">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect.</span>
          </h2>
          <p className="section-desc">
            Whether you have an internship opportunity, a freelance project, or just want to chat about AI & Web Dev — my inbox is open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Panel */}
          <div className="contact-info-card">
            <h3>Say Hello 👋</h3>
            <p className="contact-intro">
              I'm based in Bhopal, Madhya Pradesh, ready to collaborate on innovative products or join forward-thinking engineering teams.
            </p>

            <div className="info-items">
              {/* Email Card */}
              <div className="info-item">
                <div className="item-icon">📧</div>
                <div className="item-body">
                  <span className="item-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="item-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button className="copy-btn" onClick={handleCopyEmail}>
                  {copyEmailStatus}
                </button>
              </div>

              {/* Phone Card */}
              <div className="info-item">
                <div className="item-icon">📱</div>
                <div className="item-body">
                  <span className="item-label">Phone</span>
                  <span className={`item-value ${!phoneRevealed ? 'blurred-text' : ''}`}>
                    {personalInfo.phone}
                  </span>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => setPhoneRevealed((prev) => !prev)}
                >
                  {phoneRevealed ? '🙈 Hide' : '👁 Reveal'}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="info-item clickable"
              >
                <div className="item-icon">🔗</div>
                <div className="item-body">
                  <span className="item-label">LinkedIn</span>
                  <span className="item-value">linkedin.com/in/satyamgonkar</span>
                </div>
                <span className="arrow-icon">↗</span>
              </a>

              {/* Location */}
              <div className="info-item">
                <div className="item-icon">📍</div>
                <div className="item-body">
                  <span className="item-label">Location</span>
                  <span className="item-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <span className="avail-dot" />
              <div>
                <strong>Available for Immediate Hire</strong>
                <p>Open for Internships, Freelance Work, and Project Collaborations.</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <p className="form-subtext">Directly email Satyam Gonkar</p>

            {sentSuccess ? (
              <div className="form-success-box">
                <span className="success-icon">✅</span>
                <h4>Message Ready to Send</h4>
                <p>
                  Your email client has been launched with your message pre-filled. You can also email{' '}
                  <strong>{personalInfo.email}</strong> directly.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSentSuccess(false)
                    setFormData({ name: '', email: '', topic: 'Internship Opportunity', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="topic">Topic / Subject</label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="select-input"
                  >
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Preparing Email...' : 'Send Message ✉️'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
