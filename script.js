// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin popup logic
const adminButton = document.getElementById('admin-button');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');

// Open popup when button clicked
if (adminButton) {
  adminButton.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

// Close popup when X clicked
if (closePopup) {
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
  });
}

// Handle form submit
if (adminForm) {
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
      window.location.href = "admin.html"; // redirect to admin page
    } else {
      alert("Incorrect username or password");
    }
  });
}
