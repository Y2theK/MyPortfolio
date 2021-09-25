
AOS.init();
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
       navToggler.classList.toggle("active");
       const nav = document.querySelector(".nav");
       nav.classList.toggle("open");
       if(nav.classList.contains("open")){
         nav.style.maxHeight = nav.scrollHeight + "px";
       }
       else{
         nav.removeAttribute("style");
       }
  }
var LinkActive = document.querySelector(".nav").querySelectorAll('a');
console.log(LinkActive);
LinkActive.forEach(element =>{
  element.addEventListener('click', function(){
    LinkActive.forEach(nav=>nav.classList.remove('active'))
    this.classList.add('active');
  })
})


  $(document).ready(function(){
      console.log('ready');
      $(window).scroll(function(){
          if(this.scrollY > 90)
          {
              $(".header").addClass('reveal');
          }
          else  if(this.scrollY < 90){
              $(".header").removeClass('reveal');
          }
      });
    });
