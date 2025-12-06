'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import ParticleBackground from './ui/ParticleBackground'
import AnimatedText from './ui/AnimatedText'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/70 to-dark-bg/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-transparent to-dark-bg/60 z-10"></div>
        
        <div className="relative w-full h-full">
          <Image
            src="https://i.ibb.co/1B3gj93/hero-image.jpg"
            alt="Joshua Afuwape - Creative Developer"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 via-transparent to-neon-pink/10"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm">Available for freelance work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="https://i.ibb.co/1YncXK1s/logo.png"
              alt="Joshua Afuwape Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <div className="mb-6">
          <AnimatedText 
            text="Joshua Afuwape"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 text-gradient"
            delay={0.2}
          />
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeInOut' }}
            className="h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto mb-8"
          />
        </div>

        <AnimatedText 
          text="Web Developer · Graphic Designer · UI/UX Designer · Full Stack Developer"
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          delay={0.5}
          stagger={0.02}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Blending <span className="text-gradient font-semibold">design</span> and{' '}
          <span className="text-gradient font-semibold">code</span> to build engaging digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all"
          >
            View Projects
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 border-2 border-white/20 rounded-full font-semibold hover:border-neon-blue/50 hover:bg-white/5 transition-all"
          >
            Hire Me
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}