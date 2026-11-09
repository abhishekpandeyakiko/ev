/**
 * Grevo Demo 2 - Interactive Main Scripts
 * Handles Sticky Navbar, Mobile Navigation Drawer, Search Modal,
 * Animated Counters (85%, 650m, 564+, 125k), Swiper Carousels, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // =========================================================================
  // 1. Sticky Navigation Header
  // =========================================================================
  const mainHeader = document.querySelector('.thsn-main-header-area');
  const masthead = document.getElementById('masthead');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;

    // Sticky header toggle
    if (scrollY > 120) {
      if (mainHeader) mainHeader.classList.add('is-sticky');
      if (masthead) masthead.classList.add('is-sticky');
    } else {
      if (mainHeader) mainHeader.classList.remove('is-sticky');
      if (masthead) masthead.classList.remove('is-sticky');
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 2. Mobile Menu Drawer
  // =========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const navTop = document.querySelector('.navigation-top');

  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.toggle('thsn-mobile-menu-active');
      if (navTop) navTop.classList.toggle('active');
    });
  }

  // Mobile submenu accordion
  const menuItemsWithChildren = document.querySelectorAll('#thsn-top-menu > li.menu-item-has-children > a');
  menuItemsWithChildren.forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth < 1200) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
        const sub = parent.querySelector('.sub-menu');
        if (sub) {
          sub.style.display = parent.classList.contains('open') ? 'block' : 'none';
        }
      }
    });
  });

  // =========================================================================
  // 3. Search Trigger & Full-Screen Overlay
  // =========================================================================
  const searchTriggers = document.querySelectorAll('.thsn-header-search-btn a, .search-toggle-btn');
  const searchOverlay = document.querySelector('.thsn-search-modal-overlay') || document.querySelector('.thsn-header-search-form-wrapper');
  const searchClose = document.querySelector('.thsn-search-modal-close') || document.querySelector('.thsn-search-close');

  if (searchTriggers.length > 0 && searchOverlay) {
    searchTriggers.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        searchOverlay.classList.add('active');
        searchOverlay.classList.add('open');
        const input = searchOverlay.querySelector('input');
        if (input) setTimeout(() => input.focus(), 150);
      });
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', function (e) {
      e.preventDefault();
      searchOverlay.classList.remove('active');
      searchOverlay.classList.remove('open');
    });

    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchOverlay.classList.remove('open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && (searchOverlay.classList.contains('active') || searchOverlay.classList.contains('open'))) {
        searchOverlay.classList.remove('active');
        searchOverlay.classList.remove('open');
      }
    });
  }

  // =========================================================================
  // 4. Live Counters & Numbers Initialization
  // =========================================================================
  function initCounters() {
    const allFids = document.querySelectorAll('.thsn-number-rotate');
    allFids.forEach(el => {
      const target = el.getAttribute('data-to');
      if (target && el.textContent.trim() === '0') {
        el.textContent = target;
      }
    });
  }
  // Periodically check during first 3s so numbers are never stuck at 0
  const counterInterval = setInterval(initCounters, 200);
  setTimeout(() => clearInterval(counterInterval), 3000);
  window.addEventListener('scroll', initCounters, { passive: true });

  // =========================================================================
  // 5. Testimonials & Client Logos Smooth Carousel
  // =========================================================================
  if (typeof Swiper !== 'undefined') {
    // Check if Swiper containers exist
    const testSwiperEl = document.querySelector('.testimonials-swiper');
    if (testSwiperEl) {
      new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.testimonials-pagination', clickable: true },
        navigation: { nextEl: '.testimonials-next', prevEl: '.testimonials-prev' },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 30 }
        }
      });
    }

    const clientSwiperEl = document.querySelector('.clients-swiper');
    if (clientSwiperEl) {
      new Swiper('.clients-swiper', {
        slidesPerView: 2,
        spaceBetween: 25,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
          480: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          992: { slidesPerView: 6, spaceBetween: 50 }
        }
      });
    }
  }

  // =========================================================================
  // 6. Newsletter Subscription Form Handler
  // =========================================================================
  const forms = document.querySelectorAll('.mc4wp-form, .footer-newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Thank you for subscribing to Grevo Electric Vehicle updates!');
        input.value = '';
      }
    });
  });

  // =========================================================================
  // Testimonial Single Slide Carousel Controller
  // =========================================================================
  const testArticles = document.querySelectorAll('.thsn-element-testimonial-style-2 .thsn-ele-testimonial');
  if (testArticles.length > 0) {
    let currentIdx = 0;
    testArticles.forEach((art, i) => {
      if (i === 0) art.classList.add('active');
      else art.classList.remove('active');
    });

    function showTestimonial(idx) {
      testArticles.forEach((art, i) => {
        if (i === idx) {
          art.classList.add('active');
        } else {
          art.classList.remove('active');
        }
      });
      currentIdx = idx;
    }

    function nextTestimonial() {
      const next = (currentIdx + 1) % testArticles.length;
      showTestimonial(next);
    }

    function prevTestimonial() {
      const prev = (currentIdx - 1 + testArticles.length) % testArticles.length;
      showTestimonial(prev);
    }

    // Attach to .owl-prev and .owl-next buttons
    const prevBtns = document.querySelectorAll('.thsn-element-testimonial-style-2 .owl-prev');
    const nextBtns = document.querySelectorAll('.thsn-element-testimonial-style-2 .owl-next');

    prevBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        prevTestimonial();
      });
    });

    nextBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        nextTestimonial();
      });
    });

    // Auto rotate every 5.5 seconds
    setInterval(nextTestimonial, 5500);
  }

  // =========================================================================
  // Custom Indian Testimonials Smooth Carousel & Touch Swipe
  // =========================================================================
  const track = document.getElementById('customTestiTrack');
  const viewport = document.getElementById('customTestiViewport');
  const prevBtn = document.getElementById('customTestiPrev');
  const nextBtn = document.getElementById('customTestiNext');
  const dotsContainer = document.getElementById('customTestiDots');

  if (track && viewport) {
    const slides = track.querySelectorAll('.custom-testi-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoPlayTimer = null;

    function updateCarousel(index) {
      if (index < 0) currentSlide = totalSlides - 1;
      else if (index >= totalSlides) currentSlide = 0;
      else currentSlide = index;

      track.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot-btn');
        dots.forEach((dot, i) => {
          if (i === currentSlide) dot.classList.add('active');
          else dot.classList.remove('active');
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        updateCarousel(currentSlide - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        updateCarousel(currentSlide + 1);
        resetAutoPlay();
      });
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot-btn');
      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          updateCarousel(idx);
          resetAutoPlay();
        });
      });
    }

    // Auto Play every 5 seconds
    function startAutoPlay() {
      autoPlayTimer = setInterval(function () {
        updateCarousel(currentSlide + 1);
      }, 5000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayTimer);
      startAutoPlay();
    }

    startAutoPlay();

    // Pause on hover
    viewport.addEventListener('mouseenter', function () {
      clearInterval(autoPlayTimer);
    });
    viewport.addEventListener('mouseleave', function () {
      startAutoPlay();
    });

    // Touch Swipe Support for Mobile & Tablet
    let startX = 0;
    let endX = 0;

    viewport.addEventListener('touchstart', function (e) {
      startX = e.changedTouches[0].screenX;
      clearInterval(autoPlayTimer);
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      endX = e.changedTouches[0].screenX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) updateCarousel(currentSlide + 1);
        else updateCarousel(currentSlide - 1);
      }
      startAutoPlay();
    }, { passive: true });
  }

});
