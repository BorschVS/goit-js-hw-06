const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputValidLength);
input.addEventListener("blur", onInputInvalidLength);

function onInputValidLength(event) {
  event.currentTarget.value.length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.remove("valid");
}

function onInputInvalidLength(event) {
  event.currentTarget.value.length !== Number(input.dataset.length)
    ? input.classList.add("invalid")
    : input.classList.remove("invalid");
}
