// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {

// Slide-in mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navIcon = document.querySelector('.nav-toggle i'); // the hamburger/X icon

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');

  // swap hamburger <→ x
  if (navList.classList.contains('open')) {
    navIcon.classList.remove('fa-bars');
    navIcon.classList.add('fa-times');
  } else {
    navIcon.classList.remove('fa-times');
    navIcon.classList.add('fa-bars');
  }
});

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});



















