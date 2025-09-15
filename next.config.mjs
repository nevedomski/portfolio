import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

// Initialize OpenNext for local development with Cloudflare bindings
if (process.env.NODE_ENV === 'development') {
  await initOpenNextCloudflareForDev()
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
  images: {
    // Support modern formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/',
        permanent: false,
      },
      {
        source: '/articles/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/speaking',
        destination: '/',
        permanent: false,
      },
      {
        source: '/uses',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
