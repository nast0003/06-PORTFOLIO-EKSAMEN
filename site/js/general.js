// ========== BURGER MENU ==========
const burger = document.getElementById("burgerToggle");
const navMenu = document.getElementById("menu");

burger.addEventListener("click", () => {
  if (window.innerWidth < 769) {
    navMenu.classList.toggle("active");
  }
});

// ========== DROPDOWN ==========
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownItem = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", (e) => {
  if (window.innerWidth < 769) {
    e.preventDefault();
    dropdownItem.classList.toggle("show");
  }
});

// Luk dropdown når der klikkes udenfor (kun i mobil)
document.addEventListener("click", (e) => {
  if (window.innerWidth < 769 && !dropdownItem.contains(e.target) && !dropdownToggle.contains(e.target)) {
    dropdownItem.classList.remove("show");
  }
});

// ========== RESET VED RESIZE ==========
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    navMenu.classList.remove("active");
    dropdownItem.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  const headerEl = document.querySelector("header");
  if (window.scrollY > 50) {
    if (headerEl) {
      headerEl.style.backgroundColor = "#e9a9a1";
      headerEl.style.boxShadow = "0 0 6px 0px #00000030";
    }
  } else if (headerEl) {
    headerEl.style.backgroundColor = "#b9d6e8";
    headerEl.style.boxShadow = "none";
  }
});
