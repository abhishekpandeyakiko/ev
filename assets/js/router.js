/**
 * JOY ECO AUTOMOTIVES - Vanilla JS SPA Client-Side Router
 * Pure Vanilla JavaScript Routing System (No React / No Angular)
 * Zero UI disturbance, Instant Page Navigation, Section Linking & State Management
 */

(function () {
  'use strict';

  const routes = {
    '/': {
      component: 'components/home.html',
      title: 'JOY ECO AUTOMOTIVES – Electric Vehicle & Charging Solutions',
      menuId: 'menu-item-home',
      isHome: true
    },
    '/home': {
      component: 'components/home.html',
      title: 'JOY ECO AUTOMOTIVES – Electric Vehicle & Charging Solutions',
      menuId: 'menu-item-home',
      isHome: true
    },
    '/about': {
      component: 'components/about.html',
      title: 'About Us – JOY ECO AUTOMOTIVES',
      menuId: 'menu-item-about',
      isHome: false
    },
    '/products': {
      component: 'components/products.html',
      title: 'Products – JOY ECO AUTOMOTIVES',
      menuId: 'menu-item-products',
      isHome: false
    },
    '/contact': {
      component: 'components/contact.html',
      title: 'Contact Us – JOY ECO AUTOMOTIVES',
      menuId: 'menu-item-contact',
      isHome: false
    }
  };

  // In-memory component cache for lightning fast transitions
  const cache = new Map();

  // Parse hash path and anchor (e.g. "#/products#e-rickshaw" or "#/about")
  function parseHash() {
    let raw = window.location.hash || '#/';
    if (!raw.startsWith('#/')) {
      if (raw.startsWith('#')) raw = '#/' + raw.substring(1);
      else raw = '#/';
    }

    // Check for inner anchor (e.g. #/products#electric-scooters)
    let parts = raw.substring(1).split('#');
    let path = parts[0] || '/';
    let anchor = parts[1] || '';

    // Normalize path
    if (path.endsWith('/') && path.length > 1) {
      path = path.slice(0, -1);
    }

    return { path, anchor };
  }

  // Fetch or get from cache
  async function getComponentHtml(url) {
    if (cache.has(url)) {
      return cache.get(url);
    }
    const res = await fetch(url + '?v=' + Date.now());
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    cache.set(url, html);
    return html;
  }

  // Update active menu link in header
  function updateActiveMenu(menuId) {
    document.querySelectorAll('#thsn-top-menu > li').forEach(li => {
      li.classList.remove('current-menu-item');
    });
    if (menuId) {
      const activeLi = document.getElementById(menuId);
      if (activeLi) activeLi.classList.add('current-menu-item');
    }
  }

  // Main route transition
  async function handleRoute() {
    const { path, anchor } = parseHash();
    const route = routes[path] || routes['/'];
    const outlet = document.getElementById('router-outlet');
    if (!outlet) return;

    try {
      const html = await getComponentHtml(route.component);

      // Set body class for home-specific header styling
      if (route.isHome) {
        document.body.classList.add('home');
      } else {
        document.body.classList.remove('home');
      }

      // Render component HTML
      outlet.innerHTML = html;

      // Update page title
      document.title = route.title;

      // Update active navigation item
      updateActiveMenu(route.menuId);

      // Scroll handling: if anchor specified, scroll to it; otherwise top
      if (anchor) {
        setTimeout(() => {
          const target = document.getElementById(anchor);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }

      // Dispatch route change event so main.js can re-initialize animations
      window.dispatchEvent(new CustomEvent('pageRendered', {
        detail: { path, route, anchor }
      }));

    } catch (err) {
      console.error('Router error:', err);
      outlet.innerHTML = `<div class="container" style="padding:100px 0; text-align:center;"><h2>Page not found</h2><p><a href="#/">Return Home</a></p></div>`;
    }
  }

  // Global link click interceptor
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;

    // Handle internal routing links
    if (href === 'index.html' || href === '/') {
      e.preventDefault();
      window.location.hash = '#/';
    } else if (href === 'about.html') {
      e.preventDefault();
      window.location.hash = '#/about';
    } else if (href === 'products.html') {
      e.preventDefault();
      window.location.hash = '#/products';
    } else if (href.startsWith('products.html#')) {
      e.preventDefault();
      const anchor = href.replace('products.html#', '');
      window.location.hash = `#/products#${anchor}`;
    } else if (href === 'contact.html') {
      e.preventDefault();
      window.location.hash = '#/contact';
    } else if (href.startsWith('#/')) {
      // Natural hash link, let hashchange handle it
    }
  });

  // Listen for hash changes & initial load
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);

  // Expose router API
  window.AppRouter = {
    navigate: (path, anchor) => {
      window.location.hash = anchor ? `#${path}#${anchor}` : `#${path}`;
    },
    refresh: handleRoute
  };

})();

