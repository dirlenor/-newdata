/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/-newdata' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/-newdata' : '',
  trailingSlash: true,
}

module.exports = nextConfig 