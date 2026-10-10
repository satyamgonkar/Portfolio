import { useState } from 'react'
import { personalInfo } from '../data/content'

export default function Header({ theme, onToggle, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a href="#top" className="logo">
          <span className="logo-badge">{personalInfo.shortName}</span>
          <span className="logo-dot">.</span>
        </a>

        <nav className={`links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="ibtn"
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="burger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? 'line line1 open' : 'line line1'} />
            <span className={menuOpen ? 'line line2 open' : 'line line2'} />
            <span className={menuOpen ? 'line line3 open' : 'line line3'} />
          </button>
        </div>
      </div>
    </header>
  )
}
