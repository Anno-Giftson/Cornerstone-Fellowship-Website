// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {

  // Slide-in mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open'); // triggers the bar → X animation
  });

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});




















