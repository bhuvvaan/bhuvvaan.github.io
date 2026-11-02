// Fancy UI interactions: typewriter, scroll reveal, count-up, tilt, cursor glow.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    // Reveal project cards via their wrapper so the card's own hover transform still works.
    document.querySelectorAll(".projects .card").forEach(function (card, i) {
      var wrap = card.parentElement;
      if (wrap && !wrap.classList.contains("reveal")) {
        wrap.classList.add("reveal");
        wrap.style.transitionDelay = (i % 3) * 0.08 + "s";
      }
    });
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("in-view");
      });
      return;
    }
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Typewriter ---------- */
  function setupTyped() {
    var el = document.querySelector(".typed[data-words]");
    if (!el) return;
    var words = el
      .getAttribute("data-words")
      .split("|")
      .map(function (w) {
        return w.trim();
      })
      .filter(Boolean);
    if (words.length < 2 || reduceMotion) return;

    var wi = 0;
    var ci = words[0].length;
    var deleting = true;
    el.textContent = words[0];

    function tick() {
      var word = words[wi];
      if (deleting) {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
          return setTimeout(tick, 350);
        }
        return setTimeout(tick, 35);
      }
      word = words[wi];
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci >= word.length) {
        deleting = true;
        return setTimeout(tick, 2000);
      }
      setTimeout(tick, 70);
    }
    setTimeout(tick, 3200);
  }

  /* ---------- Count-up stats ---------- */
  function setupCounters() {
    var nums = document.querySelectorAll(".stat-value[data-count]");
    if (!nums.length || reduceMotion) return;
    nums.forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      if (isNaN(target)) return;
      el.textContent = "0";
      var start = null;
      var duration = 1400;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      setTimeout(function () {
        requestAnimationFrame(step);
      }, 600);
    });
  }

  /* ---------- 3D tilt ---------- */
  function setupTilt() {
    if (reduceMotion || !finePointer) return;
    document.querySelectorAll(".tilt").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "rotateY(" + x * 14 + "deg) rotateX(" + -y * 14 + "deg) scale(1.02)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Cursor glow ---------- */
  function setupGlow() {
    var glow = document.querySelector(".cursor-glow");
    if (!glow || reduceMotion || !finePointer) return;
    var x = 0,
      y = 0,
      queued = false;
    window.addEventListener(
      "mousemove",
      function (e) {
        x = e.clientX;
        y = e.clientY;
        glow.classList.add("active");
        if (!queued) {
          queued = true;
          requestAnimationFrame(function () {
            glow.style.transform = "translate(" + x + "px," + y + "px)";
            queued = false;
          });
        }
      },
      { passive: true }
    );
    document.addEventListener("mouseleave", function () {
      glow.classList.remove("active");
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  function setupNavbar() {
    var nav = document.getElementById("navbar");
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function init() {
    setupReveal();
    setupTyped();
    setupCounters();
    setupTilt();
    setupGlow();
    setupNavbar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
