import { useState, useEffect } from 'react'

export function Floating({ showTop }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`floating-controls ${showTop ? 'visible' : ''}`}>
      <button
        className="fab-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}

export function CookieBanner() {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    const hasSeen = localStorage.getItem('portfolio_cookie_dismissed')
    if (!hasSeen) {
      setDismissed(false)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('portfolio_cookie_dismissed', 'true')
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Privacy notice">
      <p>
        Welcome! This portfolio website uses minimal local storage to remember your theme preference.
      </p>
      <button className="btn btn-primary btn-sm" onClick={handleDismiss}>
        Got It 👍
      </button>
    </div>
  )
}
