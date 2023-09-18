const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createButton.addEventListener("click", createButtonAmount);
destroyButton.addEventListener("click", destroyBoxes);

function createButtonAmount() {
  const amount = Number(input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
