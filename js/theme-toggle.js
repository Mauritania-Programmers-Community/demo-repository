document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.classList.toggle("fa-sun", theme === "dark");
    themeIcon.classList.toggle("fa-moon", theme === "light");
  }

  let theme = "light";
  try {
    const stored = localStorage.getItem("theme");
    theme = stored || (prefersDark.matches ? "dark" : "light");
  } catch (e) {
    console.warn("localStorage not available:", e);
  }

  applyTheme(theme);

  themeToggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.warn("Unable to save theme preference:", e);
    }
  });

  // Listen for OS theme changes (only if no manual preference)
  prefersDark.addEventListener("change", (e) => {
    try {
      if (!localStorage.getItem("theme")) {
        theme = e.matches ? "dark" : "light";
        applyTheme(theme);
      }
    } catch (err) {
      console.warn("Unable to access localStorage:", err);
    }
  });
});
