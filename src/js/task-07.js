const input = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

input.addEventListener("click", onRangeFontSizer);
input.addEventListener("keydown", onRangeFontSizer);


function onRangeFontSizer(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
}
