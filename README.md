# Funngro Two-Page Website Assignment

## Included
- Teen opportunities page (`/teen`)
- Companies and brands page (`/companies`)
- Responsive navbar and footer
- Route-specific title, description, canonical and Open Graph metadata
- Working FAQ accordion
- SEO audit report (`SEO-AUDIT-REPORT.md`)
- `robots.txt` and `sitemap.xml` templates

## Run locally
1. Install Node.js (LTS) if needed.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Production build
Run `npm run build`. The generated site files will be in `dist/`.

## Deployment note
Deploy the `dist` folder to a static host that supports SPA fallback/rewrites. After deployment, replace `YOUR-DEPLOYED-DOMAIN` in `public/robots.txt` and `public/sitemap.xml`. The canonical metadata uses the active browser origin.

This is a portfolio/assignment concept, not an official Funngro website. Confirm all claims and platform details against Funngro's current official site before publishing.
