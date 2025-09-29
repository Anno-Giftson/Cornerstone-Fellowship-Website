// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin login session management
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin');

// Show/hide admin button based on session
if(sessionStorage.getItem('loggedIn') === 'true'){
  navAdmin.classList.remove('hidden');
  adminBtn.style.display = 'block';
} else {
  navAdmin.classList.add('hidden');
  adminBtn.style.display = 'none';
}

// Admin button click
adminBtn.addEventListener('click', () => {
  adminPopup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
  adminForm.reset();
});

// Admin login form
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === "admin" && password === "1234"){
    sessionStorage.setItem('loggedIn', 'true');
    navAdmin.classList.remove('hidden');
    adminBtn.style.display = 'block';
    adminPopup.style.display = 'none';
    adminForm.reset();
    window.location.href = 'admin.html';
  } else {
    alert("Invalid username or password.");
  }
});

// Log out (only for admin.html)
const logoutBtn = document.getElementById('logout-btn');
if(logoutBtn){
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  });
}











