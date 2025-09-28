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

if (adminBtn && adminPopup && closePopup && adminForm) {
  // Open popup
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });

  // Close popup
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
  });

  // Handle login
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple placeholder authentication
    if (username === "admin" && password === "1234") {
      window.location.href = "admin.html"; // Redirect straight to admin page
    } else {
      alert("Invalid username or password.");
    }

    adminForm.reset();
  });
}

















