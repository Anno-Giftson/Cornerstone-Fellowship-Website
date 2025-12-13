// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  // Restore previous menu state WITHOUT triggering animations
  const wasOpen = localStorage.getItem("menuOpen") === "true";

  if (wasOpen) {
    navList.classList.add("show", "no-animate");
    navToggle.classList.add("open", "no-animate");

    // Remove the no-animate class so future clicks animate normally
    setTimeout(() => {
      navList.classList.remove("no-animate");
      navToggle.classList.remove("no-animate");
    }, 50);
  }

  // Toggle menu open/close
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');

    // Save menu state
    const isOpen = navList.classList.contains("show");
    localStorage.setItem("menuOpen", isOpen);
  });

  // Set current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});























