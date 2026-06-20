(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initScrollProgress() {
    var bar = document.querySelector('[data-scroll-progress]');
    if (!bar || prefersReduced) return;

    function onScroll() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = pct + '%';
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initParticles() {
    var root = document.querySelector('[data-particles]');
    if (!root || prefersReduced) return;

    var count = window.innerWidth < 768 ? 28 : 48;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < count; i++) {
      var dot = document.createElement('span');
      dot.className = 'particle';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = (-Math.random() * 12).toFixed(2) + 's';
      dot.style.animationDuration = (10 + Math.random() * 14).toFixed(2) + 's';
      dot.style.opacity = (0.15 + Math.random() * 0.45).toFixed(2);
      var size = 1 + Math.random() * 2.5;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      fragment.appendChild(dot);
    }

    root.appendChild(fragment);
  }

  function initCursorGlow() {
    var glow = document.querySelector('[data-cursor-glow]');
    if (!glow || prefersReduced || window.innerWidth < 1024 || 'ontouchstart' in window) return;

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var targetX = x;
    var targetY = y;

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      glow.style.transform = 'translate(' + (x - 200) + 'px, ' + (y - 200) + 'px)';
      requestAnimationFrame(tick);
    }

    document.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
    }, { passive: true });

    requestAnimationFrame(tick);
  }

  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach(function (el) {
        el.classList.add('is-visible');
        el.classList.add('is-staggered');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.hasAttribute('data-stagger')) {
              entry.target.classList.add('is-staggered');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    items.forEach(function (el) {
      if (el.classList.contains('is-visible')) return;

      var rect = el.getBoundingClientRect();
      var inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) {
        el.classList.add('is-visible');
        if (el.hasAttribute('data-stagger')) {
          el.classList.add('is-staggered');
        }
        return;
      }

      observer.observe(el);
    });
  }

  function initStaggerOnly() {
    var parents = document.querySelectorAll('[data-stagger]:not([data-reveal])');
    if (!parents.length) return;

    if (prefersReduced) {
      parents.forEach(function (p) { p.classList.add('is-staggered'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-staggered');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    parents.forEach(function (el) { observer.observe(el); });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]:not([data-count-done])');
    if (!counters.length || prefersReduced) return;

    function animateCounter(el) {
      if (el.getAttribute('data-count-done')) return;
      el.setAttribute('data-count-done', 'true');
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-count-suffix') || '';
      var duration = 1800;
      var start = 0;
      var startTime = null;

      function tick(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(start + (target - start) * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );

    counters.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        animateCounter(el);
      } else {
        observer.observe(el);
      }
    });
  }

  function initTilt() {
    if (prefersReduced) return;

    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      if (card._tiltBound) return;
      card._tiltBound = true;

      var maxTilt = window.innerWidth < 960 ? 4 : 8;

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          'perspective(800px) rotateY(' + (x * maxTilt) + 'deg) rotateX(' + (-y * maxTilt) + 'deg) translateY(-6px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  function initMagnetic() {
    if (prefersReduced || window.innerWidth < 768) return;

    document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
      if (btn._magneticBound) return;
      btn._magneticBound = true;

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.18) + 'px, ' + (y * 0.18 - 3) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  function initHeroParallax() {
    var hero = document.querySelector('[data-hero-parallax]');
    if (!hero || prefersReduced || window.innerWidth < 960) return;

    var glow = hero.querySelector('.hero-visual__glow');
    var orbit = hero.querySelector('.hero-orbit');
    var chips = hero.querySelectorAll('.preview-chip');

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      if (glow) {
        glow.style.transform = 'translate(' + (x * 28) + 'px, ' + (y * 20) + 'px) scale(1.08)';
      }
      if (orbit) {
        orbit.style.transform = 'translate(' + (x * -12) + 'px, ' + (y * -8) + 'px)';
      }
      chips.forEach(function (chip, i) {
        var factor = (i + 1) * 6;
        chip.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor * 0.6) + 'px)';
      });
    });

    hero.addEventListener('mouseleave', function () {
      if (glow) glow.style.transform = '';
      if (orbit) orbit.style.transform = '';
      chips.forEach(function (chip) { chip.style.transform = ''; });
    });
  }

  function initTextRotate() {
    var el = document.querySelector('[data-text-rotate]');
    if (!el || prefersReduced) return;

    var words = (el.getAttribute('data-words') || '').split('|').filter(Boolean);
    if (words.length < 2) return;

    var index = 0;
    el.textContent = words[0];

    setInterval(function () {
      el.classList.add('is-exiting');
      setTimeout(function () {
        index = (index + 1) % words.length;
        el.textContent = words[index];
        el.classList.remove('is-exiting');
        el.classList.add('is-entering');
        setTimeout(function () { el.classList.remove('is-entering'); }, 400);
      }, 350);
    }, 3200);
  }

  function initParallaxOrbs() {
    if (prefersReduced) return;

    var orbs = document.querySelectorAll('.ambient__orb');
    if (!orbs.length) return;

    var mouseX = 0;
    var mouseY = 0;

    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', function (e) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
      }, { passive: true });
    }

    window.addEventListener('scroll', function () {
      var y = window.scrollY * 0.15;
      orbs.forEach(function (orb, i) {
        var dir = i % 2 === 0 ? 1 : -0.6;
        orb.style.transform =
          'translate(' + (mouseX * (i + 1) * 0.15) + 'px, ' + (y * dir + mouseY * (i + 1) * 0.1) + 'px)';
      });
    }, { passive: true });
  }

  function initStepsLine() {
    var steps = document.querySelector('.steps');
    if (!steps || prefersReduced) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            steps.classList.add('is-animated');
            observer.unobserve(steps);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(steps);
  }

  var booted = false;

  window.HubAnimations = {
    init: function () {
      if (!booted) {
        initHeaderScroll();
        initScrollProgress();
        initParticles();
        initCursorGlow();
        initCounters();
        initParallaxOrbs();
        initTextRotate();
        initHeroParallax();
        initMagnetic();
        initStepsLine();
        booted = true;
      }
      initReveal();
      initStaggerOnly();
      initTilt();
      initMagnetic();
    },
    refresh: function () {
      initReveal();
      initStaggerOnly();
      initTilt();
      initMagnetic();
      initStepsLine();
      initCounters();
    },
    refreshCounters: initCounters,
  };
})();
