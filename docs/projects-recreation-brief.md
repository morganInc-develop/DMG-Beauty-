# Agence Foudre Projects Index Recreation Brief

Source URL: <https://www.agencefoudre.com/projets>
Capture date: 2026-04-04
Tech target: Next.js + Tailwind CSS v4 + selective `shadcn/ui` + GSAP + Framer Motion

## Artifact Index

- Rendered HTML: [source.html](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/source.html)
- Desktop full screenshot: [desktop-full.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-full.png)
- Desktop hero screenshot: [desktop-hero.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-hero.png)
- Desktop mid screenshot: [desktop-mid.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-mid.png)
- Desktop lower screenshot: [desktop-lower.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-lower.png)
- Desktop footer screenshot: [desktop-footer.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-footer.png)
- Mobile full screenshot: [mobile-full.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/mobile-full.png)
- Mobile hero screenshot: [mobile-hero.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/mobile-hero.png)
- Mobile mid screenshot: [mobile-mid.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/mobile-mid.png)
- DOM extraction: [dom-desktop.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/dom-desktop.json)
- Desktop style probe: [style-probe.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/style-probe.json)
- Mobile style probe: [style-probe-mobile.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/style-probe-mobile.json)
- JS bundle snapshot: [site.bundle.js](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/site.bundle.js)

## Master Recreation Prompt

```text
Recreate https://www.agencefoudre.com/projets as a high-fidelity editorial projects index in Next.js with Tailwind CSS v4, GSAP for scroll-owned motion, and Framer Motion only for small UI state changes.

Quality bar:
- keep the page as a branded project index, not a portfolio grid
- preserve the sticky left intro column on desktop
- preserve the repeated story-card project modules with per-project background shifts
- preserve the oversized compressed headlines, pill tags, floating controls, and tactile story navigation
- preserve the fixed “Retour à la home” link
- do not simplify the page into generic cards or a masonry layout

Required structure:
1. Fixed global corner controls and centered logo treatment.
2. Intro panel with chat-bubble sticker, oversized "Tous nos projets" heading, and short welcome copy.
3. Repeated vertical project modules:
   - stories slider with image stack
   - dot progress navigation
   - prev/next controls
   - plus/link action
   - like button
   - oversized project title
   - service tags
   - short editorial excerpt
   - "Voir le case" CTA
4. Fixed return link back to home.
5. Shared contact popin system remains available but visually secondary on this page.

Observed projects:
- Yelloh! Village
- Solty Hôtel
- Le Sac du Berger
- Mamy Grand
- Concept Care

Observed tokens:
- display font: Beni
- body font: Clash Grotesk
- shared palette includes #00522D, #DB3C8A, #F29EBD, #FCE5DF, #D1CFE4, #FFF8F6
- project backgrounds rotate by item using data-color values and visible color-field swaps
- 24-column grid with a sticky left rail and wider right content column on desktop

Motion guidance:
- original page ships anime.js, Barba, Lenis, IntersectionObserver triggers, rAF-driven story sliders, and a like-button particle effect
- use GSAP for scroll/background transitions, sticky behavior, and story slider progress
- use Framer Motion only for button hover, small dialog transitions, and non-scroll-linked UI motion
- do not use a stock carousel component
```

## Screenshot References

### Desktop full

![Desktop full](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-full.png)

### Desktop mid

![Desktop mid](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/desktop-mid.png)

### Mobile full

![Mobile full](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/mobile-full.png)

### Mobile hero

![Mobile hero](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/projects/mobile-hero.png)

## High-Level Design Read

Observed: this page is an editorial index, not a tiled portfolio. It is built from one repeated project-story module stacked vertically, while a sticky introduction column anchors the left side on desktop.

Observed: the visual system is simpler than the homepage but still highly branded. The dominant ideas are oversized Beni headlines, large monochrome color fields, tall story-image frames, pink accent controls, and abrupt section background swaps keyed to each project.

Observed: on mobile the page collapses into a strong single-column rhythm. Each project becomes a tall poster-card scene with the title, tags, and CTA tucked directly beneath the image stack. The fixed bottom-corner controls remain, so the page still feels like part of the same site system.

Implementation guidance: keep this as a custom index template. Do not reduce it to a card grid, slider-only gallery, or generic case-study listing page.

## Source-Backed Design Tokens

### Color system

- Deep green: `#00522D`
- Primary pink: `#DB3C8A`
- Light pink: `#F29EBD`
- Cream blush: `#FCE5DF`
- Lavender gray: `#D1CFE4`
- Off-white: `#FFF8F6`

Source-backed project field colors:

- Yelloh! Village: `#2885BA`
- Le Sac du Berger: `#444325`
- Mamy Grand: `#E59C01`
- Concept Care: `#EACCCC`

Observed from screenshots: the remaining project field also uses a soft blush-pink tone rather than a neutral background. The page shifts body/background color as each project card becomes active.

### Typography

Source-backed fonts:

- Display: `Beni`
- Sans/body: `Clash Grotesk`

Source-backed scale classes:

- `.tx-xl`: `7.2rem` mobile, `13rem` desktop
- `.tx-lg`: `5.4rem` mobile, `9.4rem` desktop
- `.tx-p`: `1.4rem` mobile, `1.6rem` desktop
- `.tx-l`: `1rem` mobile, `1.2rem` desktop

Style probe highlights:

- Desktop `h1`: `94px`, `Beni`, off-white
- Desktop `h2`: `130px`, `Beni`, off-white
- Mobile `h1`: `54px`, `Beni`, off-white
- Mobile `h2`: `72px`, `Beni`, off-white

Observed: the titles behave like poster typography. They are much larger than a normal index page heading, and the layout depends on that imbalance.

### Spacing, radii, and grid

- Shared 24-column grid, max-width `1920px`
- Shared page gutters: `1.5rem` mobile, `3rem` desktop
- Shared radii: `0.5rem`, `1rem`, `2rem`

Observed: the spacing is open, but not sparse. The big titles and tall images dominate; copy blocks remain intentionally short.

## Page Inventory

1. Sticky intro rail with sticker bubble, page title, and welcome copy.
2. Five repeated `t-projectsindex_item` modules.
3. Embedded `m-storiesSlider` inside each project module.
4. `a-likeButton` interaction on each project.
5. `Voir le case` CTA for each project detail page.
6. Fixed return link: `Retour à la home`.
7. Shared `ContactPopin` and `WhatsappPopin` systems inherited from the broader site.

## Section-by-Section Breakdown

### Global frame

Observed: the page keeps the site’s floating controls and branding shell. There is no conventional top navigation. A small logo mark and fixed utility controls frame the content instead.

Rebuild: preserve the floating shell. It keeps the index page connected to the rest of the site and prevents the projects page from feeling like a detached template.

### Intro rail

Observed: the main heading is `Tous nos projets`, paired with the short copy `Bienvenue dans le Human Social Club.` A chat-bubble sticker sits above the heading. On desktop this content is in a sticky left column while the project list occupies the right.

Rebuild: this left column should stay sticky on desktop. That asymmetry is the entire page structure. On mobile, collapse it into a compact stacked intro above the first project.

### Project module anatomy

Observed: each project item contains the same component pattern:

- a tall `StoriesSlider` media block
- dot navigation with story progress
- prev/next controls
- a plus action linking directly to the project
- a like button with animated heart effect
- a giant title
- one or more service tags
- a short excerpt
- a `Voir le case` button

Implementation guidance: build this as one reusable bespoke component with strong art direction rather than five bespoke hardcoded sections. The layout is repeated, but the styling is too distinct for a generic card component.

### Project list content

Source-backed project entries and destination pages:

- `Yelloh! Village` -> `/projets/yelloh-village`
- `Solty Hôtel` -> `/projets/solty-hotels`
- `Le Sac du Berger` -> `/projets/le-sac-du-berger`
- `Mamy Grand` -> `/projets/mamy-grand`
- `Concept Care` -> `/projets/concept-care`

Source-backed tags:

- Yelloh! Village: `Création de contenu`
- Solty Hôtel: `Création de contenu`, `Community management`, `Stratégie social media`
- Le Sac du Berger: `Création de contenu`, `Community management`, `Stratégie social media`
- Mamy Grand: `Création de contenu`
- Concept Care: `Création de contenu`, `Community management`

Observed: the service tags matter visually. They are not metadata tucked away in a footer row. They break up the huge title and help sell each project as a branded editorial slice.

### Return link

Observed: a fixed `Retour à la home` link sits outside the list flow. It behaves more like a persistent utility than an inline breadcrumb.

Rebuild: keep this fixed and understated. It should feel like part of the site chrome.

## Animation and Interaction Breakdown

Source-backed libraries and systems:

- `anime.js`
- `@barba/core`
- `Lenis`
- `IntersectionObserver`
- `StoriesSlider`
- `ProjectsIndex`
- `LikeButton`
- `ContactPopin`
- `WhatsappPopin`

Source-backed behaviors:

- Each project item uses `data-scroll` hooks and becomes an active section.
- `StoriesSlider` uses dot navigation, previous/next buttons, autoplay/progress logic, and visibility-aware behavior.
- The like button is a decorative interaction with floating heart particles.
- Background color changes are driven per item via `data-color` attributes.
- The intro rail uses a sticky-title module.

Implementation guidance:

- Use GSAP ScrollTrigger to manage sticky left rail behavior, active project state, and background color interpolation between items.
- Use GSAP or a lightweight custom timer for story progress bars and slider transitions.
- Use Framer Motion only for hover/tap scale, popin transitions, and non-scroll-linked UI state.
- Avoid Embla, Swiper, or shadcn carousel primitives unless you completely override their interaction feel and DOM shape.

## Implementation Notes for Next.js + Tailwind v4

- Build a `ProjectsIndexPage` with a sticky intro column and a mapped array of project modules.
- Each project module should have its own theme payload: background color, secondary color, title, tags, story images, excerpt, href.
- Keep the project media block tall and tactile. The slider should feel like a sequence of story covers, not a standard horizontal carousel.
- Preserve the site shell: fixed menu trigger, WhatsApp trigger, return link, and light site chrome.
- Use CSS variables for per-project background and accent colors so the active item can restyle the surrounding scene.
- Keep body copy short and avoid adding extra metadata such as dates, client names, or categories unless the source explicitly includes them.

## shadcn/ui Guidance

Allowed:

- Dialog primitives for shared contact UI.
- Button primitive only as an accessibility base if fully reskinned.

Avoid:

- `Card` for project modules.
- `Carousel` for the story slider.
- `Badge` for the service tags if it looks default.
- `Breadcrumb`, `Tabs`, or `Accordion` patterns that would introduce unrelated UI language.

## Tailwind v4 Global CSS Starter

```css
@theme {
  --color-foudre-green: #00522d;
  --color-foudre-pink: #db3c8a;
  --color-foudre-pink-soft: #f29ebd;
  --color-foudre-cream: #fce5df;
  --color-foudre-gray: #d1cfe4;
  --color-foudre-paper: #fff8f6;
  --color-foudre-blue: #2885ba;
  --color-foudre-olive: #444325;
  --color-foudre-mustard: #e59c01;
  --color-foudre-blush: #eacccc;

  --font-display: "Beni", "Anton", sans-serif;
  --font-sans: "Clash Grotesk", "Inter Tight", sans-serif;

  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 2rem;

  --ease-foudre: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-bounce: cubic-bezier(0.17, 0.67, 0.3, 1.33);
}

.grid-24 {
  display: grid;
  grid-template-columns: repeat(24, minmax(0, 1fr));
  gap: 0 1.5rem;
  max-width: 1920px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

@media (min-width: 961px) {
  .grid-24 {
    padding-inline: 3rem;
  }
}

.tx-display-xl {
  font-family: var(--font-display);
  font-size: 7.2rem;
  font-weight: 900;
  line-height: 0.7;
}

.tx-display-lg {
  font-family: var(--font-display);
  font-size: 5.4rem;
  font-weight: 900;
  line-height: 0.7;
}

@media (min-width: 961px) {
  .tx-display-xl {
    font-size: 13rem;
  }

  .tx-display-lg {
    font-size: 9.4rem;
  }
}
```

## Build Checklist

- Keep the sticky intro rail on desktop.
- Rebuild the project list as repeated editorial modules, not a grid.
- Preserve the dot-progress story slider inside each project.
- Keep the per-project background color shifts.
- Preserve the giant Beni titles and compact tag pills.
- Keep the like button and plus action separate from the main CTA.
- Preserve the fixed return-home link.
- Use GSAP for sticky/scroll/background work and Framer Motion only for small UI state changes.
- Verify mobile still feels like a branded story index rather than a simplified fallback.
