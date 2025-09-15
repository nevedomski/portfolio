# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features dark mode support, MDX for content authoring, and optimized performance.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org) with React 19.1.1
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) 
- **Language**: TypeScript
- **Package Manager**: Bun
- **Deployment**: Cloudflare Pages

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- Bun package manager (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Create a `.env.local` file with your configuration:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_AUTHOR_NAME=Your Name
NEXT_PUBLIC_AUTHOR_EMAIL=your.email@example.com
NEXT_PUBLIC_TITLE=Your Professional Title
NEXT_PUBLIC_LOCATION=Your Location
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

4. Run the development server:
```bash
bun run dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

### Project Structure

```
portfolio/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # Reusable React components
│   ├── lib/          # Utility functions and data
│   ├── images/       # Image assets
│   └── styles/       # Global styles and Tailwind config
├── public/           # Static files (resume, etc.)
├── .env.local        # Environment variables (create this)
└── eslint.config.mjs # ESLint flat config
```

## 📄 License

This project uses a dual-license structure:

### Template License
The base template (Spotlight) is a commercial product from [Tailwind Plus](https://tailwindcss.com/plus) and is subject to the [Tailwind Plus Personal License](./LICENSE-TAILWIND.md). This includes:
- Original component structures
- Base layouts and routing patterns
- Design system and UI components

### Custom Code License
All personal modifications, customizations, and additions are licensed under the MIT License. This includes:
- Custom content and personal information
- Project data and configurations
- Custom components and features
- Environment variable setup

See [LICENSE](./LICENSE) for the complete licensing details.

## 🎨 Customization

### Adding Projects
Edit `/src/lib/projects.ts` to add or modify projects displayed on the portfolio.

### Updating Resume
Replace `/public/resume2025.pdf` with your updated resume file.

### Modifying Content
- Homepage bio: Edit `/src/app/page.tsx`
- About page: Edit `/src/app/about/page.tsx`
- Work experience: Update the `resume` array in `/src/app/page.tsx`

## 🚀 Deployment

This site is optimized for deployment on Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `bun run build` or `npm run build`
3. Set output directory: `.next`
4. Add environment variables in Cloudflare Pages settings

## 🤝 Attribution

- Base template: [Spotlight](https://tailwindcss.com/plus) by Tailwind Labs Inc.
- Modifications and customizations by Sergei Nevedomski

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)
- [Headless UI Documentation](https://headlessui.dev)