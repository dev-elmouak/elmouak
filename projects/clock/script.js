function validation(){
  const input = document.querySelectorAll(".input");
  const register = document.querySelector(".register");
  register.onclick = function(){
    input.forEach(ipt => {
      if (ipt.value !== "") {
        ipt.style.border = "1px solid green";
      }else{
        ipt.style.border = "1px solid red";
      }
    });
  }
}
validation();