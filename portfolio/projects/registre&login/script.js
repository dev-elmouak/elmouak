const listBtns = document.querySelectorAll(".list-btns li");
const registreForm = document.querySelector(".registre-form");
const loginForm = document.querySelector(".login-form");
console.log(listBtns);
listBtns[1].addEventListener("click", () => {
  listBtns[1].classList.add("active");
  listBtns[0].classList.remove("active");
  registreForm.classList.add("show-r-form");
  loginForm.classList.add("show-l-form");
});
listBtns[0].addEventListener("click", () => {
  listBtns[0].classList.add("active");
  listBtns[1].classList.remove("active");
  registreForm.classList.remove("show-r-form");
  loginForm.classList.remove("show-l-form");
});

document.querySelector("#r-password").addEventListener("keyup", (e) => {
  document.querySelector("#length_password").innerHTML = e.target.value.length;
});
