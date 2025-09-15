# GitHub Actions Workflows

## Overview

This directory contains GitHub Actions workflows for CI/CD automation.

## Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)

Runs on every push to `main` and on pull requests.

**Jobs:**
- **Lint & Type Check**: Validates code quality and TypeScript types
- **Build & Test**: Builds the Next.js application
- **Deploy to Cloudflare Pages**: Automatically deploys to Cloudflare Pages on push to main branch

### 2. Dependency Review (`dependency-review.yml`)

Runs on pull requests to check for vulnerable dependencies.

## Required GitHub Secrets

To use these workflows, add the following secrets to your GitHub repository:

### Core Secrets (Required for Build)
- `NEXT_PUBLIC_SITE_URL` - Your website URL (e.g., https://nevedomski.us)
- `NEXT_PUBLIC_AUTHOR_NAME` - Your full name
- `NEXT_PUBLIC_AUTHOR_EMAIL` - Your email address
- `NEXT_PUBLIC_TITLE` - Your professional title
- `NEXT_PUBLIC_LOCATION` - Your location
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL

### Cloudflare Pages Deployment Secrets (Required)
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token (with Pages:Edit permission)
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

## Getting Cloudflare Credentials

### 1. Get Cloudflare Account ID
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain (or any domain)
3. On the right sidebar, find your **Account ID**
4. Copy this value

### 2. Create Cloudflare API Token
1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use **Custom token** template
4. Configure permissions:
   - **Account** → Cloudflare Pages:Edit
   - **Zone** → Zone:Read (optional, for custom domain)
5. Click **Continue to summary** → **Create Token**
6. Copy the token (you won't see it again!)

## How to Add Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each secret with its corresponding value

## Activating Cloudflare Pages Deployment

The deployment is already configured and will activate once you:

1. Add all required GitHub secrets (see above)
2. Create a Cloudflare Pages project (if not already created)
3. Push to the `main` branch

### First-Time Cloudflare Pages Setup

If you haven't created a Cloudflare Pages project yet:
1. The first deployment will automatically create it
2. Project name is set to "portfolio" in the workflow
3. After first deployment, configure custom domain in Cloudflare Pages dashboard

## Local Testing

To test the build locally with the same environment:

```bash
# Load environment variables
source .env.local

# Run build
bun run build

# Run linting
bun run lint

# Type check
bunx tsc --noEmit
```

## Customization

### Branch Protection

Consider enabling branch protection rules:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable "Require status checks to pass before merging"
4. Select the workflow jobs you want to require

### Deployment Triggers

The deployment jobs are configured to run only on:
- Push to `main` branch
- Not on pull requests

Modify the `if:` conditions in the workflow to change this behavior.