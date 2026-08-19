# PrestoMake

PrestoMake is a Korean practical guide to building and operating small digital tools. It is built with Astro and deployed to GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm run format:check
pnpm run lint
pnpm run build
```

Posts live in `src/content/posts/`. Publish the generated site with:

```bash
./scripts/deploy-pages.sh
```

## Configuration

- Current site: `https://prestomake.com/`
- GitHub Pages fallback: `https://wind-flow.github.io/prestomake-blog/`
- Custom-domain steps: `DOMAIN_SETUP.md`
- Optional repository variables:
  - `PUBLIC_ADSENSE_CLIENT` (defaults to the approved publisher ID in `astro.config.ts`)
  - `PUBLIC_GOOGLE_SITE_VERIFICATION`

Built from the MIT-licensed AstroPaper theme. See `LICENSE` for attribution.
