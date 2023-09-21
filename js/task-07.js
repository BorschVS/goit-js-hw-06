const input = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
// input.addEventListener("mousemove", onRangeFontSizer);

input.addEventListener("input", onRangeFontSizer);
input.addEventListener("keydown", onRangeFontSizer);

function onRangeFontSizer(event) {
  return (textRef.style.fontSize = `${event.target.value}px`);
}
