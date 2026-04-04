# Agence Foudre Home Recreation Brief

Source URL: <https://www.agencefoudre.com/>
Capture date: 2026-04-04
Tech target: Next.js + Tailwind CSS v4 + selective `shadcn/ui` + GSAP + Framer Motion

## Artifact Index

- Rendered HTML: [source.html](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/source.html)
- Desktop full screenshot: [desktop-full.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-full.png)
- Desktop hero screenshot: [desktop-hero.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-hero.png)
- Desktop mid screenshot: [desktop-mid.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-mid.png)
- Desktop lower screenshot: [desktop-lower.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-lower.png)
- Desktop footer screenshot: [desktop-footer.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-footer.png)
- Mobile full screenshot: [mobile-full.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/mobile-full.png)
- Mobile hero screenshot: [mobile-hero.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/mobile-hero.png)
- Mobile mid screenshot: [mobile-mid.png](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/mobile-mid.png)
- DOM extraction: [dom-desktop.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/dom-desktop.json)
- Desktop style probe: [style-probe.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/style-probe.json)
- Mobile style probe: [style-probe-mobile.json](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/style-probe-mobile.json)
- JS bundle snapshot: [site.bundle.js](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/site.bundle.js)

## Master Recreation Prompt

```text
Recreate the homepage of https://www.agencefoudre.com in Next.js with Tailwind CSS v4, selective shadcn/ui primitives, GSAP for scroll-owned motion, and Framer Motion only for isolated UI micro-interactions.

Quality bar:
- preserve the oversized FOUDRE wordmark and the playful "Human Social Club" framing
- preserve the fixed corner controls and the floating featured project card
- preserve the section-by-section background color choreography
- preserve the collage photography and tilted card composition
- do not reduce the page to generic centered sections or card grids
- keep typography heavy, compressed, and poster-like
- keep the interaction model tactile, playful, and a little chaotic, but still structured

Required structure:
1. Hero with giant FOUDRE logo, small eyebrow, stacked HUMAN / SOCIAL CLUB display text, and a three-image collage.
2. Agency intro split into left statement, centered fixed media panel, and right statement.
3. Team section with fixed portrait stack and tappable team-member pins that open profile popins.
4. Projects section on a saturated blue field with thumbnail selectors, stacked project cards, and a persistent floating "case du mois" featured card.
5. Manifest section with large animated text and branded shapes.
6. Expertises section with intro copy, card rail, and active detail panel.
7. Process section with numbered/ordered cards for strategy through reporting.
8. Why-choose-us section with four bespoke green cards and imagery.
9. FAQ section with a sticky oversized heading and accordion list.
10. Footer/contact section with image, tilted CTA card, giant FOUDRE logotype, social links, and legal links.

Observed tokens:
- fonts used in source: Beni for display, Clash Grotesk for body and labels
- palette: #00522D, #DB3C8A, #F29EBD, #FCE5DF, #D1CFE4, #FFF8F6, #2885BA
- layout system: 24-column grid with max-width 1920px and 1.5rem/3rem page gutters
- radii: 0.5rem, 1rem, 2rem

Motion guidance:
- original site ships with anime.js, Barba, Lenis, IntersectionObserver-driven modules, autoplaying video interactions, and rAF-driven sliders
- for this rebuild, use GSAP for pinned/fixed sections, scroll progress, reveal timing, sliders, and story-progress bars
- use Framer Motion only for popins, button hover scaling, and lightweight state transitions
- do not mix GSAP and Framer Motion on the same transform target

Implementation warning:
- do not replace the bespoke home modules with shadcn Cards, Carousel, or generic Accordion styling
- shadcn is acceptable only for dialog primitives, form fields, and an accordion shell that is fully reskinned
```

## Screenshot References

### Desktop full
![Desktop full](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-full.png)

### Desktop hero
![Desktop hero](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-hero.png)

### Desktop footer
![Desktop footer](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/desktop-footer.png)

### Mobile full
![Mobile full](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/mobile-full.png)

### Mobile hero
![Mobile hero](/Users/damionmorgan/Documents/GottabeAway/DMG-Beauty-/output/playwright/home/mobile-hero.png)

## High-Level Design Read

Observed: the page behaves like a brand poster broken into interactive scenes. The design is not minimal. It is loud, playful, and deliberately over-scaled, with giant display words, floating chat-bubble stickers, collage photography, and abrupt color-field changes.

Observed: the strongest visual anchors are the oversized FOUDRE wordmark, the repeated central group portrait, the saturated blue projects field, the manifest text sequence, the giant POURQUOI CHOISIR FOUDRE lockup, and the footer contact card. A persistent floating featured-project card also stays in play, which makes the page feel editorial rather than sectional.

Observed: on desktop the page uses a 24-column grid to stage left headline / centered media / right counter-copy compositions. On mobile the structure collapses, but it does not simply stack everything. The fixed corner controls, floating featured-project card, oversized wordmark, and full-bleed color fields remain part of the experience.

Implementation guidance: treat the homepage as a set of bespoke modules with strong internal art direction. Do not abstract them into a single reusable "section" component with only token changes.

## Source-Backed Design Tokens

### Color system

- Deep green: `#00522D`
- Primary pink: `#DB3C8A`
- Light pink: `#F29EBD`
- Cream blush: `#FCE5DF`
- Lavender gray: `#D1CFE4`
- Off-white: `#FFF8F6`
- Project blue: `#2885BA`

Observed section/background progression from source attributes and screenshots:

- Hero: white
- Agency intro: pink-1
- Team: white
- Projects: `#2885BA`
- Manifest: custom animated scene
- Expertises: gray
- Process: pink-3
- Why Foudre: pink-1
- FAQ: white
- Footer/contact: pink-2

### Typography

Source-backed fonts:

- Display: `Beni`
- Sans/body: `Clash Grotesk`

Source-backed scale classes:

- `.tx-xxl`: `min(11.5rem, 29.48vw)` mobile, `min(30rem, 16vw)` desktop
- `.tx-xl`: `7.2rem` mobile, `13rem` desktop
- `.tx-lg`: `5.4rem` mobile, `9.4rem` desktop
- `.tx-md`: `4rem` mobile, `8rem` desktop
- `.tx-sm`: `3.2rem` mobile, `4.6rem` desktop
- `.tx-pxl`: `1.6rem` / `2rem`
- `.tx-p`: `1.4rem` / `1.6rem`
- `.tx-l`: `1rem` / `1.2rem`

Observed: display copy is extremely compressed, blocky, and nearly logo-like. Body copy is short and sharp, not essay-like. Most sections rely on a big-word / short-supporting-copy contrast rather than dense text.

### Spacing, radii, and grid

- Grid: 24 columns, max-width `1920px`
- Page gutters: `1.5rem` mobile, `3rem` desktop
- Radii: `0.5rem`, `1rem`, `2rem`
- Button padding: roughly `1.2rem 1rem` mobile and `2rem` desktop

Observed: there is generous whitespace around the hero and team image stack, but the typography itself is packed tightly. The density comes from scale and overlap, not cramped gutters.

### Image treatment

Observed: photography is treated as a collage, not a grid. The central portrait is repeated and recontextualized across the page. Side images are cropped aggressively, occasionally rotated, and framed as floating cards. Small speech-bubble stickers are layered on top to reduce seriousness.

Implementation guidance: keep the portrait stack and card rotation logic. Avoid replacing these with flat image rows or standard media cards.

## Page Inventory

1. `o-homeHero` / `HomeHero`: logo-led hero with intro copy and collage.
2. `o-homeAgency`: agency framing statement with central video player.
3. `o-homeTeam`: portrait stack plus team pin interactions and popin profiles.
4. `o-homeProjects` / `HomeProjects`: project selector, story cards, and more-project CTA.
5. `o-homeManifest` / `HomeManifest`: animated manifesto text and shape scene.
6. `o-homeExpertises` / `HomeExpertises`: expertise cards plus active detail panel.
7. `o-homeProcess`: ordered methodology cards.
8. `o-homeWhy`: four branded value cards.
9. `o-homeFaq`: FAQ with sticky heading and accordions.
10. `o-footer` / `Footer`: contact CTA, logo, socials, and legal.
11. `m-featuredProject` / `FeaturedProject`: persistent floating case-of-the-month module.
12. Supporting shared modules in bundle: `Menu`, `Scroll`, `VideoPlayer`, `ContactPopin`, `WhatsappPopin`, `ProjectCard`, `StoriesSlider`, `LikeButton`, `Website`.

## Section-by-Section Breakdown

### Header and persistent controls

Observed: there is no conventional top nav bar in view. Instead, the UI relies on fixed circular buttons, a centered logo mark, and a floating WhatsApp entry point. On mobile those controls sit in the bottom corners; on desktop they move to the top corners.

Rebuild: keep the controls fixed and circular. They are part of the site identity and should feel present throughout scrolling.

### Hero

Observed: the hero is dominated by the giant FOUDRE wordmark in dark green on a pale field, then a centered three-image collage with rounded rectangles. The smaller eyebrow line reads "Agence social média" and the main sub-lockup reads "Human Social Club" in oversized pink display type.

Rebuild: the hero should not become a standard split hero. Use an explicit collage component with one centered image and two angled side panels. The wordmark should be nearly absurdly large.

### Agency intro

Observed: the next scene pivots to a hot-pink field with a sentence split across left and right columns around a fixed central media panel. The left reads "Nous sommes le courant," and the right reads "vous êtes l’histoire."

Rebuild: use a three-part composition with pinned or visually fixed center media. The side copy should stay large and directional, not become regular paragraph content.

### Team

Observed: the team section uses the central portrait again, now surrounded by tappable name pins such as Margaux, Mathieu, Florent, Johane, and Lou. The bundle contains `m-teamPopin` controls for close, previous, and next.

Rebuild: this section wants custom hotspots or floating pill buttons anchored around the portrait stack. Each hotspot should open a branded profile popin, not a browser-default tooltip.

### Projects

Observed: the projects section sits on saturated blue, includes thumbnail selectors, large centered project titles, tag pills, and a more-projects card. The DOM lists `Yelloh! Village`, `Solty Hôtel`, `Le Sac du Berger`, and `Mamy Grand`.

Observed: a separate floating `m-featuredProject` module persists with its own scrollbar/progress indicator and CTA.

Rebuild: separate the main projects rail from the floating featured-case card. The latter should remain persistent and slightly detached from the normal document flow.

### Manifest

Observed: the manifest section is a kinetic text scene rather than a card list. Source hooks include `o-homeManifest_text1`, `text2`, `text3`, plus custom branded shapes.

Rebuild: treat this as a motion-led interstitial. The point is pacing and emotional positioning, not information density.

### Expertises

Observed: the section headline is "Raisonner pour mieux: résonner." It pairs a left intro block and card stack with a right active-detail panel. The listed expertises are `Stratégie social media`, `Création de contenu`, and `Community management`.

Rebuild: maintain the asymmetry. The expertise cards can scroll or step, but the right-side detail panel should feel like the currently active argument, not secondary metadata.

### Process

Observed: the process section is framed as an ordered method: `Stratégie`, `Direction artistique`, `Création de contenu`, `Community management`, `Reporting & learnings`.

Rebuild: preserve the sense of sequence. This should feel like a branded process ladder or rail, not five identical commodity service cards.

### Why Foudre

Observed: the heading collapses into a giant stacked lockup: `POURQUOI CHOISIR FOUDRE`. Below it are four dark-green cards with imagery and short value propositions such as `Experts social media`, `Premium & sur-mesure`, `Une méthode`, `L’humain avant tout`.

Rebuild: keep these as bespoke promo panels with art and copy balance. Avoid turning them into plain feature boxes with outline icons.

### FAQ

Observed: the FAQ uses a sticky oversized title on the left and six accordion items on the right. The questions are:

- Quels types d’entreprises accompagnez-vous ?
- Est-ce que vous travaillez uniquement à Montpellier ou aussi à distance ?
- Quelles prestations proposez-vous concrètement ?
- Proposez-vous uniquement de la gestion de réseaux sociaux ou aussi du conseil/accompagnement ?
- Quels résultats peut-on attendre en travaillant avec Agence Foudre ?
- Comment obtenir un devis ou démarrer une collaboration avec Agence Foudre ?

Rebuild: retain the left sticky title block and simple plus-toggle affordance. The accordion can use a reskinned primitive, but the layout cannot collapse into a generic FAQ template.

### Footer and contact

Observed: the footer returns to pink, repeats the portrait, and overlays a tilted contact card with the headline `Racontez-nous.` and CTA `Lancer le quiz`. A giant FOUDRE logotype anchors the bottom edge alongside social links and legal links.

Rebuild: preserve the tilted card and oversized footer wordmark. This closing section should feel like a branded poster, not a standard marketing footer.

## Animation and Interaction Breakdown

Source-backed libraries and systems:

- `anime.js v4.1.2` is shipped in the JS bundle.
- `@barba/core` is present for page-transition and container management.
- `Lenis` is present for smooth scrolling and scroll-prevent regions.
- `IntersectionObserver` is used for section/module visibility triggers.
- Several modules use `requestAnimationFrame` loops for sliders and progress.

Source-backed behaviors:

- Hover-driven video play/pause and mute toggling in `VideoPlayer`.
- A floating featured-project module with progress bar and autoplaying cover/story logic.
- Project/story cards with dot navigation, previous/next controls, and preload behavior.
- Team popins with next/previous navigation.
- Contact popin with multi-step form flow and conditional field logic.
- WhatsApp popin and fixed menu controls.
- FAQ accordions are present alongside an accordion module in the bundle registry.

Implementation guidance for the target stack:

- Use GSAP for section-triggered reveals, the manifest sequence, pinned media panels, progress bars, and featured-project movement.
- Use GSAP ScrollTrigger for section color-state coordination and sticky/pinned behaviors.
- Use Framer Motion for popin open/close, button hover scale, and lightweight menu/CTA micro-interactions.
- Keep scroll ownership with GSAP and Lenis-style smooth scrolling. Do not split scroll-linked transforms across multiple systems.

## Implementation Notes for Next.js + Tailwind v4

- Build the page as home-specific modules under something like `components/home/` rather than generic marketing components.
- Model the persistent UI separately from the scroll document: `FloatingControls`, `FeaturedProject`, `ContactPopin`, `WhatsappPopin`.
- Use a CSS variable-driven theme system to swap section colors cleanly while preserving the page’s abrupt mood shifts.
- Recreate the 24-column layout with Tailwind utilities plus a small custom grid helper class. This page is too bespoke for a generic `container`.
- Keep the repeated portrait art direction centralized so multiple sections can reuse the same image set with different crops and transforms.
- Preserve French copy casing and line breaks where they shape the design.
- If the licensed fonts are unavailable, document the fallback mismatch explicitly. The display weight and compression are central to the identity.

## shadcn/ui Guidance

Allowed:

- Dialog primitives for `ContactPopin` and team popins, fully reskinned.
- Form primitives inside the contact flow, fully reskinned.
- Accordion primitive for FAQ, but only if the visual shell remains custom.

Avoid:

- `Card` for projects, expertise blocks, value props, or footer CTA.
- `Carousel` for the projects/story system.
- Default `Button` styling anywhere user-facing.
- Any prebuilt layout primitive that flattens the collage and poster composition.

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

  --font-display: "Beni", "Anton", sans-serif;
  --font-sans: "Clash Grotesk", "Inter Tight", sans-serif;

  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 2rem;

  --ease-foudre: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-bounce: cubic-bezier(0.17, 0.67, 0.3, 1.33);
}

:root {
  color-scheme: light;
}

html {
  font-size: 62.5%;
}

body {
  font-family: var(--font-sans);
  background: var(--color-foudre-paper);
  color: var(--color-foudre-green);
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

.tx-display-xxl {
  font-family: var(--font-display);
  font-size: min(11.5rem, 29.48vw);
  font-weight: 900;
  line-height: 0.7;
}

.tx-display-lg {
  font-family: var(--font-display);
  font-size: 5.4rem;
  font-weight: 900;
  line-height: 0.7;
}

.tx-label {
  font-size: 1rem;
  line-height: 0.85;
}

.chip-bubble {
  border-radius: var(--radius-lg);
  background: var(--color-foudre-cream);
  padding: 1rem;
}

@media (min-width: 961px) {
  .tx-display-xxl {
    font-size: min(30rem, 16vw);
  }

  .tx-display-lg {
    font-size: 9.4rem;
  }

  .tx-label {
    font-size: 1.2rem;
  }
}
```

## Build Checklist

- Recreate the fixed corner controls and centered logo behavior across breakpoints.
- Match the giant display typography scale before tuning secondary details.
- Rebuild the hero collage with one dominant center card and two flanking image cards.
- Preserve the section background progression: paper, pink, paper, blue, gray, blush, pink, paper, pink.
- Implement the floating featured-project card as a persistent overlay, not an in-flow card.
- Keep the expertise and process sections asymmetrical and editorial.
- Preserve the giant footer wordmark and tilted CTA card.
- Use GSAP for scroll-owned motion and only use Framer Motion for isolated UI state changes.
- Reskin any shadcn primitive beyond recognition so nothing reads as default.
- Verify both desktop and mobile feel intentionally composed rather than simply responsive.
