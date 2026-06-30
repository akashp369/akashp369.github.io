import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let val = 0
    const id = setInterval(() => {
      val += Math.random() * 14 + 4
      if (val >= 100) {
        setProgress(100)
        clearInterval(id)
        setTimeout(() => setDone(true), 500)
      } else {
        setProgress(val)
      }
    }, 55)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#F6F8FF' }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center gap-8">
            <div className="font-display text-6xl font-black gradient-text tracking-tight select-none">
              AP<span className="text-primary">.</span>
            </div>

            <div className="flex flex-col items-center gap-3 w-52">
              <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <motion.div className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)', width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.08 }} />
              </div>
              <span className="font-mono text-xs text-[#94A3B8]">{Math.min(Math.floor(progress), 100)}%</span>
            </div>

            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2, ease: 'easeInOut' }} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
