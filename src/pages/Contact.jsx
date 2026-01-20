import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--with-header">
        <div className="page__container">
          <motion.div 
            className="page__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="page__tag">Contact</span>
            <h1>Get in Touch</h1>
            <p>Have a question or want to work together? We'd love to hear from you.</p>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div 
            className="contact__cards contact__cards--single"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact__card">
              <Mail size={24} />
              <h3>Email</h3>
              <p>hello@feelpro.app</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="page__form-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="page__success">
                <div className="page__success-icon">✓</div>
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <Link to="/" className="page__btn">Back to Home</Link>
              </div>
            ) : (
              <form className="page__form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                
                <div className="page__form-row">
                  <div className="page__form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                  <div className="page__form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                </div>

                <div className="page__form-group">
                  <label>Company (Optional)</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="page__form-group">
                  <label>Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="page__btn">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Back to Home */}
          <div className="page__back">
            <Link to="/" className="page__btn page__btn--outline">Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
