# MASTER PROMPT — ProCraft Services Next.js Website

## Project Overview

Build a full Next.js (App Router) website for **ProCraft** — a professional Plumbing, Painting, Tiling & Carpentry services company. The design must be **editorial, bold, and image-driven** — inspired by high-end construction/architecture firm websites. Think: large full-bleed photography, strong typographic contrast, minimal but intentional UI, clean whitespace, no generic AI aesthetics.

---

## Tech Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Image Handling**: Next.js `<Image />` (optimized)
- **Slider/Carousel**: Swiper.js (or Embla Carousel)
- **Icons**: Lucide React (outline only — no filled icon sets)
- **Fonts**: `next/font/google` — Use `"Inter"` (body) + `"Playfair Display"` (display headings only)
- **No**: gradient backgrounds, glassmorphism, AI-style icon packs, neon glows, drop shadows everywhere

---

## Color Scheme

```
Primary Text:       #111111  (near-black)
Secondary Text:     #555555  (medium gray)
Muted Text:         #999999  (light gray)
Background White:   #FFFFFF
Background Off:     #F5F4F1  (warm off-white — used for alternate section backgrounds)
Accent:             #C8A96E  (warm gold/brass — used sparingly: borders, hover states, active indicators)
Dark Surface:       #111111  (for footer and CTA sections)
Border:             #E5E5E5  (subtle dividers)
```

No blues, no purples, no generic corporate teal. The palette should feel like a premium interior design or architecture studio.

---

## Typography Rules

- **Display Headings** (`h1`, large section titles): `Playfair Display`, italic or regular, 56–96px, font-weight 400–700
- **Section Labels** (e.g. "OUR EXPERT SERVICES"): `Inter`, letter-spacing 0.2em, font-size 11px, uppercase, color `#999999`
- **Body Headings** (`h2`, `h3`): `Inter`, font-weight 600–700, 28–42px
- **Body Text**: `Inter`, font-weight 400, 15–16px, line-height 1.7
- **Stat Numbers**: `Playfair Display`, large (64–80px), font-weight 700
- Never use font-weight 300 (too light for a trades company)

---

## Global Layout Rules

- Max content width: `1320px`, centered
- Section padding: `py-24` to `py-32` (generous vertical breathing room)
- Mobile-first responsive breakpoints: `sm`, `md`, `lg`, `xl`
- Images: always real construction/trades photography. Placeholder via `https://images.unsplash.com` with relevant search queries (tiles, plumbing, carpentry, painting, renovation)
- Navigation: sticky on scroll, becomes solid white with a thin `1px` bottom border on scroll (use `useScrollPosition` hook)
- Cursor: default (no custom cursors)

---

## Page Structure — Full Homepage

---

### SECTION 1: Navigation (Sticky Header)

**Layout**: Full-width sticky nav, `z-50`
**Left**: Logo — "ProCraft" wordmark. Use `Inter`, font-weight 800, font-size 20px. Optionally add a thin gold underline on "Pro".
**Center**: Nav links — Services | How It Works | Projects | Areas | Reviews | Contact
**Right**: "Get Free Quote" button — solid `#111111` background, white text, no border-radius (square corners = industrial feel), 12px padding horizontal

**Behavior**:
- Default: `bg-transparent`, white text (for hero overlay)
- On scroll past 80px: `bg-white`, dark text, `border-b border-[#E5E5E5]` — smooth transition `duration-300`
- Mobile: hamburger menu → full-screen overlay nav (black background, white large links stacked vertically with Framer Motion stagger animation)

---

### SECTION 2: Hero — Full-Screen Split

**Layout**: Full viewport height (`min-h-screen`), split into two columns on desktop
**Left column (55%)**: 
- Small label: "TRUSTED TRADESPEOPLE · SINCE 2014" in uppercase tracking-widest, gray
- Large display heading: `Playfair Display`, italic, 72–88px — "The Craft Behind Every Perfect Space"
- Subtext: "Expert plumbing, tiling, carpentry & painting — delivered on time, built to last."
- Two CTA buttons stacked horizontally:
  - Primary: solid black, "Get Free Quote", square corners
  - Secondary: text only with a thin underline on hover, "Call +1 (123) 123-1234", with Lucide `Phone` icon inline
- Below buttons: 3 small trust badges inline — "✓ Licensed & Insured", "✓ Free On-Site Quote", "✓ Same-Day Availability" — use a thin `1px` left border in gold `#C8A96E` before each

**Right column (45%)**:
- Full-height image (Next.js `<Image />`, `object-cover`, `fill`) — modern bathroom renovation or tiling project photo
- Overlaid bottom-left: a small floating card — dark `#111` background, white text — showing "500+ Completed Projects · 98% Satisfaction" with a thin gold top border (this mimics the floating stat boxes seen on the reference site)

**Mobile**: stack vertically, image first (40vh tall), text below

---

### SECTION 3: Marquee Stats Bar

**Layout**: Full-width horizontal band, background `#111111`, padding `py-6`
**Content**: Horizontally scrolling (auto-animated) marquee of 4 stats:

```
500+  Completed Projects  ·  98%  Client Satisfaction  ·  10+  Years Experience  ·  Same-Day  Availability
```

Use `Playfair Display` numbers (large, white), smaller `Inter` labels (gray).
Add a thin `1px` vertical gold separator (`#C8A96E`) between each stat.
Animate with `@keyframes scroll` (CSS marquee) or Framer Motion `animate={{ x: [0, -100%] }}` infinite loop.

---

### SECTION 4: Services Grid

**Section Label**: "OUR EXPERT SERVICES" — uppercase, tracked, small gray
**Heading**: "Four Crafts. One Trusted Team." — large Inter bold

**Layout**: 2-column grid on desktop, 1-column on mobile. Each service is a large card.

**Card Design** (no rounded corners, flat, border-based):
- Full-width image at top (270px tall, `object-cover`) — relevant trades photo
- Thin gold top border `3px solid #C8A96E` only on the **active/hovered** state
- Card body: white bg, `border border-[#E5E5E5]`
- Service name: Inter bold 22px
- Description: gray 15px, 2 lines
- Sub-features list: 6 bullet points using a right-arrow `→` in gold color, Inter 14px, two columns (`grid grid-cols-2`)
- Footer: a "Learn More →" text link, no button styling, gold on hover

**Services**:
1. **Tiles Installation** — photo of clean bathroom tiles or kitchen feature wall
2. **Plumbing Services** — photo of modern bathroom fixtures or under-sink work
3. **Carpentry** — photo of custom built-in cabinetry or wooden flooring
4. **Painting Services** — photo of freshly painted light interior wall

**Animation**: On scroll, cards fade up one by one using Framer Motion `whileInView` with 0.1s stagger delay between each card.

---

### SECTION 5: Full-Bleed Statement Banner

**Layout**: Full-width, 60vh height image (fixed/parallax background)
- Use a dramatic construction/renovation photo as background (`background-attachment: fixed` for parallax on desktop)
- Dark overlay: `bg-black/50`
- Centered text overlay:
  - Label: "OUR PROMISE" — white, small, tracked
  - Large quote: `Playfair Display`, italic, white, 52px — "We don't just complete jobs — we build long-term relationships."
  - Below: Two inline stats — "10 Years+" and "500+ Projects" — white, large Playfair Display numbers with small Inter labels below

---

### SECTION 6: Why Choose Us

**Background**: `#F5F4F1` (warm off-white)
**Layout**: Left column (40%) is a tall image with a small overlaid card; Right column (60%) has the content

**Left column**:
- Tall stacked image (aspect ratio 3:4) showing a craftsman at work or finished renovation
- Overlaid bottom-right: small dark card — "Fully Certified · Background Checked · Liability Insured"

**Right column**:
- Section label: "WHY CHOOSE US"
- Heading: Inter bold 40px — "Craftsmanship You Can Count On"
- Short intro paragraph
- 6 reasons listed as **horizontal rows** (not cards), each row has:
  - A thin `1px` top border in `#E5E5E5`
  - Left: bold number `01`, `02`... in gold `#C8A96E`, Playfair Display
  - Center: reason title (Inter bold 16px) + short description below (gray 14px)
  - Right: Lucide icon (shield-check, tag, clock, etc.), gray, 20px

---

### SECTION 7: How It Works — Horizontal Stepper

**Layout**: White background, full-width
**Section Label**: "THE PROCESS"
**Heading**: "Our Simple 6-Step Process"

**Design**: Horizontal numbered steps on desktop (scroll-animated), vertical stack on mobile
- Each step: number circle (40px, outline `1px solid #111`), step title bold, 2-line description in gray
- Between steps: a thin connecting dashed line `border-t border-dashed border-[#E5E5E5]` in the top half
- On scroll, use Framer Motion to animate each step **sequentially** — step 1 fades in, then 2, then 3, etc. (stagger 0.15s)
- Below the steps row: a single centered CTA button — "Start Your Project →" — solid black, square corners

**Steps**: Contact & Consult → Free Site Visit → Project Planning → Detailed Quote → Work Begins → Final Inspection

---

### SECTION 8: Image Gallery / Project Showcase

**Layout**: Full-width, no max-width container, edge to edge
**Section Label**: "RECENT WORK"
**Heading**: "Projects That Speak for Themselves"

**Design — Asymmetric Masonry Grid**:
- Use a CSS grid with varying row/column spans:
  - 1 large image (spans 2 columns, 2 rows) on the left
  - 2 medium images stacked on the right
  - Below that: 3 equal-width images in a row
- All images are `object-cover` with no border-radius
- On hover: dark overlay fades in + service category label appears (e.g. "Tiling", "Carpentry") in white uppercase small text
- No captions by default — the images carry the weight

**Below the grid**: a small text link — "View All Projects →" — centered, no button, just underline on hover

---

### SECTION 9: Service Areas

**Background**: `#111111` (dark section)
**Layout**: Two-column — Left is content, Right is a minimal map illustration or just bold typographic treatment

**Left**:
- White label: "SERVICE AREAS"
- White heading: "We Work in Mexico & North Carolina"
- Short paragraph in gray

**Right — Area Cards**:
- Display areas as large typographic items — just the location name in large white `Playfair Display` text, with a thin `1px` white bottom border as a divider
- On hover: name turns gold `#C8A96E`

**Areas**: Mexico · North Carolina (and sub-areas if any)

---

### SECTION 10: What's Included

**Background**: `#F5F4F1`
**Layout**: Top header full-width, then a 3-column grid of service type cards

**Cards** (flat, no border-radius):
- White background
- Lucide icon (home, building, alert-triangle, hammer, layers, wrench) — black, 24px, NOT filled
- Title: Inter bold 18px
- Short 2-line description
- Thin bottom `3px` accent line in gold on hover

**Services**: Residential · Commercial · Emergency Response · New Build & Renovation · Project Management

---

### SECTION 11: Benefits Strip

**Layout**: Full-width dark `#111` band, single horizontal row of benefits (scroll-able on mobile)
**Content**: 6 benefit pills, each: Lucide icon (small, white) + benefit text (white, 13px, Inter)
- Increase Property Value
- Long-Lasting Finishes
- Space Optimization
- Water & Damage Protection
- Modern Functional Designs
- Clean Installation

Separated by thin `1px` vertical white/20 dividers.

---

### SECTION 12: Client Reviews / Testimonials

**Background**: White
**Section Label**: "CLIENT REVIEWS"
**Heading**: "What Our Clients Say"

**Filter tabs above the slider**: Pill-style filter buttons — All | Tiles | Plumbing | Carpentry | Painting
- Active tab: solid black background, white text
- Inactive: border `1px solid #E5E5E5`, black text
- On tab change, filter the visible testimonials (React state — no page reload)

**Slider** (Swiper.js or Embla Carousel):
- Shows 3 cards at once on desktop, 1 on mobile
- Navigation: two arrow buttons (left/right), square, thin border, no background
- Each card:
  - No border-radius (square card)
  - `border border-[#E5E5E5]`
  - Top: 5 gold stars (`★★★★★`) in `#C8A96E`
  - Quote text: gray, 15px, italic, 3–4 lines
  - Bottom: client name (Inter bold 14px) + role/type (gray 12px) + service category badge (black pill, white 11px text)

---

### SECTION 13: FAQ Accordion

**Background**: `#F5F4F1`
**Layout**: Two-column on desktop — Left 40% is the heading and a decorative element; Right 60% is the accordion

**Left**:
- Section label: "FAQ"
- Large heading: "Questions We Get Asked Most"
- Short paragraph
- A decorative thin vertical gold line (`2px solid #C8A96E`, 80px tall) — purely aesthetic

**Right — Accordion**:
- 8 FAQ items
- Each row: question text (Inter bold 15px) + `+` icon on the right (Lucide `Plus` rotates to `X` on open)
- Expanded: answer slides down using Framer Motion `AnimatePresence` with `height` animation
- `border-b border-[#E5E5E5]` between each item
- Active/open question: gold `#C8A96E` color on the question text

---

### SECTION 14: Final CTA

**Background**: Full-bleed image (renovation/construction site photo) with `bg-black/60` overlay
**Height**: 70vh
**Centered content**:
- Label: "START YOUR PROJECT"
- Large white heading: `Playfair Display`, italic, 64px — "Ready to Transform Your Home?"
- Subtext: "Free on-site quote · No obligation · Response within 2 hours"
- Two CTA buttons side by side:
  - "Call Us Now" — white background, black text, square
  - "Send Enquiry" — outline white border, white text, square
- Phone number below in large white text: "+1 (123) 123-1234"

---

### SECTION 15: Footer

**Background**: `#111111`
**Layout**: 4-column grid

**Column 1 — Brand**:
- "ProCraft" logo (white)
- Short tagline in gray 14px
- Social icons: Instagram, Facebook, LinkedIn (Lucide icons, white, 18px)

**Column 2 — Services**:
- Heading: "Services" (white, Inter bold 14px, tracked)
- Links: Tiles Installation · Plumbing · Carpentry · Painting (gray, hover: white)

**Column 3 — Company**:
- How It Works · Why Us · Project Gallery · Service Areas · Reviews · FAQ

**Column 4 — Contact**:
- Phone (with Lucide `Phone` icon)
- Email (with `Mail` icon)
- Service areas: Mexico · North Carolina

**Bottom bar**: full-width `1px` top border, `#222`. Left: copyright. Right: "Licensed · Insured · Trusted"

---

## Animations Summary

Use Framer Motion consistently:

| Element | Animation |
|---|---|
| Section headings | `fadeInUp` on `whileInView`, `once: true` |
| Service cards | Stagger fade-up, 0.1s delay each |
| Hero text | Sequential reveal — label → h1 → subtext → buttons |
| How It Works steps | Sequential left-to-right reveal |
| Stats marquee | Infinite CSS marquee scroll |
| Nav on scroll | Smooth `bg-transparent` → `bg-white` transition |
| FAQ accordion | Framer Motion `AnimatePresence` height expand |
| Image hover overlays | `opacity: 0 → 1` on group hover |
| Testimonial slider | Swiper with `slidesPerView: 3`, loop, custom arrows |

All animations use `viewport: { once: true, margin: "-100px" }` — only trigger once on first scroll into view.

---

## Component File Structure

```
app/
  layout.tsx          ← font setup, metadata
  page.tsx            ← imports all sections
components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    StatsMarquee.tsx
    ServicesGrid.tsx
    StatementBanner.tsx
    WhyChooseUs.tsx
    HowItWorks.tsx
    ProjectGallery.tsx
    ServiceAreas.tsx
    WhatIsIncluded.tsx
    BenefitsStrip.tsx
    Testimonials.tsx
    FAQ.tsx
    CTASection.tsx
  ui/
    ServiceCard.tsx
    TestimonialCard.tsx
    AccordionItem.tsx
    SectionLabel.tsx    ← reusable uppercase label
    Button.tsx          ← two variants: solid, outline
```

---

## Image Strategy

Use `next/image` with `priority` on the hero. All images from Unsplash (free, no attribution required for dev builds). Suggested search terms per section:

- Hero: `"modern bathroom renovation tiles"`
- Tiles section card: `"luxury floor tiles installation"`
- Plumbing section card: `"modern bathroom plumbing fixtures"`
- Carpentry section card: `"custom built-in wooden cabinetry"`
- Painting section card: `"interior wall painting professional"`
- Statement banner: `"construction renovation workers"`
- Why Choose Us: `"professional tradesman working"`
- Project Gallery: mix of all 4 trades
- CTA: `"luxury home renovation complete"`

All images use `sizes="(max-width: 768px) 100vw, 50vw"` for performance.

---

## Key Design Principles to Enforce

1. **No rounded corners** on primary content cards and buttons (square = industrial credibility)
2. **Gold accent** (`#C8A96E`) used only for: active states, hover indicators, number accents, star ratings — never as background fill
3. **Images carry the weight** — if a section feels empty, add an image, not an illustration or icon
4. **Typography contrast** — always pair a large Playfair Display display line with a small Inter label above it
5. **Section alternation** — white → off-white → dark → white — prevents visual monotony
6. **No generic service icons** — replace icon-heavy layouts with photo-based ones
7. **Horizontal layouts preferred** — avoid stacked bullet-list sections; use 2-col or 3-col layouts
8. **Mobile performance** — use `loading="lazy"` on below-fold images, preload hero image only

---

## Content Data File

Create `data/content.ts` exporting:
- `services[]` — id, name, description, subFeatures[], imageSrc
- `testimonials[]` — name, role, serviceType, text, stars
- `faqs[]` — question, answer
- `stats[]` — value, label
- `steps[]` — number, title, description
- `benefits[]` — icon, label

This keeps all sections data-driven and easy to edit later.

---

## Final Checklist

- [ ] `next/font` configured (Inter + Playfair Display)
- [ ] Tailwind config extends colors with brand palette
- [ ] `framer-motion` installed
- [ ] `swiper` installed for testimonials
- [ ] All sections mobile-responsive
- [ ] Hero image above fold has `priority` prop
- [ ] Sticky nav scroll behavior wired
- [ ] Testimonial filter tabs working
- [ ] FAQ accordion with smooth animation
- [ ] `metadata` in `layout.tsx` with title, description, OG tags
- [ ] No console errors on production build