import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Mic, Type, Image, Upload } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('voice')

  const tabs = [
    { id: 'voice', label: 'Voice', icon: Mic },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'image', label: 'Image', icon: Image },
  ]

  const tabContent = {
    voice: {
      label: 'Voice Task Created',
      text: '"Prepare quarterly report"',
      description: 'Speak naturally, AI understands',
    },
    text: {
      label: 'Text Task Created',
      text: '"Design new landing page"',
      description: 'Type your task, AI structures it',
    },
    image: {
      label: 'Image Task Created',
      text: '"Whiteboard notes captured"',
      description: 'Upload image, AI extracts tasks',
    },
  }

  return (
    <section className="hero" id="hero">
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
          Your personal AI agent that plans, prioritizes, and executes tasks 
          autonomously — so you can focus on what matters.
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
              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="hero__tab-content"
                >
                  {/* Task Card */}
                  <div className={`hero__visual-task hero__visual-task--${activeTab}`}>
                    <div className="hero__visual-task-icon">
                      {activeTab === 'voice' && <Mic size={16} />}
                      {activeTab === 'text' && <Type size={16} />}
                      {activeTab === 'image' && <Image size={16} />}
                    </div>
                    <div className="hero__visual-task-info">
                      <span className="hero__visual-task-label">{tabContent[activeTab].label}</span>
                      <span className="hero__visual-task-text">{tabContent[activeTab].text}</span>
                    </div>
                    <div className="hero__visual-task-badge">AI</div>
                  </div>

                  {/* Dynamic Visual based on tab */}
                  <div className="hero__visual-demo">
                    {activeTab === 'voice' && (
                      <div className="hero__visual-voice">
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
                        <span className="hero__visual-demo-text">{tabContent[activeTab].description}</span>
                      </div>
                    )}

                    {activeTab === 'text' && (
                      <div className="hero__visual-text">
                        <div className="hero__visual-text-input">
                          <motion.span
                            className="hero__visual-typing"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          >
                            Design new landing page for Q2...
                          </motion.span>
                          <motion.span 
                            className="hero__visual-cursor"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        </div>
                        <span className="hero__visual-demo-text">{tabContent[activeTab].description}</span>
                      </div>
                    )}

                    {activeTab === 'image' && (
                      <div className="hero__visual-image">
                        <div className="hero__visual-upload">
                          <div className="hero__visual-upload-icon">
                            <Upload size={24} />
                          </div>
                          <div className="hero__visual-upload-preview">
                            <div className="hero__visual-upload-img">
                              <svg viewBox="0 0 60 40" fill="none">
                                <rect x="2" y="2" width="56" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                                <rect x="8" y="8" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
                                <rect x="8" y="14" width="44" height="2" rx="1" fill="currentColor" opacity="0.3" />
                                <rect x="8" y="19" width="38" height="2" rx="1" fill="currentColor" opacity="0.3" />
                                <rect x="8" y="24" width="30" height="2" rx="1" fill="currentColor" opacity="0.3" />
                                <circle cx="45" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                              </svg>
                            </div>
                            <motion.div 
                              className="hero__visual-scan-line"
                              animate={{ top: ['0%', '100%', '0%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                          </div>
                        </div>
                        <span className="hero__visual-demo-text">{tabContent[activeTab].description}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
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

              {/* Tabs at Bottom */}
              <div className="hero__tabs">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.id}
                      className={`hero__tab ${activeTab === tab.id ? 'hero__tab--active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <IconComponent size={16} />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
