/* ==========================================================================
   FRS PRE-TEST LANDING PAGE SCRIPT & SINGLE-TRIGGER SECURITY SYSTEM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     INSTANTLY RESPONSIVE SNAPPY SMOOTH SCROLL (ZERO LAG / EASE-OUT QUART)
     ========================================================================== */
  function smoothScrollToElement(targetElement, duration = 500) {
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    // Position target card nicely near the center of the screen
    const offsetPosition = targetPosition - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    let startTime = null;

    // Ease-Out Quart: Starts moving INSTANTLY at 0ms, then decelerates smoothly
    function easeOutQuart(t, b, c, d) {
      t /= d;
      t--;
      return -c * (t * t * t * t - 1) + b;
    }

    function animationStep(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      } else {
        window.scrollTo(0, offsetPosition);
      }
    }

    requestAnimationFrame(animationStep);
  }

  // Smooth Scrolling and Card Highlighting for "View Potential Roles" links
  const roleLinks = document.querySelectorAll('.pa-roles-link');
  const roleCards = document.querySelectorAll('.pa-role-card');

  roleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // PREVENT DEFAULT INSTANT HASH JUMP!
      e.preventDefault();

      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        const targetCard = document.querySelector(targetId);

        if (targetCard) {
          // Remove highlight class from all other role cards first
          roleCards.forEach(card => card.classList.remove('pa-card-highlight'));

          // Add highlight animation IMMEDIATELY on click for zero-lag response!
          targetCard.classList.add('pa-card-highlight');

          // Instantly launch 500ms snappy smooth glide to target card
          smoothScrollToElement(targetCard, 500);
        }
      }
    });
  });

  /* ==========================================================================
     SINGLE-TRIGGER ANTI-LOOP SECURITY SYSTEM (RAPID 150ms RE-ARM COOLDOWN)
     ========================================================================== */
  let protectionActive = false;
  let isCooldown = false;
  let isNavigatingAway = false; // FLAG: Suppresses security alert during valid page navigation

  const wrapper = document.querySelector('.assessment-landing-wrapper');
  const flash = document.getElementById('screenshotFlash');
  const black = document.getElementById('screenshotBlack');
  const message = document.getElementById('screenshotMessage');
  const shield = document.getElementById('shield1');

  function triggerScreenshotProtection() {
    // GUARD 1: Suppress security alert during valid internal navigation or active cooldown
    if (protectionActive || isCooldown || isNavigatingAway) return;

    protectionActive = true;

    // 0ms Synchronous DOM modifications (blocks Snipping Tool BEFORE frame render)
    if (wrapper) wrapper.classList.add('pa-security-blur');
    if (shield) shield.style.opacity = '1';
    if (black) black.classList.add('active');
    if (message) message.classList.add('active');
  }

  function dismissProtection(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!protectionActive) return;

    // GUARD 2: Rapid 150ms cooldown lock (prevents click-to-focus loop while re-arming ultra fast)
    isCooldown = true;
    protectionActive = false;

    if (wrapper) wrapper.classList.remove('pa-security-blur');
    if (flash) flash.classList.remove('active');
    if (black) black.classList.remove('active');
    if (message) message.classList.remove('active');
    if (shield) shield.style.opacity = '';

    // Rapidly re-arm protection after ultra-fast 150ms
    setTimeout(() => {
      isCooldown = false;
    }, 150);
  }

  // EXEMPTION HANDLER: Track valid link navigation (e.g. "Begin Assessment")
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Only set navigation flag if navigating to another page (not an anchor link like #roles-ai)
      if (href && !href.startsWith('#')) {
        isNavigatingAway = true;
      }
    });
  });

  // BROWSER BACK-BUTTON (bfcache) CLEANUP: Reset protection when user returns via Back button
  window.addEventListener('pageshow', function (e) {
    isNavigatingAway = false;
    isCooldown = false;
    if (protectionActive) {
      dismissProtection();
    }
  });

  // Dismiss button listener (Acknowledge button)
  const dismissBtn = document.getElementById('dismissProtection');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', dismissProtection);
    dismissBtn.addEventListener('mousedown', (e) => e.stopPropagation());
  }

  // Click outside modal to dismiss
  if (message) {
    message.addEventListener('click', function (e) {
      if (e.target === this) {
        dismissProtection(e);
      }
    });
  }

  // Clear protection cleanly when window regains active focus
  window.addEventListener('focus', function () {
    isCooldown = false;
  });

  // 1. INSTANT BLUR & FOCUS-LOSS PROTECTION (Fires ONCE per app-switch attempt)
  window.addEventListener('blur', function (e) {
    // Only trigger if window is active, not navigating away, and not in cooldown
    if (!protectionActive && !isCooldown && !isNavigatingAway) {
      triggerScreenshotProtection();
    }
  });

  // 2. TAB VISIBILITY CHANGE PROTECTION (Triggers ONCE when hiding tab)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && !protectionActive && !isCooldown && !isNavigatingAway) {
      triggerScreenshotProtection();
    }
  });

  // 3. PRINTSCREEN & SCREENSHOT KEYBINDING INTERCEPTION (Win+Shift+S, PrtScn, Cmd+Shift+S)
  document.addEventListener('keydown', function (e) {
    // Intercept PrintScreen Key
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
      triggerScreenshotProtection();
      e.preventDefault();
      return false;
    }

    // Intercept Win + Shift + S / Cmd + Shift + S / Ctrl + Shift + S
    if (
      (e.key === 's' || e.key === 'S') &&
      (e.shiftKey || e.metaKey || e.ctrlKey)
    ) {
      triggerScreenshotProtection();
      e.preventDefault();
      return false;
    }

    // Intercept Windows Key (KeyCode 91 / 92 / 'Meta')
    if (e.key === 'Meta' || e.keyCode === 91 || e.keyCode === 92) {
      triggerScreenshotProtection();
    }

    // Intercept Ctrl+C, Ctrl+X, Ctrl+U, F12
    if (
      (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 'x' || e.key === 'X')) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
      triggerScreenshotProtection();
      e.preventDefault();
      return false;
    }
  });

  // 4. ANTI-COPY, ANTI-CUT, ANTI-PASTE, ANTI-DRAG & ANTI-CONTEXTMENU
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('cut', (e) => e.preventDefault());
  document.addEventListener('paste', (e) => e.preventDefault());
  document.addEventListener('dragstart', (e) => e.preventDefault());
  document.addEventListener('selectstart', (e) => e.preventDefault());

  // Prevent image dragging explicitly
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

});
