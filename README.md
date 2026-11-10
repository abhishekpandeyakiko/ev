# JOY ECO AUTOMOTIVES - Electric Vehicle & Mobility Solutions

A modern, high-performance **Single Page Application (SPA)** built for **JOY ECO AUTOMOTIVES** using **Vanilla JavaScript**, **Bootstrap 5**, modular **HTML Components**, and responsive CSS/JS animations.

---

## 🌟 Overview & Architecture

The project is structured as a lightweight, framework-free Single Page Application (inspired by React & Angular architecture, but powered by pure Vanilla JS).

- **Single Entry Point**: [`index.html`](file:///c:/Users/ADMIN/Documents/img/ev/index.html) acts as the application shell containing the header, router outlet, and footer containers.
- **Client-Side SPA Router**: [`assets/js/router.js`](file:///c:/Users/ADMIN/Documents/img/ev/assets/js/router.js) delivers instant, zero-reload transitions via hash-based routing (`#/`, `#/about`, `#/products`, `#/contact`), in-memory view caching, and dynamic document title & navigation state management.
- **Component-Driven Modular Design**:
  - Reusable layout components are isolated in [`components/`](file:///c:/Users/ADMIN/Documents/img/ev/components/).
  - Page views are modularized inside [`page/`](file:///c:/Users/ADMIN/Documents/img/ev/page/).

---

## 🚀 Key Features

### 1. Navigation & Custom Header
- Transparent header on Home page with white brand SVG logo (`logo-white.svg`).
- Sticky navbar on scroll with dark logo (`grevo-logo.svg`) and green accent.
- Consistent header styling across internal pages (`About`, `Products`, `Contact Us`).
- Clean dropdown under **Products**:
  - `Electric Scooters`
  - `Three Wheeler (E-Rickshaw)`
  - `Charging Solutions`
- Interactive full-screen search modal.
- Fully responsive mobile offcanvas drawer menu.

### 2. Slide-In Text Animations
- Inspired by Grevo Demo 2 slide-up text animations (`pbmit-split-style-slide-in`).
- Masked overflow with staggered transitions for section titles and hero typography.

### 3. Modular Pages (`page/`)
- **Home (`page/home.html`)**:
  - Hero banner with floating electric scooter cutout (`slider-img-011.png`) and rotating backdrop.
  - Live vehicle specs (Top speed: 80 km/h, 0-40 km/h: 3.3 sec, Certified Range: 116 km).
  - Mission & Detachable Battery highlights with pulsing hotspot markers.
  - Interactive counter stats (`650 m` distance covered, `564 +` charging stations, `125 k` happy riders).
  - Scooter advantages & pricing cards.
  - Testimonial carousel powered by Swiper 11.
  - Brand partner infinite logo marquee.
- **About Us (`page/about.html`)**:
  - Company background, mission, core values, and vehicle safety standards.
- **Products (`page/products.html`)**:
  - Product showcases for Two-Wheelers, Three-Wheelers (E-Rickshaws), and Fast-Charging Stations.
  - Deep-linking anchor support (e.g. `#/products#three-wheeler-erickshaw`).
- **Contact Us (`page/contact.html`)**:
  - Direct inquiry form, dealership inquiry info, showroom coordinates, and business hours.

### 4. Common Components (`components/`)
- **Header ([`components/header.html`](file:///c:/Users/ADMIN/Documents/img/ev/components/header.html))**: Single centralized navigation bar linked dynamically across all routes.
- **Footer ([`components/footer.html`](file:///c:/Users/ADMIN/Documents/img/ev/components/footer.html))**: Centralized footer with quick contact strip, newsletter subscription, and social media links.

---

## 📂 Project Structure

```
c:/Users/ADMIN/Documents/img/ev/
├── index.html                      # Single Page Application host shell
├── README.md                       # Project documentation
│
├── page/                           # Page-level view templates
│   ├── home.html                   # Home page sections & hero
│   ├── about.html                  # About Us section content
│   ├── products.html               # Products catalog & specs
│   └── contact.html                # Contact Us form & showroom details
│
├── components/                     # Reusable global layout components
│   ├── header.html                 # Centralized header & navbar
│   └── footer.html                 # Centralized footer & contact strip
│
└── assets/
    ├── js/
    │   ├── router.js               # Vanilla JS SPA Router (routes, caching, events)
    │   ├── main.js                 # App core (slider re-init, counters, sticky nav)
    │   ├── bootstrap.bundle.min.js # Bootstrap 5 bundle
    │   └── swiper-bundle.min.js    # Swiper 11 carousel library
    │
    ├── css/
    │   ├── bootstrap.min.css       # Bootstrap 5 grid & utilities
    │   ├── theme-style.css         # Theme styles & variables
    │   ├── custom.css              # Custom styling & slide-in animations
    │   ├── swiper-bundle.min.css   # Swiper carousel styling
    │   └── ...                     # FontAwesome & Flaticon icon styles
    │
    ├── images/                     # Logos, vehicle cutouts, backgrounds & icons
    └── font/                       # Custom icon fonts
```

---

## 🎨 Brand Identity

- **Brand Name**: `JOY ECO AUTOMOTIVES`
- **Address**: Opp. Alwalapuram Road, Main Road, KODAD, Suryapet District, Telangana - 508206
- **Phone**: +91 95500 03306 / +91 94942 54507
- **Email**: info@joyecoautomotives.com
- **Website**: www.joyecoautomotives.com
- **Primary Color**: `#8cc63f` (Eco Electric Green)
- **Dark Neutral**: `#131419` / `#101010`
- **Surface Background**: `#eff3f5`
- **Typography**: [Quicksand](https://fonts.google.com/specimen/Quicksand) & [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)

---

## 💻 Running the Project Locally

Because the project loads components asynchronously (`fetch()`), it should be served via any local HTTP server:

```bash
# Option 1: Using Node.js (npx serve)
npx serve .

# Option 2: Using Python 3
python -m http.server 8080

# Option 3: Using VS Code Live Server extension
# Right click on index.html -> "Open with Live Server"
```

Once running, navigate to `http://localhost:8080` in your browser. All routes (`#/`, `#/about`, `#/products`, `#/contact`) load instantly without page reloads.
