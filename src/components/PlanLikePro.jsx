import { motion } from 'framer-motion'
import { Target, Brain, Compass, Users, XCircle, CheckCircle2, Swords } from 'lucide-react'
import './PlanLikePro.css'

const PlanLikePro = () => {
  const friends = [
    { label: 'Morning routine', icon: CheckCircle2 },
    { label: 'Focus blocks', icon: CheckCircle2 },
    { label: 'Weekly reviews', icon: CheckCircle2 },
    { label: 'Support network', icon: CheckCircle2 },
  ]

  const foes = [
    { label: 'Social media', icon: XCircle },
    { label: 'Multitasking', icon: XCircle },
    { label: 'Perfectionism', icon: XCircle },
    { label: 'Context switching', icon: XCircle },
  ]

  const features = [
    { icon: Brain, title: 'AI-Assisted Planning', desc: 'Smart suggestions based on your patterns' },
    { icon: Target, title: 'Awareness-Based Productivity', desc: 'Know what helps and what hurts' },
    { icon: Compass, title: 'Strategic Daily Alignment', desc: 'Every day starts with clarity' },
  ]

  return (
    <section className="plan-pro section">
      <div className="plan-pro__bg">
        <div className="plan-pro__bg-pattern"></div>
        <div className="plan-pro__bg-gradient"></div>
      </div>

      <div className="container">
        <motion.div
          className="plan-pro__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">Strategy & Awareness</span>
          <h2>Plan Like <span className="text-gradient">PRO</span></h2>
          <p>Understand your Friends (habits that help) and Foes (patterns that block you) — then act strategically.</p>
        </motion.div>

        <div className="plan-pro__grid">
          {/* Friends & Foes Cards */}
          <motion.div
            className="plan-pro__cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Friends Card */}
            <div className="plan-pro__card plan-pro__card--friends">
              <div className="plan-pro__card-header">
                <div className="plan-pro__card-icon plan-pro__card-icon--green">
                  <Users size={20} />
                </div>
                <h3>Friends</h3>
                <span className="plan-pro__card-badge plan-pro__card-badge--green">Allies</span>
              </div>
              <p className="plan-pro__card-desc">Habits, people, and tasks that help you succeed</p>
              <div className="plan-pro__card-list">
                {friends.map((item, i) => (
                  <motion.div
                    key={i}
                    className="plan-pro__card-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <item.icon size={16} className="plan-pro__card-item-icon--green" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* VS Divider */}
            <div className="plan-pro__vs">
              <Swords size={28} />
              <span>VS</span>
            </div>

            {/* Foes Card */}
            <div className="plan-pro__card plan-pro__card--foes">
              <div className="plan-pro__card-header">
                <div className="plan-pro__card-icon plan-pro__card-icon--red">
                  <XCircle size={20} />
                </div>
                <h3>Foes</h3>
                <span className="plan-pro__card-badge plan-pro__card-badge--red">Blockers</span>
              </div>
              <p className="plan-pro__card-desc">Distractions and behaviors that block your progress</p>
              <div className="plan-pro__card-list">
                {foes.map((item, i) => (
                  <motion.div
                    key={i}
                    className="plan-pro__card-item"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <item.icon size={16} className="plan-pro__card-item-icon--red" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="plan-pro__features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="plan-pro__feature">
                <div className="plan-pro__feature-icon">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlanLikePro
