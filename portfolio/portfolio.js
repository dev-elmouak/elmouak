function navMenu(){
  const btnMenu = document.querySelector('.btn-menu');
  const navMenu = document.querySelector('#navigation-menu');
  const links = document.querySelectorAll('#navigation-menu a');
  function toggleMenu(){
    btnMenu.classList.toggle("navMenu");
    navMenu.classList.toggle("showNavMenu");
  } 
  btnMenu.onclick = ()=>{
    toggleMenu()
  }
  links.forEach(link => {
    link.addEventListener("click", function(){
      toggleMenu()
    });
  });
}
navMenu()
