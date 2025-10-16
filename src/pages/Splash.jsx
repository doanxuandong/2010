import { motion } from 'framer-motion'
import logoMC from '../assets/logoMC.png'

export default function Splash({ onEnter }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b3d91]">
      <motion.button
        type="button"
        onClick={onEnter}
        className="focus:outline-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Enter celebration"
      >
        <img src={logoMC} alt="MC Logo" className="h-40 w-40 object-contain drop-shadow-xl" />
      </motion.button>
    </div>
  )
}


