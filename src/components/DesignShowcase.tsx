'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Palette, Layout, Smartphone, Maximize2 } from 'lucide-react'

const designProjects = [
  {
    id: 1,
    title: 'Brand Identity Suite',
    type: 'Graphic Design',
    description: 'Complete visual identity for tech startup',
    colors: ['#00e5ff', '#9d4edd', '#151522', '#ffffff'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
  },
  {
    id: 2,
    title: 'E-commerce UI/UX',
    type: 'UI/UX Design',
    description: 'User-centered shopping experience redesign',
    colors: ['#ff00e5', '#00ff9d', '#0a0a14', '#f0f0ff'],
    tools: ['Figma', 'Protopie', 'After Effects'],
  },
  {
    id: 3,
    title: 'Motion Design System',
    type: 'Motion Design',
    description: 'Animated component library for web apps',
    colors: ['#9d4edd', '#00e5ff', '#ffaa00', '#00ff9d'],
    tools: ['Framer Motion', 'Lottie', 'Rive'],
  },
  {
    id: 4,
    title: 'Portfolio Concept',
    type: 'Web Design',
    description: 'Experimental portfolio design exploration',
    colors: ['#151522', '#00e5ff', '#ff00e5', '#ffffff'],
    tools: ['Next.js', 'Three.js', 'GSAP'],
  },
]

export default function DesignShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(0)

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % designProjects.length)
  }

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + designProjects.length) % designProjects.length)
  }

  return (
    <section id="design" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
          <span className="text-neon-blue font-semibold">DESIGN</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Design
          <span className="block text-gradient">Showcase</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Visual design work spanning branding, UI/UX, and motion graphics
        </p>
      </motion.div>

      {/* Main Showcase */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/20 hover:border-neon-blue/50 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/20 hover:border-neon-blue/50 transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Project Display */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Background Gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${designProjects[selectedProject].colors[0]}20, ${designProjects[selectedProject].colors[1]}20)`,
            }}
          />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col justify-between">
            {/* Top Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ 
                    backgroundColor: designProjects[selectedProject].colors[0] + '40',
                    color: designProjects[selectedProject].colors[0]
                  }}
                >
                  {designProjects[selectedProject].type}
                </div>
                <div className="text-sm text-gray-400">
                  Project {selectedProject + 1} of {designProjects.length}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-2">{designProjects[selectedProject].title}</h3>
              <p className="text-gray-300">{designProjects[selectedProject].description}</p>
            </div>

            {/* Color Palette */}
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Color Palette
              </h4>
              
              <div className="flex gap-4">
                {designProjects[selectedProject].colors.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex-1 group"
                  >
                    <div 
                      className="h-16 rounded-lg mb-2 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">{color}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(color)}
                        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Copy
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-bold mb-3">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {designProjects[selectedProject].tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm rounded-full bg-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Thumbnails */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {designProjects.map((project, index) => (
            <motion.button
              key={project.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(index)}
              className={`p-4 rounded-xl border transition-all ${
                selectedProject === index
                  ? 'border-neon-blue bg-neon-blue/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-white/5">
                  {project.type.includes('Graphic') ? <Palette /> :
                   project.type.includes('UI/UX') ? <Layout /> :
                   project.type.includes('Motion') ? <Maximize2 /> : <Smartphone />}
                </div>
                <span className="text-sm font-semibold text-left">{project.type}</span>
              </div>
              <h4 className="font-bold text-left">{project.title}</h4>
              <p className="text-xs text-gray-400 text-left mt-1">{project.description}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}