# Paulin Numugisha

Personal portfolio for [paulin22.github.io](https://paulin22.github.io). Static HTML, CSS, and JavaScript. GitHub Pages serves the site from the root of `main`. There is no build step.

The page is written for four kinds of roles at once: full-stack and software development, frontend TypeScript, accounting and fintech, and founder, product, or technical-lead work. The positioning is a builder who pairs accounting domain knowledge with full-stack TypeScript engineering and founding products.

## Preview locally

From the repository root:

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

## Edit the site

All visible copy lives in [`index.html`](index.html). Search for `TODO:` and replace each placeholder before using the page in an application.

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `TODO: dates` | Experience, both founder roles | Start and end, or "present" |
| `TODO: one sentence on what VORG EAVY does` | Experience | A factual one-line description |
| `TODO: add email` | Contact | A `mailto:` link |
| `TODO: add profile URL` | Contact | The real LinkedIn URL |
| `TODO: add a PDF link` | Contact | A résumé file committed in this repo, or a hosted PDF |
| `TODO: optional headshot` | Contact | An image with alt text, or remove the row |

Also update:

- The JSON-LD block in `index.html` (`sameAs`) once LinkedIn or other profiles are real.
- [`sitemap.xml`](sitemap.xml) `lastmod` when the page changes in a way that matters.
- [`assets/og.png`](assets/og.png) if the headline on the social image should change.

Styles are in [`styles.css`](styles.css). Behavior (theme, menu, copy buttons, year) is in [`main.js`](main.js). Theme preference is stored in `localStorage` under `theme`.

### Projects

Project text is in the `#work` section.

- Public repositories should keep their outbound links.
- Private repositories stay described without source links and without unpublished code.
- Code blocks are short excerpts. If you add another, copy only a few lines, and do not include secrets, tokens, credentials, environment values, internal URLs, or customer data.

### Fonts

Latin subsets of Fraunces, Outfit, and IBM Plex Mono are in [`assets/fonts/`](assets/fonts/), under the SIL Open Font License. License texts: `OFL-Fraunces.txt`, `OFL-Outfit.txt`, `OFL-IBMPlexMono.txt`.

## GitHub Pages

This is a user site (`paulin22.github.io`). Pages is set to publish the `main` branch from `/` (root). After a change merges to `main`, GitHub rebuilds the site. No Actions workflow is required.

Leave the source on **Deploy from a branch**, branch **main**, folder **/ (root)**. Switching the source to GitHub Actions would stop publishing, because this repository does not include a Pages workflow.

If Pages is ever turned off, turn it back on at:

**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`.**

The site URL is https://paulin22.github.io/
