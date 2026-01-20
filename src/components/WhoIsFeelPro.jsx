import { motion } from 'framer-motion'
import { Rocket, Briefcase, Home, GraduationCap, Palette, Users } from 'lucide-react'
import './WhoIsFeelPro.css'

const WhoIsFeelPro = () => {
  const personas = [
    { 
      icon: Rocket, 
      title: 'Founders', 
      desc: 'Building the future with limited time',
      highlight: 'Scale Impact'
    },
    { 
      icon: Briefcase, 
      title: 'Professionals', 
      desc: 'Managing complex workloads daily',
      highlight: 'Stay Ahead'
    },
    { 
      icon: Home, 
      title: 'Remote Workers', 
      desc: 'Blending work and life boundaries',
      highlight: 'Work Anywhere'
    },
    { 
      icon: GraduationCap, 
      title: 'Ambitious Students', 
      desc: 'Balancing studies and goals',
      highlight: 'Build Habits'
    },
    { 
      icon: Palette, 
      title: 'Creators', 
      desc: 'Turning ideas into reality',
      highlight: 'Create More'
    },
  ]

  return (
    <section className="who-pro" id="who-is-it-for">
      <div className="who-pro__container">
        <motion.div
          className="who-pro__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="who-pro__tag">
            <Users size={14} />
            Clarify Target Market
          </span>
          <h2 className="who-pro__title">Who Is Feel PRO For?</h2>
          <p className="who-pro__desc">Designed for anyone who takes their time and productivity seriously.</p>
        </motion.div>

        <div className="who-pro__grid">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="who-pro__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="who-pro__card-icon">
                <persona.icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="who-pro__card-title">{persona.title}</h3>
              <p className="who-pro__card-desc">{persona.desc}</p>
              <span className="who-pro__card-highlight">{persona.highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoIsFeelPro
