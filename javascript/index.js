// nav bar
const navbarEl = document.querySelector(".nav-bar");
const containerTextEl = document.querySelector(".container-text");

window.addEventListener("scroll", () => {
  if (window.scrollY > containerTextEl.offsetTop - navbarEl.offsetHeight - 50) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
