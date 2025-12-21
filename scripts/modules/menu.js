export function initMenu() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".navbar__items");
  const toggleBtn = document.querySelector(".menu-toggle");
  const burger = document.querySelector(".hamburger");

  if (!navbar || !navLinks || !toggleBtn) return;

  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    burger.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  navbar.addEventListener("click", (e) => {
    if (e.target.closest(".menu-toggle")) {
      const isOpen = navLinks.classList.toggle("is-open");
      burger.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      toggleBtn.setAttribute("title", isOpen ? "Close Menu" : "Open Menu");
    }

    if (e.target.closest(".navbar__items a")) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}
