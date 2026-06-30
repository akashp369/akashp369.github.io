import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="h-full transition-all duration-75"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
          boxShadow: '0 0 8px rgba(124,58,237,0.8)' }} />
    </div>
  )
}
