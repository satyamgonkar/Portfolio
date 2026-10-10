# Satyam Gonkar – Portfolio (Vite + React)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build / deploy
```bash
npm run build      # outputs to dist/
npm run preview
```
Netlify: connect the repo (settings are in `netlify.toml`) or drag the `dist/` folder onto app.netlify.com/drop.

## Structure
```
index.html            page shell, fonts, favicon
vite.config.js        React plugin + build date (footer "last updated")
src/
  main.jsx            entry
  App.jsx             page layout, modal state
  styles.css          all styling (theme tokens, print stylesheet)
  data/content.js     projects, skills, timeline, FAQ, contact info  <- edit your content here
  hooks/              useTheme (dark mode), useScroll (progress bar, sticky header, back-to-top)
  lib/                storage helper, UTM link helper
  components/         Header, Hero, Sections (About/Journey/Skills/FAQ), Projects, Contact,
                      Footer, Floating (contact button, back to top, cookie banner), Modal, Background
```
