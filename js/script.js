document.addEventListener('DOMContentLoaded', () => {
  /* ======= Mobile nav toggle ======= */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  /* ======= Set year in footer ======= */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ======= Admin Popup ======= */
  const adminBtn = document.getElementById('admin-btn');
  const adminPopup = document.getElementById('admin-popup');
  const adminClose = document.getElementById('admin-close');
  const adminForm = document.getElementById('admin-form');

  // Show popup when invisible button clicked
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });

  // Close popup when "x" is clicked
  adminClose.addEventListener('click', () => {
    adminPopup.style.display = 'none';
  });

  // Close popup when clicking outside the popup content
  window.addEventListener('click', (e) => {
    if (e.target === adminPopup) {
      adminPopup.style.display = 'none';
    }
  });

  // Handle login (example credentials)
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "password123") {
      alert("Login successful!");
      adminPopup.style.display = 'none';
      // Optional: redirect to admin page
      // window.location.href = 'admin.html';
    } else {
      alert("Invalid username or password");
    }
  });
});









