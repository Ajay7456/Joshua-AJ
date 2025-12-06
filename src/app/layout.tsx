import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import ThemeToggle from '@/components/ui/ThemeToggle'
import CRTScanlines from '@/components/ui/CRTScanlines'
import FontLoader from '@/components/FontLoader'

export const metadata: Metadata = {
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
    creator: '@joshuaafuwape',
  },
  manifest: '/site.webmanifest',
  themeColor: '#0a0a14',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0a0a14" />
        <meta name="color-scheme" content="dark" />
        
        {/* Favicon for all browsers */}
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.ibb.co/N6HcgT88/apple-touch-icon.png" />
        
        {/* Standard Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/95VLH1D/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.ibb.co/sJKxKnPG/favicon-16x16.png" />
        
        {/* Legacy .ico format */}
        <link rel="shortcut icon" href="https://i.ibb.co/vxpdqYZ9/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="https://i.ibb.co/vxpdqYZ9/favicon.ico" type="image/x-icon" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="https://i.ibb.co/tp8FRzw8/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="https://i.ibb.co/WvLkzqkw/android-chrome-512x512.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#0a0a14" />
        <meta name="msapplication-TileImage" content="https://i.ibb.co/tp8FRzw8/android-chrome-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="https://i.ibb.co/tp8FRzw8/android-chrome-192x192.png" color="#00e5ff" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ibb.co" />
        
        {/* Preload your images */}
        <link rel="preload" href="https://i.ibb.co/1B3gj93/hero-image.jpg" as="image" />
        <link rel="preload" href="https://i.ibb.co/1YncXK1s/logo.png" as="image" />
      </head>
      
      <body className="font-sans bg-dark-bg text-white">
        <FontLoader />
        
        {/* Background effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-dark-bg to-dark-bg"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        {/* Navigation */}
        <Navbar />
        
        {/* UI Controls */}
        <ThemeToggle />
        <CRTScanlines />
        
        {/* Main content */}
        <main className="relative">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-800/50 mt-20">
          <p>© {new Date().getFullYear()} Joshua Afuwape. Crafted with code & creativity.</p>
          <p className="text-xs mt-2 opacity-70">
            WhatsApp: +234 906 197 2103 • Email: ajay745626@gmail.com
          </p>
        </footer>
      </body>
    </html>
  )
}