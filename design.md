# KANAE — Website Design Specification (design.md)

**Purpose:** a pixel-aware, UX-first design spec for KANAE — a premium photography studio (Bali, Bandung, International).
**Tone:** elegant, cinematic, trustworthy. The site must *tell stories* through imagery and copy, and convert gently with tasteful CTAs.

---

## Table of contents

1. Brand & visual identity
2. Global layout & grid
3. Typography system
4. Color palette & tokens
5. Header / Navigation (with Meet the Team)
6. Homepage — layout & components
7. Portfolio — filtering & project page
8. Gallery & lightbox behavior
9. Services / Pricing page layout
10. How It Works (flow)
11. Meet the Team page & components
12. Testimonials & social proof
13. Contact & conversion form
14. Footer
15. UI components & CSS samples
16. Image handling & accessibility
17. Performance & implementation notes
18. Developer handoff checklist

---

## 1. Brand & visual identity

* Brand personality: refined, human, cinematic, quiet confidence.
* Visual principle: **Photography is the product** — design must recede; imagery leads. Typography and spacing must be generous to let photos breathe.
* Logo use: primary mono (dark) & inverse (light). Use mark-only for favicon and social; full lockup (mark + wordmark) for header and print.

---

## 2. Global layout & grid

* Base grid: 12-column CSS grid. Gutter: `24px`.
* Container widths:

  * Desktop max-width: `1280px` (centered).
  * Content padding (desktop): `48px` left/right.
  * Tablet padding: `32px`. Mobile: `20px`.
* Breakpoints:

  * Mobile: `≤ 640px`
  * Tablet: `641–1024px`
  * Desktop: `≥ 1025px`
* Baseline spacing unit: `8px`.

  * Spacing scale: `8 / 16 / 24 / 32 / 48 / 64 / 96px`.
* Content width guidance: keep paragraphs ≤ `65ch` for readability.

---

## 3. Typography system

**Primary fonts:**

* Headings: `Playfair Display` (serif). Weights: 400 Regular, 700 Bold.
* Body/UI: `Inter` (sans-serif). Weights: 400, 500, 700.

**Font stack (CSS):**

```css
font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--heading-font: "Playfair Display", Georgia, "Times New Roman", serif;
```

**Sizes & hierarchy (desktop / mobile):**

* H1 (Hero): `56px` / `36px`, line-height `1.05`, letter-spacing `-0.5px`.
* H2 (Section title): `34px` / `24px`, line-height `1.2`.
* H3: `22px` / `18px`.
* Body (paragraph): `18px` / `16px`, line-height `1.6`.
* Small text / labels: `14px`.
* Buttons: `16px` / `15px`, font-weight `600`.

**Text colors:**

* Primary text: `text-neutral-900`
* Muted: `text-neutral-600`
* Inverse (on dark BG): `text-white`

---

## 4. Color palette & tokens (Tailwind-first, Hybrid Usage)

⚠️ **Important instruction:**  
Do **NOT** customize or overwrite Tailwind’s config (no `extend.colors`, no `--brand-*`).  
If a specific HEX is needed, always use inline classes like `text-[#HEX]` or `bg-[#HEX]`.  
This ensures Tailwind utilities remain intact and avoids breaking the build.

### Core Palette
- **Light canvas backgrounds:** `bg-stone-50`, `bg-white`  
- **Dark backgrounds:** `bg-neutral-900`, `bg-black`  
- **Primary text:** `text-neutral-900`  
- **Secondary text:** `text-neutral-700`  
- **Muted text / captions:** `text-neutral-500`  
- **Inverse text (on dark BG):** `text-white`  

### Accent Colors
- **Luxury gold (highlights, borders, CTAs):** `[#CFAE70]` *(inline HEX only)*  
- **Passionate red (wedding/emotional highlights):** `text-rose-600`  
- **Warm amber (sunset tones, intimacy):** `text-amber-500`  
- **Calm teal (nature/documentary feel):** `text-teal-500`  
- **Ocean deep blue (optional link accent):** `text-sky-800`  
- **Neutral dividers/cards:** `bg-stone-100`, `bg-zinc-100`  

### Hybrid Light/Dark Usage Rhythm
- **Hero section:** dark (`bg-neutral-900` with image overlay) → cinematic opening.  
- **About Us & Meet the Team:** light (`bg-white` or `bg-stone-50`) → approachable, professional.  
- **Portfolio landing:** light base, but portfolio cards use dark hover overlays (`bg-black/20`).  
- **Portfolio detail page:** white background for narrative text, dark strips for gallery immersion.  
- **Testimonials:** dark section with white text → intimate, storytelling feel.  
- **Contact CTA block:** dark background with gold-accent CTA → luxurious closing note.  
- **Footer:** dark (`bg-neutral-900 text-white`) → anchors the site.  

### Usage Guidelines
- Keep **most sections light** (70–80%) for readability and modern elegance.  
- Use **dark sections selectively** (20–30%) to add intimacy and cinematic contrast.  
- Headlines always high-contrast: `text-neutral-900` on light bg, `text-white` on dark bg.  
- Body copy: `text-neutral-700` on light, `text-gray-200` on dark.  
- CTAs: gold border (`border-[#CFAE70]`), hover → fill gold with white text.  
- Accent colors (rose, amber, teal) used sparingly in captions or quotes to match the photo’s mood.  

### Example Implementation
```html
<!-- Dark hero -->
<section class="relative bg-neutral-900 text-white">
  <div class="absolute inset-0 bg-black/40"></div>
  <h1 class="relative text-5xl font-serif">Capturing Timeless Love Stories</h1>
  <button class="relative border border-[#CFAE70] text-white hover:bg-[#CFAE70] hover:text-white px-6 py-3 rounded-lg">
    Inquire Now
  </button>
</section>

<!-- Light about section -->
<section class="bg-white text-neutral-900 py-20">
  <h2 class="text-3xl font-serif">More than photographs — stories you can feel.</h2>
  <p class="text-neutral-700 mt-4">At KANAE, we believe every couple has a unique story...</p>
</section>

<!-- Dark testimonials -->
<section class="bg-neutral-900 text-white py-20">
  <blockquote class="text-lg italic">“KANAE captured our wedding beautifully — every moment alive again.”</blockquote>
</section>


---

## 5. Header / Navigation (persistent)

...

## 5. Header / Navigation (persistent)

**Structure (desktop)**

* Left: Logo (mark + wordmark).
* Center/Left (optional): Primary nav items (top-level).
* Right: Action area — CTA button + hamburger for mobile.

**Nav items**

* Home
* Portfolio ▾ (mega menu)
* Services / Packages
* How it Works
* Meet the Team
* Testimonials
* Blog / Stories
* Contact

**Mega menu (Portfolio)**

* Multi-column with headings:

  * By Location: Bali | Bandung | International
  * By Vibe: Beach | Mountain | Urban | Bar | Garden
  * By Event: Wedding | Prewed | Couple | Family | Engagement
* Each item should show a small thumbnail (80×60) and a short 6–8 word description.

**Header sizes**

* Desktop height: `72px`.
* Mobile height: `56px`.
  **Header behaviors**
* Transparent over hero by default; when user scrolls 40px, switch to solid background `--bg-00` with `box-shadow: 0 6px 20px rgba(10,10,10,0.08)` and logo toggles to full color.

**Meet the Team** — include as a top-level nav item; its page/section must be accessible directly and from the hero CTA.

---

## 6. Homepage — layout & components (order & copy placement)

Goal: hero emotion → quick trust cues → featured projects → services → how it works → CTA → footer.

### 6.1 Hero section

* Full-bleed image carousel (3 slides). Primary slide: KANAE signature wedding image (portrait-oriented focal point on left or center).
* Carousel settings: autoplay 6s, pause on hover; fade transition 600ms.
* Overlay: gradient bottom→top `linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.2) 40%, rgba(0,0,0,0) 100%)`.
* Content container (center-left alignment):

  * Superhead (small): `Location toggle badges` — "Bali • Bandung • International" (Inter 14px / semi-bold).
  * H1: *“Capturing Timeless Love Stories.”* (Playfair Display)
  * H2/Subline: *“From intimate preweds to grand weddings — we document your story with cinematic care.”* (Inter 18px)
  * CTAs:

    * Primary (solid): **Inquire Now** — `height: 56px; padding: 0 28px; border-radius: 12px; background: transparent border 1px gold?`
      Design: prefer outlined gold with subtle fill on hover. (See **CTA rules** below.)
    * Secondary (ghost): **View Portfolio** — subtle outline.
  * Microcopy under CTAs (12–13px): *“We reply within 24 hours. Custom requests welcome.”*

### 6.2 Quick Trust strip

* Horizontal bar under hero: `Icon + short stat` items (e.g., *2,000+ photoshoots*, *5-star reviews*, *Bali • Bandung • Intl.*) — small icons, Inter 14px.

### 6.3 Featured Projects / Curated Stories

* “Featured Stories” H2 + 3 large project cards (landscape); each card:

  * big image (cover), project title (Playfair 20px), location/date, 2-line teaser copy, CTA “View Story”.
* Clicking opens project detail (story page - see Portfolio section).

### 6.4 Services snapshot (short)

* 3 cards: Weddings | Preweds | Portraits — each with short bullets, starting price range, CTA “See Packages”.

### 6.5 How It Works preview (short)

* 4 steps in a horizontal timeline with minimal icons. Link to full How it Works page.

### 6.6 Testimonials preview

* Carousel of 3 quotes with small client images (circle 48px).

### 6.7 Final CTA block

* Full-width image background (slightly darkened), H2: *“Ready to begin your story?”* + CTA “Start Your Inquiry” (primary).

---

## 7. Portfolio — filtering & project page

**Portfolio landing**
- Top: Title “Portfolio” and 3-tier filters (Location / Vibe / Event).  
- Filter UI: horizontal pills; active pill has `border-b-2 border-[#CFAE70]` with subtle text emphasis.  
- Grid: Masonry / variable row heights for visual interest.  
  - Desktop: 3 columns.  
  - Tablet: 2 columns.  
  - Mobile: 1 column.  

**Project card**
- Default: clean image thumbnail with subtle rounded corners `rounded-lg`.  
- Hover state:  
  - `scale-105` transform,  
  - `shadow-lg`,  
  - overlay `bg-black/20`.  
- Overlay text (on hover):  
  - Title: `text-white text-xl font-serif`.  
  - Subtitle/location: `text-gray-200 text-sm`.  
  - CTA link: `text-[#CFAE70] hover:text-white underline`.

**Project detail page**
- Hero carousel (full-width) with lead image or video.  
- Narrative block:  
  - Left column: story text (Playfair `text-2xl text-neutral-900`, body copy `text-neutral-700`).  
  - Right column: project info (date, location, package, team).  
- CTA: “Inquire About This Package” → styled with gold border (`border-[#CFAE70]`).  
- Gallery: curated set of images, load in chunks (lazy load).  
  - Grid: `grid-cols-3 gap-6` on desktop, `grid-cols-2` tablet, `grid-cols-1` mobile.  
  - Each image: opens lightbox on click.  

**Storytelling notes**
- Each project must include a narrative (150–350 words) that frames the photos as a story.  
- Use captions: `text-sm text-gray-500` beneath selected key images.  
- Emotional highlights (quotes, moments) can use accent:  
  - Weddings → `text-rose-600`.  
  - Golden hour scenes → `text-amber-500`.  
  - Nature/documentary feel → `text-teal-500`.  
- Rule: colors emphasize story tone, never dominate layout.  

**Accessibility**
- Alt text required for every photo (format: `[event] — [location] — [short description]`).  
- Lightbox supports keyboard navigation (ESC to close, arrows to navigate).  

---

## 8. Gallery & lightbox behavior

* Grid images open to an accessible lightbox.
* Lightbox features:

  * Left/right keyboard navigation & swipe support.
  * Caption area (thin, semi-transparent background) with image title + short description (can include orientation/location).
  * Download button (if client-only galleries, hide unless authorized).
  * Close (X) top-right, ESC closes.
* Lazy load thumbnails and use `srcset` for responsive images (small, medium, large, 2x).

---

## 9. Services / Pricing page layout

* Lead-in copy: emotion + transparency. Example: *“We design packages for your day — clear inclusions, optional add-ons.”*
* Pricing grid:

  * Card: Package name, starting price (format: "From IDR X,XXX,XXX"), hours included, deliverables (number of edited images), add-ons.
  * CTA: “View Details” opens overlay / page with full inclusions and contract notes.
* International & custom rates: CTA “Custom Quote”.
* Microcopy: deposit terms, turnaround time (e.g., “4–6 weeks for full gallery”), cancellation policy summary.

---

## 10. How It Works (detailed)

Make this page a reassuring conversion tool; use visuals/illustrations + short copy.

**Sections (each with icon and 2–3 lines):**

1. Inquiry — message us with date & vision.
2. Consultation — quick call to confirm logistics & moodboard.
3. Booking — sign contract & deposit.
4. Photoshoot — relaxed guidance; we lead, you enjoy.
5. Editing — color & style consistent with our signature look.
6. Delivery — secure gallery + print album options.
7. Extras — album design, prints, extended coverage.

Use a timeline visual (vertical on mobile; horizontal on desktop). Add CTA at bottom: “Start Your Inquiry”.

---

## 11. Meet the Team

* Page intro: brand mission + studio ethos.
* Team grid: each member card includes:

  * Portrait (circular 140px)
  * Name, role (Lead Photographer / Assistant / Editor)
  * Short bio (20–30 words)
  * Social link / Email (optional)
* Include a “Day in the Life” micro-gallery or BTS reel for authenticity.
* Personal CTA: “Work with \[Name]” on each card (links to contact with preselected photographer).

---

## 12. Testimonials & social proof

* Dedicated page with filters (by location / event). Include:

  * Full-length testimonials (200–400 words) as case-studies.
  * Star ratings, client Instagram username (link).
  * Press & features badges (if any).
* Micro-copy: “Read more stories” linking to blog posts.

---

## 13. Contact & conversion form

**Contact form fields**

* Name (required)
* Email (required)
* WhatsApp (preferred)
* Event Date / Location / Venue (dropdown & free text)
* Type of shoot (select: Wedding/Prewed/Couple/Family/Engagement)
* Message (4 rows textarea)
* Budget range (optional)
* Checkbox: “I agree to terms & privacy” (link to policy)

**Form UX**

* Inline validation, friendly error messages.
* Confirmation screen: “Thanks — we’ll reply within 24 hours” + link to schedule call.
* Secondary CTA: WhatsApp quick link (visible on desktop & sticky on mobile).

**Sticky contact element**

* Add an unobtrusive sticky “Inquire” CTA at bottom-right on mobile (icon-only camera/gold ring) that expands to options (WhatsApp, Email).

---

## 14. Footer

* Columns: Brand + short about, quick links, services, social & contact.
* Newsletter sign-up field (optional) — simple single-line.
* Footer height: comfortable `80–120px` depending on content.

---

## 15. UI components & CSS samples

**CTA rules**

* Primary CTA (elegant):

  * Default: outline `2px solid var(--accent-gold)`, background: transparent, color: var(--brand-charcoal)
  * Hover: background `var(--accent-gold)` (10–20% opacity for subtle fill) or full fill for strong emphasis
  * Padding: `12px 28px`, border-radius: `10px`
  * Font: Inter 16px 600
* Secondary CTA:

  * Transparent ghost with subtle underline on hover.

**Card**

* Radius: `12px`
* Shadow: `0 10px 30px rgba(10,10,10,0.08)`
* Image cover: object-fit: cover; object-position: center;

**Project hero**

* Height: `min(72vh, 900px)`, center focal point.

**Responsive rules**

* Reduce H1 by 36% on small screens.
* Stack columns vertically below `768px`.

---

## 16. Image handling & accessibility

* Provide `srcset` (small 640w, medium 1280w, large 2048w, retina 2x).
* Deliver WebP + JPG fallbacks.
* Always include descriptive alt text (format: `[event] — [location] — [short description]`).
* Captions optional but recommended for storytelling (caption style: Inter 14px muted).
* All decorative images should have `aria-hidden="true"`.

---

## 17. Performance & implementation notes

* Lazy load offscreen images.
* Use CDN for image delivery (Cloudflare, S3 + CloudFront).
* Minify CSS; critical CSS inline for hero & nav.
* Preload hero high-res image for perceived performance.
* Accessibility: logical heading order, ARIA on dynamic content (carousel & lightbox), keyboard accessible forms and nav.

### Final design principles (one-liners)

* Let imagery tell the story; UI supports and converts without shouting.
* Maintain a balance: emotional storytelling + clear conversion path.
* Elegance over gimmicks — details (microcopy, alt text, personal bios) convert skeptics into clients.

```

