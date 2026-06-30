import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const ringRef = useRef(null)
  const dotRef  = useRef(null)

  useEffect(() => {
    let raf
    let mx = -300, my = -300
    let gx = -300, gy = -300
    let rx = -300, ry = -300

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      gx = lerp(gx, mx, 0.06)
      gy = lerp(gy, my, 0.06)
      if (glowRef.current) {
        glowRef.current.style.left = gx + 'px'
        glowRef.current.style.top  = gy + 'px'
      }
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ringRef.current) { ringRef.current.style.width = '48px'; ringRef.current.style.height = '48px'; ringRef.current.style.borderColor = 'rgba(124,58,237,0.6)' }
    }
    const onLeave = () => {
      if (ringRef.current) { ringRef.current.style.width = '28px'; ringRef.current.style.height = '28px'; ringRef.current.style.borderColor = 'rgba(124,58,237,0.35)' }
    }
    document.querySelectorAll('a, button, .glass').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="fixed pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.04) 40%, transparent 65%)' }} />
      <div ref={ringRef} className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 28, height: 28, border: '1.5px solid rgba(124,58,237,0.35)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease' }} />
      <div ref={dotRef} className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 7, height: 7, background: 'rgba(124,58,237,0.75)',
          boxShadow: '0 0 8px rgba(124,58,237,0.5)' }} />
    </>
  )
}
