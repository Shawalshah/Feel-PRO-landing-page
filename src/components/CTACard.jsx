import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'
import './CTACard.css'

const CTACard = () => {
  return (
    <section className="cta-section section" id="cta-card">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Waves */}
          <div className="cta-card__waves">
            <div className="cta-card__wave-circle"></div>
            <div className="cta-card__wave-circle"></div>
            <div className="cta-card__wave-circle"></div>
            <div className="cta-card__wave-circle"></div>
          </div>

          <div className="cta-card__content">
            <div className="cta-card__text">
              <h2>Ready to Work Like a PRO?</h2>
              <p>Join thousands of professionals who are transforming their productivity with AI.</p>
              <div className="cta-card__buttons">
                <a href="#" className="cta-card__btn">
                  <Apple size={20} />
                  <div>
                    <span className="cta-card__btn-label">Download on the</span>
                    <span className="cta-card__btn-store">App Store</span>
                  </div>
                </a>
                <a href="#" className="cta-card__btn">
                  <Play size={20} fill="currentColor" />
                  <div>
                    <span className="cta-card__btn-label">Get it on</span>
                    <span className="cta-card__btn-store">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <motion.div
              className="cta-card__visual"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="cta-card__phone-frame">
                <div className="cta-card__phone-notch"></div>
                <img 
                  src="/assets/Download Card mockup.jpg" 
                  alt="Feel PRO App Preview" 
                  className="cta-card__mockup-img"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTACard
