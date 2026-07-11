# Maharaja M | Premium Portfolio Website

A world-class, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with premium aesthetics matching Google, Stripe, and OpenAI-level engineering.

## 🚀 Features

- **Stylized Boot Terminal Loader**: Simulated initial system setup count-up.
- **Glassmorphism Theme Switcher**: Class-based dark and light theme controls.
- **Smooth Trailing Custom Cursor**: Circle ring trailing cursor that expands over clickable nodes.
- **Dynamic Background Particles**: High-performance interactive canvas element.
- **System Architecture Modals**: Sliding panels for project specs containing Problem Statements, Solutions, Contributions, and future improvements.
- **Live GitHub Sync**: Integrates with the GitHub REST API to fetch public profiles and active repositories.
- **Interactive LeetCode Dashboard**: Customizable progress graphs and an active activity heatmap.
- **EmailJS Integrated Contact Form**: Live validation checks, loading state handlers, and celebratory confetti drops on success.
- **SEO Optimized & PWA Ready**: Custom JSON-LD schema schemas, Open Graph tags, sitemap paths, and manifest configurations.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v3 + PostCSS + Autoprefixer
- **Animations**: Framer Motion
- **Icons**: React Icons (Fi, Fa, Si)
- **Form dispatch**: EmailJS Browser SDK
- **Effects**: Canvas Confetti

---

## 📂 Directory Layout

```
portfolio/
├── public/
│   ├── images/
│   │   ├── voting/          # Secure Voting System screenshots
│   │   ├── seip/            # Smart Expense screenshots
│   │   ├── smartplaybank/   # Smart Play Bank screenshots
│   │   ├── certificates/    # Verified credentials
│   │   └── profile/         # Avatar / Profile illustrations
│   ├── favicon.ico
│   ├── resume.pdf           # Downloadable resume sheet (replace with your own)
│   ├── robots.txt
│   └── manifest.json        # PWA setup
├── src/
│   ├── assets/              # Icons, logos, and illustration variables
│   ├── components/          # Trailing cursor, particles, switcher, scroll-bars
│   ├── data/                # Static biography text, timeline datasets
│   ├── hooks/               # Local persistence and scroll observer callbacks
│   ├── pages/               # Routing fallbacks (e.g. NotFound page)
│   ├── sections/            # Visual compartments (Hero, About, TechStack, Projects, Contact...)
│   ├── utils/               # Configuration constants (EmailJS variables)
│   ├── index.css            # Tailwind directives, custom scrollbars, keyframe definitions
│   └── App.jsx              # Orchestrates loaders, route matches, and component sequences
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Startup Dev Server
```bash
npm run dev
```

### 3. Build & Compile for Production
```bash
npm run build
```

---

## 📨 EmailJS Contact Form Setup

To make the contact form live, perform these adjustments:
1. Register on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Open `src/utils/emailConfig.js` and input your keys:
   ```javascript
   export const emailConfig = {
     serviceId: "YOUR_SERVICE_ID",
     templateId: "YOUR_TEMPLATE_ID",
     publicKey: "YOUR_PUBLIC_KEY"
   };
   ```
If keys remain default, the application will degrade gracefully to **sandbox mode**, simulating successful dispatches locally.

---

## 🌎 Deployment Setup (GitHub Pages)

This repository is optimized for relative assets, meaning builds will compile with correct references on custom sub-paths.

### Automated Deployment via GitHub Actions
We provide an automated workflow.
1. Create a directory named `.github/workflows` in the root.
2. Store a file named `deploy.yml` inside.
3. Commit and push:
   - Make sure your repository settings have **Settings > Pages > Build and deployment > Source** set to **GitHub Actions**.
   - The action will build the application using Node and automatically publish the static folder to the `gh-pages` branch.
