/**
 * MPC Demo Repository - Main JavaScript
 * Mauritania Programmers Community
 *
 * Features:
 * - Smooth scroll navigation
 * - Stats counter animation
 * - Mobile menu toggle (future enhancement)
 */

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

/**
 * Add smooth scroll behavior to navigation links
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only prevent default for anchor links (not just #)
      if (href !== "#" && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navHeight = document.querySelector("nav").offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================

/**
 * Animate number counting up
 * @param {Element} element - The element to animate
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(current));
    }
  }, 16);
}

/**
 * Format number with + suffix for 100+ style numbers
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
  return num + "+";
}

/**
 * Set the footer year to the current year.
 * Uses an element with id "footer-year".
 */
function initFooterYear() {
  try {
    const el = document.getElementById("footer-year");
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = year;
  } catch (err) {
    // Fail silently - footer year is non-essential
    console.warn("Unable to set footer year", err);
  }
}

/**
 * Initialize counter animation when stats section is visible
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".animate-counter");
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the stat number
          const stat = entry.target;
          const text = stat.textContent.replace("+", "");
          const target = parseInt(text);
          if (!isNaN(target)) {
            animateCounter(stat, target);
          }

          // Unobserve after animation to prevent re-triggering
          observer.unobserve(stat);
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% visible
    }
  );

  // Observe each stat number individually
  statNumbers.forEach((stat) => observer.observe(stat));
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

/**
 * Toggle mobile navigation menu (dropdown design with icon toggle)
 */
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  // Mobile menu dropdown height (calculated from nav links)
  const MOBILE_MENU_MAX_HEIGHT = "280px";

  if (!mobileMenuToggle || !mobileMenu) return;

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    // Reset dropdown animation
    mobileMenu.classList.add("opacity-0", "-translate-y-2", "scale-95");
    mobileMenu.classList.remove("opacity-100", "translate-y-0", "scale-100");
    mobileMenu.style.maxHeight = "0";
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");

    // Change icon back to bars
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.remove("fa-times");
      mobileMenuIcon.classList.add("fa-bars");
    }

    // Hide after animation completes
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }

  /**
   * Open the mobile menu
   */
  function openMenu() {
    mobileMenu.classList.remove("hidden");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenuToggle.setAttribute("aria-expanded", "true");

    // Change icon to X
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.remove("fa-bars");
      mobileMenuIcon.classList.add("fa-times");
    }

    // Trigger dropdown animation after display change
    setTimeout(() => {
      mobileMenu.classList.remove("opacity-0", "-translate-y-2", "scale-95");
      mobileMenu.classList.add("opacity-100", "translate-y-0", "scale-100");
      mobileMenu.style.maxHeight = MOBILE_MENU_MAX_HEIGHT;
    }, 10);
  }

  // Toggle menu on button click
  mobileMenuToggle.addEventListener("click", () => {
    const isMenuOpen = !mobileMenu.classList.contains("hidden");

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking a navigation link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a[href^='#']");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Visual feedback on click
      link.classList.add("font-semibold");
      setTimeout(() => {
        link.classList.remove("font-semibold");
      }, 300);

      // Close menu after short delay
      setTimeout(() => {
        closeMenu();
      }, 150);
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnToggle &&
      !mobileMenu.classList.contains("hidden")
    ) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      closeMenu();
    }
  });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

/**
 * Show/hide back to top button based on scroll position
 */
function initBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");
  if (!backToTopButton) return;

  /**
   * Show or hide button based on scroll position
   */
  function toggleButtonVisibility() {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.remove("opacity-100", "visible");
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  }

  // Throttle scroll events for better performance
  let scrollTimeout;
  function throttledScroll() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        toggleButtonVisibility();
        scrollTimeout = null;
      }, 100);
    }
  }

  // Check on scroll with throttling
  window.addEventListener("scroll", throttledScroll);

  // Scroll to top on click
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initial check
  toggleButtonVisibility();
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functions when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize smooth scroll
  initSmoothScroll();

  // Initialize stats counter
  initStatsCounter();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize back to top button
  initBackToTop();

  // Initialize footer year
  initFooterYear();

  console.log(
    `
  %c🇲🇷 Mauritania Programmers Community
  %cWelcome to our demo repository!
  %cGitHub: https://github.com/Mauritania-Programmers-Community
  `,
    "color: #00A859; font-size: 16px; font-weight: bold;",
    "color: #666; font-size: 14px;",
    "color: #666; font-size: 12px;"
  );
});
