let checkbox = document.querySelector("#checkbox");
let password = document.querySelector("#password");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
