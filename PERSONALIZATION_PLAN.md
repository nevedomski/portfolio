# Personalization Plan for nevedomski.us Portfolio

## Overview
Transform the Spotlight template into a personalized portfolio for nevedomski.us

## Information Needed from User

### Phase 1: Core Identity Updates ✅ COMPLETED
- [x] Full name: Sergei Nevedomski
- [x] Professional title: Principal Software Engineer – Machine Learning
- [x] Location: Pittsburgh, PA
- [x] Brief bio/description for meta tags
- [x] Domain confirmation: nevedomski.us
- [x] Email: sergei@nevedomski.us

### Phase 2: Content Replacement ✅ COMPLETED
- [x] **Homepage bio**: 2-3 sentences about yourself
- [x] **Work Experience**: List of companies with:
  - Company name
  - Your role/title
  - Employment dates
  - Company logo (optional)
- [x] **About page biography**: 3-4 paragraphs covering:
  - Background and how you got into tech
  - Professional journey
  - Current focus and interests
  - Personal interests/hobbies
  - What drives you/your mission

### Phase 3: Projects ✅ COMPLETED
- [x] List of projects with:
  - Project name
  - Brief description (1-2 sentences)
  - Link (GitHub, live site, etc.)
  - Logo/icon (optional)

### Phase 4: Social & Contact ✅ COMPLETED
- [x] GitHub username/URL
- [x] LinkedIn profile URL
- [x] X (Twitter) handle/URL (optional) - Skipped
- [x] Instagram handle/URL (optional) - Skipped
- [x] Email address for contact
- [x] Other professional links

### Phase 5: Visual Updates
- [ ] Professional headshot/avatar (square, for header)
- [ ] Portrait photo (for About page)
- [ ] 5 casual/working photos (for homepage gallery)
- [ ] Company logos (if available)
- [ ] Favicon (optional)

### Phase 6: Optional Sections
- [ ] **Speaking/Appearances**: List of talks with:
  - Talk title
  - Event name and year
  - Brief description
  - Link to video/slides
- [ ] **Uses/Tools**: Your setup:
  - Workstation (computer, monitors, desk)
  - Development tools
  - Design tools
  - Productivity tools
- [ ] **Articles/Blog**: 
  - Keep sample articles?
  - Add your own articles?
  - Hide section entirely?

## Implementation Plan

### Phase 1: Core Identity Updates
1. Update `/src/app/layout.tsx` - site metadata and title
2. Update `/src/app/page.tsx` - homepage name and tagline
3. Update `/src/app/about/page.tsx` - about page title
4. Update `/src/components/Footer.tsx` - footer copyright
5. Update `.env.local` - set NEXT_PUBLIC_SITE_URL to nevedomski.us
6. Search and replace all "Spencer Sharp" references
7. Update location references

### Phase 2: Content Replacement
1. Homepage (`/src/app/page.tsx`):
   - Bio section
   - Work experience section
   - Newsletter section (keep/remove?)
2. About page (`/src/app/about/page.tsx`):
   - Main headline
   - Biography paragraphs
   - Social links

### Phase 3: Projects Update
1. Update `/src/app/projects/page.tsx` with real projects
2. Add/update project logos in `/src/images/logos/`
3. Update project links and descriptions

### Phase 4: Social & Contact
1. Update social links in:
   - `/src/app/page.tsx`
   - `/src/app/about/page.tsx`
   - `/src/components/Footer.tsx`
2. Configure contact email

### Phase 5: Visual Updates
1. Replace `/src/images/avatar.jpg`
2. Replace `/src/images/portrait.jpg`
3. Replace photos in `/src/images/photos/`
4. Update `/src/app/favicon.ico`

### Phase 6: Optional Sections
1. Speaking page (`/src/app/speaking/page.tsx`)
2. Uses page (`/src/app/uses/page.tsx`)
3. Articles section (`/src/app/articles/`)

## Files to Update

### Critical Files (Phase 1)
- `/src/app/layout.tsx` - Site metadata
- `/src/app/page.tsx` - Homepage
- `/src/app/about/page.tsx` - About page
- `/src/components/Footer.tsx` - Footer
- `.env.local` - Environment variables

### Content Files (Phase 2-3)
- `/src/app/projects/page.tsx` - Projects
- `/src/app/speaking/page.tsx` - Speaking
- `/src/app/uses/page.tsx` - Tools/Uses
- `/src/app/feed.xml/route.ts` - RSS feed

### Image Assets (Phase 5)
- `/src/images/avatar.jpg`
- `/src/images/portrait.jpg`
- `/src/images/photos/` (5 images)
- `/src/images/logos/` (company/project logos)
- `/src/app/favicon.ico`

## Testing Checklist
- [ ] All pages load without errors
- [ ] All links work correctly
- [ ] Images display properly
- [ ] Dark mode toggle works
- [ ] Mobile responsive design
- [ ] Meta tags are correct
- [ ] RSS feed generates (if keeping blog)

## Deployment
- [ ] Set NEXT_PUBLIC_SITE_URL=https://nevedomski.us
- [ ] Build and test locally
- [ ] Deploy to hosting platform
- [ ] Configure domain DNS
- [ ] Verify SSL certificate
- [ ] Test live site

---
*Created: August 31, 2025*
*Last Updated: August 31, 2025*
*Status: Phases 1-4 COMPLETED | Phase 5 (Visual Updates) Pending*

## Completed Updates Summary

### ✅ Phase 1: Core Identity - COMPLETED
- Updated all references from "Spencer Sharp" to "Sergei Nevedomski"
- Changed title to "Principal Software Engineer – Machine Learning"
- Updated location to Pittsburgh, PA
- Updated email to sergei@nevedomski.us

### ✅ Phase 2: Content Replacement - COMPLETED
- **Homepage**: Added personalized bio focusing on ML/NER expertise
- **Work Experience**: Added PNC Bank and Distributor Service Inc. positions
- **About Page**: Replaced with 4-paragraph professional biography

### ✅ Phase 3: Projects - COMPLETED
- Added Mistral NER Fine-tuning Framework
- Added GitBridge synchronization tool
- Added Document RAG system

### ✅ Phase 4: Social & Contact - COMPLETED
- Updated GitHub: https://github.com/nevedomski
- Updated LinkedIn: https://www.linkedin.com/in/nevedomski/
- Updated email: sergei@nevedomski.us
- Added social links to Footer component

### ⏳ Phase 5: Visual Updates - PENDING
Still need to add:
- Professional headshot/avatar
- Portrait photo for About page
- Gallery photos for homepage
- Favicon update