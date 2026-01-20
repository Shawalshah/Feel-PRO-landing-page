import { motion } from 'framer-motion'
import { Sparkles, Mic } from 'lucide-react'
import './Hero.css'

const Hero = () => {

  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        

        {/* Floating lines */}
        <svg className="hero__lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,450 Q300,350 600,450 T1200,450"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#4D5DFB" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      {/* Content */}
      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} />
          AI-Powered Productivity
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Work. Focus. Plan. Report <br />
          <span className="text-gradient">— Like a Pro.</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your AI-powered productivity companion that thinks, speaks, 
          listens, and executes with you — daily.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#cta-card" className="btn btn--primary btn--large">
            Experience Feel PRO
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>

        {/* Hero Visual Card */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero__visual-card">
            <div className="hero__visual-header">
              <div className="hero__visual-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="hero__visual-title">Feel PRO Dashboard</span>
            </div>
            <div className="hero__visual-content">
              <div className="hero__visual-task">
                <div className="hero__visual-task-icon">
                  <Mic size={16} />
                </div>
                <div className="hero__visual-task-info">
                  <span className="hero__visual-task-label">Voice Task Created</span>
                  <span className="hero__visual-task-text">"Prepare quarterly report"</span>
                </div>
                <div className="hero__visual-task-badge">AI</div>
              </div>
              <div className="hero__visual-waveform">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="hero__visual-wave-bar"
                    animate={{
                      scaleY: [0.3, Math.random() * 0.7 + 0.3, 0.3],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
              <div className="hero__visual-stats">
                <div className="hero__visual-stat">
                  <span className="hero__visual-stat-number">12</span>
                  <span className="hero__visual-stat-label">Tasks Today</span>
                </div>
                <div className="hero__visual-stat">
                  <span className="hero__visual-stat-number">4h</span>
                  <span className="hero__visual-stat-label">Focus Time</span>
                </div>
                <div className="hero__visual-stat">
                  <span className="hero__visual-stat-number">92%</span>
                  <span className="hero__visual-stat-label">Productivity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
