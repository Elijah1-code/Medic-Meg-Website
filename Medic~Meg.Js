/* Dark Mode Toggle */
document.addEventListener("DOMContentLoaded", function() {
    const toggleIcon = document.querySelector(".toggle-icon");
    let darkMode = true; // Initial state is dark mode
  
    toggleIcon.addEventListener("click", function() {
      darkMode = !darkMode; // Toggle the state
  
      if (darkMode) {
        document.body.style.backgroundColor = "#0b061f"; // Very deep dark purple
        document.body.style.color = "var(--main-color)"; // Change text color to white
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i> ';
      } else {
        document.body.style.backgroundColor = "#f8f9fa"; // Light background color
        document.body.style.color = "black"; // Change text color to black
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i> ';
      }
    });
  });
  /* Scroll Section Active Links */
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header navbar a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header navbar a[href*=' + id +']').classList.add('active');
        });
      };
    });
  };

  /* Sticky Navbar */
  window.onscroll = () => {
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);
;}

/* Swiper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Add this script at the end of your body or in a separate .js file
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hide"); // Add a CSS class to hide the preloader
  document.body.classList.add("loaded"); // Add a CSS class to indicate that the page is loaded
});

/* scroll reveal */

ScrollReveal({ 
/*   reset: true,  */
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .team-box, .testimonial-wrapper, .news-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
