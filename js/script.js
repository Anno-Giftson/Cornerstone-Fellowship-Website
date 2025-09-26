// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Dynamic fade overlay
const fadeOverlay = document.getElementById('fade-overlay');
const infoStrip = document.querySelector('.info-strip');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  const infoBottom = infoStrip.offsetTop + infoStrip.offsetHeight;

  // hide overlay after info-strip
  if(scrollPos > infoBottom){
    fadeOverlay.style.opacity = 0;
  } else {
    fadeOverlay.style.opacity = 1;
  }
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();



