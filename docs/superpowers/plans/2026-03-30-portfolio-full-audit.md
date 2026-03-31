# Portfolio Full Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all 30 identified bugs/anti-patterns, refactor to data-driven components, add scroll-reveal + entrance animations, add 2 new projects, and optimize the build.

**Architecture:** Work bottom-up — dependencies → build config → data layer → shared hooks/components → page components → animations. Each task is independently committable. No test framework exists; verification is `npm run lint` + `npm run build` + visual browser check after each task.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, react-router-dom v6, react-icons v5, react-typing-effect

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/data/projects.js` | Create | Static array of all 8 project objects |
| `src/data/skills.js` | Create | Static array of skill icon + label pairs |
| `src/data/navLinks.js` | Create | Static array of nav route definitions |
| `src/hooks/useInView.js` | Create | Intersection Observer hook for scroll-reveal |
| `src/Components/About/SkillIcon.jsx` | Create | Single skill tile with tooltip |
| `src/Components/Projects/ProjectCard.jsx` | Create | Single project card with hover animation |
| `index.html` | Modify | Fix favicons, add meta/OG/fonts |
| `vite.config.js` | Modify | Add alias, chunk splitting, imagemin |
| `tailwind.config.js` | Modify | Add darkMode: 'class', fix formatting |
| `eslint.config.js` | Modify | Re-enable jsx-no-target-blank |
| `public/site.webmanifest` | Modify | Set name/short_name |
| `src/index.css` | Modify | Add keyframes: fadeInUp, float, fadeIn |
| `src/App.jsx` | Modify | Router at module scope, React.lazy, Suspense |
| `src/Components/LoadingScreen/LoadingScreen.jsx` | Modify | Replace Triangle spinner with KA. pulse |
| `src/Components/StarryBackground/StarryBackground.jsx` | Modify | Canvas-based starfield with cleanup |
| `src/Components/StarryBackground/StarryBackground.css` | Modify | Keep only canvas base styles |
| `src/Components/Nav/Nav.jsx` | Modify | Data-driven, scroll shadow, slide menu, a11y |
| `src/Components/Layout/Layout.jsx` | Modify | Skip-nav link, page transition, remove unused import |
| `src/Components/Home/Home.jsx` | Modify | Delete dead JSX, fix links, entrance animations |
| `src/Components/About/About.jsx` | Modify | Use SkillIcon, scroll-reveal on grid, fix inset bug |
| `src/Components/Projects/Projects.jsx` | Modify | Use ProjectCard, fix keys, lazy images |
| `src/Components/Footer/Footer.jsx` | Modify | Fix copyright year + link |
| `src/assets/me.jpg` | Delete | Never imported, 3.3 MB dead weight |
| `src/assets/Screenshot 2026-03-05 143258.png` | Rename → `resuforge.png` | ResuForge project image |
| `src/assets/Screenshot 2026-03-30 125306.png` | Rename → `jobconnect.png` | Job Connect project image |

---

## Task 1: Dependency Cleanup

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Remove unused and duplicate dependencies**

```bash
cd "C:/Users/LOQ/Documents/GitHub/Portfolio"
npm uninstall react-typed @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons react-loader-spinner
```

Expected: All 5 packages removed from `node_modules` and `package.json`.

- [ ] **Step 2: Install vite-plugin-imagemin**

```bash
npm install --save-dev vite-plugin-imagemin
```

- [ ] **Step 3: Verify package.json has no leftover @fortawesome or react-typed entries**

Open `package.json` and confirm `dependencies` contains only:
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.26.1",
  "react-typing-effect": "^2.0.5"
}
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove unused deps (react-typed, @fortawesome, react-loader-spinner)"
```

---

## Task 2: Rename New Project Images

**Files:**
- Rename: `src/assets/Screenshot 2026-03-05 143258.png` → `src/assets/resuforge.png`
- Rename: `src/assets/Screenshot 2026-03-30 125306.png` → `src/assets/jobconnect.png`
- Delete: `src/assets/me.jpg`

- [ ] **Step 1: Rename images**

```bash
mv "C:/Users/LOQ/Documents/GitHub/Portfolio/src/assets/Screenshot 2026-03-05 143258.png" "C:/Users/LOQ/Documents/GitHub/Portfolio/src/assets/resuforge.png"
mv "C:/Users/LOQ/Documents/GitHub/Portfolio/src/assets/Screenshot 2026-03-30 125306.png" "C:/Users/LOQ/Documents/GitHub/Portfolio/src/assets/jobconnect.png"
```

- [ ] **Step 2: Delete the unused me.jpg**

```bash
rm "C:/Users/LOQ/Documents/GitHub/Portfolio/src/assets/me.jpg"
```

- [ ] **Step 3: Commit**

```bash
git add src/assets/
git commit -m "chore: rename new project images, delete unused me.jpg"
```

---

## Task 3: Build Config — vite.config.js + tailwind.config.js + eslint.config.js

**Files:**
- Modify: `vite.config.js`
- Modify: `tailwind.config.js`
- Modify: `eslint.config.js`

- [ ] **Step 1: Rewrite vite.config.js with alias, chunk splitting, imagemin**

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: { quality: 80 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 80 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-icons'],
        },
      },
    },
  },
});
```

- [ ] **Step 2: Rewrite tailwind.config.js**

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Re-enable jsx-no-target-blank in eslint.config.js**

Find the line:
```js
'react/jsx-no-target-blank': 'off',
```
Change it to:
```js
'react/jsx-no-target-blank': 'warn',
```

- [ ] **Step 4: Run lint to confirm no errors introduced**

```bash
npm run lint
```

Expected: warnings only (not errors), or clean output.

- [ ] **Step 5: Commit**

```bash
git add vite.config.js tailwind.config.js eslint.config.js
git commit -m "build: add path alias, chunk splitting, imagemin, darkMode config"
```

---

## Task 4: index.html — Favicon, Meta, OG Tags, Google Fonts

**Files:**
- Modify: `index.html`
- Modify: `public/site.webmanifest`

- [ ] **Step 1: Rewrite index.html**

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Karim Adel – Front-End Developer and Coding Instructor. Portfolio of web projects built with React, Next.js, and Tailwind CSS." />

  <!-- Open Graph -->
  <meta property="og:title" content="Karim Adel | Front-End Developer" />
  <meta property="og:description" content="Front-End Developer and Coding Instructor. Explore my projects built with React, Next.js, and Tailwind CSS." />
  <meta property="og:url" content="https://karimadel99.github.io/" />
  <meta property="og:type" content="website" />

  <!-- Favicons (public/ is served at /) -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;600&display=swap" rel="stylesheet">

  <title>Karim Adel | Portfolio</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

- [ ] **Step 2: Update public/site.webmanifest**

```json
{
  "name": "Karim Adel Portfolio",
  "short_name": "KA Portfolio",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#4338ca",
  "background_color": "#111827",
  "display": "standalone"
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html public/site.webmanifest
git commit -m "fix: favicon paths, add meta/OG tags, Google Fonts, webmanifest names"
```

---

## Task 5: Data Layer — projects.js, skills.js, navLinks.js

**Files:**
- Create: `src/data/projects.js`
- Create: `src/data/skills.js`
- Create: `src/data/navLinks.js`

- [ ] **Step 1: Create src/data/projects.js**

```js
// src/data/projects.js
import emarket from '@/assets/e-market.png';
import cloudy from '@/assets/cloudy.png';
import crud from '@/assets/crud.png';
import quotes from '@/assets/randomQuotes.png';
import meals from '@/assets/themealsite.png';
import games from '@/assets/gameReview.png';
import resuforge from '@/assets/resuforge.png';
import jobconnect from '@/assets/jobconnect.png';

export const projects = [
  {
    title: 'ResuForge',
    image: resuforge,
    repo: null, // private repo — card will hide repo button
    demo: 'https://resu-forge.vercel.app/',
    description: 'AI-powered resume builder using Groq / Llama 3.3 70B. Build a polished resume from scratch or from a sample — in seconds.',
  },
  {
    title: 'Job Connect',
    image: jobconnect,
    repo: 'https://github.com/karimadel99/Job-Connect',
    demo: 'https://job-connect-pink.vercel.app',
    description: 'Full-featured job board for seekers and employers. Browse listings, apply with validated forms, and manage postings.',
  },
  {
    title: 'E-Market',
    image: emarket,
    repo: 'https://github.com/karimadel99/e-market',
    demo: 'https://e-market-blue.vercel.app/',
    description: 'E-commerce storefront with product listing, cart management, and a clean checkout flow.',
  },
  {
    title: 'Cloudy App',
    image: cloudy,
    repo: 'https://github.com/karimadel99/cloudy-app',
    demo: 'https://karimadel99.github.io/Cloudy-App/',
    description: 'Weather app that fetches real-time forecasts by city using the OpenWeatherMap API.',
  },
  {
    title: 'Games Website',
    image: games,
    repo: 'https://github.com/karimadel99/Game-Review',
    demo: 'https://karimadel99.github.io/Game-Review/',
    description: 'Game review and discovery platform with search, filters, and detailed game pages.',
  },
  {
    title: 'The Meal Site',
    image: meals,
    repo: 'https://github.com/karimadel99/TheMealSite',
    demo: 'https://karimadel99.github.io/TheMealSite/',
    description: 'Recipe search app powered by TheMealDB API — browse by category or search any dish.',
  },
  {
    title: 'Store Crud',
    image: crud,
    repo: 'https://github.com/karimadel99/CRUD-Store-management-System',
    demo: 'https://karimadel99.github.io/CRUD-Store-management-System/',
    description: 'Store inventory management system with full Create, Read, Update, Delete operations.',
  },
  {
    title: 'Random Quotes Generator',
    image: quotes,
    repo: 'https://github.com/karimadel99/Quote-Generator-',
    demo: 'https://karimadel99.github.io/Quote-Generator-/',
    description: 'Generates random inspirational quotes with one-click copy and Twitter share support.',
  },
];
```

- [ ] **Step 2: Create src/data/skills.js**

```js
// src/data/skills.js
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiSass, SiRedux, SiNextdotjs, SiPostgresql } from 'react-icons/si';

export const skills = [
  { icon: FaReact,      label: 'React' },
  { icon: SiNextdotjs,  label: 'Next.js' },
  { icon: FaBootstrap,  label: 'Bootstrap' },
  { icon: FaJs,         label: 'JavaScript' },
  { icon: SiTailwindcss,label: 'Tailwind CSS' },
  { icon: SiPostman,    label: 'Postman' },
  { icon: FaPython,     label: 'Python' },
  { icon: FaHtml5,      label: 'HTML5' },
  { icon: FaCss3,       label: 'CSS3' },
  { icon: SiSass,       label: 'Sass' },
  { icon: SiRedux,      label: 'Redux' },
  { icon: FaGithub,     label: 'GitHub' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
];
```

- [ ] **Step 3: Create src/data/navLinks.js**

```js
// src/data/navLinks.js
import { FaHome, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';

export const navLinks = [
  { to: '/',        icon: FaHome,          label: 'Home' },
  { to: '/about',   icon: FaInfoCircle,    label: 'About' },
  { to: '/projects',icon: FaProjectDiagram,label: 'Projects' },
];
```

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: clean or warnings only.

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add data layer (projects, skills, navLinks)"
```

---

## Task 6: useInView Hook

**Files:**
- Create: `src/hooks/useInView.js`

- [ ] **Step 1: Create src/hooks/useInView.js**

```js
// src/hooks/useInView.js
import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // trigger once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useInView.js
git commit -m "feat: add useInView Intersection Observer hook"
```

---

## Task 7: Animation Keyframes in index.css

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace src/index.css with full version**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Glow effect (skills grid) ─────────────────────────────── */
.glow-effect {
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.8),
              0 0 20px rgba(139, 92, 246, 0.6),
              0 0 60px rgba(139, 92, 246, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glow-effect:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(139, 92, 246, 1),
              0 0 30px rgba(139, 92, 246, 0.8),
              0 0 90px rgba(139, 92, 246, 0.6);
}

/* ── Scroll-reveal base ────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ── Stagger delays for grid items ────────────────────────── */
.stagger-1 { transition-delay: 0.05s; }
.stagger-2 { transition-delay: 0.10s; }
.stagger-3 { transition-delay: 0.15s; }
.stagger-4 { transition-delay: 0.20s; }
.stagger-5 { transition-delay: 0.25s; }
.stagger-6 { transition-delay: 0.30s; }
.stagger-7 { transition-delay: 0.35s; }
.stagger-8 { transition-delay: 0.40s; }

/* ── Hero entrance ─────────────────────────────────────────── */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(2rem); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease both;
}
.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }

/* ── Profile picture float ─────────────────────────────────── */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* ── Page transition (route change) ───────────────────────── */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease both;
}

/* ── Loading screen pulse ──────────────────────────────────── */
@keyframes pulse-glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(99,102,241,0.8), 0 0 30px rgba(99,102,241,0.5);
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 25px rgba(99,102,241,1), 0 0 60px rgba(99,102,241,0.8);
    opacity: 0.7;
  }
}
.animate-pulse-glow {
  animation: pulse-glow 1.5s ease-in-out infinite;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: add animation keyframes and scroll-reveal utility classes"
```

---

## Task 8: LoadingScreen — Replace Triangle with KA. Pulse

**Files:**
- Modify: `src/Components/LoadingScreen/LoadingScreen.jsx`

- [ ] **Step 1: Rewrite LoadingScreen.jsx**

```jsx
// src/Components/LoadingScreen/LoadingScreen.jsx
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 z-50 gap-4">
      <span className="text-6xl font-bold font-montserrat text-indigo-400 animate-pulse-glow">
        KA.
      </span>
      <span className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
        Loading
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/LoadingScreen/LoadingScreen.jsx
git commit -m "feat: replace Triangle spinner with KA. pulse loading screen"
```

---

## Task 9: StarryBackground — Canvas Rewrite

**Files:**
- Modify: `src/Components/StarryBackground/StarryBackground.jsx`
- Modify: `src/Components/StarryBackground/StarryBackground.css`

- [ ] **Step 1: Rewrite StarryBackground.jsx**

```jsx
// src/Components/StarryBackground/StarryBackground.jsx
import { useEffect, useRef } from 'react';
import './StarryBackground.css';

const NUM_STARS = 150;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Build star data
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: randomBetween(0.5, 2),
      opacity: randomBetween(0.4, 1),
      delta: randomBetween(0.003, 0.012), // twinkle speed
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    // Shooting star state
    let shooter = null;
    let shooterTimer = randomBetween(4000, 8000);
    let lastTime = performance.now();

    function spawnShooter() {
      shooter = {
        x: randomBetween(0, window.innerWidth * 0.7),
        y: randomBetween(0, window.innerHeight * 0.4),
        length: randomBetween(80, 140),
        speed: randomBetween(6, 10),
        opacity: 1,
        angle: Math.PI / 6, // 30° diagonal
      };
    }

    function draw(now) {
      const dt = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const s of stars) {
        s.opacity += s.delta * s.direction;
        if (s.opacity >= 1 || s.opacity <= 0.3) s.direction *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();
      }

      // Shooting star
      shooterTimer -= dt;
      if (shooterTimer <= 0) {
        spawnShooter();
        shooterTimer = randomBetween(4000, 8000);
      }

      if (shooter) {
        const dx = Math.cos(shooter.angle) * shooter.speed;
        const dy = Math.sin(shooter.angle) * shooter.speed;
        shooter.x += dx;
        shooter.y += dy;
        shooter.opacity -= 0.018;

        if (shooter.opacity > 0) {
          const grad = ctx.createLinearGradient(
            shooter.x, shooter.y,
            shooter.x - Math.cos(shooter.angle) * shooter.length,
            shooter.y - Math.sin(shooter.angle) * shooter.length,
          );
          grad.addColorStop(0, `rgba(255,255,255,${shooter.opacity})`);
          grad.addColorStop(1, 'rgba(255,255,255,0)');

          ctx.beginPath();
          ctx.moveTo(shooter.x, shooter.y);
          ctx.lineTo(
            shooter.x - Math.cos(shooter.angle) * shooter.length,
            shooter.y - Math.sin(shooter.angle) * shooter.length,
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          shooter = null;
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-canvas" />;
}
```

- [ ] **Step 2: Rewrite StarryBackground.css**

```css
/* StarryBackground.css */
.starry-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  background-color: #030712; /* gray-950 */
}
```

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

- [ ] **Step 4: Commit**

```bash
git add src/Components/StarryBackground/
git commit -m "fix: replace 150 DOM stars with canvas starfield, fix memory leak, add shooting star"
```

---

## Task 10: SkillIcon Component

**Files:**
- Create: `src/Components/About/SkillIcon.jsx`

- [ ] **Step 1: Create SkillIcon.jsx**

```jsx
// src/Components/About/SkillIcon.jsx
export default function SkillIcon({ icon: Icon, label }) {
  return (
    <div
      className="relative group flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect cursor-default"
      aria-label={label}
    >
      <Icon size={50} className="text-indigo-400" />
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/Components/About/SkillIcon.jsx
git commit -m "feat: add SkillIcon component with tooltip"
```

---

## Task 11: ProjectCard Component

**Files:**
- Create: `src/Components/Projects/ProjectCard.jsx`

- [ ] **Step 1: Create ProjectCard.jsx**

```jsx
// src/Components/Projects/ProjectCard.jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/10 rounded-lg shadow-lg hover:shadow-indigo-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          width={600}
          height={338}
          loading="lazy"
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold text-white mt-2 text-center">
          {project.title}
        </h4>
        {project.description && (
          <p className="text-gray-300 text-sm mt-2 text-center leading-relaxed">
            {project.description}
          </p>
        )}
        <div className="mt-4 text-xl flex justify-between px-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-400 flex items-center gap-2 transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub />
              Repo
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-indigo-300 hover:text-indigo-400 flex items-center gap-2 transition-colors ${!project.repo ? 'mx-auto' : ''}`}
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/Components/Projects/ProjectCard.jsx
git commit -m "feat: add ProjectCard component with hover animation, conditional repo link"
```

---

## Task 12: App.jsx — Router at Module Scope + React.lazy

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Rewrite App.jsx**

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Layout from './Components/Layout/Layout';

const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Projects = lazy(() => import('./Components/Projects/Projects'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "fix: move router to module scope, add React.lazy route splitting"
```

---

## Task 13: Nav.jsx — Full Refactor

**Files:**
- Modify: `src/Components/Nav/Nav.jsx`

- [ ] **Step 1: Rewrite Nav.jsx**

```jsx
// src/Components/Nav/Nav.jsx
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import { navLinks } from '@/data/navLinks';

const activeClass =
  'block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-indigo-500';
const inactiveClass =
  'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
const navLinkClass = ({ isActive }) => (isActive ? activeClass : inactiveClass);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-montserrat hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          KA.
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://drive.google.com/file/d/1Oj5L3Co2xUr3ZcunFbHwMg-524lQqgwy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-700 font-roboto hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center gap-2"
          >
            <FaFileAlt />
            Resume
          </a>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Slide-down mobile menu */}
        <div
          id="navbar-sticky"
          className={`w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
          }`}
        >
          <ul className="flex font-roboto flex-col text-xl p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={navLinkClass}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                  onClick={closeMenu}
                >
                  <Icon className="inline mr-2" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/Nav/Nav.jsx
git commit -m "refactor: Nav.jsx — data-driven links, scroll shadow, slide menu, a11y fixes"
```

---

## Task 14: Layout.jsx — Skip Nav + Page Transition

**Files:**
- Modify: `src/Components/Layout/Layout.jsx`

- [ ] **Step 1: Rewrite Layout.jsx**

```jsx
// src/Components/Layout/Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import StarryBackground from '../StarryBackground/StarryBackground';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <StarryBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-700 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <header>
        <Nav />
      </header>
      <main id="main-content" key={pathname} className="animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/Layout/Layout.jsx
git commit -m "fix: Layout — remove unused import, add skip-nav, page fade transition"
```

---

## Task 15: Home.jsx — Bug Fixes + Entrance Animations

**Files:**
- Modify: `src/Components/Home/Home.jsx`

- [ ] **Step 1: Rewrite Home.jsx**

```jsx
// src/Components/Home/Home.jsx
import TypingEffect from 'react-typing-effect';
import myPic from '@/assets/me-Photoroom.png';
import devSvg from '@/assets/Developer activity-amico.png';
import { FaCode, FaChalkboardTeacher, FaGithub, FaLinkedin } from 'react-icons/fa';

const cursorRenderer = cursor => <span>{cursor}</span>;

const displayTextRenderer = (text) => {
  const icon =
    text === 'Front-End Developer' ? <FaCode className="inline ml-2" /> :
    text === 'Coding Instructor'   ? <FaChalkboardTeacher className="inline ml-2" /> :
    null;
  return <span>{text}{icon}</span>;
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen py-24">
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold my-3 font-montserrat">
            I'm <span className="text-indigo-300">Karim Adel</span>
          </h1>
          <div className="animate-fade-in-up delay-200">
            <TypingEffect
              text={['Front-End Developer', 'Coding Instructor']}
              speed={150}
              eraseSpeed={50}
              eraseDelay={1300}
              typingDelay={500}
              className="text-xl md:text-2xl text-indigo-400 py-7 font-semibold"
              cursorRenderer={cursorRenderer}
              displayTextRenderer={displayTextRenderer}
            />
          </div>
        </div>

        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0 animate-fade-in-up delay-400">
          <img
            src={myPic}
            alt="Karim Adel"
            width={400}
            height={400}
            className="rounded-full shadow-lg shadow-slate-400 mx-auto w-3/4 h-auto object-cover animate-float"
          />
        </div>
      </div>

      {/* About blurb */}
      <div className="relative flex flex-col md:flex-row items-center justify-evenly min-h-screen">
        <div className="absolute inset-0 bg-slate-300/5 backdrop-blur-sm -z-10" />
        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
          <img
            src={devSvg}
            alt="Developer illustration"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto w-3/4 h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
          <p className="text-2xl font-roboto font-semibold capitalize">
            A highly motivated junior front-end developer and experienced coding instructor
            with a strong foundation in programming and web development.
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-gray-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
        <p className="text-white">Feel free to connect with me</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-white text-3xl hover:text-orange-700 transition duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/karim-adel-961506222/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-white text-3xl hover:text-blue-600 transition duration-150" />
          </a>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/Home/Home.jsx
git commit -m "fix: Home — delete dead JSX, fix external links, entrance animations, profile float"
```

---

## Task 16: About.jsx — SkillIcon + Scroll-Reveal

**Files:**
- Modify: `src/Components/About/About.jsx`

- [ ] **Step 1: Rewrite About.jsx**

```jsx
// src/Components/About/About.jsx
import coding from '@/assets/Programming-amico.png';
import { skills } from '@/data/skills';
import SkillIcon from './SkillIcon';
import { useInView } from '@/hooks/useInView';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

export default function About() {
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: forwardRef, inView: forwardInView } = useInView();

  return (
    <>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen">
        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
          <img
            src={coding}
            alt="Coding illustration"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto w-3/4 h-auto object-cover"
          />
        </div>
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
          <h1 className="text-2xl md:text-6xl font-semibold my-3">
            Who <span className="text-indigo-300">I am?</span>
          </h1>
          <p className="text-xl font-roboto">
            Hi, I'm Karim Adel, a passionate Front-End Developer and a Bachelor
            of Computer Science and Artificial Intelligence student at Helwan
            University, Cairo. With a strong foundation in programming and a
            love for crafting responsive, user-friendly web applications, I'm on
            a journey to build impactful digital experiences.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-slate-300/5 backdrop-blur-sm text-white py-20" ref={skillsRef}>
        <div className="text-center">
          <h2 className="text-4xl text-indigo-400 font-bold pb-5 font-montserrat">
            Professional Skillset
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-10 w-4/5 mx-auto">
          {skills.map(({ icon, label }, i) => (
            <div
              key={label}
              className={`reveal ${skillsInView ? 'in-view' : ''} ${staggerClasses[i % staggerClasses.length]}`}
            >
              <SkillIcon icon={icon} label={label} />
            </div>
          ))}
        </div>
      </div>

      {/* Looking Forward */}
      <div
        ref={forwardRef}
        className={`text-center bg-slate-300/5 backdrop-blur-sm text-white reveal ${forwardInView ? 'in-view' : ''}`}
      >
        <div className="w-3/5 mx-auto">
          <h2 className="text-4xl text-indigo-400 font-bold font-montserrat">Looking Forward</h2>
          <p className="mt-5 py-7 font-roboto text-2xl">
            I'm always eager to take on new challenges, whether it's working on
            innovative projects, collaborating with teams, or mentoring others
            in their coding journeys. I'm excited about the future of technology
            and am dedicated to making my mark in the industry by building
            cutting-edge, high-performance applications. When I'm not coding,
            you might find me exploring new tech, tinkering with design
            patterns, or simply enjoying a good game.
          </p>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/About/About.jsx
git commit -m "refactor: About — use SkillIcon, scroll-reveal on grid, fix inset bug"
```

---

## Task 17: Projects.jsx — Use ProjectCard + Scroll-Reveal

**Files:**
- Modify: `src/Components/Projects/Projects.jsx`

- [ ] **Step 1: Rewrite Projects.jsx**

```jsx
// src/Components/Projects/Projects.jsx
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useInView } from '@/hooks/useInView';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <div className="bg-slate-300/5 backdrop-blur-sm text-white py-20">
      <div className="text-center">
        <h1 className="text-4xl text-indigo-400 font-bold font-montserrat">Projects</h1>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-4/5 mx-auto"
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`reveal ${inView ? 'in-view' : ''} ${staggerClasses[i % staggerClasses.length]}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/Projects/Projects.jsx
git commit -m "refactor: Projects — use ProjectCard, fix key, scroll-reveal, add 2 new projects"
```

---

## Task 18: Footer.jsx — Fix Copyright

**Files:**
- Modify: `src/Components/Footer/Footer.jsx`

- [ ] **Step 1: Rewrite Footer.jsx**

```jsx
// src/Components/Footer/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white w-full shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Karim Adel
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/Components/Footer/Footer.jsx
git commit -m "fix: Footer — dynamic copyright year, replace Flowbite link with GitHub"
```

---

## Task 19: Final Build Verification

- [ ] **Step 1: Run full lint**

```bash
npm run lint
```

Expected: no errors (warnings are acceptable for now).

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected output includes:
- Multiple chunks: `vendor-[hash].js`, `icons-[hash].js`, plus per-route chunks
- No build errors
- `dist/` folder created

- [ ] **Step 3: Preview the build locally**

```bash
npm run preview
```

Open `http://localhost:4173` and verify:
- Loading screen shows `KA.` pulse (not Triangle spinner)
- Starfield renders (canvas, no DOM stars) with shooting stars
- Nav scroll shadow appears after scrolling past 20px
- Mobile hamburger menu slides down/up smoothly
- Home hero text and image animate in on load
- Profile image floats gently
- About skills grid reveals with stagger on scroll
- Projects page reveals cards with stagger on scroll
- ResuForge card shows only Live Demo (no Repo button)
- Job Connect card shows both Repo + Live Demo
- Footer shows current year and links to GitHub
- Favicon shows correctly in browser tab
- Google Fonts load (Montserrat/Roboto render properly)

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio audit — bug fixes, refactor, animations, 2 new projects"
```

---

## Self-Review

**Spec coverage check:**

| Spec Section | Covered By Task |
|---|---|
| 1.1 Router at module scope | Task 12 |
| 1.2 Dead JSX in Home | Task 15 |
| 1.3 StarryBackground memory leak + canvas | Task 9 |
| 1.4 index.html favicon/meta/OG/fonts | Task 4 |
| 1.5 Nav fixes (aria, close on nav, KA. link, data-driven) | Task 13 |
| 1.6 Footer copyright + link | Task 18 |
| 1.7 Layout skip-nav + page transition | Task 14 |
| 1.8 Projects key + lazy + external links | Task 17 |
| 1.9 Home external links + callbacks + aria-label | Task 15 |
| 2. Dependency cleanup | Task 1 |
| 3.1 Data files | Task 5 |
| 3.2 SkillIcon, ProjectCard | Tasks 10, 11 |
| 3.3 Router | Task 12 |
| 4.1 vite.config.js | Task 3 |
| 4.2 tailwind.config.js darkMode | Task 3 |
| 4.3 webmanifest | Task 4 |
| 5. Image optimization (imagemin) | Task 3 (plugin) |
| 5. loading="lazy" on images | Tasks 15, 16, 17 |
| 5. width/height on images | Tasks 15, 16, 17 |
| 5. Delete me.jpg | Task 2 |
| 6.1 Scroll-reveal (useInView) | Tasks 6, 7, 16, 17 |
| 6.2 Navbar scroll shadow | Task 13 |
| 6.3 Mobile menu slide animation | Task 13 |
| 6.4 Skill icon tooltips | Task 10 |
| 6.5 Project card hover | Task 11 |
| 6.6 Profile float | Task 15 |
| 6.7 Hero entrance animation | Tasks 7, 15 |
| 6.8 Canvas starfield + shooting star | Task 9 |
| 6.9 Page transition | Task 14 |
| 6.10 LoadingScreen improvement | Task 8 |
| 7. a11y (skip-nav, aria-labels, aria-current) | Tasks 13, 14, 15 |
| 9.1 ResuForge project | Task 5 (data), Task 19 (verify) |
| 9.2 Job Connect project | Task 5 (data), Task 19 (verify) |
| 9.3 Conditional repo button | Task 11 |

**No placeholders found.**

**Type consistency:** `project.repo` is `null` in projects.js for ResuForge; `ProjectCard` checks `project.repo &&` before rendering — consistent. `useInView` returns `{ ref, inView }` — used consistently in About and Projects. `navLinks` exports `{ to, icon, label }` — consumed correctly in Nav.jsx.
