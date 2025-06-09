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
