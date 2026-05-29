<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Sindhav%20Dinesh&fontSize=52&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Frontend%20Developer%20%7C%20React%20Specialist&descAlignY=55&descSize=18" width="100%" />

# ⚡ Plain JavaScript React Developer Portfolio
### 🚀 Built with React, JSX, GSAP, and Custom CSS (No TypeScript / Syllabus-Aligned)

**`Frontend React Developer | BCA Student | UI/UX Enthusiast | Code. Create. Innovate.`**

<br/>

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

<br/>

### 🌐 [**View Live Portfolio**](https://void-by-sindhav.vercel.app/) &nbsp;•&nbsp; 📦 [**GitHub Repo**](https://github.com/sindhavdinesh/react-portfolio-project)

<br/>

</div>

---

## 📸 Preview

<div align="center">

> **A premium, high-fidelity developer portfolio** featuring immersive fluid animations, a custom 3D floating interactive Skill Cloud, seamless Dark/Light theme switching, and a custom CSS responsive structure designed according to clean first-year university standards.

</div>

---

## 🎯 About This Project

This project represents my **personal React developer portfolio**, built completely from scratch using standard **JavaScript (ES6+) and JSX** to demonstrate clean structure, modular state flow, and performance-centric layouts. 

It is carefully refactored to align 100% with university syllabus requirements (relying on raw CSS, Flexbox, custom Media Queries, and native state management) while maintaining a premium, production-level modern design.

> *"Simplifying complexity, writing scaleable code, and designing interfaces that feel alive."*

---

## ✨ DHANSU FEATURES (What Makes It Stand Out!)

<table>
<tr>
<td width="50%" valign="top">

### 🌀 Interactive 3D Skill Arena Cloud
- **GSAP-powered mouse parallax** that shifts skill icons on X and Y axes depending on depth values (`0.3` / `0.55` / `0.8`).
- Smooth, micro-animated floating hover effects.
- Dynamic tooltips displaying custom categories and proficiency ratings.
- **Mobile Responsive Fallback**: Automatically collapses into a sleek, wrap-around pill grid using CSS Flexbox for optimal mobile layout integrity.

### 🌓 Seamless Dark & Light Mode
- Integrated using React **Context API** (`ThemeContext`).
- Smooth transition variables saved directly in CSS custom properties for absolute consistency.
- Automatically caches preference in local storage for subsequent visits.

### 📂 Filterable Projects Gallery
- Standard, clean project list with category filtering (Frontend, Styling, Database, Languages, etc.).
- Image zoom on hover with sleek linear-gradient overlays.
- Standard clickable **GitHub** and **Live Demo** CTA buttons, always visible.

</td>
<td width="50%" valign="top">

### 👤 Sleek About & Timeline Section
- Custom styled personal details showing years of experience, qualification, and contact details.
- Sleek vertical timeline detailing academic achievements and practical experience.
- Immersive entrance scroll animations using Framer Motion.

### 🏆 Custom Lightbox Certificate Viewer
- Beautifully structured Certificates section.
- **Interactive Lightbox**: Opens full-scale high-resolution certificate images on click with simple overlay close mechanisms.
- Clean category badges showing Professional, Cloud, and Academic labels.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack & Configuration

<div align="center">

| Category | Technology | Version | Description |
|---|---|---|---|
| ⚛️ **UI Library** | React | `19.2.6` | Modern UI rendering using standard JSX components |
| 🟨 **Language** | JavaScript (ES6+) | Modern | 100% plain JS, complying with college curriculum rules |
| ⚡ **Build Tool** | Vite | `8.0.12` | Instant hot module replacement and lightning fast compiling |
| 🎞️ **Motion Engine** | Framer Motion | `12.40.0` | Immersive animations and layout slide transitions |
| 🌿 **Scroll Engine** | GSAP | `3.15.0` | Ultra-smooth mouse parallax coordinate shifting |
| 🔀 **Routing** | React Router DOM | `7.15.1` | Single Page Application multi-page rendering |
| 🎨 **Styling** | CSS Modules / Vanilla CSS | Standard | Modular styling classes keeping variables fully clean |
| 🖼️ **Icons** | React Icons | `5.6.0` | Unified font icon packages |

</div>

---

## 📁 Optimized Project Structure

```
React portfolio project/
├── public/
│   ├── images/
│   │   ├── certificates/          # High-resolution certificates
│   │   │   ├── cert-redwhite.jpeg
│   │   │   ├── cert-forage-jpmorgan.jpeg
│   │   │   ├── cert-aws-forage.jpeg
│   │   │   └── cert-hsc.jpeg
│   │   └── projects/              # Full-scale project screenshots
│   │       ├── flixvault.png
│   │       ├── ecommerce.png
│   │       ├── weather.png
│   │       ├── quiz.png
│   │       ├── dashboard.png
│   │       └── todo.png
│   └── Sindhav_Dinesh_Resume.pdf
│
├── src/
│   ├── components/
│   │   ├── about/                 # Biography & Timeline
│   │   ├── certificates/          # Certificates & Lightbox Viewer
│   │   │   ├── Certificates.jsx
│   │   │   └── Certificates.module.css
│   │   ├── common/                # Reusable UI Buttons & Loaders
│   │   ├── home/                  # Animated Hero and Skill Orbiters
│   │   │   └── Hero/
│   │   ├── layout/                # Responsive Shell, Navbar & Footer
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── MobileMenu.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── projects/              # Projects Showcase
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectCard.module.css
│   │   │   └── ProjectFilter.jsx
│   │   └── skills/                # 🛠️ Skills cloud arena
│   │       ├── SkillsCloud.jsx
│   │       └── SkillsCloud.module.css
│   │
│   ├── context/                   # Context states
│   │   ├── SliderContext.jsx      # Carousel state
│   │   └── ThemeContext.jsx       # Theme state (Light/Dark)
│   │
│   ├── data/                      # Clean mock data files
│   │   ├── projectsData.js        # Showcase projects data
│   │   ├── personalInfo.js        # Personal details
│   │   └── skillsData.js          # Skills details
│   │
│   ├── pages/                     # Route-level pages
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── App.jsx                    # Core App component
│   └── main.jsx                   # Entry script
│
├── index.html
├── vite.config.js                 # Plain JS Vite Config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `≥ 18.0`
- npm installed locally

### Installation

```bash
# 1. Open the project folder
cd "React portfolio project"

# 2. Install all necessary dependencies
npm install

# 3. Spin up the development server instantly
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Vite production compiling (Pure JS)
npm run build

# Preview build locally
npm run preview
```

---

## 📜 Verified Qualifications

| Certificate | Issuer | Year | Verification |
|---|---|---|---|
| 🏆 TECHWAR 2026 — C Tsunami | Red & White Skill Education | 2026 | [View Badge](file:///C:/React%20work/React%20portfolio%20project/public/images/certificates/cert-redwhite.jpeg) |
| 💼 Software Engineering Job Simulation | JPMorgan Chase & Co. via Forage | 2026 | [View Badge](file:///C:/React%20work/React%20portfolio%20project/public/images/certificates/cert-forage-jpmorgan.jpeg) |
| ☁️ Solutions Architecture Job Simulation | Amazon Web Services via Forage | 2026 | [View Badge](file:///C:/React%20work/React%20portfolio%20project/public/images/certificates/cert-aws-forage.jpeg) |
| 🎓 Vishisht Siddhi Sanmanpatra | B.N.B. High School, Vav | 2025 | [View Badge](file:///C:/React%20work/React%20portfolio%20project/public/images/certificates/cert-hsc.jpeg) |

---

## 💼 Core Showcase Projects

| Project Name | Technology Stack | Source Code | Interactive Demo |
|---|---|---|---|
| 🎬 **FlixVault** — Netflix Clone | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/FlixVault) | [Live Demo](https://flixvault-net-clone.netlify.app/) |
| 🛒 **E-Commerce Platform** | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/e-commerce%20product%20page) | [Live Demo](https://ecommerce-platform-app.netlify.app/) |
| 🌤️ **Weather Portal** | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Wheather%20App) | [Live Demo](https://wheather-app-project-linkdin.netlify.app/) |
| ❓ **Quiz Application** | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Quiz%20App) | [Live Demo](https://quiz-app-livein.netlify.app/) |
| 📊 **Modern Dashboard UI** | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Dashboard%20UI) | [Live Demo](https://dashboard-project-ui.netlify.app/) |
| ✅ **Advanced To-Do Tracker** | HTML5, CSS3, JavaScript | [GitHub Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/To-do-advance%20App) | [Live Demo](https://todo-advance-application.netlify.app/) |

---

## 🛠️ Comprehensive Skills Radar

```
Frontend   ████████████████████  HTML5 (95%) • CSS3 (90%) • JS (88%) • React (85%)
Styling    ████████████████░░░░  Bootstrap (88%) • Media Query (85%)
Backend    ███████████████░░░░░  Node JS (78%)
Language   ██████████████░░░░░░  Python (80%) • C (72%) • C++ (70%)
Tools      ████████████████░░░░  Git (85%) • GitHub (88%) • VS Code (95%) • Sheets (80%)
Creative   █████████████░░░░░░░  Photoshop (70%) • Premiere Pro (65%)
```

---

## 🔗 Let's Connect!

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-void--by--sindhav-FF4444?style=for-the-badge&logo=vercel&logoColor=white)](https://void-by-sindhav.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-sindhavdinesh-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sindhavdinesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dinesh_Sindhav-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dinesh-sindhav-41315a362/)
[![Twitter](https://img.shields.io/badge/Twitter-@Sind35407Dinesh-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Sind35407Dinesh)
[![Instagram](https://img.shields.io/badge/Instagram-mr__coder__dinesh-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/mr_coder_dinesh)
[![Email](https://img.shields.io/badge/Email-sindhavdinesh82@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sindhavdinesh82@gmail.com)

</div>

---

## 📄 License

Distributed under the **MIT License**. Feel free to use this as a reference or template to display your academic projects!

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%" />

**Made with ❤️ by [Sindhav Dinesh](https://github.com/sindhavdinesh)**

*Code. Create. Innovate.*

⭐ **Star this repo if you loved this design!** ⭐

</div>
