## LER Investment Summary Brochure (Next.js)

This repo renders a 3-page A4 investment brochure for Limited Edition Realty using Next.js `app` router.

### Structure
- `app/page.tsx`: page layout (hero, 2-column summary/highlights, ROI, governance, tables)
- `app/globals.css`: brochure theming and print sizing
- `data/ler-summary.json`: copy + tables (exec/governance sections, highlights, locations, ROI models, project profiles)
- `public/images/banner.jpg`: hero image

### Running locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Deploying to GitHub Pages
- Use a static export build: `npm run build && npx next export` (outputs to `out/`).
- Configure GitHub Pages to serve from the `out` folder (e.g., via Actions that runs the export and uploads `out` as the artifact).
- If your repo is published as `https://<user>.github.io/<repo>/`, set `next.config.js` `assetPrefix`/`basePath` accordingly for correct asset paths.

### Editing content
- Update brochure text/tables in `data/ler-summary.json`:
  - `sections`: ordered narrative blocks (Exec Summary, Governance, etc.)
  - `keyHighlights`: right-column card
  - `locationsTable`: source data for the transposed locations table (rendered on page 2)
  - `roiModels`, `governance`, `projectProfiles`: page 2 content
- Swap the hero image at `public/images/banner.jpg`.

### Print/PDF
- Page size: A4 (210mm x 297mm), fixed padding and print-friendly styles.
- Page 1: hero + 2-column summary/governance + highlights card.
- Page 2: transposed locations table, ROI options, governance notes, project profiles.

### Tech notes
- Uses `next/font` (Nunito) for typography.
- Tables use a transposed layout (locations become columns) for readability.
