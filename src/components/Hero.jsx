import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'

const ROLES = [
  'Java Full Stack Developer',
  'Spring Boot Developer',
  'React.js Developer',
  'MERN Stack Developer',
  'Microservices Architect',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const speed = deleting ? 45 : 100
    const pause = !deleting && text === current ? 1800 : 0
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true)
        else setText(current.slice(0, text.length + 1))
      } else {
        if (text === '') { setDeleting(false); setWordIdx((i) => (i + 1) % words.length) }
        else setText(current.slice(0, text.length - 1))
      }
    }, pause || speed)
    return () => clearTimeout(timer)
  }, [text, wordIdx, deleting, words])

  return text
}

function useCounter(target, started) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const step = target / 60
    let cur = 0
    const id = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(cur))
    }, 25)
    return () => clearInterval(id)
  }, [target, started])
  return count
}

function ProfilePhoto({ size = 'lg' }) {
  const sm = size === 'sm'
  return (
    <img
      src="/profile.jpg"
      alt="Akash Prajapat"
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.src =
          'https://ui-avatars.com/api/?name=Akash+Prajapat&background=7C3AED&color=fff&size=' + (sm ? '160' : '280')
      }}
    />
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const [countersOn, setCountersOn] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCountersOn(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const experience = useCounter(3,  countersOn)
  const projects   = useCounter(12, countersOn)
  const services   = useCounter(12, countersOn)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item    = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 z-10">
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto w-full">
        {/* Mobile */}
        <div className="flex flex-col items-center text-center md:hidden gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative w-32 h-32 mt-2">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(124,58,237,0.3)] animate-spin-slow" />
            <div className="absolute inset-2 rounded-full overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(124,58,237,0.2)' }}>
              <ProfilePhoto size="sm" />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="show" className="w-full">
            <motion.p variants={item} className="text-accent font-semibold mb-1 text-base">Hello, I'm</motion.p>
            <motion.h1 variants={item} className="font-display text-4xl font-extrabold leading-tight mb-3 text-[#0F172A]">
              Akash <span className="gradient-text">Prajapat</span>
            </motion.h1>
            <motion.div variants={item} className="text-[#475569] text-base mb-4 flex items-center justify-center gap-1 flex-wrap">
              <span>I'm a </span>
              <span className="text-primary font-semibold">{typed}</span>
              <span className="animate-blink text-primary">|</span>
            </motion.div>
            <motion.p variants={item} className="text-[#64748B] text-sm leading-relaxed mb-6 px-2">
              Building scalable, high-performance web applications with Java (Spring Boot) &amp; the MERN stack.
            </motion.p>
            <motion.div variants={item} className="flex gap-3 justify-center mb-8 flex-wrap">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary !text-sm !px-5 !py-2.5">View My Work</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline !text-sm !px-5 !py-2.5"><FiMail size={14} /> Get in Touch</button>
            </motion.div>

            <motion.div variants={item} ref={statsRef} className="flex items-center justify-center gap-6">
              {[
                { val: experience, label: 'Yrs Exp.' },
                { val: projects,   label: 'Projects' },
                { val: services,   label: 'Microservices' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-[rgba(0,0,0,0.08)]" />}
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold gradient-text">{s.val}<span className="text-primary">+</span></p>
                    <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="text-accent font-semibold mb-2 text-lg">Hello, I'm</motion.p>
            <motion.h1 variants={item} className="font-display text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#0F172A]">
              Akash <span className="gradient-text">Prajapat</span>
            </motion.h1>
            <motion.div variants={item} className="text-[#475569] text-xl mb-6 h-8 flex items-center gap-1">
              <span>I'm a </span>
              <span className="text-primary font-semibold">{typed}</span>
              <span className="animate-blink text-primary ml-0.5">|</span>
            </motion.div>
            <motion.p variants={item} className="text-[#64748B] text-base leading-relaxed max-w-lg mb-8">
              Full Stack Developer with 3+ years of experience building scalable, high‑performance web applications
              using Java (Spring Boot) and the MERN stack. Delivered production‑grade microservices deployed on Docker &amp; Kubernetes.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">View My Work</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline"><FiMail size={16} /> Get in Touch</button>
            </motion.div>
            <motion.div variants={item} ref={statsRef} className="flex items-center gap-8">
              {[
                { val: experience, label: 'Years Exp.' },
                { val: projects,   label: 'Projects Built' },
                { val: services,   label: 'Microservices' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-[rgba(0,0,0,0.08)]" />}
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold gradient-text">{s.val}<span className="text-primary">+</span></p>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }} className="flex justify-center">
            <div className="relative flex flex-col items-center gap-5">
              <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(124,58,237,0.25)] animate-spin-slow" />
                <div className="absolute -inset-5 rounded-full animate-spin-reverse opacity-50"
                  style={{ background: 'radial-gradient(circle at 10% 50%, #7C3AED 2.5px, transparent 2.5px), radial-gradient(circle at 90% 50%, #06B6D4 2.5px, transparent 2.5px), radial-gradient(circle at 50% 10%, #A855F7 2.5px, transparent 2.5px), radial-gradient(circle at 50% 90%, #22D3EE 2.5px, transparent 2.5px)' }} />
                <div className="absolute inset-4 rounded-full overflow-hidden animate-float" style={{ boxShadow: '0 8px 40px rgba(124,58,237,0.2)' }}>
                  <ProfilePhoto />
                </div>
              </div>

              <div className="absolute -left-10 top-1/2 -translate-y-1/2">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="glass px-3 py-2 text-xs font-semibold text-primary shadow-lg">&#9749; Java</motion.div>
              </div>
              <div className="absolute -right-10 top-1/3">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                  className="glass px-3 py-2 text-xs font-semibold text-accent shadow-lg">&#9881; Spring Boot</motion.div>
              </div>
              <div className="absolute -right-8 top-2/3">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                  className="glass px-3 py-2 text-xs font-semibold text-[#65A30D] shadow-lg">&#9883; React.js</motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#94A3B8] text-xs hover:text-[#64748B] transition-colors animate-bounce-slow"
      >
        <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1">
          <div className="w-0.5 h-1.5 rounded-full bg-current" />
        </div>
        <FiArrowDown size={12} />
      </button>
    </section>
  )
}
