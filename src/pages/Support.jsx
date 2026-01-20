import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, HelpCircle, MessageSquare, Clock, ChevronDown, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const categoryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing' },
    { value: 'feature', label: 'Feature Request' },
  ]

  const [categoryOpen, setCategoryOpen] = useState(false)
  const categoryRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (!categoryRef.current) return
      if (!categoryRef.current.contains(e.target)) {
        setCategoryOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const setCategory = (value) => {
    setFormData((prev) => ({ ...prev, category: value }))
    setCategoryOpen(false)
  }

  const activeCategoryLabel =
    categoryOptions.find((o) => o.value === formData.category)?.label || 'Select category'

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
            <span className="page__tag">Support</span>
            <h1>How can we help?</h1>
            <p>Our support team is here to assist you with any questions or issues.</p>
          </motion.div>

          {/* Quick Help Cards */}
          <motion.div 
            className="support__cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="support__card">
              <HelpCircle size={24} />
              <h3>FAQ</h3>
              <p>Find answers to common questions</p>
            </div>
            <div className="support__card">
              <MessageSquare size={24} />
              <h3>Live Chat</h3>
              <p>Chat with our support team</p>
            </div>
            <div className="support__card">
              <Clock size={24} />
              <h3>Response Time</h3>
              <p>Usually within 24 hours</p>
            </div>
          </motion.div>

          {/* Support Form */}
          <motion.div 
            className="page__form-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="page__success">
                <div className="page__success-icon">✓</div>
                <h2>Request Submitted!</h2>
                <p>We've received your support request and will get back to you within 24 hours.</p>
                <Link to="/" className="page__btn">Back to Home</Link>
              </div>
            ) : (
              <form className="page__form" onSubmit={handleSubmit}>
                <h2>Submit a Support Request</h2>
                
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

                <div className="page__form-row">
                  <div className="page__form-group">
                    <label>Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your issue"
                      required 
                    />
                  </div>
                  <div className="page__form-group">
                    <label>Category</label>
                    <div className="page__select" ref={categoryRef}>
                      <button
                        type="button"
                        className="page__select-trigger"
                        onClick={() => setCategoryOpen((v) => !v)}
                        aria-haspopup="listbox"
                        aria-expanded={categoryOpen}
                      >
                        <span className="page__select-value">{activeCategoryLabel}</span>
                        <ChevronDown size={18} className={`page__select-icon ${categoryOpen ? 'page__select-icon--open' : ''}`} />
                      </button>

                      {categoryOpen && (
                        <div className="page__select-menu" role="listbox">
                          {categoryOptions.map((opt) => {
                            const isActive = opt.value === formData.category
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                className={`page__select-option ${isActive ? 'page__select-option--active' : ''}`}
                                role="option"
                                aria-selected={isActive}
                                onClick={() => setCategory(opt.value)}
                              >
                                <span>{opt.label}</span>
                                {isActive && <Check size={16} />}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="page__form-group">
                  <label>Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your issue in detail..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="page__btn">
                  <Send size={18} />
                  Submit Request
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

export default Support
