// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin Button & Popup
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin'); // Admin link in nav
const logoutBtn = document.getElementById('logout-btn'); // Logout in admin page

// Restore session on load
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    if (navAdmin) navAdmin.classList.remove("hidden");
    if (logoutBtn) logoutBtn.classList.remove("hidden");
  }
});

// Open popup
if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

// Close popup
if (closePopup) {
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
    if (adminForm) adminForm.reset();
  });
}

// Login form
if (adminForm) {
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      if (navAdmin) navAdmin.classList.remove("hidden");
      if (logoutBtn) logoutBtn.classList.remove("hidden");
      window.location.href = "admin.html";
    } else {
      alert("Invalid username or password.");
    }

    adminForm.reset();
    adminPopup.style.display = 'none';
  });
}

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem("isLoggedIn");
    if (navAdmin) navAdmin.classList.add("hidden");
    logoutBtn.classList.add("hidden");
    window.location.href = "index.html";
  });
}














