'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Layers, Cpu, Zap, Globe } from 'lucide-react'

const skills = [
  { name: 'Web Development', icon: Code2, level: 95, color: '#00e5ff' },
  { name: 'UI/UX Design', icon: Palette, level: 90, color: '#ff00e5' },
  { name: 'Graphic Design', icon: Layers, level: 85, color: '#9d4edd' },
  { name: 'Full Stack', icon: Cpu, level: 88, color: '#00ff9d' },
  { name: 'Animation', icon: Zap, level: 82, color: '#ffaa00' },
  { name: 'Responsive Design', icon: Globe, level: 96, color: '#00e5ff' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
            <span className="text-neon-blue font-semibold">ABOUT ME</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Building Digital
            <span className="block text-gradient">Experiences</span>
          </h2>

          <div className="space-y-4 text-gray-300 mb-8">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Joshua Afuwape</span>, a multidisciplinary developer passionate about creating beautiful, functional digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise spanning <span className="text-neon-blue">web development</span>, <span className="text-neon-pink">graphic design</span>, <span className="text-purple-400">UI/UX</span>, and <span className="text-green-400">full-stack engineering</span>, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-lg leading-relaxed">
              My philosophy centers on blending technical precision with creative vision to craft solutions that are not only efficient but also emotionally resonant and engaging.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '4+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.1 * index + 0.3, duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}00, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}80`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}