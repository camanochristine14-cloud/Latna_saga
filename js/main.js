const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

if (menuButton && menu) {
  menuButton.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function updateHeaderHeight() {
  if (header) {
    document.documentElement.style.setProperty(
      "--header-height",
      header.offsetHeight + "px"
    );
  }
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);

// "More" dropdown in the navigation
const navDropdown = document.querySelector(".nav-dropdown");
const navMore = document.querySelector(".nav-more");

if (navDropdown && navMore) {
  navMore.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = navDropdown.classList.toggle("is-open");
    navMore.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (event) {
    if (!navDropdown.contains(event.target)) {
      navDropdown.classList.remove("is-open");
      navMore.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navDropdown.classList.remove("is-open");
      navMore.setAttribute("aria-expanded", "false");
    }
  });
}
