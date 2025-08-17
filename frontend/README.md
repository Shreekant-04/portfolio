# Portfolio - React Router & Vite

A modern, production-ready personal portfolio built with React Router and Vite. Showcasing projects, skills, certifications, and contact information.

![Portfolio Screenshot](public/og-image-home.png)

## Features

- ⚡️ Fast, optimized, and SEO-friendly
- 🛠️ Built with React Router and TypeScript
- 🎨 Tailwind CSS for rapid UI development
- 📱 Responsive and mobile-friendly
- 🏆 Dynamic skills and certifications (fetched from backend)
- 🗂️ Project showcase with images
- 📬 Contact page
- 🧩 Modular component structure
- 🐳 Docker-ready for deployment
- 🕸️ PWA support (manifest, favicons, offline-ready)
- 📈 Analytics and performance insights (Vercel Analytics, Speed Insights)

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

#### Docker

Build and run with Docker:

```bash
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

#### Other Platforms

You can deploy the build output to any static hosting or Node.js server, including Vercel, Netlify, AWS, Azure, DigitalOcean, and more.

### PWA & SEO

- Includes manifest.json, favicons, robots.txt, and sitemap.xml for SEO and PWA support.
- Meta tags for Open Graph and Twitter Cards are set up for all main pages.

## Folder Structure

```
app/
  components/         # React components (Navbar, Sidebar, Home, Projects, Skills, Contact, etc.)
  routes/             # Route files for each page
  assets/             # Images and icons
public/
  favicon*.ico        # Favicons
  manifest.json       # PWA manifest
  og-image-*.png      # Open Graph images
  robots.txt          # Robots file
  sitemap.xml         # Sitemap
```

Built with 🧠 by Shreekant.
