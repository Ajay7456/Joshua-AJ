'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tv } from 'lucide-react'

export default function CRTScanlines() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsEnabled(!isEnabled)}
        className="fixed bottom-6 right-24 z-50 p-4 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all"
      >
        <Tv className={`w-5 h-5 ${isEnabled ? 'text-neon-blue' : 'text-gray-400'}`} />
      </motion.button>

      {isEnabled && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
            backgroundSize: '100% 4px',
          }} />
        </div>
      )}
    </>
  )
}