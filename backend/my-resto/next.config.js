/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://www.pexels.com/fr-fr/','https://unsplash.com','firebasestorage.googleapis.com']
},
}

module.exports = nextConfig
