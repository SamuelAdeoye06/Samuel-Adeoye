# Samuel Adeoye — Portfolio

A React + Vite portfolio site.

## Updating content (no design/layout editing needed)

Everything you'll want to change day-to-day — your bio, skills, projects,
contact links — lives in **one file**:

```
src/data/portfolio.js
```

Open it, edit the text/links/arrays, save. To add a new project, copy an
existing project object in the `projects` array and fill in your own values.
`status` accepts `"live"`, `"progress"`, or `"client"` — it controls the
color of the status dot on the card.

To swap your photo, replace `src/assets/profile.jpg` with a new image (keep
the same filename, or update the import in `src/components/Hero.jsx`).

## Running locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploying (Vercel — recommended, same as your other projects)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, import the repo.
3. Framework preset: Vite (auto-detected). No environment variables needed.
4. Deploy. Every future push to `main` auto-redeploys.

## Building manually

```bash
npm run build
```

Output goes to `dist/` — deployable to any static host (Vercel, Netlify,
GitHub Pages, etc.)
