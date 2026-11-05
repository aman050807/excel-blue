# Excel Global Health

React + TypeScript + Vite website with Home, About, Products, Partners and Contact pages. Includes all five hero banners, the animated map and product dialogs.

## Structure

- `index.html`, `vite.config.ts`, `vercel.json` - app entry and config (root)
- `src/` - TypeScript/React sources (`main.tsx`, `App.tsx`, `products.ts`, stylesheets)
- `src/assets/` - images and artwork imported by the app

## Deploy to Vercel

Import this repository, select **Vite**, keep the root directory as `./`, use build command `npm run build` and output directory `dist`. Use Node.js 22 or newer. No environment variables are needed. Do not deploy the `dist` folder as the root directory. `vercel.json` handles direct page links such as `/products`.

## Local use

```sh
npm install
npm run dev
```

Production build: `npm run build`. Local production preview: `npm run preview`.

The approved replacement fonts are Cormorant Garamond and Manrope, bundled from Fontsource with SIL Open Font License notices included. Image and brand rights remain with their respective owners; this repository grants no license to those materials.
