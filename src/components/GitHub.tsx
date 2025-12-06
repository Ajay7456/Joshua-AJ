'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Star, GitFork, Code, TrendingUp } from 'lucide-react'

export default function GitHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [stats, setStats] = useState({
    followers: 245,
    repos: 36,
    stars: 512,
    contributions: 1284,
  })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setStats(prev => ({
          followers: Math.min(prev.followers + 1, 245),
          repos: Math.min(prev.repos + 1, 36),
          stars: Math.min(prev.stars + 3, 512),
          contributions: Math.min(prev.contributions + 10, 1284),
        }))
      }, 50)

      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section id="github" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
          <span className="text-neon-blue font-semibold">GITHUB</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Open Source
          <span className="block text-gradient">Contributions</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Active contributor to open source with a focus on developer tools
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Github, label: 'Followers', value: stats.followers, color: '#00e5ff' },
              { icon: Code, label: 'Public Repos', value: stats.repos, color: '#ff00e5' },
              { icon: Star, label: 'Stars Earned', value: stats.stars, color: '#9d4edd' },
              { icon: TrendingUp, label: 'Contributions', value: stats.contributions, color: '#00ff9d' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <a
              href="https://github.com/Ajay7456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-neon-blue/50 transition-all"
            >
              <Github className="w-6 h-6" />
              <span className="text-lg font-semibold">@Ajay7456</span>
              <span className="text-gray-400">
                View Profile →
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}