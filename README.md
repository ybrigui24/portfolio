# Yusuf Brigui — Portfolio

Personal portfolio built with Vite + React, Tailwind CSS, Framer Motion, and a
[ShaderGradient](https://www.shadergradient.co/) animated background.

## Local development

```bash
npm install
npm run dev
```

Open the printed localhost URL (default `http://localhost:5173`).

## Deploy to GitHub Pages

The project uses the `gh-pages` package. `vite.config.js` is set to
`base: './'` (relative paths), so it works for any repo name with no changes.

One-time setup:

1. Create a new repository on GitHub (e.g. `portfolio`).
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ybrigui24/YOUR-REPO-NAME.git
   git push -u origin main
   ```

Deploy (every time you want to publish):

```bash
npm run deploy
```

This builds the site (`predeploy` runs `npm run build`) and pushes the `dist`
folder to a `gh-pages` branch. Then, on GitHub:

3. Go to **Settings → Pages** in your repo.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick the `gh-pages` branch and `/ (root)`, and save.

Your site will be live at `https://ybrigui24.github.io/YOUR-REPO-NAME/` within
a minute or two. Re-run `npm run deploy` any time you change the site.
