import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import SkillMarquee from './components/SkillMarquee'

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: '#F6F8FF', color: '#0F172A' }}>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <SkillMarquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
