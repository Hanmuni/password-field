const checkbox = document.querySelector("#checkbox");
let password = document.querySelector("#password");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

const checkbox2 = document.querySelector("#checkbox2");
let passwords = document.querySelectorAll("#new-password, #current-password");

checkbox2.addEventListener("click", () => {
  for (let password of passwords) {
    if (checkbox2.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});
