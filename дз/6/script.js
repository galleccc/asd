let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", showHamburger);

function showHamburger () {
  let mobileMenu = document.getElementById("mobile-menu")
  mobileMenu.style.transform = "translate(0, 0)"
  let color = document.getElementById("color");
  mobileMenu.classList.toggle("color");
}