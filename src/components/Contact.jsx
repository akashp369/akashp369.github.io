import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const EMAIL_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAIL_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

const CONTACT_EMAIL   = 'aakashprajapat59@gmail.com'
const WHATSAPP_NUMBER = '918718970484'
const LINKEDIN_URL    = 'https://www.linkedin.com/in/akash-prajapat-09213824b/'

const fadeUp    = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeLeft  = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x: 30  }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const contactItems = [
  { icon: <FiMail size={18} />, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, color: '#7C3AED' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', value: '+91 87189 70484', href: `https://wa.me/${WHATSAPP_NUMBER}`, color: '#25D366' },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'akash-prajapat', href: LINKEDIN_URL, color: '#0A66C2' },
  { icon: <FaGithub size={18} />, label: 'GitHub', value: 'github.com/akashp369', href: 'https://github.com/akashp369', color: '#0F172A' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, EMAIL_PUBLIC_KEY)
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputBase = {
    background: 'rgba(124,58,237,0.03)',
    border: '1.5px solid rgba(0,0,0,0.08)',
    color: '#0F172A',
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.04) 50%, transparent 100%)' }}>
      <div className="pointer-events-none absolute -top-16 right-0 w-80 h-80 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-16 left-0 w-72 h-72 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>

          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Get in touch</span>
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
              <motion.h3 variants={fadeLeft} className="font-display font-bold text-[#0F172A] text-xl sm:text-2xl mb-2">
                Let's Connect
              </motion.h3>
              <motion.p variants={fadeLeft} className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-6">
                I'm actively looking for new opportunities as a Java Full Stack Developer.
                If you have a role that matches my skills — let's talk!
              </motion.p>

              <div className="flex flex-col gap-2.5">
                {contactItems.map((c) => (
                  <motion.a key={c.label} variants={fadeLeft} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    whileHover={{ x: 6, boxShadow: `0 4px 20px ${c.color}18` }}
                    className="flex items-center gap-3 p-3.5 glass rounded-xl transition-all duration-300 cursor-pointer"
                    style={{ transitionProperty: 'box-shadow, border-color' }}>
                    <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${c.color}14`, color: c.color }}>{c.icon}</motion.div>
                    <div className="min-w-0">
                      <p className="text-[#94A3B8] text-xs uppercase tracking-wider">{c.label}</p>
                      <p className="text-[#0F172A] font-medium text-sm truncate">{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeRight}>
              <motion.div className="glass p-5 sm:p-8"
                whileHover={{ boxShadow: '0 16px 60px rgba(124,58,237,0.1)' }}
                style={{ transition: 'box-shadow 0.4s ease' }}>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['from_name', 'from_email'].map((name, i) => (
                      <input key={name} name={name} type={i === 1 ? 'email' : 'text'}
                        placeholder={i === 0 ? 'Your Name' : 'Your Email'} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                        style={inputBase}
                        onFocus={(e) => { e.target.style.borderColor = '#7C3AED'; e.target.style.background = 'rgba(124,58,237,0.04)' }}
                        onBlur={(e)  => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.background = 'rgba(124,58,237,0.03)' }}
                      />
                    ))}
                  </div>
                  <input name="whatsapp_number" type="tel"
                    placeholder="WhatsApp Number (with country code, e.g. +91 98765 43210)"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                    style={inputBase}
                    onFocus={(e) => { e.target.style.borderColor = '#25D366'; e.target.style.background = 'rgba(37,211,102,0.04)' }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.background = 'rgba(124,58,237,0.03)' }}
                  />
                  <input name="subject" type="text" placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                    style={inputBase}
                    onFocus={(e) => { e.target.style.borderColor = '#7C3AED'; e.target.style.background = 'rgba(124,58,237,0.04)' }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.background = 'rgba(124,58,237,0.03)' }}
                  />
                  <textarea name="message" placeholder="Tell me about your project..." rows={5} required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none placeholder-[#94A3B8]"
                    style={inputBase}
                    onFocus={(e) => { e.target.style.borderColor = '#7C3AED'; e.target.style.background = 'rgba(124,58,237,0.04)' }}
                    onBlur={(e)  => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.background = 'rgba(124,58,237,0.03)' }}
                  />

                  <motion.button type="submit" disabled={status === 'sending' || status === 'sent'}
                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }} whileTap={{ scale: 0.97 }}
                    className="btn-primary justify-center w-full disabled:opacity-70 disabled:cursor-not-allowed mt-1">
                    {status === 'sending' ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                      : status === 'sent'  ? 'Message Sent!'
                      : status === 'error' ? 'Try Again'
                      : <><FiSend size={15} /> Send Message</>}
                  </motion.button>

                  <p className="text-[#94A3B8] text-xs text-center">I reply within 24 hours</p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
