import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

const PageHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'How it Works', href: '/#system-flow' },
    { label: 'Interface', href: '/#app-interface' },
    { label: 'For Who', href: '/#who-is-it-for' },
    { label: 'Privacy', href: '/#privacy' },
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
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img 
            src="/assets/Logo Feel Pro.svg" 
            alt="Feel PRO" 
            className="header__logo-img"
          />
        </Link>

        {/* Navigation */}
        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href} 
              className="header__nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <Link to="/#cta-card" className="header__mobile-cta" onClick={closeMenu}>
            Get Started
            <ArrowRight size={18} />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="header__actions">
          <Link to="/#cta-card" className="btn btn--primary header__cta" onClick={closeMenu}>
            Get Started
            <ArrowRight size={16} />
          </Link>
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

export default PageHeader
