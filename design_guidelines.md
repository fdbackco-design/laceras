# La Ceras - French Luxury Luggage Brand Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Luxury E-commerce)

**Primary References:** Rimowa (timeless elegance), Louis Vuitton (heritage luxury), Away (modern sophistication), Tumi (premium materials)

**Design Philosophy:** Parisian minimalism meets modern luxury - emphasizing craftsmanship, materials, and lifestyle aspiration through generous whitespace, refined typography, and hero product photography.

---

## Color Palette

**Light Mode:**
- Primary Background: 0 0% 98%
- Secondary Background: 30 15% 95%
- Text Primary: 0 0% 10%
- Text Secondary: 0 0% 40%
- Accent: 25 60% 45% (warm cognac leather tone)
- Borders: 0 0% 88%

**Dark Mode:**
- Primary Background: 0 0% 8%
- Secondary Background: 0 0% 12%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Accent: 25 70% 60% (lighter cognac)
- Borders: 0 0% 20%

---

## Typography

**Font Families:**
- Headings: 'Cormorant Garamond' (serif, elegant)
- Body: 'Inter' (sans-serif, clean)

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-light
- Section Titles: text-4xl md:text-5xl, font-light, tracking-tight
- Product Names: text-2xl md:text-3xl, font-light
- Body Large: text-lg md:text-xl, font-light leading-relaxed
- Body: text-base, font-normal
- Captions: text-sm, font-light, tracking-wide uppercase

---

## Layout System

**Spacing Primitives:** Units of 4, 8, 16, 24, 32 (p-4, h-8, my-16, py-24, gap-32)

**Mobile-First Grid:**
- Mobile: Single column, px-4 or px-6
- Tablet: 2 columns where appropriate, px-8
- Desktop: Max 3 columns for products, px-12 with max-w-7xl container

**Critical Mobile Constraints:**
- All containers: max-w-full overflow-hidden
- Images: w-full h-auto object-cover
- Text: break-words hyphens-auto
- No fixed widths, only max-widths
- Grid columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Component Library

**Navigation:**
- Minimal header: Logo center, hamburger left (mobile), full nav (desktop)
- Transparent overlay on hero, solid background on scroll
- Sticky positioning with backdrop-blur

**Hero Section:**
- Full viewport height with large product image
- Centered headline with CTA below
- Subtle scroll indicator
- Mobile: 100vh with proper image scaling

**Product Grid:**
- Masonry-style on desktop, stacked cards on mobile
- Hover reveals: Product name, price, quick view
- Lazy-loaded images with blur-up placeholder

**Product Cards:**
- Square aspect ratio images
- Minimal text overlay on hover (desktop only)
- Price in accent color
- Add to cart button appears on interaction

**Collection Showcases:**
- Full-width image sections alternating text left/right (desktop)
- Stacked image-then-text on mobile
- Generous padding: py-24 md:py-32

**Testimonials:**
- Elegant quote cards with customer photos
- 1 column mobile, 2 columns tablet, 3 desktop
- Subtle borders, no heavy shadows

**Footer:**
- Multi-column (stacked mobile): Brand story, Shop links, Customer service, Newsletter signup
- Social icons, Payment badges
- Copyright and language selector

**Buttons:**
- Primary: Solid accent color, white text, rounded-sm
- Secondary: Outline with accent border, hover fills
- On images: backdrop-blur-md bg-white/20 dark:bg-black/30

---

## Animations

**Minimal & Purposeful:**
- Smooth scroll behavior
- Image fade-in on lazy load (300ms)
- Button hover scale (1.02) and opacity (0.9)
- Navigation slide-in (mobile menu)
- NO scroll-triggered animations, parallax, or carousels

---

## Images

**Hero Section:**
- Full-screen hero image showcasing signature suitcase in luxurious setting (airport lounge, luxury hotel, cobblestone Paris street)
- Desktop: 1920x1080 minimum
- Mobile: Portrait orientation 1080x1920, ensure vertical composition works

**Product Photography:**
- Clean white/light gray backgrounds
- Detail shots showing craftsmanship (stitching, wheels, handles)
- Lifestyle images in aspirational contexts

**Collection Features:**
- Travel destination backdrops (French Riviera, Tokyo streets, NYC rooftops)
- Models with luggage in motion
- Close-ups of material textures (leather, aluminum, fabric)

**Placement:**
- Hero: Single full-width image
- Featured Collections: Alternating full-width images (3-4 sections)
- Product Grid: Thumbnail images in responsive grid
- About Section: Split layout with brand heritage image
- Footer: None (keep clean)

**Image Treatment:**
- Subtle vignette on hero
- Slight desaturation for timeless feel
- Consistent lighting across all product shots

---

## Mobile Optimization Checklist

✓ All images: `class="w-full h-auto"`  
✓ Text containers: `class="px-4 md:px-8"`  
✓ No horizontal overflow: `overflow-x-hidden` on body  
✓ Touch targets minimum 44px height  
✓ Readable text: minimum 16px base  
✓ Grids collapse: Always start grid-cols-1  
✓ Navigation: Hamburger menu under 768px  
✓ Forms: Full-width inputs on mobile  
✓ Buttons: Full-width on mobile where appropriate