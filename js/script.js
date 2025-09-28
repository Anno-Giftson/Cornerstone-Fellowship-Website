// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin Button & Popup
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');

adminBtn.addEventListener('click', () => {
  adminPopup.style.display = 'block'; // shows popup only when button clicked
});

closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
});

adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple placeholder authentication
  if(username === "admin" && password === "1234"){
    alert("Login successful!");
    adminPopup.style.display = 'none';
  } else {
    alert("Invalid username or password.");
  }

  adminForm.reset();
});














