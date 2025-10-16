import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Celebration() {
  useEffect(() => {
    const defaults = { spread: 75, ticks: 70, gravity: 0.9 }
    confetti({ ...defaults, particleCount: 90, origin: { y: 0.6 } })
    setTimeout(() => confetti({ ...defaults, particleCount: 60, origin: { y: 0.5 } }), 250)
    setTimeout(() => confetti({ ...defaults, particleCount: 40, origin: { y: 0.7 } }), 500)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1b0f3b] via-[#2a1569] to-[#3a1f8f] px-2 text-center">
      <motion.img
        src="/src/assets/gift.png"
        alt="Gift"
        className="h-80 w-80 sm:h-96 sm:w-96 md:h-96 md:w-96 object-contain drop-shadow-2xl"
        initial={{ y: 20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.h1
        className="text-3xl font-bold tracking-wide text-rose-200 sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Happy Women's Day
      </motion.h1>
      <motion.p
        className="mt-3 max-w-xl text-base text-rose-100/90 sm:text-lg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Thank you for being part of this beautiful 25-year journey with us.
      </motion.p>
    </div>
  )
}


