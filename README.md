*Read in [Russian](./README.ru.md).*

# website-portfolio

> 🗄️ **Archived repository (2020–2021).** Practice landing pages from the very start of my frontend path. Kept as-is, for memory's sake — it doesn't reflect my current skills or practices.

Three static landing pages built from design files (Figma / Photoshop). No build tools, no frameworks: plain HTML, CSS and a bit of JavaScript.

## Projects

| Project | Demo | What it is | Stack | Responsive |
| --- | --- | --- | --- | --- |
| [HOTEL](./HOTEL) | [open](https://barbarafromtonshaevo.github.io/website-portfolio/HOTEL/) | Hotel booking landing page. "Pixel perfect" markup | HTML, CSS (flexbox), normalize.css | no, desktop only |
| [LIONIC](./LIONIC) | [open](https://barbarafromtonshaevo.github.io/website-portfolio/LIONIC/) | Law firm landing page with article sections | HTML, CSS (flexbox, custom properties), normalize.css | yes, 4 breakpoints (1200 / 992 / 767 / 400 px) |
| [EVKLID](./EVKLID) | [open](https://barbarafromtonshaevo.github.io/website-portfolio/EVKLID/) | Landing page with a burger menu and a switchable "how we work" steps block | HTML, CSS (flexbox), JS, Swiper, jQuery UI, lazyload | yes, 4 ranges: 320–767 / 768–1023 / 1024–1919 / 1920px+ |

Each folder has a `project documents/` directory with the original design file (`.psd` / `.fig`).

## Screenshots

The first screen of each landing page.

**HOTEL**

![HOTEL: desktop first screen](./screenshots/hotel-desktop.webp)

**LIONIC** (desktop and mobile)

<p>
  <img src="./screenshots/lionic-desktop.webp" alt="LIONIC: desktop first screen" width="68%">
  <img src="./screenshots/lionic-mobile.webp" alt="LIONIC: mobile first screen" width="22%">
</p>

**EVKLID**

![EVKLID: desktop first screen](./screenshots/evklid-desktop.webp)

## How to view

Easiest way is the link in the "Demo" column: the pages are published via GitHub Pages exactly as they are, no build step.

Locally: there's no build, just open the project's `index.html` in a browser.

```bash
git clone https://github.com/BarbaraFromTonshaevo/website-portfolio.git
xdg-open website-portfolio/LIONIC/index.html   # macOS: open, Windows: start
```

EVKLID loads Swiper, jQuery and lazyload from a CDN, so it needs an internet connection.

## What's outdated here

I left everything as it was, so it stays visible where I started. Today I'd do it differently:

- **Markup and CSS.** I'd now use grid, `clamp()`, a mobile-first approach and a single naming convention. EVKLID's stylesheet is manually minified into one line, so `css/style.css` there isn't readable. HOTEL has no responsive layout at all.
- **Known bug in EVKLID.** At 768px and up the first screen is blank: the mobile CSS references `mobile-background-*.jpg` backgrounds, but `img/` only has `.webp` files. The white heading ends up on a white background. I left the bug in, along with the rest of the code.
- **LIONIC's fonts never made it into the repo.** The CSS references `fonts/open-sans-v18-*.woff2`, but there's no `fonts/` folder. If Open Sans isn't installed system-wide, the browser falls back to a substitute font.
- **Dependencies.** Scripts are loaded from a CDN without pinned versions (`unpkg.com/swiper/…`), and jQuery 1.12.4 is long outdated. Today these would be npm packages with a bundler.
- **Accessibility and SEO.** Semantic tags and `alt` attributes are there, but there are no meta descriptions, `aria` only appears in EVKLID, and `lang="en"` is set on EVKLID even though its content is in Russian.
- **Repository size.** The original design files (`.psd`, `.fig`) account for about 65MB out of 130MB.

## Status

Not maintained. See my other repositories for current work.
