# Excel Global Health

Standalone React + TypeScript + Vite website. Includes Home, About, Products, Partners and Contact pages, product dialogs, all five updated hero banners and the original animated map slide.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production output is in `dist/`. On Vercel, use the Vite preset, build command `npm run build` and output directory `dist`. The included rewrite supports direct links such as `/products`. Other hosts need the same SPA fallback to `index.html`.

## Editing

- `App.tsx`: pages, navigation, banners and contact details
- `products.ts`: catalogue data
- `style.css`: website styling and animation
- `base.css`: standalone shell and local font fallbacks
- Image files in the repository root: supplied assets

No API keys or environment variables are required. Enquiry buttons use email or telephone links; there is no contact-form backend. All images are bundled locally. Bundled open-source Cormorant Garamond and Manrope fonts replace the hosted review fonts, so typography differs slightly. Their SIL Open Font License notices are included in `cormorant-garamond-OFL.txt` and `manrope-OFL.txt`.

The existing review notes and unconfirmed catalogue/marketing claims are preserved. Review those before a public launch. Images and brand materials belong to their respective owners; no open-source license is granted by this repository.
