import { Map, Briefcase, Focus, FileText, TrendingUp, ArrowRight, RefreshCw } from 'lucide-react'
import './SystemFlow.css'

const SystemFlow = () => {
  const steps = [
    { icon: Map, label: 'Plan', color: '#4D5DFB', desc: 'Set your strategy' },
    { icon: Briefcase, label: 'Work', color: '#3D7AFF', desc: 'Create & execute' },
    { icon: Focus, label: 'Focus', color: '#08C8F6', desc: 'Deep concentration' },
    { icon: FileText, label: 'Report', color: '#10B981', desc: 'Document progress' },
    { icon: TrendingUp, label: 'Improve', color: '#6B7AFF', desc: 'Learn & optimize' },
  ]

  return (
    <section className="system-flow" id="system-flow">
      <div className="system-flow__container">
        {/* Header */}
        <div className="system-flow__header">
          <span className="system-flow__tag">System Thinking</span>
          <h2 className="system-flow__title">One Flow. One System. <span>One Pro.</span></h2>
          <p className="system-flow__desc">A seamless cycle that transforms how you approach every single day.</p>
        </div>

        {/* Flow Diagram */}
        <div className="system-flow__diagram">
          <div className="system-flow__steps">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="system-flow__step" data-step={index + 1}>
                  <div 
                    className="system-flow__step-icon"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                      boxShadow: `0 8px 30px ${step.color}40`
                    }}
                  >
                    <IconComponent size={28} />
                  </div>
                  <span className="system-flow__step-label">{step.label}</span>
                  <span className="system-flow__step-desc">{step.desc}</span>
                  
                  {index < steps.length - 1 && (
                    <div className="system-flow__arrow">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Connection line */}
          <div className="system-flow__line-container">
            <div className="system-flow__line"></div>
          </div>

          {/* Loop indicator */}
          <div className="system-flow__loop">
            <RefreshCw size={20} />
            <span>Continuous Improvement Loop</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemFlow
