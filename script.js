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
  adminPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
});

// When user submits admin login
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check credentials
  if(username === "admin" && password === "1234"){
    // Redirect to admin.html
    window.location.href = "admin.html";
  } else {
    // Show error message
    alert("Incorrect username or password.");
  }

  adminForm.reset();
});



