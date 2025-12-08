// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {

  // Mobile nav elements
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  // Restore previous menu state
  const wasOpen = localStorage.getItem("menuOpen") === "true";
  if (wasOpen) {
    navList.classList.add("show");
    navToggle.classList.add("open");
  }

  // Toggle menu open/close
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');

    // Save state
    const isOpen = navList.classList.contains("show");
    localStorage.setItem("menuOpen", isOpen);
  });

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});






















