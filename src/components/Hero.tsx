'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, ExternalLink, Code2, Palette, Layers, Cpu } from 'lucide-react'
import ParticleBackground from './ui/ParticleBackground'
import AnimatedText from './ui/AnimatedText'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Mouse move effect for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.particle') as NodeListOf<HTMLElement>
      particles.forEach(particle => {
        const speed = particle.getAttribute('data-speed') || '1'
        const x = (window.innerWidth - e.pageX * Number(speed)) / 100
        const y = (window.innerHeight - e.pageY * Number(speed)) / 100
        particle.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* WebGL Particle Background */}
      <ParticleBackground />
      
      {/* Animated gradient orbs */}
      <div className="particle absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" data-speed="0.5"></div>
      <div className="particle absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000" data-speed="0.3"></div>
      <div className="particle absolute top-3/4 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" data-speed="0.7"></div>
      
      {/* Hero Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 via-dark-bg/80 to-dark-bg/95 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/70 via-transparent to-dark-bg/70 z-10"></div>
        
        {/* Your Hero Image */}
        <div className="relative w-full h-full">
          <Image
            src="https://i.ibb.co/1B3gj93/hero-image.jpg"
            alt="Joshua Afuwape - Creative Developer & Designer"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/15 via-transparent to-neon-pink/15 z-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/90 z-5"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-5 z-5"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 md:px-8 w-full max-w-7xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-blue rounded-full blur"></div>
              <Sparkles className="w-4 h-4 text-white relative" />
            </div>
            <span className="text-sm font-medium">Available for freelance work</span>
          </div>
        </motion.div>

        {/* Your Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8 relative"
        >
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full blur-2xl opacity-30"></div>
            <Image
              src="https://i.ibb.co/1YncXK1s/logo.png"
              alt="Joshua Afuwape Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Name with animated reveal */}
        <div className="mb-8">
          <AnimatedText 
            text="Joshua Afuwape"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 tracking-tight"
            delay={0.2}
          />
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeInOut' }}
            className="h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-blue mx-auto mb-8 rounded-full"
          />
        </div>

        {/* Animated title */}
        <AnimatedText 
          text="Web Developer · Graphic Designer · UI/UX Designer · Full Stack Developer"
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light tracking-wide"
          delay={0.5}
          stagger={0.02}
        />

        {/* Tagline with real project mention */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building <span className="text-gradient font-semibold">real projects</span> for clients worldwide. 
          Check out my deployed work at{' '}
          <a 
            href="https://uesenergysolutions.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-blue hover:text-neon-pink transition-colors font-medium underline decoration-dotted underline-offset-4"
          >
            uesenergysolutions.com
          </a>
        </motion.p>

        {/* Expertise Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Code2, label: 'Web Dev', color: '#00e5ff' },
            { icon: Palette, label: 'UI/UX', color: '#ff00e5' },
            { icon: Layers, label: 'Graphic', color: '#9d4edd' },
            { icon: Cpu, label: 'Full Stack', color: '#00ff9d' },
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <div 
                className="p-3 rounded-xl mb-2 backdrop-blur-sm border border-white/10 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <span className="text-xs text-gray-400">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-full font-semibold hover:shadow-xl hover:shadow-neon-blue/30 transition-all flex items-center justify-center gap-2"
          >
            <span>View Real Projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group px-8 py-3 border-2 border-white/20 rounded-full font-semibold hover:border-neon-blue/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <span>Hire Me Now</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12"
        >
          {[
            { value: '3+', label: 'Projects Live' },
            { value: '2+', label: 'Happy Clients' },
            { value: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Social proof badge */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-8 hidden lg:block"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink"></div>
            ))}
          </div>
          <span className="text-xs text-gray-400">Trusted by clients worldwide</span>
        </div>
      </motion.div>

      {/* Tech stack badge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex gap-1">
            {['Next.js', 'React', 'TS'].map((tech, i) => (
              <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                {tech}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">Tech Stack</span>
        </div>
      </motion.div>
    </section>
  )
}