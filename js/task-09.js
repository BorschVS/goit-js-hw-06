function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const bgcSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onСhangeBgcBtn);

function onСhangeBgcBtn() {
  const color = (body.style.backgroundColor = getRandomHexColor());
  bgcSpan.textContent = color;
}
