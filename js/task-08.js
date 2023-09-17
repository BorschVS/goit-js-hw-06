const refs = {
  form: document.querySelector(".login-form"),
  formInputs: document.querySelectorAll("input"),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let emptyInputs = Array.from(refs.formInputs).filter((input) => input.value === "");

  refs.formInputs.forEach(function (input) {
    if (input.value.length !== 0) {
      // return {
      //   name: input.name,
      //   value: input.value,
      // };

      console.log({
        name: input.name,
        value: input.value,
      });
    }
  });

  if (emptyInputs.length !== 0) {
    alert("inputs not filled");
    return false;
  }

  refs.form.reset();
}
