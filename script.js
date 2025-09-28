// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Set year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Admin Button & Popup
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');

if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    console.log("Admin button clicked");
    adminPopup.style.display = 'block';
  });
}

if (closePopup) {
  closePopup.addEventListener('click', () => {
    console.log("Popup closed");
    adminPopup.style.display = 'none';
  });
}

if (adminForm) {
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple placeholder authentication
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      adminPopup.style.display = 'none';
      window.location.href = "admin.html"; // Redirect to admin page
    } else {
      alert("Invalid username or password.");
    }

    adminForm.reset();
  });
}
















