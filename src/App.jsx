import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Hero from './components/Hero'
import AIAgent from './components/AIAgent'
import Stripe from './components/Stripe'
import WorkLikePro from './components/WorkLikePro'
import FocusLikePro from './components/FocusLikePro'
import PlanLikePro from './components/PlanLikePro'
import ReportLikePro from './components/ReportLikePro'
import SystemFlow from './components/SystemFlow'
import ExperienceInterface from './components/ExperienceInterface'
import WhoIsFeelPro from './components/WhoIsFeelPro'
import Privacy from './components/Privacy'
import CTACard from './components/CTACard'
import Footer from './components/Footer'
import Support from './pages/Support'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'

function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stripe />
        <AIAgent />
        <SystemFlow />
        <ExperienceInterface />
        <WorkLikePro />
        <FocusLikePro />
        <PlanLikePro />
        <ReportLikePro />
        <WhoIsFeelPro />
        <Privacy />
        <CTACard />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
