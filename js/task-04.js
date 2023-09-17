const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);


// Я не хочу, чтобы значение счетчика опускалось ниже ноля.
function decrement() {
  const MIN_VALUE = 0;
  counterValue > MIN_VALUE ? counterValue -= 1 : MIN_VALUE;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
