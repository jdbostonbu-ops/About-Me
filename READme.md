# Jacqueline Delgado — AI Software Engineer 🛡️

A personal landing page with portfolio built to tell the full story — 15+ years of real-world pattern recognition, risk analysis, and systems design, now channeled into full-stack AI development. This landing page is itself a demonstration of the skills it describes.

## 👤 Author
**Jacqueline**
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)
🚀 **[Visit My Portfolio](https://jdbostonbu-ops.github.io/About-Me/)**

<p align="center">
  <img src="aboutme.gif" alt="Portfolio Demo" width="600">
</p>

## 🌐 Browser & Device Compatibility

| Browser / Device | Status | Performance Notes |
| :--- | :--- | :--- |
| **Google Chrome** | ✅ Optimized | Full support — animations, flip cards, stat counters, hover reveals. |
| **Microsoft Edge** | ✅ Optimized | Matches Chrome rendering engine exactly. |
| **Firefox** | ✅ Supported | Full feature support. Minor font rendering differences. |
| **Apple Safari (macOS)** | ✅ Supported | All features functional including glassmorphic blur. |
| **Safari (iPhone 17 OS)** | ✅ Supported | Touch interactions, smooth scroll, and hover cards fully functional. |
| **iPad / iPadOS** | ✅ Supported | Responsive grid adapts correctly to tablet viewports. |
| **Android Chrome** | ✅ Supported | Full mobile compatibility. |

## 🌟 Key Features

- **`// JD const dev = true` Logo:** Custom code-block nav logo with a blinking cursor animation built in pure CSS — no JavaScript, no image files.
- **180° About Flip Cards:** Three career chapter cards using `transform: rotateY(180deg)` with `transform-style: preserve-3d` and `backface-visibility: hidden` — hover to reveal how each chapter shaped the engineer.
- **Hover-Reveal Education Cards:** Seven credential cards using pure CSS opacity switching — the same technique as the exotic travel project. Front shows the credential name and tags, hover reveals the full description and context.
- **Animated Stat Counter Strip:** `15+ / 8 / 4+ / 1` counting up from zero using a cubic ease-out function triggered by `IntersectionObserver` when the strip scrolls into view.
- **Skill Card Tilt Effect:** Mouse-tracking 3D tilt on skill cards using `perspective(1000px) rotateX() rotateY()` driven by `mousemove` event coordinates.
- **Scroll Reveal Sections:** All major sections fade up from `translateY(30px)` using `IntersectionObserver` — no scroll event listeners.
- **Zero Dependencies:** Pure Vanilla HTML5, CSS3, and JavaScript ES6+ — no frameworks, no build tools, no npm.

## 🎨 Design System

- **Background:** Deep navy `#0a0e1a` with radial gradient overlays in indigo, purple, and cyan
- **Accent:** Indigo `#6366f1` · Purple `#8b5cf6` · Cyan `#06b6d4`
- **Gradient:** `linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)` — used on the hero name, stat numbers, card top bars, and buttons
- **Typography:** Inter (UI) + JetBrains Mono (code elements, tags, labels)
- **Cards:** `#131826` background · `rgba(99,102,241,0.15)` border · `border-radius: 20px`
- **Nav:** `backdrop-filter: blur(12px)` glassmorphic sticky bar

## 📋 Sections

- **`// 01 — About`** — Centered paragraph + three 180° flip cards revealing how the Insurance Agency and DHS career chapters shaped my engineering mindset
- **`// 02 — Skills`** — Eight skill cards with mouse-tracking 3D tilt covering Full-Stack, AI Integration, Cloud & DevOps, Backend, Python, Cybersecurity, Geospatial, and Workflow Automation
- **`// 03 — Projects`** — Eight deployed projects as pill links: ReliefMesh, Dev Play, APEXwallet, Frame Forge, Dog Walking Business, SwiftDraft for Outlook, Image-Reveal Project, SolveSync
- **`// By the Numbers`** — Animated stat counter strip: 15+ Years · 8 Projects · 4+ Credentials · 1 Apprenticeship
- **`// 05 — Education & Credentials`** — Seven hover-reveal cards: Next Chapter Apprenticeship, (ISC)² CC, W3Schools, LaunchCode, Google & Mozilla MDN, Boston University MS, Mitchell College BA
- **`// 04 — Contact`** — Email, GitHub, Google Developer Portfolio, Location

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+) — `IntersectionObserver`, `requestAnimationFrame`, `mousemove` tilt, smooth scroll, stat counter easing
- **Styling:** CSS3 — Custom Properties, CSS Grid, Flexbox, `transform-style: preserve-3d`, `backdrop-filter`, `@keyframes`, `cubic-bezier` easing, `clip-path`, blinking cursor animation
- **Typography:** Inter + JetBrains Mono via Google Fonts
- **Storage:** No backend, no cookies, no localStorage — stateless on every load
- **Deployment:** GitHub Pages — zero-config static hosting

## 🚀 The User Flow

- **Land** → hero with gradient name, bilingual badge, and CTA buttons
- **Scroll to About** → three flip cards reveal the career-to-engineering connection
- **Scroll to Skills** → eight tilt-responsive skill cards with tags and gradient top bars on hover
- **Scroll to Projects** → eight pill links to live deployed projects
- **Scroll to Numbers** → stat counters animate from zero as they enter the viewport
- **Scroll to Education** → seven credential cards expand on hover revealing full descriptions
- **Scroll to Contact** → direct links to email, GitHub, and Google Developer Portfolio

## 🎓 Background

This portfolio represents a non-traditional path into software engineering — 12 years running a full-service insurance agency (systems design, data modeling, risk analysis) and 3 years as a Behavior Detection & Analysis Officer with the Department of Homeland Security (real-time anomaly detection, pattern classification, threat modeling) — all now applied to building scalable, AI-powered applications and Certified in Cybersecurity.

⭐ Explore the projects linked above and follow along as the portfolio grows.