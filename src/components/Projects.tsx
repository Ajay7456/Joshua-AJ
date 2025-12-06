'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SynthWave Dashboard',
    description: 'Real-time analytics dashboard with WebGL visualizations',
    category: ['Web Dev', 'UI/UX'],
    tags: ['React', 'Three.js', 'D3.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#00e5ff',
  },
  {
    id: 2,
    title: 'EcoCommerce Platform',
    description: 'Full-stack e-commerce with sustainable focus',
    category: ['Full Stack', 'UI/UX'],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#ff00e5',
  },
  {
    id: 3,
    title: 'Motion Design System',
    description: 'Design system with animated components',
    category: ['Design', 'Web Dev'],
    tags: ['Framer Motion', 'Storybook', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#9d4edd',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
          <span className="text-neon-blue font-semibold">PROJECTS</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Featured
          <span className="block text-gradient">Work</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A selection of work showcasing my range across development and design
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
          >
            <div 
              className="h-48 relative overflow-hidden"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-32 h-32 rounded-full opacity-20"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Live Demo
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}