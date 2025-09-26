// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Dynamic fade overlay
const fadeOverlay = document.getElementById('fade-overlay');
const infoStrip = document.querySelector('.info-strip');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // current scroll from top
  const infoBottom = infoStrip.offsetTop + infoStrip.offsetHeight;

  // Hide overlay when top of viewport passes info-strip
  if (scrollTop >= infoBottom) {
    fadeOverlay.style.opacity = 0;
  } else {
    fadeOverlay.style.opacity = 1;
  }
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();




