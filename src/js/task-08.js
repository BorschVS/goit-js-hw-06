const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};
//   console.log(event.currentTarget.elements.password.value);

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    value.length > 0
      ? console.log({ name, value })
      : alert("Всі поля форми повинні бути заповнені!");
  });
}
