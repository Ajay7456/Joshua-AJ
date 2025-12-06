import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joshua Afuwape | Web Developer & Designer',
  description: 'Multidisciplinary developer blending design and code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}