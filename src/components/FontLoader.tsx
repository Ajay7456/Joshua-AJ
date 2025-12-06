'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Preload critical fonts
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
    ]

    fonts.forEach(fontUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = fontUrl
      document.head.appendChild(link)
    })
  }, [])

  return null
}