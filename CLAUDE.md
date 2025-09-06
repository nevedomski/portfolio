# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4. It uses the "Spotlight" Tailwind Plus template as a foundation and features MDX support for content authoring.

## Common Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture and Structure

### App Router Organization
The project uses Next.js 14's App Router with the following page structure:
- `/about` - About page showcasing background and experience
- `/articles` - Blog/article listing with individual MDX articles
- `/projects` - Portfolio projects showcase
- `/speaking` - Speaking engagements
- `/uses` - Tools and setup information

### Component Architecture
- **Layout Components**: `Layout.tsx`, `SimpleLayout.tsx`, and `ArticleLayout.tsx` provide consistent page structures
- **UI Components**: Located in `/src/components/`, following a pattern of accepting className props for styling flexibility
- **Container Pattern**: `Container.tsx` provides consistent max-width and padding across pages
- **Theme Support**: Uses `next-themes` for dark mode with `ThemeProvider` in `providers.tsx`

### Content Management
- Articles are written in MDX format in `/src/app/articles/[slug]/page.mdx`
- Article metadata and listing logic is handled in `/src/lib/articles.ts`
- RSS feed generation is implemented in `/src/app/feed.xml/route.ts`

### Styling Approach
- Tailwind CSS v4 with custom configuration in `typography.ts`
- Global styles in `/src/styles/tailwind.css` and `/src/styles/prism.css`
- Components use Tailwind utilities with `clsx` for conditional classes
- Consistent use of CSS variables for theming (e.g., `--background`, `--foreground`)

## Key Technical Patterns

### TypeScript Usage
- Strict TypeScript configuration with path aliases (`@/*` for `/src/*`)
- Consistent interface definitions for component props
- Type-safe article metadata handling

### MDX Integration
- Global MDX components configured in `mdx-components.tsx`
- Support for GitHub Flavored Markdown via `remark-gfm`
- Code syntax highlighting with `@mapbox/rehype-prism`

### Environment Configuration
Required environment variable:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Code Style
- Prettier configured with:
  - Single quotes
  - No semicolons
  - 80 character line width
  - Tailwind class sorting