import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, BookOpen, Code, Building2, Users } from 'lucide-react'
import './WhoIsFeelPro.css'

const WhoIsFeelPro = () => {
  const personas = [
    { 
      icon: Briefcase, 
      title: "CEO's", 
      desc: 'Optimizing strategy and leadership performance',
      highlight: 'Lead Better'
    },
    { 
      icon: GraduationCap, 
      title: 'Students', 
      desc: 'Mastering focus and academic excellence',
      highlight: 'Learn More'
    },
    { 
      icon: BookOpen, 
      title: 'Teachers', 
      desc: 'Structuring knowledge and delivery',
      highlight: 'Teach Better'
    },
    { 
      icon: Code, 
      title: 'Developers', 
      desc: 'Achieving deep flow state for coding',
      highlight: 'Code Faster'
    },
    { 
      icon: Building2, 
      title: 'Offices', 
      desc: 'Synchronizing team productivity and goals',
      highlight: 'Team Flow'
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
