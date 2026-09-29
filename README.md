# Shubham — Personal Portfolio

A personal portfolio website showcasing work across technology, web development, AI, business automation, creative work, freelancing, and YouTube.

## Overview

This portfolio brings together my multidisciplinary work and experience in one place, with dedicated sections for:

- About
- Experience
- Capabilities
- Featured Work
- Web Projects
- Technical Projects
- Automation Projects
- Creative Work
- Freelance Work
- YouTube Work
- Resume
- Contact

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Features

- Responsive portfolio experience
- Structured project and work pages
- Dedicated work categories
- Automation project showcase
- Resume page with downloadable PDF
- Fiverr work showcase
- YouTube work showcase
- Clean, minimal interface
- GitHub-connected deployment workflow

## Project Structure

```text
app/
├── about/
├── resume/
└── work/
    ├── automation/
    ├── creative/
    ├── freelance/
    ├── technical/
    ├── web/
    └── youtube/

components/
├── Capabilities.tsx
├── Contact.tsx
├── Experience.tsx
├── ExploreWork.tsx
├── FeaturedWork.tsx
├── Footer.tsx
├── Hero.tsx
├── Introduction.tsx
├── Navbar.tsx
├── Resume.tsx
└── portfolioData.ts

public/
├── fiverr/
├── youtube/
└── Resume_2026.pdf
```

## Local Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Production

The portfolio is deployed through Vercel and connected to the `master` branch of the GitHub repository.

Production workflow:

```text
Local changes
    ↓
Git commit
    ↓
Push to master
    ↓
GitHub
    ↓
Vercel automatic deployment
```

Future production updates can be made with:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Author

**Shubham**

Computer Engineering graduate working across technology and creativity, with experience spanning web development, Python, SQL, AI-assisted workflows, business automation, freelancing, content creation, and digital projects.
