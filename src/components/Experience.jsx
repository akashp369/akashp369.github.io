import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const highlights = [
  'Built and maintained scalable full-stack applications using React.js, Node.js, and Java (Spring Boot) across multiple production projects.',
  'Designed and implemented RESTful APIs using Spring Boot and Node.js to support core features and third-party integrations.',
  'Developed microservices architecture — API Gateway, WebSocket server handling 500+ concurrent connections, and Stripe payment integration, deployed on Docker & Kubernetes.',
  'Implemented secure payment processing using Stripe, handling end-to-end transaction lifecycles in production.',
  'Improved performance through server-side pagination (90% payload reduction), Redux-based query optimization, database indexing, and Redis caching.',
  'Applied Spring Security and JWT-based authentication to secure backend services and protect sensitive endpoints.',
]

const education = [
  { title: 'Full Stack Web Development', institution: 'Masai School', period: 'Aug 2022 – Jun 2023', location: 'Bengaluru, India' },
  { title: 'B.Sc. (CS)', institution: 'Vikram University', period: 'Aug 2014 – May 2017', location: 'Ujjain, India' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)' }}>

      <div className="pointer-events-none absolute -top-20 right-0 w-72 h-72 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>

          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Where I've worked</span>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          </motion.div>

          <motion.div variants={fadeUp} className="glass p-6 sm:p-8 mb-10" style={{ borderRadius: 16 }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="font-display font-bold text-[#0F172A] text-lg sm:text-xl flex items-center gap-2">
                  <FiBriefcase className="text-primary" size={20} />
                  Full Stack Developer
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base mt-1">STRIX DIGITAL</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="flex items-center gap-1.5 text-[#64748B] text-sm">
                  <FiCalendar size={13} /> Sep 2023 – Present
                </span>
                <span className="flex items-center gap-1.5 text-[#64748B] text-sm">
                  <FiMapPin size={13} /> Indore, Madhya Pradesh
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li key={i} variants={fadeUp}
                  className="flex items-start gap-3 text-[#475569] text-sm sm:text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mb-8">
            <h3 className="font-display font-bold text-[#0F172A] text-lg sm:text-xl">
              Education & <span className="gradient-text">Certifications</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <motion.div key={edu.title} variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(124,58,237,0.1)' }}
                className="glass p-5 sm:p-6 cursor-default"
                style={{ borderRadius: 16, transition: 'box-shadow 0.3s ease' }}>
                <h4 className="font-display font-semibold text-[#0F172A] text-sm sm:text-base mb-1">{edu.title}</h4>
                <p className="text-primary text-sm font-medium">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-2 text-[#94A3B8] text-xs">
                  <span className="flex items-center gap-1"><FiCalendar size={11} /> {edu.period}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={11} /> {edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
