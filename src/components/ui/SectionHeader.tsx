'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionHeaderProps {
  subtitle: string
  title: string
  titleAccent: string
  description?: string
  className?: string
}

export default function SectionHeader({ 
  subtitle, 
  title, 
  titleAccent, 
  description, 
  className = '' 
}: SectionHeaderProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className={`text-center mb-16 ${className}`}
    >
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
        <span className="text-neon-blue font-mono text-sm tracking-widest uppercase">
          {subtitle}
        </span>
        <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
        {title}
        <span className="block text-gradient mt-2">{titleAccent}</span>
      </h2>

      {description && (
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}