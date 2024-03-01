/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  swcMinify: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: false,
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'app.rerumapp.uk',
          },
          {
            protocol: 'https',
            hostname: 'blog.staylets.co.uk',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          }
          
      ],
      
    },
  },
  async redirects() {
    return [
      {
        source: '/accommodation/staylets-villageand-caboose-town',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
