/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/-newdata',
  assetPrefix: '/-newdata/',
  trailingSlash: true,
}

module.exports = nextConfig 