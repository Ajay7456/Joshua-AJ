/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
        pathname: '/**',
      },
    ],
  },
  swcMinify: true,
  compress: true,
  // Fix for stack size error
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig