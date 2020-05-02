ScrollReveal().reveal('.section-title', 
                      {
                        delay: 200,
                        duration: 500,
                        distance: '100px',
                        easing: 'ease-out',
                        origin: 'bottom'

                      });
ScrollReveal().reveal('.hero-title', 
                      {
                        delay: 300,
                        duration: 800,
                        distance: '200px',
                        easing: 'ease-out',
                        origin: 'left',

                      });
ScrollReveal().reveal('.scd', { delay: 300 });
ScrollReveal().reveal('.third', { delay: 600 });
ScrollReveal().reveal('.forth', { delay: 900 });
ScrollReveal().reveal('.fifth', { delay: 1200 });
ScrollReveal().reveal('.sixth', { delay: 1500 });
ScrollReveal().reveal('.seventh', { delay: 1500 });
ScrollReveal().reveal('.eighth', { delay: 1800 });

let scrollUpBtn = document.getElementById("scrollUp");
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");
let isMenuOpened = false;

menuBtn.onclick = function() {
  if (isMenuOpened) {
    menuBtn.classList.remove('close-icon');
    mobileHeader.classList.remove('open');
    isMenuOpened = false;
  } else {
    menuBtn.classList.add('close-icon');
    mobileHeader.classList.add('open');
    isMenuOpened = true;
 }
}

  
scrollUpBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function (e) {
  console.log(window.pageYOffset);
  
  if (window.pageYOffset >= 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
}