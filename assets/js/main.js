/**
 * Grevo Demo 2 - Interactive Main Scripts
 * Handles Sticky Navbar, Mobile Navigation Drawer, Search Modal,
 * Animated Counters (85%, 650m, 564+, 125k), Swiper Carousels, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // =========================================================================
  // 0. Header Component Loader & Fallback
  // =========================================================================
  const HEADER_FALLBACK = `<!-- Header Component -->
<div class="thsn-header-overlay">
	<div class="thsn-header-height-wrapper">
		<div
			class="thsn-main-header-area thsn-sticky-logo-yes thsn-responsive-logo-yes thsn-responsive-header-bgcolor-white thsn-header-wrapper thsn-bg-color-globalcolor">
			<div class="container-full">
				<div class="d-flex justify-content-between align-items-center">
					<div class="thsn-logo-menuarea">
						<div class="site-branding thsn-logo-area">
							<div class="wrap">
								<h1 class="site-title"><a href="index.html"
										rel="home"><span class="site-title-text">Grevo Demo2 - Electric
											Vehicle Charging WordPress Theme</span><img
											class="thsn-main-logo" src="assets/images/logo-white.svg"
											alt="Grevo Demo2" title="Grevo Demo2" /><img
											class="thsn-sticky-logo" src="assets/images/grevo-logo.svg"
											alt="Grevo Demo2" title="Grevo Demo2" /><img
											class="thsn-responsive-logo" src="assets/images/logo-white.svg"
											alt="Grevo Demo2" title="Grevo Demo2" /></a></h1>
							</div><!-- .wrap -->
						</div><!-- .site-branding -->
						<div class="navigation-top">
							<button id="menu-toggle" class="nav-menu-toggle">
								<i class="thsn-base-icon-menu-1"></i>
							</button>
							<div class="thsn-mobile-menu-bg"></div>
							<div class="wrap">
								<nav id="site-navigation"
									class="main-navigation thsn-navbar  thsn-main-active-color-secondarycolor thsn-dropdown-active-color-globalcolor"
									aria-label="Top Menu">
									<div class="menu-main-menu-container">
										<ul id="thsn-top-menu" class="menu">
											<li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item">
												<a href="index.html">Home</a>
											</li>
											<li id="menu-item-about" class="menu-item menu-item-type-custom menu-item-object-custom">
												<a href="https://grevo-demo.pbminfotech.com/demo2/about-us/">About</a>
											</li>
											<li id="menu-item-products" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
												<a href="https://grevo-demo.pbminfotech.com/demo2/shop/">Products</a>
												<ul class="sub-menu">
													<li class="menu-item"><a href="https://grevo-demo.pbminfotech.com/demo2/service/electric-car-sale/">Electric Scooters</a></li>
													<li class="menu-item"><a href="https://grevo-demo.pbminfotech.com/demo2/service/home-charging/">Home Charging Stations</a></li>
													<li class="menu-item"><a href="https://grevo-demo.pbminfotech.com/demo2/service/commercial-systems/">Commercial Fast Chargers</a></li>
													<li class="menu-item"><a href="https://grevo-demo.pbminfotech.com/demo2/product/battery-tester/">Battery &amp; Accessories</a></li>
													<li class="menu-item"><a href="https://grevo-demo.pbminfotech.com/demo2/shop/">All Products</a></li>
												</ul>
											</li>
											<li id="menu-item-contact" class="menu-item menu-item-type-post_type menu-item-object-page">
												<a href="https://grevo-demo.pbminfotech.com/demo2/contact-us/">Contact Us</a>
											</li>
										</ul>
									</div>
								</nav><!-- #site-navigation -->
							</div><!-- .wrap -->
							<div class="thsn-right-box">
								<div class="thsn-search-cart-box">
									<div class="thsn-header-search-btn"><a href="#" title="Search"><i
												class="thsn-base-icon-search-1"></i></a></div>
								</div>
							</div>
						</div><!-- .navigation-top -->
					</div>
					<div class="thsn-button-box">
						<div class="thsn-header-button2">
							<a href="https://grevo-demo.pbminfotech.com/demo2/contact-us/">
								<span>Get a quote</span>
							</a>
						</div>
					</div>
				</div><!-- .justify-content-between -->
			</div><!-- .container -->
		</div><!-- .thsn-header-wrapper -->
	</div><!-- .thsn-header-height-wrapper -->
</div><!--thsn-header-overlay -->
<span class="thsn-social-label"></span>
<ul class="thsn-social-links">
	<li class="thsn-social-li thsn-social-facebook "><a href="#" target="_blank"><span><i
					class="thsn-base-icon-facebook-squared"></i></span></a></li>
	<li class="thsn-social-li thsn-social-twitter "><a href="#" target="_blank"><span><i
					class="thsn-base-icon-twitter-x"></i></span></a></li>
	<li class="thsn-social-li thsn-social-youtube "><a href="#" target="_blank"><span><i
					class="thsn-base-icon-youtube-play"></i></span></a></li>
	<li class="thsn-social-li thsn-social-linkedin "><a href="#" target="_blank"><span><i
					class="thsn-base-icon-linkedin-squared"></i></span></a></li>
</ul>`;

  async function loadHeaderComponent() {
    const headerContainer = document.getElementById('site-header-component');
    if (headerContainer && !headerContainer.innerHTML.trim()) {
      try {
        const response = await fetch('components/header.html');
        if (response.ok) {
          headerContainer.innerHTML = await response.text();
        } else {
          headerContainer.innerHTML = HEADER_FALLBACK;
        }
      } catch (e) {
        // Fallback for file:// protocol or offline
        headerContainer.innerHTML = HEADER_FALLBACK;
      }
    }
    bindHeaderEvents();
  }

  function bindHeaderEvents() {
    const mainHeader = document.querySelector('.thsn-main-header-area');
    const masthead = document.getElementById('masthead');

    // Sticky navigation scroll handler
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 120) {
        if (mainHeader) mainHeader.classList.add('is-sticky');
        if (masthead) masthead.classList.add('is-sticky');
      } else {
        if (mainHeader) mainHeader.classList.remove('is-sticky');
        if (masthead) masthead.classList.remove('is-sticky');
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // initial state

    // Mobile menu toggle
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

    // Re-bind search trigger in header
    const headerSearchBtn = document.querySelector('.thsn-header-search-btn a');
    if (headerSearchBtn) {
      headerSearchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openSearch();
      });
    }
  }

  // Load header component immediately
  loadHeaderComponent();

  // =========================================================================
  // 1. Back to top button
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

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
  // 3. Single Interactive Search Overlay Controller
  // =========================================================================
  const searchTriggers = document.querySelectorAll('.thsn-header-search-btn a, .search-toggle-btn');
  const searchOverlay = document.querySelector('.thsn-header-search-form-wrapper');
  const searchClose = document.querySelector('.thsn-header-search-form-wrapper .thsn-search-close');
  const searchForm = document.querySelector('.thsn-header-search-form-wrapper form');
  const searchInput = document.querySelector('.thsn-header-search-form-wrapper input[type="search"]');

  function openSearch() {
    if (searchOverlay) {
      searchOverlay.classList.add('open');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 200);
      }
    }
  }

  function closeSearch() {
    if (searchOverlay) {
      searchOverlay.classList.remove('open');
    }
  }

  if (searchTriggers.length > 0 && searchOverlay) {
    searchTriggers.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openSearch();
      });
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeSearch();
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
        closeSearch();
      }
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = searchInput ? searchInput.value.trim() : '';
      if (query) {
        alert('Searching for: "' + query + '" across Grevo EV models & accessories...');
        closeSearch();
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
