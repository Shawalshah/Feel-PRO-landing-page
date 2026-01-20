import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#system-flow' },
    { label: 'For Who', href: '#who-is-it-for' },
    { label: 'Privacy', href: '#privacy' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <motion.header 
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container">
        {/* Logo */}
        <a href="#" className="header__logo" onClick={closeMenu}>
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4D5DFB" />
                  <stop offset="100%" stopColor="#08C8F6" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
              <text x="20" y="26" fontFamily="Manrope" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">F</text>
            </svg>
          </div>
          <span className="header__logo-text">Feel <span>PRO</span></span>
        </a>

        {/* Navigation */}
        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="header__nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile CTA - Only visible in mobile menu */}
          <a href="#cta-card" className="header__mobile-cta" onClick={closeMenu}>
            Get Started
            <ArrowRight size={18} />
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="header__actions">
          <a href="#cta-card" className="btn btn--primary header__cta">
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`header__mobile-toggle ${mobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  )
}

export default Header
