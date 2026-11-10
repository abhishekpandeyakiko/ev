document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. COMPONENT LOADER (Header & Footer)
  // --------------------------------------------------------------------------
  const loadComponent = async (id, file, callback) => {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const res = await fetch(file + '?v=' + Date.now());
      if (res.ok) el.innerHTML = await res.text();
    } catch (_) { }
    if (callback) callback();
  };

  loadComponent('site-header-component', 'components/header.html', initHeader);
  loadComponent('site-footer-component', 'components/footer.html', initFooter);


  // --------------------------------------------------------------------------
  // 2. STICKY HEADER & MOBILE NAVIGATION
  // --------------------------------------------------------------------------
  function initHeader() {
    const header = document.querySelector('.thsn-main-header-area');
    const masthead = document.getElementById('masthead');
    const menuToggle = document.getElementById('menu-toggle');
    const navTop = document.querySelector('.navigation-top');

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
      const isSticky = window.scrollY > 100;
      header?.classList.toggle('is-sticky', isSticky);
      masthead?.classList.toggle('is-sticky', isSticky);
    }, { passive: true });

    // Set active nav menu item based on current page
    const currentPath = window.location.pathname.toLowerCase();
    document.querySelectorAll('#thsn-top-menu > li').forEach(li => li.classList.remove('current-menu-item'));
    if (currentPath.includes('about')) {
      document.getElementById('menu-item-about')?.classList.add('current-menu-item');
    } else if (currentPath.includes('product')) {
      document.getElementById('menu-item-products')?.classList.add('current-menu-item');
    } else if (currentPath.includes('contact')) {
      document.getElementById('menu-item-contact')?.classList.add('current-menu-item');
    } else {
      document.getElementById('menu-item-home')?.classList.add('current-menu-item');
    }

    // Mobile Hamburger Drawer Toggle
    menuToggle?.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('thsn-mobile-menu-active');
      navTop?.classList.toggle('active');
    });

    // Mobile Sub-menu Accordion (< 1200px)
    document.querySelectorAll('#thsn-top-menu > li.menu-item-has-children > a').forEach(link => {
      link.addEventListener('click', function (e) {
        if (window.innerWidth < 1200) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('open');
          const sub = parent.querySelector('.sub-menu');
          if (sub) sub.style.display = parent.classList.contains('open') ? 'block' : 'none';
        }
      });
    });

    // Header Search Button Trigger
    document.querySelector('.thsn-header-search-btn a')?.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  }


  // --------------------------------------------------------------------------
  // 3. SEARCH POPUP MODAL
  // --------------------------------------------------------------------------
  const searchModal = document.querySelector('.thsn-header-search-form-wrapper');
  const searchInput = searchModal?.querySelector('input[type="search"]');

  const openSearch = () => {
    searchModal?.classList.add('open');
    setTimeout(() => searchInput?.focus(), 150);
  };

  const closeSearch = () => searchModal?.classList.remove('open');

  document.querySelectorAll('.thsn-header-search-btn a, .search-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openSearch(); });
  });

  searchModal?.querySelector('.thsn-search-close')?.addEventListener('click', closeSearch);
  searchModal?.addEventListener('click', (e) => { if (e.target === searchModal) closeSearch(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

  searchModal?.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchInput?.value.trim()) {
      alert(`Searching for: "${searchInput.value.trim()}" across Grevo EV products...`);
      closeSearch();
    }
  });


  // --------------------------------------------------------------------------
  // 4. ANIMATED COUNTERS
  // --------------------------------------------------------------------------
  const runCounters = () => {
    document.querySelectorAll('.thsn-number-rotate[data-to]').forEach(el => {
      if (el.textContent.trim() === '0') el.textContent = el.getAttribute('data-to');
    });
  };
  runCounters();
  window.addEventListener('scroll', runCounters, { passive: true });
  setTimeout(runCounters, 1000);


  // --------------------------------------------------------------------------
  // 5. TESTIMONIALS CAROUSEL (Auto-slide, dots, swipe)
  // --------------------------------------------------------------------------
  function initTestimonials() {
    const track = document.getElementById('customTestiTrack');
    const viewport = document.getElementById('customTestiViewport');

    if (track && viewport) {
      const slides = track.querySelectorAll('.custom-testi-slide');
      const dots = document.querySelectorAll('#customTestiDots .dot-btn');
      let currentIdx = 0;
      let timer = null;

      const goToSlide = (index) => {
        currentIdx = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIdx * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIdx));
      };

      const startAutoPlay = () => {
        clearInterval(timer);
        timer = setInterval(() => goToSlide(currentIdx + 1), 5000);
      };

      startAutoPlay();

      document.getElementById('customTestiPrev')?.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIdx - 1);
        startAutoPlay();
      });

      document.getElementById('customTestiNext')?.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIdx + 1);
        startAutoPlay();
      });

      dots.forEach(dot => {
        dot.addEventListener('click', function () {
          goToSlide(parseInt(this.getAttribute('data-index'), 10));
          startAutoPlay();
        });
      });

      viewport.addEventListener('mouseenter', () => clearInterval(timer));
      viewport.addEventListener('mouseleave', startAutoPlay);

      // Touch Swipe for Mobile / Tablet
      let startX = 0;
      viewport.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
        clearInterval(timer);
      }, { passive: true });

      viewport.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) goToSlide(diff > 0 ? currentIdx + 1 : currentIdx - 1);
        startAutoPlay();
      }, { passive: true });
    }
  }

  initTestimonials();


  // --------------------------------------------------------------------------
  // 6. BACK-TO-TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', (window.scrollY || window.pageYOffset) > 350);
    }, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // --------------------------------------------------------------------------
  // 7. NEWSLETTER SUBSCRIPTION
  // --------------------------------------------------------------------------
  function initFooter() {
    document.querySelectorAll('.mc4wp-form').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input && input.value) {
          alert('Thank you for subscribing to JOY ECO AUTOMOTIVES updates!');
          input.value = '';
        }
      });
    });
  }


  // --------------------------------------------------------------------------
  // 8. FULL-WIDTH STRETCH & BACKGROUND LAZYLOAD
  // --------------------------------------------------------------------------
  const handleWidthsAndImages = () => {
    // Activate all background sections
    document.querySelectorAll('.e-con.e-parent, [class*="elementor-section"]').forEach(el => {
      el.classList.add('e-lazyloaded');
    });

    // Stretch sections to full viewport
    const winWidth = document.documentElement.clientWidth;
    document.querySelectorAll('.elementor-section-stretched').forEach(sec => {
      sec.style.position = 'relative';
      sec.style.left = `-${sec.getBoundingClientRect().left}px`;
      sec.style.boxSizing = 'border-box';
      sec.style.width = `${winWidth}px`;
    });
  };

  handleWidthsAndImages();
  window.addEventListener('resize', handleWidthsAndImages, { passive: true });
  window.addEventListener('load', handleWidthsAndImages);


  // --------------------------------------------------------------------------
  // 9. SCROLL REVEAL TEXT SLIDE ANIMATIONS (Like Grevo Demo2)
  // --------------------------------------------------------------------------
  const initScrollReveal = () => {
    const targets = document.querySelectorAll(
      '.thsn-element-subtitle, .thsn-element-title, .thsn-heading-desc, .thsn-ihbox, .thsn-pricing-table-box, .thsn-fld-wrap'
    );

    if ('IntersectionObserver' in window && targets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-inview');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
      );

      targets.forEach((el) => {
        if (!el.closest('.thsn-slider-area')) {
          observer.observe(el);
        } else {
          el.classList.add('is-inview');
        }
      });
    } else {
      targets.forEach((el) => el.classList.add('is-inview'));
    }
  };

  initScrollReveal();

  // --------------------------------------------------------------------------
  // 10. SPA ROUTE CHANGE HANDLER (Re-initialize on route changes)
  // --------------------------------------------------------------------------
  window.addEventListener('pageRendered', () => {
    handleWidthsAndImages();
    runCounters();
    initTestimonials();
    initScrollReveal();
  });

});
