'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp')

  const handleWhatsAppClick = () => {
    if (!message.trim()) {
      alert('Please type your message first!')
      return
    }

    const phoneNumber = '2349061972103'
    const encodedMessage = encodeURIComponent(
      `Hello Joshua,\n\nMy name is ${name || 'Anonymous'}\n\nMessage: ${message}\n\nSent from your portfolio website`
    )
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    if (!message.trim()) {
      alert('Please type your message first!')
      return
    }

    const email = 'ajay745626@gmail.com'
    const subject = `New Contact from ${name || 'Anonymous'}`
    const body = `Name: ${name || 'Anonymous'}\n\nMessage: ${message}\n\nSent from portfolio website`
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink"></div>
          <span className="text-neon-blue font-semibold">HIRE ME</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon-pink to-neon-blue"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Let's Work
          <span className="block text-gradient">Together</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Choose your preferred contact method below.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setContactMethod('whatsapp')}
              className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${
                contactMethod === 'whatsapp'
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className={`p-3 rounded-full ${
                contactMethod === 'whatsapp'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-white/5 text-gray-400'
              }`}>
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-sm text-gray-400">+234 906 197 2103</p>
              </div>
            </button>

            <button
              onClick={() => setContactMethod('email')}
              className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${
                contactMethod === 'email'
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className={`p-3 rounded-full ${
                contactMethod === 'email'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-white/5 text-gray-400'
              }`}>
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-sm text-gray-400">ajay745626@gmail.com</p>
              </div>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div className="relative mb-8">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Type your message here..."
                required
                maxLength={500}
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                {message.length}/500
              </div>
            </div>

            <motion.button
              onClick={contactMethod === 'whatsapp' ? handleWhatsAppClick : handleEmailClick}
              disabled={!message.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg text-white font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed ${
                contactMethod === 'whatsapp'
                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`}
            >
              {contactMethod === 'whatsapp' ? (
                <>
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Email
                </>
              )}
            </motion.button>

            {message.trim() && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <h4 className="font-bold mb-2">Message Preview:</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p><strong>To:</strong> {contactMethod === 'whatsapp' ? 'WhatsApp (+234 906 197 2103)' : 'Email (ajay745626@gmail.com)'}</p>
                  <p><strong>Name:</strong> {name || 'Not provided'}</p>
                  <p><strong>Message:</strong> {message.substring(0, 100)}...</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}