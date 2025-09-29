// =====================
// Mobile nav toggle
// =====================
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// =====================
// Set year in footer
// =====================
document.getElementById('year').textContent = new Date().getFullYear();

// =====================
// Admin login popup
// =====================
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');

// Show popup when invisible button is clicked
adminBtn.addEventListener('click', () => {
  adminPopup.style.display = 'block';
});

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

  // Simple authentication
  if (username === "admin" && password === "1234") {
    // Save login state
    localStorage.setItem('isAdmin', 'true');
    adminPopup.style.display = 'none';
    adminForm.reset();
    addAdminNav(); // Add Admin button
    alert("Redirecting to Admin page...");
    window.location.href = 'admin.html';
  } else {
    alert("Invalid username or password.");
  }
});

// =====================
// Function to add Admin button dynamically
// =====================
function addAdminNav() {
  const navList = document.querySelector('.nav-list');
  if (!document.getElementById('nav-admin')) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "admin.html";
    a.textContent = "Admin";
    a.id = "nav-admin";
    a.classList.add("active"); // Optional: mark as active on admin page
    li.appendChild(a);
    navList.appendChild(li);
  }
}

// =====================
// Check login state on page load
// =====================
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('isAdmin') === 'true') {
    addAdminNav();
  }
});







