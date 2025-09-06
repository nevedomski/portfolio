import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    `I'm ${process.env.NEXT_PUBLIC_AUTHOR_NAME}. I live in ${process.env.NEXT_PUBLIC_LOCATION}, where I build ML systems that scale.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m {process.env.NEXT_PUBLIC_AUTHOR_NAME}. I live in {process.env.NEXT_PUBLIC_LOCATION}, where I build 
            ML systems that scale.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve always been fascinated by how technology can turn complex problems into elegant solutions. My journey into software engineering started with a deep curiosity about systems and data — how they work, scale, and impact people&apos;s lives. That curiosity eventually pulled me toward machine learning, where I saw the potential to not only process information at scale but also to extract meaning from it in ways that drive real-world decisions.
            </p>
            <p>
              Over the years, I&apos;ve grown into the role of Principal ML Software Engineer, specializing in machine learning and high-performance data systems. I&apos;ve led projects that bridge the gap between research and production, with a particular focus on fraud detection, credit risk, and cash flow models. These areas are at the heart of financial decision-making, and I&apos;ve been driven by the challenge of making models that are not only accurate, but also robust, transparent, and scalable in production. Along the way, I&apos;ve contributed to open-source projects and shared knowledge with the community, which keeps me connected to the fast-moving world of modern ML.
            </p>
            <p>
              Currently, my main focus is on building smarter Named Entity Recognition (NER) models, refining ML pipelines, and creating tools that improve developer experience around data processing and model deployment. I believe that the best systems aren&apos;t just accurate — they&apos;re usable, adaptable, and a joy to build upon. That belief shapes both my professional work and my contributions to open-source.
            </p>
            <p>
              Outside of engineering, I&apos;m someone who values creativity and balance. I enjoy spending time with my family (dog and cats), learning continuously, building home automation, and creating things that make everyday life a little more efficient and enjoyable. What drives me is the challenge of turning ideas into reality — building systems that last, help people, and push the boundaries of what&apos;s possible with AI.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={process.env.NEXT_PUBLIC_GITHUB_URL!} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${process.env.NEXT_PUBLIC_AUTHOR_EMAIL}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {process.env.NEXT_PUBLIC_AUTHOR_EMAIL}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
