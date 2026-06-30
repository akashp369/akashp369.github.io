import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiBook, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { FaServer, FaDocker, FaCode } from 'react-icons/fa'

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeLeft = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const cards = [
  { icon: <FaCode size={24} />, title: 'Java Backend', desc: 'Spring Boot, Spring Security, REST APIs, JWT & OAuth2', color: '#7C3AED' },
  { icon: <FaServer size={24} />, title: 'Microservices', desc: 'API Gateway, Eureka, RabbitMQ, Stripe integration', color: '#06B6D4' },
  { icon: <FiGlobe size={24} />, title: 'Frontend', desc: 'React.js, Next.js, Redux Toolkit, Responsive UI', color: '#A855F7' },
  { icon: <FaDocker size={24} />, title: 'DevOps', desc: 'Docker, Kubernetes, AWS EC2, CI/CD, Nginx', color: '#22D3EE' },
]

const details = [
  { icon: <FiMapPin size={13} />, text: 'Indore, Madhya Pradesh' },
  { icon: <FiBriefcase size={13} />, text: 'Full Stack Developer at STRIX DIGITAL' },
  { icon: <FiBook size={13} />, text: 'B.Sc. (CS) — Vikram University' },
  { icon: <FiGlobe size={13} />, text: 'English & Hindi' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>

          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {[
                <>I'm a <strong className="text-[#0F172A]">Java Full Stack Developer</strong> with 3+ years of experience building scalable, high‑performance web applications using <strong className="text-[#0F172A]">Java (Spring Boot)</strong> and the <strong className="text-[#0F172A]">MERN stack</strong>.</>,
                <>Delivered production‑grade <strong className="text-[#0F172A]">microservices</strong> — including API Gateway, WebSocket server handling 500+ concurrent connections, and Stripe payment integration — deployed on <strong className="text-[#0F172A]">Docker &amp; Kubernetes</strong>.</>,
                <>Proficient in Spring Security, JWT, PostgreSQL, REST APIs, React, and application performance optimization. Passionate about clean architecture and writing efficient, maintainable code.</>,
              ].map((para, i) => (
                <motion.p key={i} variants={fadeLeft} className="text-[#475569] text-sm sm:text-base leading-relaxed mb-4">{para}</motion.p>
              ))}

              <motion.div variants={fadeLeft} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 mt-6">
                {details.map((d) => (
                  <div key={d.text} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <span className="text-primary shrink-0">{d.icon}</span>
                    {d.text}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeLeft}>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary !text-sm">
                  See My Projects <FiArrowRight size={14} />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-3 sm:gap-4">
              {cards.map((c) => (
                <motion.div key={c.title} variants={fadeRight}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${c.color}22` }}
                  className="glass p-4 sm:p-6 cursor-default"
                  style={{ transition: 'box-shadow 0.3s ease', borderRadius: 16 }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-3 inline-block gradient-text">{c.icon}</motion.div>
                  <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0F172A] mb-1">{c.title}</h4>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
