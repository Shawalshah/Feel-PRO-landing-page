import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Amalaxis', href: 'https://www.amalaxis.ai/', isExternal: true }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
        { name: 'Support', href: '/support', isRoute: true },
        { name: 'Contact', href: '/contact', isRoute: true }
      ]
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img 
                src="/assets/Logo Feel Pro.svg" 
                alt="Feel PRO" 
                className="footer__logo-img"
              />
            </a>
            <p className="footer__mission">
              Empowering professionals to achieve more with AI-driven productivity.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer__column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i}>
                    {link.isRoute ? (
                      <Link to={link.href}>{link.name}</Link>
                    ) : link.isExternal ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    ) : (
                      <a href={link.href}>{link.name}</a>
                    )}
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
