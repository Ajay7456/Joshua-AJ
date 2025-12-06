'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Globe, Zap, Server, Database } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'UES Energy Solutions',
    description: 'Professional energy solutions company website with lead generation system',
    category: ['Client Project', 'Web Development'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel'],
    liveUrl: 'https://uesenergysolutions.com',
    githubUrl: '#',
    color: '#00e5ff',
    icon: <Globe className="w-6 h-6" />,
    features: ['Responsive Design', 'Contact Forms', 'SEO Optimized', 'Fast Performance'],
    status: 'Live & Production'
  },
  {
    id: 2,
    title: 'Joshua Portfolio',
    description: 'Modern animated portfolio showcasing multidisciplinary design & development skills',
    category: ['Personal Project', 'UI/UX Design'],
    tags: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind', 'GSAP'],
    liveUrl: 'https://joshua-psi.vercel.app',
    githubUrl: 'https://github.com/Ajay7456',
    color: '#ff00e5',
    icon: <Zap className="w-6 h-6" />,
    features: ['WebGL Animations', 'Dark Mode', 'PWA', 'Contact Integration'],
    status: 'Live & Maintained'
  },
  {
    id: 3,
    title: 'VMeet - Video Conference',
    description: 'Video conferencing platform UI/UX prototype with modern design system',
    category: ['Concept Project', 'UI/UX Design'],
    tags: ['Next.js', 'UI Design', 'Prototype', 'Design System', 'Figma'],
    liveUrl: 'https://vmeet-eta.vercel.app',
    githubUrl: '#',
    color: '#9d4edd',
    icon: <Server className="w-6 h-6" />,
    features: ['Meeting Rooms', 'Screen Sharing', 'Chat System', 'User Management'],
    status: 'Concept & Prototype'
  },
  {
    id: 4,
    title: 'More Projects',
    description: 'Additional client projects and personal experiments',
    category: ['Various Projects'],
    tags: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'AWS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Ajay7456',
    color: '#00ff9d',
    icon: <Database className="w-6 h-6" />,
    features: ['Full Stack Apps', 'APIs', 'Admin Dashboards', 'Mobile Responsive'],
    status: 'View GitHub'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Client Project', 'Personal Project', 'Concept Project', 'Web Development', 'UI/UX Design']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <section id="projects" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
          <span className="text-neon-blue font-semibold">REAL PROJECTS</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Deployed
          <span className="block text-gradient">Work</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Real projects delivered to clients and personal experiments deployed successfully
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeFilter === category
                ? 'bg-gradient-to-r from-neon-blue to-neon-pink text-white border-transparent'
                : 'border-white/20 text-gray-400 hover:border-neon-blue/50'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Project Header */}
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
              
              {/* Category Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 backdrop-blur-sm"
                    style={{ color: project.color }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Project Icon */}
              <div className="absolute top-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-sm"
                style={{ color: project.color }}
              >
                {project.icon}
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 backdrop-blur-sm text-green-400">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* Features List */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-gray-300">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Visit Live Site
                </motion.a>
                
                {project.githubUrl !== '#' && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
              </div>

              {/* Quick Stats */}
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-500">
                <span>🚀 Deployed</span>
                <span>✅ Production Ready</span>
                <span>⚡ Fast Loading</span>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${project.color}20, transparent 40%)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Projects Delivered', value: '3+', color: '#00e5ff' },
          { label: 'Happy Clients', value: '2+', color: '#ff00e5' },
          { label: 'Years Experience', value: '4+', color: '#9d4edd' },
          { label: 'Success Rate', value: '100%', color: '#00ff9d' },
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 rounded-2xl bg-surface/30 border border-white/10">
            <div 
              className="text-3xl font-bold mb-2"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-400 mb-6">
          Interested in working together? I can build something amazing for you too.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all"
        >
          <span>Start Your Project</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}