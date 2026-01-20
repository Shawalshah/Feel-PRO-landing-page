import { motion } from 'framer-motion'
import { Cpu, Mic, Shield, Target } from 'lucide-react'
import './Stripe.css'

const Stripe = () => {
  const features = [
    { icon: Cpu, label: 'AI-Driven' },
    { icon: Mic, label: 'Voice-First' },
    { icon: Shield, label: 'Privacy-Focused' },
    { icon: Target, label: 'Built for Daily Execution' },
  ]

  return (
    <section className="stripe">
      <div className="stripe__container">
        <motion.p
          className="stripe__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built for professionals, founders, and high-performers
        </motion.p>
        
        <div className="stripe__features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="stripe__feature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon size={24} strokeWidth={1.5} />
              <span>{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stripe
