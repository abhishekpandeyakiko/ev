/**
 * Grevo Demo 2 - Interactive Main Scripts
 * Handles Sticky Navbar, Mobile Navigation Drawer, Search Modal,
 * Animated Counters (85%, 650m, 564+, 125k), Back-to-Top, Smooth Scroll
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
  // 0b. Footer Component Loader & Fallback
  // =========================================================================
  const FOOTER_FALLBACK = `<!-- Footer Component -->
<footer id="colophon"
	class="thsn-footer-section site-footer thsn-footer-style-2 thsn-text-color-white thsn-bg-color-blackish thsn-footer-menu-yes thsn-footer-widget-yes">
	<div class="thsn-footer-section footer-wrap thsn-footer-widget-area thsn-bg-color-transparent">
		<div class="container">
			<div class="row">
				<div class="thsn-footer-widget thsn-footer-widget-col-1 col-md-6 col-lg-3">
					<aside id="text-2"
						class="widget-odd widget-last widget-first widget-1 thsn-footer-news widget widget_text grevo_widget grevo_widget_count_1">
						<div class="textwidget">
							<form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-12722" method="post"
								data-id="12722" data-name="Newsletter">
								<div class="mc4wp-form-fields">
									<div class="thsn-footer-newsletter">
										<i aria-hidden="true"
											class="thsn-industrey-icon thsn-base-icon-mail-box"></i>
										<h4>
											Sign up for Electric Car,news &#38; inslights
										</h4>
										<div class="thsn-footer-newsletter-form">
											<label>Email address</label>
											<input type="email" name="EMAIL" placeholder="Email address"
												required="">
											<button type="submit"
												value="Sign up"><span>Subscribe</span></button>
										</div>
									</div>
								</div><label style="display: none !important;">Leave this field empty if
									you&#039;re human: <input type="text" name="_mc4wp_honeypot" value=""
										tabindex="-1" autocomplete="off" /></label><input type="hidden"
									name="_mc4wp_timestamp" value="1794211295" /><input type="hidden"
									name="_mc4wp_form_id" value="12722" /><input type="hidden"
									name="_mc4wp_form_element_id" value="mc4wp-form-1" />
								<div class="mc4wp-response"></div>
							</form>
						</div>
					</aside>
				</div>
				<div class="thsn-footer-widget thsn-footer-widget-col-2 col-md-6 col-lg-3">
					<aside id="text-3"
						class="widget-odd widget-last widget-first widget-1 widget widget_text grevo_widget grevo_widget_count_2">
						<h2 class="widget-title">Grevo WP Theme</h2>
						<div class="textwidget">
							<p>A leading developer of A-grade commercial, electric car and bike projects in
								USA. Since its foundation the company has doubled its turnover year on year,
								with its staff numbers.<br />
								<a class="btn-arrow" href="#"><span>Get a quote</span></a>
							</p>
						</div>
					</aside>
				</div>
				<div class="thsn-footer-widget thsn-footer-widget-col-3 col-md-6 col-lg-3">
					<aside id="nav_menu-1"
						class="widget-odd widget-last widget-first widget-1 widget widget_nav_menu grevo_widget grevo_widget_count_3">
						<h2 class="widget-title">Company info</h2>
						<div class="menu-information-container">
							<ul id="menu-information" class="menu">
								<li id="menu-item-31256"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31256">
									<a href="#">About Us</a>
								</li>
								<li id="menu-item-31261"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31261">
									<a href="#">Our Projects</a>
								</li>
								<li id="menu-item-31262"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31262">
									<a href="#">Meet Our Team</a>
								</li>
								<li id="menu-item-31267"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31267">
									<a href="#">News &#038; Media</a>
								</li>
								<li id="menu-item-32294"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32294">
									<a href="#">Contact Us</a>
								</li>
								<li id="menu-item-31268"
									class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31268">
									<a href="#">Careers</a>
								</li>
							</ul>
						</div>
					</aside>
				</div>
				<div class="thsn-footer-widget thsn-footer-widget-col-4 col-md-6 col-lg-3">
					<aside id="text-4"
						class="widget-odd widget-last widget-first widget-1 widget widget_text grevo_widget grevo_widget_count_4">
						<h2 class="widget-title">Quick Contact</h2>
						<div class="textwidget">
							<p>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
							<p>If you have any questions or need help, feel free to contact with our team.</p>
							<h3 class="footer-phone">(002) 01061245741</h3>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</div>
	<div class="thsn-footer-section thsn-footer-text-area thsn-bg-color-transparent">
		<div class="container">
			<div class="thsn-footer-text-inner">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="thsn-footer-menu-area">
							<div class="menu-quick-links-container">
								<ul class="thsn-footer-menu">
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31259">
										<a href="#">Where to Find Us</a>
									</li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31263">
										<a href="#">Terms of Payment</a>
									</li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31260">
										<a href="#">Stats Element</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="thsn-footer-copyright-text-area"> Copyright © 2021 <a
								href="https://grevo-demo.pbminfotech.com/demo1">Grevo</a>, All Rights Reserved.
						</div>
					</div>
					<div class="col-md-6">
						<div class="thsn-footer-menu-area">
							<ul class="thsn-social-links">
								<li class="thsn-social-li thsn-social-facebook"><a href="#" target="_blank"><span><i
												class="thsn-base-icon-facebook-squared"></i></span></a></li>
								<li class="thsn-social-li thsn-social-twitter"><a href="#" target="_blank"><span><i
												class="thsn-base-icon-twitter-x"></i></span></a></li>
								<li class="thsn-social-li thsn-social-youtube"><a href="#" target="_blank"><span><i
												class="thsn-base-icon-youtube-play"></i></span></a></li>
								<li class="thsn-social-li thsn-social-linkedin"><a href="#" target="_blank"><span><i
												class="thsn-base-icon-linkedin-squared"></i></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>`;

  async function loadFooterComponent() {
    const footerContainer = document.getElementById('site-footer-component');
    if (footerContainer && !footerContainer.innerHTML.trim()) {
      try {
        const response = await fetch('components/footer.html');
        if (response.ok) {
          footerContainer.innerHTML = await response.text();
        } else {
          footerContainer.innerHTML = FOOTER_FALLBACK;
        }
      } catch (e) {
        // Fallback for file:// protocol or offline
        footerContainer.innerHTML = FOOTER_FALLBACK;
      }
    }
    bindFooterEvents();
  }

  function bindFooterEvents() {
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
  }

  // Load footer component immediately
  loadFooterComponent();

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
  // 5. Testimonial Single Slide Carousel Controller
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

  // =========================================================================
  // 6. Elementor Background Lazyload & Section Stretch Handler
  // =========================================================================
  function initLazyloadBackgrounds() {
    const targets = document.querySelectorAll('.e-con.e-parent, [class*="elementor-section"]');
    targets.forEach(el => {
      el.classList.add('e-lazyloaded');
    });
  }
  initLazyloadBackgrounds();
  window.addEventListener('load', initLazyloadBackgrounds);

  function stretchSections() {
    const stretchedSections = document.querySelectorAll('.elementor-section-stretched');
    const windowWidth = document.documentElement.clientWidth;
    stretchedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const currentLeft = rect.left;
      section.style.position = 'relative';
      section.style.left = `-${currentLeft}px`;
      section.style.boxSizing = 'border-box';
      section.style.width = `${windowWidth}px`;
    });
  }
  stretchSections();
  window.addEventListener('resize', stretchSections, { passive: true });

});

