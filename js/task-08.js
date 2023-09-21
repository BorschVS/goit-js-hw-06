const refs = {
  form: document.querySelector(".login-form"),
  formInputs: document.querySelectorAll("input"),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let emptyInputs = Array.from(refs.formInputs).filter((input) => input.value === "");

  if (emptyInputs.length !== 0) {
    alert("inputs not filled");
    return false;
  }

  const formData = new FormData(refs.form);

  const email = formData.get("email");
  const password = formData.get("password");

  console.log({
    email,
    password,
  });

  refs.form.reset();
}
