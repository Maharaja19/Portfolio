# 🚀 Maharaja Portfolio

A world-class, premium, and production-ready React portfolio designed with modern aesthetics (Google/Stripe/OpenAI level). It features high-fidelity smooth transitions, custom interactive case studies, dynamic API explorers, live GitHub/LeetCode sync modules, and a global documents center.

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=vercel&logoColor=white)](https://Maharaja19.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Maharaja19/Maharaja19)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)
[![Last Updated](https://img.shields.io/badge/Last_Updated-July_2026-orange?style=for-the-badge)](https://github.com/Maharaja19/Maharaja19/commits/main)

---

## 📖 Overview

This portfolio serves as a central hub to showcase Maharaja M's professional milestones. It was built to demonstrate:
- High-quality React SPA routing concepts (using dynamic URL hash parsing).
- Clean full-stack-inspired design systems (glassmorphic elements, HSL custom color arrays).
- Advanced document routing centers, mapping original verified certificates and job simulation reports.
- Real-time client-side integrations (GitHub REST endpoints, LeetCode profile statistics hooks).

---

## ✨ Features

<details>
<summary><b>🔍 Expand to View Complete Features List</b></summary>

- **Responsive Design**: Mobile-first fluid grids scaling seamlessly from smart screens to 4K displays.
- **Dark/Light Theme**: Sleek glassmorphic theme controller persisted via localStorage.
- **Animated UI**: Floating keyframe animations, smooth scrolling behaviors, and entrance cascades using Framer Motion.
- **Glassmorphism**: Glassmorphic panels with blur-filters and custom neon glows.
- **Interactive Project Case Studies**: Immersive full-length project pages showing REST API explorers and MongoDB schemas.
- **Certifications Registry**: Filterable, searchable, and verification-linked grid showcasing professional credentials.
- **Internship Timeline**: Scroll-observed Bluekode experience timeline with workspace photos and recommendation letter links.
- **Achievements & Incubation**: Dedicated sections illustrating GCT CSE Association duties and DCKAP startup MVP approvals.
- **Coding Profiles**: Interactive activity heatmaps and solved problem meters.
- **Resume Center**: Direct access to Maharaja's original resume file under `/documents/resume/`.
- **Sandbox Contact Form**: Secure EmailJS dispatch form that triggers confetti on successful message transfers.
- **SEO & PWA Optimized**: Dynamic sitemaps, robots configurations, manifest files, and Person JSON-LD schema layouts.
</details>

---

## 📸 Screen Mockups

> [!NOTE]
> Add screenshots of your live deployment to the corresponding paths in `/public/images/projects/` to render previews.

| Section | Preview Placeholder |
| :--- | :--- |
| **Home** | `![Home Preview](/public/images/projects/home.png)` |
| **About** | `![About Preview](/public/images/projects/about.png)` |
| **Projects** | `![Projects Grid](/public/images/projects/projects.png)` |
| **Voting System Case Study** | `![Voting System Study](/public/images/projects/voting_case_study.png)` |
| **SEIP Case Study** | `![SEIP Case Study](/public/images/projects/seip_case_study.png)` |
| **Smart Play Bank Case Study** | `![Smart Play Bank Study](/public/images/projects/smart_play_case_study.png)` |
| **Certifications** | `![Certifications Preview](/public/images/projects/certificates.png)` |
| **Experience** | `![Experience Preview](/public/images/projects/experience.png)` |
| **Contact** | `![Contact Preview](/public/images/projects/contact.png)` |

---

## 📂 Folder Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated Actions runner
├── Certificates/               # Backup of original source certificates
├── public/
│   ├── documents/              # Mapped original PDFs and photos
│   │   ├── resume/             # Maharaja_resume.pdf
│   │   ├── certificates/       # IBM cloud/devops, JPMorgan, NPTEL, EBPL
│   │   ├── internship/         # Bluekode certificates and experience letters
│   │   ├── academic/           # 4th and 5th sem grade sheets
│   │   └── achievements/       # DCKAP Incubation cohort approvals
│   ├── images/
│   │   ├── profile/            # Maharaja.jpeg and avatar.svg
│   │   └── college/            # college.png (GCT logo)
│   ├── favicon.svg
│   ├── manifest.json           # Progressive web app mapping
│   └── robots.txt
├── src/
│   ├── components/             # Theme switchers, particles, navigation, counters
│   ├── data/
│   │   ├── portfolioData.js          # Main biography and credentials dataset
│   │   └── projectCaseStudiesData.js # API models and schemas for case studies
│   ├── hooks/                  # LocalStorage hooks and layout reveal checks
│   ├── pages/
│   │   ├── Documents.jsx             # Central download page
│   │   ├── ProjectCaseStudy.jsx      # Interactive project details page
│   │   └── NotFound.jsx              # Custom routing fallback
│   ├── sections/               # Sections (Hero, About, TechStack, Certifications...)
│   ├── utils/                  # EmailJS configuration endpoints
│   ├── App.jsx                 # Routing controller & page layouts orchestrator
│   ├── index.css               # Global Tailwind directives & keyframe modifiers
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Tech Stack & Libraries

* **Frontend Framework**: React.js (v19) + Vite (v8) + TypeScript
* **Styling**: Tailwind CSS + Custom Vanilla CSS
* **Animations**: Framer Motion
* **Vector Graphics**: React Icons (Fa, Fi, Si, Io)
* **Email Broker**: EmailJS Client SDK
* **Visual Effects**: Canvas Confetti
* **Deployment**: GitHub Pages (automated deploy action)

---

## 💻 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/Maharaja19/Maharaja19.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

---

## 🚀 Building & Production Compilation

To bundle and compile optimized static assets for production:
```bash
npm run build
```
Vite will output minified, code-split resources directly into the `dist/` directory.

---

## 🌎 GitHub Pages Deployment

The application features a pre-configured automation script. When you push to the `main` branch, the GitHub Actions runner will automatically build and publish your project:

1. Push your local files to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository settings on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. The workflow defined in [deploy.yml](.github/workflows/deploy.yml) will trigger instantly, compiling and deploying the website.

---

## 🛠️ Customization Guide

<details>
<summary><b>🔧 Expand to View Customization Details</b></summary>

### Changing Profile Image
Replace `/public/images/profile/Maharaja.jpeg` with your photograph (maintain the same filename or update the paths inside `src/sections/About.jsx` and `src/sections/Hero.jsx`).

### Updating Resume
Replace `/public/documents/resume/Maharaja_resume.pdf` with your updated PDF file.

### Adding New Projects
1. Open `src/data/portfolioData.js` and add a new entry to the `projects` array.
2. To add a deep case study, open `src/data/projectCaseStudiesData.js` and configure matching parameters (Overview, APIs, MongoDB Schemas, Challenges, and SVGs) under the corresponding key.

### Adding Certificates
1. Copy the PDF file to `public/documents/certificates/`.
2. Open `src/data/portfolioData.js` and append a new certificate node to the `certificationData` array.

### Customizing Color Schemes
Open `src/index.css` and customize theme parameters inside the `:root` and `.dark` blocks, or adjust Tailwind color aliases inside `tailwind.config.js`.

### Updating Social Links
Open `src/data/portfolioData.js` and update URLs within the `personalDetails` block (github, linkedin, leetcode, hackerrank, email).
</details>

---

## ⚡ Performance Optimization

- **Lighthouse Rating**: Targeted 95+ score.
- **Lazy Loading**: Applies `loading="lazy"` tags on screens, screenshots, and credentials thumbnails.
- **Code Splitting**: Dynamic chunks division to minimize bundles sizes.
- **Tailwind Compression**: Automated unused CSS purging on build runtime.

---

## 🔍 SEO Best Practices

- **JSON-LD Schema**: Dynanically appends Google Person schemas and SoftwareApplication definitions.
- **Open Graph (OG)**: Fully mapped cards providing beautiful cards on LinkedIn, Twitter, and Slack redirects.
- **Robots.txt & Sitemap**: Structured for search crawlers indexing.

---

## 🗺️ Future Roadmap

- [ ] **Blog Engine**: Integrated Markdown-based technical blog interface.
- [ ] **Admin Console**: CMS dashboard built on Firebase for editing listings.
- [ ] **Visitor Metrics**: Live counter API integration showing user views.
- [ ] **AI Assistant Chatbot**: Integrated dialogue window offering instant interview responses based on profile data.

---

## 📨 Contact Connections

* **Website**: [Maharaja Portfolio](https://Maharaja19.github.io/portfolio/)
* **LinkedIn**: [Maharaja Murugakumar](https://www.linkedin.com/in/maharaja-murugakumar)
* **GitHub**: [@Maharaja19](https://github.com/Maharaja19)
* **LeetCode**: [@raja_19](https://leetcode.com/u/raja_19/)
* **HackerRank**: [@m_maharaja1964](https://www.hackerrank.com/profile/m_maharaja1964)
* **Email**: m.maharaja1964@gmail.com

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.
