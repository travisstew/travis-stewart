const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const navbar = document.getElementsByClassName('navbar')[0];
  
  //toggle nav
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
 
 
    //animate links
    navLinks.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation = '';
        navbar.style.backgroundPosition ='0';
      }else{
        link.style.animation = `navLinkFade 0.6s ease forwards ${index / 7 + 1.5  }s`;
        
        navbar.style.backgroundPosition ='100% 0';
      }
      
    });
    //burger
    burger.classList.toggle('toggle');
    

  });

}

navSlide();

