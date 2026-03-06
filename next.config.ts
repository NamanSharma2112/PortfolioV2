/** @type {import('next').NextConfig} 
const nextConfig = {
  images: {
    domains: ['randomuser.me'],
    // If you're using Next.js 13 or newer, you might want to use remotePatterns instead
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
}

module.exports = nextConfig */























// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**', // This allows all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;