const input = document.querySelector("#name-input");
const username = document.querySelector("#name-output");

input.addEventListener("input", onInputShowUsername);

function onInputShowUsername(event) {
  if (input.value === "") {
    return (username.textContent = "Anonymous");
  }
  username.textContent = event.currentTarget.value;
}
