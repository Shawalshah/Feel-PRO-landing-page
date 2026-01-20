import { Mic, Image, Type, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import './WorkLikePro.css'

const WorkLikePro = () => {
  const features = [
    { icon: Mic, label: 'Voice → Task', desc: 'Speak your mind, create instantly' },
    { icon: Image, label: 'Image → Task', desc: 'AI understands visual context' },
    { icon: Type, label: 'Smart Structuring', desc: 'Auto-organized & prioritized' },
    { icon: Sparkles, label: 'Intent Detection', desc: 'AI knows what matters' },
  ]

  return (
    <section className="work-pro">
      <div className="work-pro__container">
        {/* Header */}
        <div className="work-pro__header">
          <span className="work-pro__tag">Multimodal Task Creation</span>
          <h2 className="work-pro__title">Work Like <span>PRO</span></h2>
          <p className="work-pro__desc">Create tasks using text, voice, or images — the way your brain actually works.</p>
        </div>

        {/* Grid */}
        <div className="work-pro__grid">
          {/* Left - Features */}
          <div className="work-pro__features">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="work-pro__feature">
                  <div className="work-pro__feature-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="work-pro__feature-content">
                    <h4>{feature.label}</h4>
                    <p>{feature.desc}</p>
                  </div>
                  <ArrowRight size={18} className="work-pro__feature-arrow" />
                </div>
              )
            })}
          </div>

          {/* Right - Visual Cards */}
          <div className="work-pro__visual">
            <div className="work-pro__cards">
              {/* Voice Task Card */}
              <div className="work-pro__card work-pro__card--voice">
                <div className="work-pro__card-header">
                  <div className="work-pro__card-icon work-pro__card-icon--blue">
                    <Mic size={18} />
                  </div>
                  <span className="work-pro__card-label">Voice Input</span>
                </div>
                <div className="work-pro__waveform">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="work-pro__wave-bar" style={{ animationDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                <div className="work-pro__card-result">
                  <CheckCircle2 size={16} />
                  <span>"Schedule team standup for 10 AM"</span>
                </div>
              </div>

              {/* Image Task Card */}
              <div className="work-pro__card">
                <div className="work-pro__card-header">
                  <div className="work-pro__card-icon work-pro__card-icon--purple">
                    <Image size={18} />
                  </div>
                  <span className="work-pro__card-label">Image Input</span>
                </div>
                <div className="work-pro__image-preview">
                  <Image size={32} />
                  <span>Whiteboard Photo</span>
                </div>
                <div className="work-pro__card-result">
                  <Sparkles size={16} />
                  <span>3 tasks extracted by AI</span>
                </div>
              </div>

              {/* Text Task Card */}
              <div className="work-pro__card">
                <div className="work-pro__card-header">
                  <div className="work-pro__card-icon work-pro__card-icon--green">
                    <Type size={18} />
                  </div>
                  <span className="work-pro__card-label">Text Input</span>
                </div>
                <div className="work-pro__text-input">
                  <span>Review Q4 budget proposal</span>
                  <div className="work-pro__cursor"></div>
                </div>
                <div className="work-pro__card-tags">
                  <span className="work-pro__tag-item work-pro__tag-item--primary">High Priority</span>
                  <span className="work-pro__tag-item">Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkLikePro
