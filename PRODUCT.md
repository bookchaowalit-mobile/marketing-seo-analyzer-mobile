# SEO Analyzer Mobile

**Tier:** C, template (canonical Ionic React template for `bookchaowalit-mobile`; not store-released)
**Stack:** Ionic 8 + React 18, TypeScript (strict), Vite 6, Vitest 4, Node 22 in CI, `package-lock.json`
**CI:** `.github/workflows/ci.yml` calls the shared `platform-ci-workflows` v1.1.1: `npm ci`, ESLint, `tsc`,
Vitest with an 88% line-coverage gate over all of `src/`, `vite build`, plus the shared security scan
(gitleaks, Semgrep, OSV-Scanner, Trivy)

## What it is and who it is for

A small mobile-styled web app for someone who wants a quick on-page SEO check of a page they already have the
HTML for. It is a portfolio piece and the reference Ionic React template for the other Ionic repos in the
organisation, not an SEO product.

## What works today

- **Home tab:** paste a page's HTML (and optionally a focus keyword) and get a 0-100 score with pass/warn/fail
  checks: title and meta description length, a single H1, image alt text, `lang`, mobile viewport, canonical URL,
  Open Graph title, `noindex`, content length, and keyword presence and density. The analysis is pure TypeScript
  in `src/lib/seo.ts` and runs entirely on the device; no page is fetched.
- **Share / copy report:** uses the Web Share API when the browser has it, otherwise the clipboard.
- **Recent analyses:** a summary of each run (title, score, word count, failed checks, keyword; never the pasted
  HTML) is kept in `localStorage`, newest first, capped at 20, with a Clear button (`src/lib/history.ts`).
- **Explore and Profile tabs:** static placeholder screens from the template.
- Tests: `src/lib/seo.test.ts`, `src/lib/history.test.ts`, `src/pages/__tests__/Home.test.tsx` (18 tests).

## What does not work yet

- Cannot analyse a page by URL (browsers block cross-origin fetches; no backend is wired in).
- No Capacitor (or Cordova) native project: there is no Android or iOS build, only the Vite web build in `dist/`.
- No account, backend, sync, analytics or crash reporting. All data stays in the browser.
- Not deployed anywhere and not in any app store.

## Where it runs

- Locally with `npm run dev`, or any static host serving `dist/` after `npm run build`. No live URL.
- The web frontend is a separate repository: `bookchaowalit-website/seo-analyzer-frontend`.
