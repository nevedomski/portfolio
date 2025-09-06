import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
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
