import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <HowItWorks />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
