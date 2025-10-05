// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Admin button & popup
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin');

// Show popup
if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

// Close popup
if (closePopup) {
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
    adminForm.reset();
  });
}

// Handle login
if (adminForm) {
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "admin" && password === "1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      navAdmin.classList.remove("hidden");
      window.location.href = "admin.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

// On page load, check login
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    navAdmin.classList.remove("hidden");
  } else {
    navAdmin.classList.add("hidden");
  }
});

















