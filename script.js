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

// Admin Button & Popup (only on contact page)
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');

if (adminBtn && adminPopup && closePopup && adminForm) {
adminBtn.addEventListener('click', () => {
  console.log("Admin button clicked!");
  adminPopup.style.display = 'block';
});

  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
  });

  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple placeholder authentication
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      adminPopup.style.display = 'none';
    } else {
      alert("Invalid username or password.");
    }

    adminForm.reset();
  });
}















