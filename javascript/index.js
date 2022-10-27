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

// random color

const containerEl = document.querySelector(".cards");

for (let i = 0; i < 10; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("card-random-color");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".card-random-color");

const randomColor = () => {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
};

const generateColor = () => {
  colorContainerEls.forEach((element) => {
    const newColorCode = randomColor();
    element.style.backgroundColor = `#${newColorCode}`;
    element.innerText = `#${newColorCode.toUpperCase()}`;
  });
};

generateColor();
