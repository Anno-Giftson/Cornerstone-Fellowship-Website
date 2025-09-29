// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin Elements
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin');
const logoutBtn = document.getElementById('logout-btn');

// Hide admin/nav buttons initially
navAdmin.classList.add('hidden');
logoutBtn.classList.add('hidden');

// Show popup on clicking admin button (only on contact page)
if(adminBtn){
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

// Close popup and clear fields
closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
  adminForm.reset();
});

// Handle login
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === "admin" && password === "1234"){
    // Login successful
    adminPopup.style.display = 'none';
    adminForm.reset();

    // Show admin nav button and logout button
    navAdmin.classList.remove('hidden');
    logoutBtn.classList.remove('hidden');

    // Optionally redirect to admin page
    window.location.href = "admin.html";
  } else {
    alert("Invalid username or password.");
  }
});

// Logout button
logoutBtn.addEventListener('click', () => {
  navAdmin.classList.add('hidden');
  logoutBtn.classList.add('hidden');
  alert("You have been logged out.");
});









