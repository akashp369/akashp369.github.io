import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(246,248,255,0.92)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)] shadow-sm'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <button onClick={() => scrollTo('#home')} className="font-display text-2xl font-bold text-[#0F172A]">
          AP<span className="text-primary">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  active === link.href.slice(1) ? 'text-[#0F172A]' : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                  active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-primary border border-[rgba(124,58,237,0.3)] hover:bg-[rgba(124,58,237,0.06)] transition-all duration-300"
        >
          <FiMail size={15} />
          Let's Connect
        </button>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[rgba(246,248,255,0.98)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)]"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-[#64748B] hover:text-[#0F172A] transition-colors text-sm font-medium">
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => scrollTo('#contact')} className="flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary border border-[rgba(124,58,237,0.3)] hover:bg-[rgba(124,58,237,0.06)] transition-all">
                  <FiMail size={15} /> Let's Connect
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
