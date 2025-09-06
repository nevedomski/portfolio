import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`,
    default:
      `${process.env.NEXT_PUBLIC_AUTHOR_NAME} - ${process.env.NEXT_PUBLIC_TITLE}`,
  },
  description:
    `${process.env.NEXT_PUBLIC_TITLE} focused on machine learning, AI, and high-performance data systems. I enjoy bridging research with real-world production, turning ideas into reliable, scalable solutions that actually ship. Outside of work, I contribute to open-source projects and share what I learn with the community.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
