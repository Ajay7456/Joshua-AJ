import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import ThemeToggle from '@/components/ui/ThemeToggle'
import CRTScanlines from '@/components/ui/CRTScanlines'
import FontLoader from '@/components/FontLoader'

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a14',
}

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://joshuaafuwape.digital'),
  title: 'Joshua Afuwape | Web Developer & Designer',
  description: 'Multidisciplinary developer blending design and code to build engaging digital experiences.',
  keywords: ['web development', 'UI/UX design', 'full stack', 'graphic design', 'portfolio'],
  authors: [{ name: 'Joshua Afuwape' }],
  openGraph: {
    type: 'website',
    url: 'https://joshuaafuwape.digital',
    title: 'Joshua Afuwape | Creative Developer',
    description: 'Building digital experiences at the intersection of design and code.',
    images: ['https://i.ibb.co/WvLkzqkw/android-chrome-512x512.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua Afuwape | Creative Developer',
    description: 'Building digital experiences at the intersection of design and code.',
    images: ['https://i.ibb.co/WvLkzqkw/android-chrome-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      
      <body className="font-sans bg-dark-bg text-white">
        <FontLoader />
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-dark-bg to-dark-bg"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        <Navbar />
        <ThemeToggle />
        <CRTScanlines />
        
        <main className="relative">
          {children}
        </main>
        
        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-800/50 mt-20">
          <p>© {new Date().getFullYear()} Joshua Afuwape. Crafted with code & creativity.</p>
        </footer>
      </body>
    </html>
  )
}