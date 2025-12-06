import Link from 'next/link'

export default function Error500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-gradient mb-4">500</h1>
      <h2 className="text-3xl font-bold mb-6">Server Error</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Something went wrong on our end. Please try again later.
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
  title: '500 - Server Error | Joshua Afuwape',
  description: 'An error occurred on the server.',
}