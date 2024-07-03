// import project form project folder
import { projects } from "../projects/js/projects.js";
let projects_info = projects;
let card = "";
// loop DOM
for (let i = 0; i < projects_info.length; i++) {
  card = `<div class="projects-card">
  <div class="card-img">
    <img src="../projects/js/images/${projects_info[i].img}" alt="projet"/>
  </div>
  <h2>${projects_info[i].title}</h2>
  <div class="about-project">
    <div class="action">
     <a href='../projects/${projects_info[i].src}'>
      <button>
       view
       <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/></svg>
      </button>
     </a>
      <div id="technology">
          <img src="./svg/html5-line.svg" alt="html">
          <img src="./svg/css3-line.svg" alt="css">
          <img src="./svg/javascript-line.svg" alt="js">
        </div>
    </div>
  </div>`;
  document.querySelector("#projects-container").innerHTML += card;
}
