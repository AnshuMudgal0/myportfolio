// Anshu Mudgal — portfolio interactions
// Mobile nav toggle, active-link highlighting on scroll, current year.

(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight the current section in the nav while scrolling
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var byId = {};
    navAnchors.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) { a.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
