import { useState } from 'react'
import { faqs } from '../data/content'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding section-alt" id="faq">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-subtitle">// FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions.</span>
          </h2>
          <p className="section-desc">Quick answers about my availability, stack, and preferred projects.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? '240px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
