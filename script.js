document.addEventListener("click", (event) => {
  if (!event.target.matches("[data-password-id]")) return;

  let passwordIds = event.target.getAttribute("data-password-id");
  let passwords = document.querySelectorAll(passwordIds);

  for (let password of passwords) {
    if (event.target.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});
