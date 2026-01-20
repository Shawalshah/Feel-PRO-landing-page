import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, Target, CalendarCheck, FileText } from 'lucide-react'
import './ExperienceInterface.css'

const ExperienceInterface = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { 
      id: 'home',
      icon: Home,
      label: 'Home',
      image: '/assets/Home Page.png'
    },
    { 
      id: 'work',
      icon: Briefcase,
      label: 'Work',
      image: '/assets/Work Like PRO.png'
    },
    { 
      id: 'focus',
      icon: Target,
      label: 'Focus',
      image: '/assets/Focus Like PRO.png'
    },
    { 
      id: 'plan',
      icon: CalendarCheck,
      label: 'Plan',
      image: '/assets/Plan Like PRO.png'
    },
    { 
      id: 'report',
      icon: FileText,
      label: 'Report',
      image: '/assets/Report  Like PRO.png'
    },
  ]

  return (
    <section className="exp-interface" id="app-interface">
      <div className="exp-interface__container">
        {/* Header */}
        <motion.div 
          className="exp-interface__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="exp-interface__tag">App Preview</span>
          <h2 className="exp-interface__title">
            Experience the <span>Interface</span>
          </h2>
          <p className="exp-interface__desc">
            Explore our beautifully crafted screens designed for peak productivity
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="exp-interface__content">
          {/* Tabs */}
          <div className="exp-interface__tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`exp-interface__tab ${index === activeTab ? 'exp-interface__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Screen Display */}
          <motion.div 
            className="exp-interface__display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="exp-interface__image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={tabs[activeTab].id}
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  className="exp-interface__image"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceInterface
