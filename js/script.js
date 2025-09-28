// ======= Mobile nav toggle =======
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// ======= Set year in footer =======
document.getElementById('year').textContent = new Date().getFullYear();

// ======= Admin popup =======
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const adminClose = document.querySelector('.admin-close');

if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

if (adminClose) {
  adminClose.addEventListener('click', () => {
    adminPopup.style.display = 'none';
  });
}

// Close popup if user clicks outside content
window.addEventListener('click', (e) => {
  if (e.target === adminPopup) {
    adminPopup.style.display = 'none';
  }
});

// Optional: admin login validation
const adminLoginForm = document.getElementById('admin-login-form');
if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = adminLoginForm.querySelector('#admin-username').value;
    const password = adminLoginForm.querySelector('#admin-password').value;

    // Replace with your credentials
    if (username === 'admin' && password === 'password123') {
      alert('Login successful!');
      adminPopup.style.display = 'none';
      // Redirect or show admin panel here
    } else {
      alert('Invalid username or password.');
    }
  });
}

// ======= Highlight active nav link =======
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-list li a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// ======= Logo click navigation =======
const logo = document.getElementById('site-logo');
logo.addEventListener('click', () => {
  window.location.href = 'index.html';
});










