import { useEffect } from 'react'

export default function Modal({ data, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (data) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, onClose])

  if (!data) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <div>
            {data.year && <span className="modal-badge">{data.year}</span>}
            <h3 id="modal-title">{data.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="modal-body">
          {data.body && <p className="modal-description">{data.body}</p>}

          {data.highlights && data.highlights.length > 0 && (
            <div className="modal-highlights">
              <h4>Key Highlights & Architecture</h4>
              <ul>
                {data.highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">⚡</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.tags && data.tags.length > 0 && (
            <div className="modal-tags">
              <h4>Technologies & Libraries</h4>
              <div className="modal-tags-row">
                {data.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Repository ↗
            </a>
          )}
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
