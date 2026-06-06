# Personal Portfolio — Saif Ansari

A dark-themed personal portfolio built with React 18 + Vite. No UI frameworks — plain CSS per component.

**Live site:** *(coming soon)*

---

## Tech Stack

- **React 18** — component architecture
- **Vite** — dev server and build
- **Plain CSS** — one CSS file per component, no dependencies

---

## Getting Started

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## Project Structure

```
src/
  components/
    Hero.jsx / Hero.css
    About.jsx / About.css
    Experience.jsx / Experience.css
    Skills.jsx / Skills.css
    Projects.jsx / Projects.css
    Contact.jsx / Contact.css
    Navbar.jsx / Navbar.css
    Footer.jsx
  styles/
    global.css
  hooks/
    useInView.js
```

---

## Deployment

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://saif-ansari.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

### Vercel

Push to GitHub → import on vercel.com → deploy. No config needed.

---

## Build

```bash
npm run build
# Output in /dist
```
