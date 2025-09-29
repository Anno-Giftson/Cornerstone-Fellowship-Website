// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// --- Admin Logic ---
const adminBtn = document.getElementById('admin-btn');        // invisible button on contact page
const adminPopup = document.getElementById('admin-popup');   // popup container
const closePopup = document.getElementById('close-popup');   // cancel button
const adminForm = document.getElementById('admin-form');     // form element
const navAdmin = document.getElementById('nav-admin');       // Admin button in nav

// Create Log Out button dynamically
let logoutBtn = null;

// Function to show admin/nav buttons after login
function setAdminLoggedIn() {
  sessionStorage.setItem('adminLoggedIn', 'true');
  if (navAdmin) navAdmin.classList.remove('hidden');
  addLogoutButton();
}

// Function to remove admin session
function logoutAdmin() {
  sessionStorage.removeItem('adminLoggedIn');
  if (navAdmin) navAdmin.classList.add('hidden');
  if (logoutBtn) {
    logoutBtn.remove();
    logoutBtn = null;
  }
  // Redirect to welcome page after logout
  window.location.href = 'index.html';
}

// Dynamically add Log Out button to nav
function addLogoutButton() {
  if (!logoutBtn) {
    logoutBtn = document.createElement('li');
    logoutBtn.innerHTML = '<a href="#" id="nav-logout">Log Out</a>';
    navList.appendChild(logoutBtn);
    document.getElementById('nav-logout').addEventListener('click', (e) => {
      e.preventDefault();
      logoutAdmin();
    });
  }
}

// On page load, check if admin is logged in
if (sessionStorage.getItem('adminLoggedIn') === 'true') {
  if (navAdmin) navAdmin.classList.remove('hidden');
  addLogoutButton();
} else {
  if (navAdmin) navAdmin.classList.add('hidden');
}

// Admin popup logic
if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

if (closePopup) {
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
    adminForm.reset();
  });
}

if (adminForm) {
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual credentials
    if (username === "admin" && password === "1234") {
      setAdminLoggedIn();
      adminPopup.style.display = 'none';
      adminForm.reset();
      window.location.href = 'admin.html'; // redirect to admin page
    } else {
      alert("Incorrect username or password.");
      adminForm.reset();
    }
  });
}













