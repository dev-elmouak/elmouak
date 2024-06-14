let spans = document.querySelectorAll(".container span");

function gitTime(){
  let time = new Date();
  let hours = time.getHours();
  let menutes = time.getMinutes();
  let seconds = time.getSeconds();
  let pmim = "pm"
  spans[0].innerText = hours;
  spans[1].innerText = menutes;
  spans[2].innerText = seconds;
  if(hours < 10){spans[0].innerText = "0"+hours;}
  if(menutes < 10){spans[1].innerText = "0"+menutes;}
  if(seconds < 10){spans[2].innerText = "0"+seconds;}

  if (hours > 12) {spans[3].innerText = pmim;}
  if (hours <= 12) {spans[3].innerText = "im";}
}
gitTime();
setInterval(gitTime, 1000);

// mod
let select = document.querySelector("select")
let body = document.body;

select.addEventListener("change", function () {
  body.style.background = `${select.value}`;
});