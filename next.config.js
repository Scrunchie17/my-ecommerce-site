/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforces strict mode for React (development only)
  swcMinify: true, // Use the SWC compiler for minification
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Allows images from these domains
  },
  // Additional Next.js configuration options can be added here
};

module.exports = nextConfig;
