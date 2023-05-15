const navToggle = document.querySelector(".menu-bar");
const links = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});