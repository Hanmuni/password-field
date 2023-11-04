const checkbox = document.querySelector("#checkbox");
let passwords = document.querySelectorAll("input[type='password']");

checkbox.addEventListener("click", () => {
  for (let password of passwords) {
    if (checkbox.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});
