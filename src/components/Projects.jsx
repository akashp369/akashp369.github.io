import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const projects = [
  {
    id: 1, title: 'CartFlow', tag: 'E-Commerce · Microservices',
    badge: 'Java', badgeClass: 'bg-violet-600',
    gradient: 'from-violet-600 to-purple-400', icon: '☕', image: 'cartflow.jpg',
    desc: '12-service microservices architecture for e-commerce — API Gateway, Auth, User, Product, Inventory, Cart, Order, Payment, Coupon & Notification services. JWT + OAuth2 (Google) auth, Spring Cloud Gateway with Eureka, Stripe payments & RabbitMQ async messaging.',
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'RabbitMQ', 'Stripe', 'Docker', 'Kubernetes'],
    liveUrl: '', githubUrl: 'https://github.com/akashp369/CartFlow',
  },
  {
    id: 2, title: 'HireFlow', tag: 'Job Portal · Backend',
    badge: 'Java', badgeClass: 'bg-violet-600',
    gradient: 'from-blue-600 to-cyan-400', icon: '💼', image: 'hireflow.jpg',
    desc: 'Monolithic REST API for a job portal supporting Admin, Recruiter & Job Seeker roles with RBAC. Complete application lifecycle — APPLIED to HIRED/REJECTED — with automated email notifications. Cloudinary integration for uploads & Swagger UI docs.',
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Cloudinary', 'Swagger'],
    liveUrl: '', githubUrl: 'https://github.com/akashp369/HireFlow',
  },
  {
    id: 3, title: 'Baggi.ae', tag: 'E-Commerce · UAE',
    badge: 'MERN', badgeClass: 'bg-emerald-500',
    gradient: 'from-emerald-500 to-teal-400', icon: '🛒', image: 'baggi.jpg',
    desc: 'Production e-commerce platform for the UAE market with real-time delivery tracking, multi-vendor support, and Arabic/English bilingual interface. Serving customers across Dubai.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway'],
    liveUrl: 'https://baggi.ae', githubUrl: '',
  },
  {
    id: 4, title: 'Terriberi', tag: 'E-Commerce · Youth Brand',
    badge: 'MERN', badgeClass: 'bg-emerald-500',
    gradient: 'from-orange-400 to-pink-400', icon: '🍓', image: 'terriberi.jpg',
    desc: 'Youth entrepreneurship e-commerce platform where young CEOs create and sell their own brands — Skincare, Fragrance & Jewellery editions. Integrated payment gateway with seamless checkout.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway'],
    liveUrl: 'https://www.terriberi.com/', githubUrl: '',
  },
  {
    id: 5, title: 'CineCelebrate', tag: 'Entertainment · Web App',
    badge: 'MERN', badgeClass: 'bg-amber-500',
    gradient: 'from-amber-500 to-yellow-400', icon: '🎬', image: 'cinecelebrate.jpg',
    desc: 'Movie event and celebration booking platform connecting cinema lovers with exclusive screening events, premiere tickets, and curated movie experiences.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Payment Gateway'],
    liveUrl: 'https://cinecelebrate.com/', githubUrl: '',
  },
]

function ProjectImage({ image, gradient, icon, title }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl select-none`}>
        {icon}
      </div>
    )
  }
  return (
    <img
      src={`/projects/${image}`}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
      onError={() => setFailed(true)}
    />
  )
}

function TiltCard({ children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const rotX = (((e.clientY - r.top)  / r.height) - 0.5) * -8
    const rotY = (((e.clientX - r.left) / r.width)  - 0.5) *  8
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.018)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)'
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform 0.22s ease', willChange: 'transform', height: '100%' }}>
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>

          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">What I've built</span>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((p) => (
              <motion.div key={p.id} variants={fadeUp} className="h-full">
                <TiltCard>
                  <motion.div
                    className="glass overflow-hidden flex flex-col group cursor-default h-full"
                    whileHover={{ borderColor: 'rgba(124,58,237,0.4)' }}
                    style={{ transition: 'border-color 0.3s ease, box-shadow 0.35s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 50px rgba(124,58,237,0.14)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(124,58,237,0.05)' }}
                  >
                    <div className="relative h-40 sm:h-44 overflow-hidden shrink-0">
                      <ProjectImage image={p.image} gradient={p.gradient} icon={p.icon} title={p.title} />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)' }} />

                      <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {p.githubUrl && (
                          <motion.a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
                            className="w-11 h-11 rounded-full bg-[#0F172A] flex items-center justify-center text-white hover:bg-[#334155] transition-colors shadow-lg">
                            <FiGithub size={17} />
                          </motion.a>
                        )}
                        {p.liveUrl && (
                          <motion.a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
                            className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors shadow-lg">
                            <FiExternalLink size={17} />
                          </motion.a>
                        )}
                        {!p.liveUrl && !p.githubUrl && (
                          <span className="text-white/80 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                            style={{ background: 'rgba(0,0,0,0.4)' }}>Private Project</span>
                        )}
                      </div>

                      <span className={`absolute top-3 right-3 ${p.badgeClass} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm`}>
                        {p.badge}
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{p.tag}</p>
                      <motion.h3 className="font-display font-bold text-[#0F172A] text-base sm:text-lg mb-2"
                        whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 400 }}>{p.title}</motion.h3>
                      <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-3 flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <motion.span key={t} whileHover={{ scale: 1.06 }}
                            className="text-xs px-2 py-0.5 rounded text-accent font-medium cursor-default"
                            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>{t}</motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
