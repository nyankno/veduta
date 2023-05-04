let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
  ScrollReveal({
    reset: false,
    loop: true,
    distance: '80px',
    duration: 1500,
    delay: 100,
});
ScrollReveal().reveal('.heading, .top', { origin: 'top'});
ScrollReveal().reveal('.bottom', { origin: 'bottom'});
ScrollReveal().reveal('.left', { origin: 'left'});
ScrollReveal().reveal('.right', { origin: 'right'});