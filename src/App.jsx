import Header from './components/Header'
import Hero from './components/Hero'
import AIAgent from './components/AIAgent'
import Stripe from './components/Stripe'
import WorkLikePro from './components/WorkLikePro'
import FocusLikePro from './components/FocusLikePro'
import PlanLikePro from './components/PlanLikePro'
import ReportLikePro from './components/ReportLikePro'
import SystemFlow from './components/SystemFlow'
import WhoIsFeelPro from './components/WhoIsFeelPro'
import Privacy from './components/Privacy'
import CTACard from './components/CTACard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stripe />
        <AIAgent />
        <WorkLikePro />
        <FocusLikePro />
        <PlanLikePro />
        <ReportLikePro />
        <SystemFlow />
        <WhoIsFeelPro />
        <Privacy />
        <CTACard />
      </main>
      <Footer />
    </div>
  )
}

export default App
