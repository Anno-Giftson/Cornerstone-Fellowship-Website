// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

// Hide content while scrolling
let scrollTimer;
const siteMain = document.querySelector('.site-main');

window.addEventListener('scroll', () => {
  // hide main content while scrolling
  siteMain.classList.add('hide-content');

  // reset timer
  clearTimeout(scrollTimer);

  // show content again after scrolling stops
  scrollTimer = setTimeout(() => {
    siteMain.classList.remove('hide-content');
  }, 200); // 200ms delay
});

