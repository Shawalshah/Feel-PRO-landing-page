import { motion } from 'framer-motion'
import { Shield, Lock, Server, Eye } from 'lucide-react'
import './Privacy.css'

const Privacy = () => {
  const features = [
    { 
      icon: Lock, 
      title: 'Your Data Stays Yours', 
      desc: 'End-to-end encryption ensures only you can access your information'
    },
    { 
      icon: Eye, 
      title: 'AI Assists, Not Replaces', 
      desc: 'Designed to enhance your thinking, not replace your judgment'
    },
    { 
      icon: Server, 
      title: 'Secure Architecture', 
      desc: 'Built with enterprise-grade security from the ground up'
    },
  ]

  return (
    <section className="privacy section" id="privacy">
      <div className="privacy__bg">
        <div className="privacy__bg-gradient"></div>
        <div className="privacy__bg-shield">
          <Shield size={400} strokeWidth={0.5} />
        </div>
      </div>

      <div className="container">
        <motion.div
          className="privacy__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag tag--outline">Build Trust</span>
          <h2>Privacy & Intelligence</h2>
          <p>Your productivity data is sensitive. We treat it that way.</p>
        </motion.div>

        <div className="privacy__grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="privacy__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="privacy__card-icon">
                <feature.icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Privacy
