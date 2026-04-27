/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/gj-revisjon-website',
  assetPrefix: '/gj-revisjon-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig