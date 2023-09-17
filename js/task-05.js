const input = document.querySelector("#name-input");
const username = document.querySelector("#name-output");

input.addEventListener("input", onInputShowUsername);

function onInputShowUsername(event) {
    username.textContent = event.currentTarget.value;
}
