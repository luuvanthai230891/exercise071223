const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btnAdd = document.querySelector("#btnAdd");
const formElement = document.querySelector("#formAdd");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log("Name", nameValue);
  console.log("Email", emailValue);
  console.log("Password", passwordValue);
});

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log("Name", nameValue);
  console.log("Email", emailValue);
  console.log("Password", passwordValue);
});
