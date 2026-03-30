# Portfolio UI Elevation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge the completed `portfolio-audit` worktree branch into `main`, then apply the five remaining gaps: dark Nav/Footer, updated Home content, updated About content + new experience timeline, and additional skill icons.

**Architecture:** The `portfolio-audit` branch already contains the infrastructure (data layer, hooks, animations, index.html fixes). This plan merges that work first, then applies content and styling changes directly to the merged files. No new components are introduced — changes are surgical edits to existing files.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, react-icons 5, react-typing-effect, react-router-dom 6

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| *(git merge)* | Merge | Bring in all portfolio-audit infrastructure |
| `src/Components/Nav/Nav.jsx` | Modify | Dark glass background + active link colors |
| `src/Components/Footer/Footer.jsx` | Modify | Dark background |
| `src/Components/Home/Home.jsx` | Modify | Typing roles, CTA buttons, photo glow, bio text, social bar |
| `src/data/skills.js` | Modify | Add TypeScript, jQuery, Framer Motion |
| `src/Components/About/SkillIcon.jsx` | Modify | Permanent visible label below icon |
| `src/Components/About/About.jsx` | Modify | Bio text, experience timeline section, "Looking Forward" text |

---

## Task 1: Merge `portfolio-audit` into `main`

**Files:** No file edits — git operation only.

- [ ] **Step 1: Verify current branch is `main`**

```bash
git branch
```
Expected: `* main`

- [ ] **Step 2: Merge the worktree branch**

```bash
git merge portfolio-audit --no-ff -m "feat: merge portfolio-audit — data layer, hooks, animations, project cards, index.html fixes"
```
Expected: Merge commit created, no conflicts.

- [ ] **Step 3: Install new dependency (`vite-plugin-imagemin`)**

```bash
npm install
```
Expected: `added N packages` or `up to date`.

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```
Expected: `vite build` completes with no errors. `dist/` folder created.

---

## Task 2: Dark Nav

**Files:**
- Modify: `src/Components/Nav/Nav.jsx`

The nav is currently `bg-white dark:bg-gray-900` — a light background that clashes with the dark starry page. We change it to a dark glass panel.

- [ ] **Step 1: Update the `<nav>` background class**

In `Nav.jsx`, replace the `className` on the `<nav>` element:

Old:
```jsx
className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 transition-shadow duration-300 ${
  scrolled ? 'shadow-lg backdrop-blur-sm' : ''
}`}
```

New:
```jsx
className={`bg-slate-900/90 backdrop-blur-md border-b border-slate-800 fixed w-full z-20 top-0 start-0 transition-shadow duration-300 ${
  scrolled ? 'shadow-lg shadow-indigo-950/50' : ''
}`}
```

- [ ] **Step 2: Update active/inactive NavLink classes**

Replace the `activeClass` and `inactiveClass` constants at the top of `Nav.jsx`:

Old:
```jsx
const activeClass =
  'block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-indigo-500';
const inactiveClass =
  'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
```

New:
```jsx
const activeClass =
  'block py-2 px-3 text-indigo-400 font-semibold md:p-0';
const inactiveClass =
  'block py-2 px-3 text-slate-300 rounded hover:text-white hover:bg-slate-800 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0 transition-colors';
```

- [ ] **Step 3: Update the mobile dropdown `<ul>` background**

In the `<ul>` inside the collapsible menu div, replace the className:

Old:
```jsx
className="flex font-roboto flex-col text-xl p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
```

New:
```jsx
className="flex font-roboto flex-col text-xl p-4 md:p-0 mt-4 font-medium border border-slate-700 rounded-lg bg-slate-800 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
```

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/Components/Nav/Nav.jsx
git commit -m "style: dark glass Nav — slate-900/90 bg, indigo-400 active links"
```

---

## Task 3: Dark Footer

**Files:**
- Modify: `src/Components/Footer/Footer.jsx`

The footer is `bg-white dark:bg-gray-900` — same mismatch as the nav.

- [ ] **Step 1: Replace the footer's full content**

Replace the entire file content:

```jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-slate-400 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
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

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/Components/Footer/Footer.jsx
git commit -m "style: dark Footer — slate-900 bg matches nav and starry background"
```

---

## Task 4: Home content — typing roles, photo glow, CTA buttons, bio, social bar

**Files:**
- Modify: `src/Components/Home/Home.jsx`

Five changes in one file, applied top to bottom.

- [ ] **Step 1: Update typing effect roles and icons**

In `Home.jsx`, replace the `displayTextRenderer` function and the `<TypingEffect>` `text` prop:

Old `displayTextRenderer`:
```jsx
const displayTextRenderer = (text) => {
  const icon =
    text === 'Front-End Developer' ? <FaCode className="inline ml-2" /> :
    text === 'Coding Instructor'   ? <FaChalkboardTeacher className="inline ml-2" /> :
    null;
  return <span>{text}{icon}</span>;
};
```

New:
```jsx
const displayTextRenderer = (text) => {
  const icon =
    text === 'Frontend Engineer'  ? <FaCode className="inline ml-2" /> :
    text === 'React.js Developer' ? <FaCode className="inline ml-2" /> :
    text === 'AI Integrations'    ? <FaChalkboardTeacher className="inline ml-2" /> :
    null;
  return <span>{text}{icon}</span>;
};
```

Old `text` prop on `<TypingEffect>`:
```jsx
text={['Front-End Developer', 'Coding Instructor']}
```

New:
```jsx
text={['Frontend Engineer', 'React.js Developer', 'AI Integrations']}
```

- [ ] **Step 2: Add indigo glow ring to the profile photo**

Find the `<img>` tag for the profile photo (the one with `src={myPic}`) and replace its `className`:

Old:
```jsx
className="rounded-full shadow-lg shadow-slate-400 mx-auto w-3/4 h-auto object-cover animate-float"
```

New:
```jsx
className="rounded-full mx-auto w-3/4 h-auto object-cover animate-float ring-4 ring-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.3)]"
```

- [ ] **Step 3: Add CTA buttons below the typing effect**

Add the following import at the top of the file (if not already present):
```jsx
import { Link } from 'react-router-dom';
```

Then, after the closing `</div>` of the `<TypingEffect>` wrapper (the `animate-fade-in-up delay-200` div), add:

```jsx
<div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start animate-fade-in-up delay-400">
  <Link
    to="/projects"
    className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 text-center"
  >
    View Projects
  </Link>
  <a
    href="https://drive.google.com/file/d/1Oj5L3Co2xUr3ZcunFbHwMg-524lQqgwy/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 text-center"
  >
    Resume
  </a>
</div>
```

- [ ] **Step 4: Update the bio text in the second section**

Find the `<p>` in the "About blurb" section and replace its content:

Old:
```jsx
<p className="text-2xl font-roboto font-semibold capitalize">
  A highly motivated junior front-end developer and experienced coding instructor
  with a strong foundation in programming and web development.
</p>
```

New:
```jsx
<p className="text-2xl font-roboto font-semibold">
  Frontend Engineer specializing in React.js, Next.js, and Tailwind CSS.
  Experienced building production SaaS and MedTech platforms with AI integrations.
  Currently expanding into generative AI, agents, and data science.
</p>
```

- [ ] **Step 5: Update the social bar background**

Find the social links section and replace its outer `<div>` className:

Old:
```jsx
<div className="bg-gray-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
```

New:
```jsx
<div className="bg-slate-900/80 border-t border-slate-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
```

- [ ] **Step 6: Remove unused imports**

`FaChalkboardTeacher` is no longer meaningfully distinct — but it's still used in `displayTextRenderer`. Keep the import. However, `Link` from `react-router-dom` was added in step 3, so confirm it's only imported once at the top of the file (not duplicated).

- [ ] **Step 7: Verify build passes**

```bash
npm run build
```
Expected: No errors.

- [ ] **Step 8: Commit**

```bash
git add src/Components/Home/Home.jsx
git commit -m "feat: update Home — new typing roles, CTA buttons, photo glow, bio text, dark social bar"
```

---

## Task 5: Add missing skills + visible labels

**Files:**
- Modify: `src/data/skills.js`
- Modify: `src/Components/About/SkillIcon.jsx`

The resume lists TypeScript, jQuery, and Framer Motion which are missing from the grid. Also update `SkillIcon` to show the label visibly below the icon (currently tooltip-only).

- [ ] **Step 1: Add new skill icons to `skills.js`**

Replace the full content of `src/data/skills.js`:

```js
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiSass, SiRedux, SiNextdotjs, SiTypescript, SiJquery } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

export const skills = [
  { icon: FaReact,              label: 'React' },
  { icon: SiNextdotjs,          label: 'Next.js' },
  { icon: SiTypescript,         label: 'TypeScript' },
  { icon: FaJs,                 label: 'JavaScript' },
  { icon: SiTailwindcss,        label: 'Tailwind CSS' },
  { icon: FaBootstrap,          label: 'Bootstrap' },
  { icon: SiSass,               label: 'Sass' },
  { icon: TbBrandFramerMotion,  label: 'Framer Motion' },
  { icon: SiJquery,             label: 'jQuery' },
  { icon: FaHtml5,              label: 'HTML5' },
  { icon: FaCss3,               label: 'CSS3' },
  { icon: FaPython,             label: 'Python' },
  { icon: SiPostman,            label: 'Postman' },
  { icon: SiRedux,              label: 'Redux' },
  { icon: FaGithub,             label: 'GitHub' },
];
```

- [ ] **Step 2: Update `SkillIcon` to show permanent visible label**

Replace the full content of `src/Components/About/SkillIcon.jsx`:

```jsx
export default function SkillIcon({ icon: Icon, label }) {
  return (
    <div
      className="flex flex-col items-center gap-2 border-2 border-indigo-400 p-5 rounded-lg glow-effect cursor-default"
      aria-label={label}
    >
      <Icon size={40} className="text-indigo-400" />
      <span className="text-xs text-slate-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```
Expected: No errors. If `SiTypescript` or `SiJquery` or `TbBrandFramerMotion` can't be found, the build will fail with an import error — fix the icon name from the react-icons docs.

- [ ] **Step 4: Commit**

```bash
git add src/data/skills.js src/Components/About/SkillIcon.jsx
git commit -m "feat: add TypeScript, jQuery, Framer Motion skills; visible labels on skill icons"
```

---

## Task 6: About bio + "Looking Forward" text

**Files:**
- Modify: `src/Components/About/About.jsx`

- [ ] **Step 1: Update the bio paragraph**

In `About.jsx`, find the `<p>` in the hero section and replace its content:

Old:
```jsx
<p className="text-xl font-roboto">
  Hi, I'm Karim Adel, a passionate Front-End Developer and a Bachelor
  of Computer Science and Artificial Intelligence student at Helwan
  University, Cairo. With a strong foundation in programming and a
  love for crafting responsive, user-friendly web applications, I'm on
  a journey to build impactful digital experiences.
</p>
```

New:
```jsx
<p className="text-xl font-roboto">
  Hi, I'm Karim Adel — a Frontend Engineer and CS/AI graduate from Helwan
  University (2025). I specialize in React.js, Next.js, and Tailwind CSS,
  with production experience building SaaS and MedTech platforms with AI
  integrations. Currently expanding into generative AI, agents, and data science.
</p>
```

- [ ] **Step 2: Update the "Looking Forward" paragraph**

Find the `<p>` inside the `forwardRef` section and replace its content:

Old:
```jsx
<p className="mt-5 py-7 font-roboto text-2xl">
  I'm always eager to take on new challenges, whether it's working on
  innovative projects, collaborating with teams, or mentoring others
  in their coding journeys. I'm excited about the future of technology
  and am dedicated to making my mark in the industry by building
  cutting-edge, high-performance applications. When I'm not coding,
  you might find me exploring new tech, tinkering with design
  patterns, or simply enjoying a good game.
</p>
```

New:
```jsx
<p className="mt-5 py-7 font-roboto text-2xl">
  I'm always eager to take on new challenges — building innovative products,
  collaborating with teams, and pushing into new territory. Currently diving
  deep into generative AI, agents, and data science. Excited to bring those
  capabilities into the products I build next.
</p>
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/Components/About/About.jsx
git commit -m "content: update About bio and Looking Forward text to reflect current role and AI focus"
```

---

## Task 7: About experience timeline

**Files:**
- Modify: `src/Components/About/About.jsx`

Add a new section between the bio/image section and the skills grid. This is a vertical timeline of the 3 roles from the resume.

- [ ] **Step 1: Add the experience section to `About.jsx`**

After the closing `</div>` of the first hero section (the one containing the bio image + text), and before the `{/* Skills */}` comment, insert:

```jsx
{/* Experience */}
<div className="bg-slate-300/5 backdrop-blur-sm text-white py-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl text-indigo-400 font-bold font-montserrat">Experience</h2>
  </div>
  <div className="w-4/5 mx-auto space-y-8">

    <div className="border-l-4 border-indigo-500 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
        <h3 className="text-xl font-semibold text-white">Front-End React.js Developer</h3>
        <span className="text-sm text-slate-400 font-roboto">Feb 2025 – Present</span>
      </div>
      <p className="text-indigo-400 font-medium font-roboto mb-2">MedTech Soficopharm · Fulltime, Hybrid</p>
      <p className="text-slate-300 font-roboto">
        Designed and implemented a SaaS clinic management platform enabling doctors to manage clinics,
        patients, and schedules. Integrated Google Maps API, multilingual support, and automated booking workflows.
      </p>
    </div>

    <div className="border-l-4 border-indigo-500/60 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
        <h3 className="text-xl font-semibold text-white">Front-End React.js Developer</h3>
        <span className="text-sm text-slate-400 font-roboto">Sep 2024 – Jan 2025</span>
      </div>
      <p className="text-indigo-400 font-medium font-roboto mb-2">Silicon Squire · Freelance, Remote</p>
      <p className="text-slate-300 font-roboto">
        Built a dynamic product showcase for Babil Agency using React.js and Tailwind CSS.
        Developed reusable components to handle variable data structures, enhancing maintainability.
      </p>
    </div>

    <div className="border-l-4 border-indigo-500/40 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
        <h3 className="text-xl font-semibold text-white">Coding Instructor</h3>
        <span className="text-sm text-slate-400 font-roboto">Jan 2023 – May 2024</span>
      </div>
      <p className="text-indigo-400 font-medium font-roboto mb-2">Mind Builders Academy</p>
      <p className="text-slate-300 font-roboto">
        Taught 250+ students across Scratch, Python, HTML, CSS, JavaScript, and Bootstrap.
        Created practical workshops improving student coding accuracy and project design quality.
      </p>
    </div>

  </div>
</div>
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/Components/About/About.jsx
git commit -m "feat: add Experience timeline to About page (3 roles from resume)"
```

---

## Task 8: Final verification

- [ ] **Step 1: Run full build one last time**

```bash
npm run build
```
Expected: Clean build, no warnings about missing modules or undefined variables.

- [ ] **Step 2: Preview locally and check each page**

```bash
npm run preview
```

Open the preview URL and verify:
- [ ] Nav is dark glass on all pages
- [ ] "KA." links to `/`
- [ ] Mobile menu closes after tapping a link
- [ ] Home hero has two CTA buttons (View Projects + Resume)
- [ ] Profile photo has indigo glow ring
- [ ] Typing effect shows "Frontend Engineer", "React.js Developer", "AI Integrations"
- [ ] Bio text is updated (no "junior", no "student")
- [ ] Social bar is dark slate, not gray-800
- [ ] About bio is updated (says "graduate", "MedTech")
- [ ] Experience timeline shows 3 roles
- [ ] Skills grid shows TypeScript, jQuery, Framer Motion with visible labels
- [ ] Projects grid shows 8 projects (ResuForge first, no GitHub icon for ResuForge)
- [ ] Footer is dark, year is 2026, links to GitHub
- [ ] Loading screen shows "KA." pulse animation
- [ ] Scroll-reveal animations work on project cards and skill icons
