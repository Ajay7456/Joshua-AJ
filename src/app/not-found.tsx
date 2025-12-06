import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all"
      >
        Return Home
      </Link>
    </div>
  )
}

export const metadata = {
  title: '404 - Page Not Found | Joshua Afuwape',
  description: 'The page you are looking for does not exist.',
}