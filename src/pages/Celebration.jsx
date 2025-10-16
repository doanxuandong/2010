import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import giftImg from '../assets/gift.png'

export default function Celebration() {
  useEffect(() => {
    const randomInRange = (min, max) => Math.random() * (max - min) + min
    const defaults = { spread: 60, startVelocity: 55, ticks: 110, gravity: 0.9, scalar: 1, zIndex: 0 }

    const shoot = () => {
      // Bắn từ hai phía dưới màn hình lên trên
      confetti({
        ...defaults,
        particleCount: 60,
        angle: 90,
        origin: { x: randomInRange(0.1, 0.3), y: 1 },
      })
      confetti({
        ...defaults,
        particleCount: 60,
        angle: 90,
        origin: { x: randomInRange(0.7, 0.9), y: 1 },
      })
    }

    // Bắn ngay khi vào và sau đó lặp lại liên tục
    shoot()
    const intervalId = setInterval(shoot, 900)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-2 text-center" style={{ background: 'linear-gradient(135deg,#FFD6E0 0%,#FFF2CC 50%,#FFE5EC 100%)' }}>
      <motion.img
        src={giftImg}
        alt="Gift"
        className="h-96 w-96 sm:h-[28rem] sm:w-[28rem] md:h-[32rem] md:w-[32rem] object-contain drop-shadow-2xl"
        initial={{ y: 20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.div
        className="mt-6 rounded-xl bg-white/55 px-5 py-4 backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-wide text-rose-700 sm:text-4xl">
          Happy Women's Day
        </h1>
        <p className="mt-2 max-w-xl text-base text-rose-800/90 sm:text-lg">
          Thank you for being part of this beautiful <br></br> 25-year journey with us.
        </p>
      </motion.div>
    </div>
  )
}


