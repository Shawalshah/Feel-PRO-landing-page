import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Roadmap', 'Changelog']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'Community', 'API']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookies']
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4D5DFB" />
                      <stop offset="100%" stopColor="#08C8F6" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" />
                  <text x="20" y="26" fontFamily="Manrope" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">F</text>
                </svg>
              </div>
              <span>Feel <span>PRO</span></span>
            </a>
            <p className="footer__mission">
              Empowering professionals to achieve more with AI-driven productivity.
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer__column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <Mail size={18} />
          <a href="mailto:hello@feelpro.app">hello@feelpro.app</a>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Feel PRO. All rights reserved.</p>
          <p>Built with 💪 for high-performers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
