import { Clock, Lock, Bell, TrendingUp, Play, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'
import './FocusLikePro.css'

const FocusLikePro = () => {
  const [time, setTime] = useState(45 * 60)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return
    const timer = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [isRunning])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const features = [
    { icon: Clock, title: 'Focus Sessions', desc: 'Dedicated deep work time' },
    { icon: Lock, title: 'One-Task Mode', desc: 'Single focus, zero distractions' },
    { icon: Bell, title: 'Smart Reminders', desc: 'Gentle nudges, not noise' },
    { icon: TrendingUp, title: 'Progress Awareness', desc: 'Track your flow state' },
  ]

  const progress = ((45 * 60 - time) / (45 * 60)) * 100

  return (
    <section className="focus-pro">
      <div className="focus-pro__container">
        <div className="focus-pro__grid">
          {/* Visual */}
          <div className="focus-pro__visual">
            <div className="focus-pro__timer-card">
              <div className="focus-pro__timer-header">
                <span className="focus-pro__timer-label">Deep Focus Mode</span>
                <div className="focus-pro__timer-status">
                  <span className="focus-pro__timer-dot"></span>
                  Active
                </div>
              </div>

              <div className="focus-pro__timer-display">
                <svg className="focus-pro__timer-ring" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="url(#timerGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={565}
                    strokeDashoffset={565 - (565 * progress) / 100}
                    transform="rotate(-90 100 100)"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                  />
                  <defs>
                    <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4D5DFB" />
                      <stop offset="100%" stopColor="#08C8F6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="focus-pro__timer-content">
                  <span className="focus-pro__timer-time">{formatTime(time)}</span>
                  <span className="focus-pro__timer-task">Quarterly Report</span>
                </div>
              </div>

              <div className="focus-pro__timer-controls">
                <button 
                  className={`focus-pro__timer-btn ${!isRunning ? 'focus-pro__timer-btn--play' : ''}`}
                  onClick={() => setIsRunning(!isRunning)}
                >
                  {isRunning ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>

              <div className="focus-pro__timer-info">
                <div className="focus-pro__timer-stat">
                  <span className="focus-pro__timer-stat-value">87%</span>
                  <span className="focus-pro__timer-stat-label">Focus Score</span>
                </div>
                <div className="focus-pro__timer-stat">
                  <span className="focus-pro__timer-stat-value">0</span>
                  <span className="focus-pro__timer-stat-label">Interruptions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="focus-pro__content">
            <span className="focus-pro__tag">Sell deep focus, not just tasks</span>
            <h2 className="focus-pro__title">
              Focus Like <span>PRO</span>
            </h2>
            <p className="focus-pro__desc">
              Set focus on a task — Feel PRO protects your attention and helps you 
              achieve flow state without distractions.
            </p>

            <div className="focus-pro__features">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="focus-pro__feature">
                    <div className="focus-pro__feature-icon">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusLikePro
