import { motion } from 'framer-motion'
import { Mic, FileText, CheckSquare, Share2, Mail, MessageCircle } from 'lucide-react'
import './ReportLikePro.css'

const ReportLikePro = () => {
  const features = [
    { icon: Mic, title: 'Voice → Report', desc: 'Speak your thoughts, get structured reports' },
    { icon: CheckSquare, title: 'Auto Task Extraction', desc: 'Actions become tasks automatically' },
    { icon: Share2, title: 'Easy Sharing', desc: 'Email or WhatsApp in one click' },
    { icon: FileText, title: 'Professional Format', desc: 'Clean, ready-to-share documents' },
  ]

  return (
    <section className="report-pro section">
      <div className="report-pro__bg">
        <div className="report-pro__bg-gradient"></div>
      </div>

      <div className="container">
        <div className="report-pro__grid">
          {/* Content */}
          <motion.div
            className="report-pro__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag">Enterprise-grade Differentiation</span>
            <h2 className="report-pro__title">
              Report Like <span className="text-gradient">PRO</span>
            </h2>
            <p className="report-pro__desc">
              Speak your report. Feel PRO structures it, edits it, and turns actions into tasks 
              — all in seconds.
            </p>

            <div className="report-pro__features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="report-pro__feature"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="report-pro__feature-icon">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="report-pro__visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="report-pro__document">
              <div className="report-pro__document-header">
                <div className="report-pro__document-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="report-pro__document-title">Weekly Progress Report</span>
              </div>

              <div className="report-pro__document-content">
                {/* Voice Transcript */}
                <div className="report-pro__transcript">
                  <div className="report-pro__transcript-header">
                    <Mic size={14} />
                    <span>Voice Transcript</span>
                  </div>
                  <p className="report-pro__transcript-text">
                    "This week I completed the dashboard redesign, 
                    had 3 client meetings, and need to follow up with 
                    Sarah about the proposal..."
                  </p>
                </div>

                {/* Arrow */}
                <div className="report-pro__arrow">
                  <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                    <path d="M12 0V32M12 32L4 24M12 32L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Generated Report */}
                <div className="report-pro__generated">
                  <div className="report-pro__section">
                    <h4>Completed This Week</h4>
                    <ul>
                      <li>✓ Dashboard redesign finalized</li>
                      <li>✓ 3 client meetings conducted</li>
                    </ul>
                  </div>

                  <div className="report-pro__section">
                    <h4>Tasks Extracted</h4>
                    <div className="report-pro__task">
                      <CheckSquare size={14} />
                      <span>Follow up with Sarah on proposal</span>
                      <span className="report-pro__task-badge">New</span>
                    </div>
                  </div>
                </div>

                {/* Share Options */}
                <div className="report-pro__share">
                  <button className="report-pro__share-btn">
                    <Mail size={16} />
                    Email
                  </button>
                  <button className="report-pro__share-btn report-pro__share-btn--whatsapp">
                    <MessageCircle size={16} />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ReportLikePro
