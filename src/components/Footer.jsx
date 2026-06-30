import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/akashp369', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/akash-prajapat-09213824b/', label: 'LinkedIn' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/918718970484', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-[#0F172A]">
          AP<span className="text-primary">.</span>
        </span>

        <p className="text-[#94A3B8] text-sm">
          Designed &amp; Built by{' '}
          <span className="gradient-text font-semibold">Akash Prajapat</span>
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-9 h-9 glass flex items-center justify-center text-[#94A3B8] hover:text-primary transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: '8px' }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
