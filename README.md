# Grevo Demo 2 - Electric Vehicle Charging Website Clone

A high-fidelity clone of **[Grevo Demo 2](https://grevo-demo.pbminfotech.com/demo2/)** built with **Bootstrap 5**, clean modular **CSS**, and custom **JavaScript**.

---

## 🚀 Features

- **Exact Header & Sticky Navigation**:
  - Transparent header with primary white SVG logo (`logo-white.svg`).
  - Animated sticky navbar on scroll with dark logo (`grevo-logo.svg`) and subtle box-shadow.
  - Multi-level dropdown menus (Home, Pages, Services, Gallery, Blog, Contact Us).
  - Search trigger opening a full-screen interactive search modal.
  - Cart counter badge and direct contact buttons.
  - Responsive mobile drawer navigation with accordion sub-menus.

- **Hero Banner (Eco-Friendly Ride)**:
  - Exact typography: `"Book Your New Eco-Friendly Ride."`
  - High-resolution scooter cutout (`slider-img-011.png`) with continuous floating keyframe animation.
  - Rotating decorative backdrop (`round-021.png`).
  - 3 Live Vehicle Specs badges:
    - **Top speed**: `80 km/h`
    - **0-40 km/hr in**: `3.3 sec`
    - **Certified Range**: `116 km`

- **Section 1: About & Mission**:
  - Animated SVG circular progress ring: `85%` Charging Speed.
  - Value propositions: *"Zero contact travel"* and *"No Driving License"*.
  - Detachable battery highlight badge.
  - High-res photo with pulsing interactive **Hotspot Markers** and hover tooltips.

- **Section 2: Stats & Counters**:
  - Dynamic JavaScript animated counters with `IntersectionObserver`:
    - `650 m` - Total distance covered
    - `564 +` - Charging stations
    - `125 k` - Happy riders

- **Section 3: Scooter Advantages**:
  - 3-column layout showcasing *"What advantages will you get using an escooter?"*.
  - Left & Right feature highlights: Recoverable energy, Quick installation, Zero contact travel.
  - Central electric scooter cutout showcase (`img-n-04.png`).

- **Section 4: Charging Packages & Pricing**:
  - 2 Pricing Cards:
    - **Home charging**: `$240 / mo`
    - **480 Volt Station (Featured)**: `$200 / mo`
  - Feature checklists and CTA buttons.

- **Section 5: Testimonials Carousel**:
  - Interactive touch & drag carousel (powered by Swiper 11) with 6 client reviews.
  - Star ratings, client avatars, designations, and custom pagination bullets.

- **Section 6: Partner & Client Logos**:
  - Infinite auto-sliding client brand logo marquee with hover zoom effects.

- **Section 7: CTA Banner**:
  - *"Designed for the our roads"* banner with action button.

- **Section 8: Fresh News & Blog Grid**:
  - 3 responsive blog cards with date badges, author, comment count, and hover effects.

- **Section 9: Quick Info & Footer**:
  - Hotline, email, and location banner.
  - 4-column footer with newsletter subscription input, company links, and quick contact details (`(002) 01061245741`).
  - Bottom bar with copyright info and social media icons (Facebook, Twitter/X, YouTube, LinkedIn).
  - Smooth floating Back-to-Top button.

---

## 🎨 Typography & Colors

- **Primary Font**: [Quicksand](https://fonts.google.com/specimen/Quicksand) (`400`, `500`, `600`, `700`, `800`)
- **Secondary Font**: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) (`400`, `500`, `600`, `700`, `800`, `900`)
- **Primary Color**: `#8cc63f` (Grevo Electric Lime)
- **Secondary Color**: `#131419` / `#101010` (Dark Contrast)
- **Light BG Color**: `#eff3f5`

---

## 📂 Project Structure

```
├── index.html                  # Main cloned home page
├── README.md                   # Project documentation
└── assets/
    ├── css/
    │   ├── bootstrap.min.css   # Bootstrap 5 framework
    │   ├── fontawesome.min.css # Font Awesome icons
    │   ├── swiper-bundle.min.css # Carousel slider styles
    │   ├── flaticon.css        # Grevo custom vehicle & power icons
    │   ├── themesion-base-icons.css # Grevo base UI icons
    │   ├── theme.min.css       # Grevo original styles
    │   ├── theme-style.css     # Grevo theme variables & rules
    │   ├── core.min.css        # Core layout & grid
    │   ├── custom.css          # Project custom stylesheet
    │   └── ...                 # Modular widget styles
    ├── js/
    │   ├── bootstrap.bundle.min.js # Bootstrap 5 JS bundle
    │   ├── swiper-bundle.min.js    # Swiper 11 JS
    │   └── main.js                 # Sticky nav, counters, modals, sliders
    ├── images/                 # 59 local high-res images & SVGs
    ├── font/                   # WOFF2 / WOFF / TTF icon font files
    └── webfonts/               # Font Awesome font files
```

---

## 💻 How to View

Simply open `index.html` in any web browser, or serve it locally with:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js
npx serve .
```

