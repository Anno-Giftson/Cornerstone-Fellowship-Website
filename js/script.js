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

// Dynamically set header height and fade height for the overlay
function updateHeaderFade() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // header height in px
  const headerHeight = header.offsetHeight;

  // set header height CSS var
  document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

  // choose fade height (how tall fade strip should be). 
  // We set it roughly equal to the headerHeight (so content fades out before reaching header)
  const fadeHeight = Math.max(60, headerHeight); // minimum 60px for small headers
  document.documentElement.style.setProperty('--fade-height', fadeHeight + 'px');
}

// Run on load and resize (debounced)
window.addEventListener('load', updateHeaderFade);
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateHeaderFade, 120);
});


