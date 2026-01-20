import { Mic, MessageSquare, Lightbulb, Bell, User, Bot } from 'lucide-react'
import './AIAgent.css'

const AIAgent = () => {
  const features = [
    { icon: Mic, title: 'Voice Assistant', desc: 'Talk naturally' },
    { icon: MessageSquare, title: 'Smart Chat', desc: 'Plan, reflect, ask' },
    { icon: Lightbulb, title: 'Daily AI Tips', desc: 'Context-aware' },
    { icon: Bell, title: 'Intelligent Reminders', desc: 'Never miss a beat' },
  ]

  return (
    <section className="ai-agent" id="features">
      <div className="ai-agent__container">
        <div className="ai-agent__grid">
          {/* Left - Content */}
          <div className="ai-agent__content">
            <span className="ai-agent__tag">Central Intelligence</span>
            <h2 className="ai-agent__title">
              Your Personal AI<br />
              <span>Productivity Agent</span>
            </h2>
            
            <div className="ai-agent__features">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="ai-agent__feature">
                    <div className="ai-agent__feature-icon">
                      <IconComponent size={22} />
                    </div>
                    <div className="ai-agent__feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="ai-agent__visual">
            {/* Chat Interface */}
            <div className="ai-agent__chat">
              <div className="ai-agent__chat-header">
                <div className="ai-agent__chat-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <span className="ai-agent__chat-name">Feel PRO AI</span>
                  <span className="ai-agent__chat-status">
                    <span className="ai-agent__chat-dot"></span>
                    Active
                  </span>
                </div>
              </div>

              <div className="ai-agent__messages">
                <div className="ai-agent__message ai-agent__message--ai">
                  <Bot size={16} />
                  <p>Good morning! You have 3 high-priority tasks today. Want me to help you plan your focus sessions?</p>
                </div>

                <div className="ai-agent__message ai-agent__message--user">
                  <p>Yes, let's start with the quarterly report</p>
                  <User size={16} />
                </div>

                <div className="ai-agent__message ai-agent__message--ai">
                  <Bot size={16} />
                  <p>Perfect! I've blocked 2 hours for deep focus. All notifications are paused. Let's get it done! 🚀</p>
                </div>
              </div>

              {/* Voice Waveform */}
              <div className="ai-agent__voice">
                <div className="ai-agent__voice-btn">
                  <Mic size={20} />
                </div>
                <div className="ai-agent__waveform">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="ai-agent__wave-bar"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
                <span className="ai-agent__voice-label">Listening...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAgent
