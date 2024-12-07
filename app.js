const form = document.querySelector("form");
const input = document.querySelector("#email-input");
const labelError = document.querySelector(".labelError");
const successDiv = document.querySelector(".success");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = input.value;

  if (inputValue.match(/^\S+@\S+\.\S+$/)) {
    form.classList.toggle("hidden");
    successDiv.classList.toggle("hidden");
  } else {
    input.classList.add("error");
    labelError.classList.toggle("hidden");
  }
});

input.addEventListener("click", function () {
  input.classList.remove("error");
  labelError.classList.add("hidden");
});

successDiv.addEventListener("click", function () {
  form.classList.toggle("hidden");
  successDiv.classList.toggle("hidden");
  input.value = "";
});
