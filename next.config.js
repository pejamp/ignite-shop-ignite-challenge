/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com',
    ]
  },

  experimental: {
    optimizePackageImports: ['phosphor-react']
  }
}

module.exports = nextConfig
