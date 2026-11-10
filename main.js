(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var themeButton = document.getElementById("theme-toggle");
  var themeLabel = themeButton && themeButton.querySelector("span");
  var themeMeta = document.getElementById("theme-color");

  function themeColors(theme) {
    return theme === "dark" ? "#121411" : "#f3efe6";
  }

  function syncTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    if (themeMeta) themeMeta.setAttribute("content", themeColors(theme));
    if (themeButton) {
      var dark = theme === "dark";
      themeButton.setAttribute("aria-pressed", dark ? "true" : "false");
      themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      if (themeLabel) themeLabel.textContent = dark ? "Light" : "Dark";
    }
  }

  if (themeButton) {
    syncTheme(document.documentElement.getAttribute("data-theme") || "light");
    themeButton.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (err) {
        /* storage can be blocked; the toggle still applies for this view */
      }
      syncTheme(next);
    });
  }

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 760) closeNav();
    });
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", async function () {
      var figure = button.closest("figure");
      var code = figure && figure.querySelector("code");
      if (!code) return;
      var original = button.textContent;
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = "Copied";
      } catch (err) {
        button.textContent = "Select the code";
      }
      window.setTimeout(function () {
        button.textContent = original;
      }, 1600);
    });
  });
})();
