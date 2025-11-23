// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});



















