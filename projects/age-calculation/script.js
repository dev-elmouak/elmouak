let years = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023
]
function generateOption(){
  const selectIpt = document.querySelector("#select");
  for (let i = 0; i < years.length; i++) {
    const option = document.createElement("option");
    option.innerHTML += years[i];
    selectIpt.appendChild(option);
  }
  
}
generateOption()
const resultCard = document.querySelector(".result");
function calculation() {
  const select = document.querySelector('select');
  const show = document.querySelector('.show');
  show.addEventListener("click", ()=>{
    const age = document.querySelector(".age");
    const birtDate = document.querySelector(".birth-date"); 
    let currentYear = new Date();
    let year = currentYear.getFullYear();
    let calc = (year - select.value) + 1;
    birtDate.innerHTML = "date: " + select.value;
    age.innerHTML = calc;
    resultCard.classList.toggle('show-result');
    console.log(year,calc);
  });
}
calculation()
function okk(){
  resultCard.classList.remove('show-result');
}