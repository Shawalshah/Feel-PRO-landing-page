import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--with-header">
        <div className="page__container page__container--narrow">
          <motion.div 
            className="page__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="page__tag">Legal</span>
            <h1>Privacy Policy</h1>
            <p>Last updated: January 2026</p>
          </motion.div>

          <motion.div 
            className="page__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <section className="page__section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Feel PRO. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and use our services.
              </p>
            </section>

            <section className="page__section">
              <h2>2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul>
                <li><strong>Identity Data:</strong> First name, last name, username</li>
                <li><strong>Contact Data:</strong> Email address, phone number</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Information about how you use our app and services</li>
                <li><strong>Content Data:</strong> Tasks, notes, and other content you create in the app</li>
              </ul>
            </section>

            <section className="page__section">
              <h2>3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="page__section">
              <h2>4. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being 
                accidentally lost, used, or accessed in an unauthorized way. All data is encrypted in transit 
                and at rest using industry-standard encryption protocols.
              </p>
            </section>

            <section className="page__section">
              <h2>5. Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request transfer of your personal data</li>
              </ul>
            </section>

            <section className="page__section">
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p><strong>Email:</strong> privacy@feelpro.app</p>
              <p><strong>Address:</strong> San Francisco, CA, USA</p>
            </section>

            <div className="page__back">
              <Link to="/" className="page__btn page__btn--outline">Back to Home</Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
