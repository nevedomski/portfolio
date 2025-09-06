import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                {/* <NavLink href="/articles">Articles</NavLink> */}
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                {/* <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <div className="flex gap-6">
                <SocialLink href={process.env.NEXT_PUBLIC_GITHUB_URL!} aria-label="Follow on GitHub" icon={GitHubIcon} />
                <SocialLink href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
                <SocialLink href={`mailto:${process.env.NEXT_PUBLIC_AUTHOR_EMAIL}`} aria-label="Send email" icon={MailIcon} />
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_AUTHOR_NAME}. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
