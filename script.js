(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const themeRoot = document.documentElement,
      label = themeToggle.querySelector(".theme-toggle-label"),
      icon = themeToggle.querySelector(".theme-toggle-icon");
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem("apex-theme");
    } catch {}
    const applyTheme = (theme) => {
      const dark = theme === "dark";
      themeRoot.dataset.theme = dark ? "dark" : "light";
      themeToggle.setAttribute("aria-pressed", String(dark));
      themeToggle.setAttribute(
        "aria-label",
        dark ? "Switch to light theme" : "Switch to dark theme",
      );
      label.textContent = dark ? "Light theme" : "Dark theme";
      icon.textContent = dark ? "☀" : "◐";
    };
    applyTheme(savedTheme === "dark" ? "dark" : "light");
    themeToggle.addEventListener("click", () => {
      const next = themeRoot.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("apex-theme", next);
      } catch {}
    });
  }
  const headerBrand = document.querySelector(".header .brand");
  if (headerBrand && !prefersReducedMotion && Element.prototype.animate) {
    const intro = document.createElement("div");
    intro.className = "brand-intro";
    intro.setAttribute("aria-hidden", "true");

    const veil = document.createElement("div");
    veil.className = "brand-intro__veil";

    const introBrand = headerBrand.cloneNode(true);
    introBrand.className = "brand brand-intro__brand";
    introBrand.removeAttribute("href");
    introBrand.removeAttribute("aria-label");
    introBrand.setAttribute("tabindex", "-1");

    intro.append(veil, introBrand);
    document.body.prepend(intro);
    document.documentElement.classList.add("brand-intro-active");

    requestAnimationFrame(() => {
      const target = headerBrand.getBoundingClientRect();
      const width = introBrand.offsetWidth;
      const height = introBrand.offsetHeight;
      const scale = 1.42;
      const startX = (window.innerWidth - width * scale) / 2;
      const startY = (window.innerHeight - height * scale) / 2;
      const duration = 1450;
      const move = introBrand.animate(
        [
          {
            transform: `translate(${startX}px, ${startY}px) scale(${scale})`,
            opacity: 1,
            offset: 0,
          },
          {
            transform: `translate(${startX}px, ${startY}px) scale(${scale})`,
            opacity: 1,
            offset: 0.38,
          },
          {
            transform: `translate(${target.left}px, ${target.top}px) scale(1)`,
            opacity: 1,
            offset: 1,
          },
        ],
        {
          duration,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        },
      );
      const fade = veil.animate(
        [
          { opacity: 1, offset: 0 },
          { opacity: 1, offset: 0.52 },
          { opacity: 0, offset: 1 },
        ],
        { duration, easing: "ease-out", fill: "forwards" },
      );

      Promise.allSettled([move.finished, fade.finished]).then(() => {
        intro.remove();
        document.documentElement.classList.remove("brand-intro-active");
      });
    });
  }
  const menu = document.querySelector(".menu"),
    nav = document.getElementById("nav");
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
  });
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".chapter-copy, .chapter-actions, .chapter-meta, .section-heading, .service-group, .director-card, .doctor, .appointment-inner, .visit-grid, .footer-top",
    );
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
      revealObserver.observe(element);
    });
  }
  const story = document.getElementById("story"),
    stains = [...document.querySelectorAll("[data-stain]")],
    brush = document.getElementById("brush"),
    bar = document.getElementById("stage-progress"),
    number = document.getElementById("stage-number"),
    caption = document.getElementById("stage-caption"),
    chapters = [...document.querySelectorAll(".chapter")],
    reduced = prefersReducedMotion;
  const labels = [
    "A GOOD PLACE TO BEGIN",
    "PREVENT & PROTECT",
    "RESTORE, ALIGN & DESIGN",
    "A FRESH START",
  ];
  let queued = false;
  function paint() {
    queued = false;
    const r = story.getBoundingClientRect(),
      span = Math.max(1, r.height - innerHeight),
      start = document.querySelector(".header").offsetHeight,
      p = reduced ? 1 : Math.max(0, Math.min(1, (start - r.top) / span));
    let idx = 0;
    const focus = innerHeight * 0.55;
    chapters.forEach((c, i) => {
      if (c.getBoundingClientRect().top <= focus) idx = i;
    });
    idx = Math.max(0, Math.min(3, idx));
    chapters.forEach((c, i) => c.classList.toggle("is-active", i === idx));
    number.textContent = String(idx + 1).padStart(2, "0");
    caption.textContent = labels[idx];
    bar.style.setProperty("--progress", p);
    stains.forEach((g, i) => {
      const edge = (i + 1) / 3;
      g.style.opacity = String(Math.max(0, Math.min(1, (edge - p) * 3.4)));
    });
    if (!reduced) {
      const x = 74 + p * 280,
        y = 119 + Math.sin(p * Math.PI) * 91,
        angle = -34 + Math.cos(p * Math.PI * 2) * 7;
      brush.setAttribute(
        "transform",
        "translate(" + x + " " + y + ") rotate(" + angle + ")",
      );
    } else brush.style.display = "none";
  }
  function onScroll() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(paint);
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  document.addEventListener("visibilitychange", () =>
    document.body.classList.toggle("motion-paused", document.hidden),
  );
  paint();
})();
