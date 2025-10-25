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

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only prevent default for anchor links (not just #)
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
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
  return num + '+';
}

/**
 * Set the footer year to the current year.
 * Uses an element with id "footer-year".
 */
function initFooterYear() {
  try {
    const el = document.getElementById('footer-year');
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = year;
  } catch (err) {
    // Fail silently - footer year is non-essential
    console.warn('Unable to set footer year', err);
  }
}

/**
 * Initialize counter animation when stats section is visible
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.animate-counter');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the stat number
          const stat = entry.target;
          const text = stat.textContent.replace('+', '');
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
  statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// MOBILE MENU TOGGLE (Future Enhancement)
// ============================================

/**
 * Toggle mobile navigation menu
 */
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenuToggle || !mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  // Helper function to close the menu
  function closeMenu() {
    mobileMenu.classList.remove('show');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    setTimeout(() => {
      if (!mobileMenu.classList.contains('show')) {
        mobileMenu.classList.add('hidden');
      }
    }, 300);
  }

  mobileMenuToggle.addEventListener('click', function() {
    const isMenuOpen = mobileMenu.classList.contains('show');

    if (isMenuOpen) {
      // Close menu
      closeMenu();
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('show');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  });

  const mobileNavLinks = mobileMenu.querySelectorAll('a[href^="#"]');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      this.classList.add('clicked');

      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);

      setTimeout(() => {
        closeMenu();
      }, 150);
    });
  });

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains('show')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('show')) {
      closeMenu();
    }
  });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functions when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
  // Initialize smooth scroll
  initSmoothScroll();

  // Initialize stats counter
  initStatsCounter();

  // Initialize mobile menu (placeholder)
  initMobileMenu();

  // Initialize footer year
  initFooterYear();

  console.log(
    `
  %c🇲🇷 Mauritania Programmers Community
  %cWelcome to our demo repository!
  %cGitHub: https://github.com/Mauritania-Programmers-Community
  `,
    'color: #00A859; font-size: 16px; font-weight: bold;',
    'color: #666; font-size: 14px;',
    'color: #666; font-size: 12px;'
  );
});
