# Excel Global Health

React + TypeScript + Vite website with Home, About, Products, Partners and Contact pages. Includes all five new hero banners, the animated map and product dialogs.

## Deploy to Vercel

Import this repository, select **Vite**, keep the root directory as `./`, use build command `npm run build` and output directory `dist`. Use Node.js 22 or newer. No environment variables are needed. Do not deploy the `dist` folder as the root directory.

The browser upload added numeric prefixes to source filenames. The `prebuild` and `predev` scripts restore their original names automatically, so no manual renaming is needed. The build also restores `vercel.json`, which handles direct page links such as `/products`.

## Local use

```sh
npm install
npm run dev
```

Production build: `npm run build`. Local production preview: `npm run preview`.

The approved replacement fonts are Cormorant Garamond and Manrope, bundled from Fontsource with SIL Open Font License notices included. Image and brand rights remain with their respective owners; this repository grants no license to those materials.

The current review notes and unconfirmed catalogue/marketing claims are preserved. The site has direct phone/email enquiry links, not a contact form or backend.
