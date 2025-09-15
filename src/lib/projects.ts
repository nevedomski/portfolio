import { type ImageProps } from 'next/image'
import logoNer from '@/images/logos/ner.svg'
import logoGitBridge from '@/images/logos/gitbridge.svg'
import logoDocRag from '@/images/logos/docrag.svg'
import logoPortfolio from '@/images/logos/portfolio.svg'

export interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  logo: ImageProps['src']
}

export const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS v4. Features dark mode support, MDX for content authoring, and optimized performance. Deployed on Cloudflare Pages with fully automated CI/CD pipeline for seamless updates.',
    link: { href: `${process.env.NEXT_PUBLIC_GITHUB_URL}/portfolio`, label: 'github.com' },
    logo: logoPortfolio,
  },
  {
    name: 'Mistral NER Fine-tuning Framework',
    description:
      'A modular framework for fine-tuning the Mistral-7B language model on Named Entity Recognition tasks using memory-efficient approaches like 8-bit quantization and LoRA. It supports multi-dataset training, flexible label mapping, as well as serving via a FastAPI interface.',
    link: { href: `${process.env.NEXT_PUBLIC_GITHUB_URL}/mistral_ner`, label: 'github.com' },
    logo: logoNer,
  },
  {
    name: 'GitBridge – GitHub Repository Synchronization Tool',
    description:
      'A production-ready CLI tool to synchronize GitHub repositories when direct git access is blocked. It uses the GitHub REST API and can fall back to Playwright-based browser automation. Supports incremental updates, proxy detection, detailed logging, and works across Windows, Linux, and macOS.',
    link: { href: `${process.env.NEXT_PUBLIC_GITHUB_URL}/gitBridge`, label: 'github.com' },
    logo: logoGitBridge,
  },
  {
    name: 'Simple Document Question-Answering RAG',
    description:
      'A lightweight Retrieval-Augmented Generation system for document-based question-answering. Includes containerized deployment, notebook interfaces, and extensions for experimentation.',
    link: { href: `${process.env.NEXT_PUBLIC_GITHUB_URL}/document-rag`, label: 'github.com' },
    logo: logoDocRag,
  },
]

// Helper function to get random projects
export function getRandomProjects(count: number): Project[] {
  const shuffled = [...projects].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, projects.length))
}