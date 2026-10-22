# Seo Analyzer — Mobile

Ionic + React cross-platform mobile app for **Seo Analyzer**.

Part of [Chaowalit Greepoke](https://bookchaowalit.com)'s 101 Portfolio Projects.

## Canonical Ionic template

This repository **is the canonical Ionic React + Vite template** for `bookchaowalit-mobile`. The other Ionic
repos are name-substituted copies of the same scaffold and point back here:

- `bookchaowalit-mobile/devtools-roadmaps-mobile`
- `bookchaowalit-mobile/productivity-reminders-mobile`
- `bookchaowalit-mobile/ai-sentiment-analyzer-mobile`
- `bookchaowalit-mobile/ai-speech-to-text-mobile`
- `bookchaowalit-mobile/marketing-services-mobile`

Each copy owns its code (no shared package). Consolidating or archiving the copies is pending owner decision D5
(BD-033), see `repository-catalog/portfolio/MOBILE-CONSOLIDATION-2026-10.md` in solo-empire.

**There is no Capacitor native project.** Despite the "mobile" name, this is an Ionic web app built with Vite;
nothing here produces an Android or iOS binary. See `PRODUCT.md` for what works today.

## Features

- **On-page SEO audit** (Home tab): paste a page's HTML (and optionally a focus
  keyword) to get a 0-100 score and pass/warn/fail checks for title and meta
  description length, a single H1, image alt text, `lang`, mobile viewport,
  canonical URL, Open Graph title, `noindex`, content length, and keyword
  presence/density. Everything runs on-device; no page is fetched.
- Analysis lives in `src/lib/seo.ts` (pure TypeScript, unit-tested).

## Tech Stack

- **Framework:** Ionic 8 + React 18
- **Language:** TypeScript
- **Build Tool:** Vite 6 (tests: Vitest 4)
- **UI:** Ionic Components + Ionicons

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev         # Vite dev server
npm run typecheck   # tsc (noEmit)
npm run lint        # ESLint flat config (typescript-eslint + react-hooks)
npm test            # vitest unit tests for src/lib
npm run build       # tsc && vite build
```

CI (`.github/workflows/ci.yml`) calls the shared `bookchaowalit/platform-ci-workflows` v1.1.1
(`ci-node.yml` + `security.yml`, pinned by SHA): `npm ci`, lint, typecheck, Vitest with an 88% line-coverage
gate over all of `src/`, `npm run build`, and the gitleaks / Semgrep / OSV-Scanner / Trivy scans. Failures are
not masked.

## Build

```bash
npm run build   # static web build in dist/
# A native app would need a Capacitor project, which does not exist yet.
```

## Related

- **Frontend:** [bookchaowalit-website/seo-analyzer-frontend](https://github.com/bookchaowalit-website/seo-analyzer-frontend)
- **Portfolio:** [bookchaowalit.com](https://bookchaowalit.com)

## License

MIT
