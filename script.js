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
const nav = document.querySelector('.nav-list');

function addAdminNav() {
  if(!document.getElementById('nav-admin')){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = 'admin.html';
    a.textContent = 'Admin';
    a.id = 'nav-admin';
    li.appendChild(a);
    nav.appendChild(li);
  }
}

// Check if admin is logged in (localStorage)
if(localStorage.getItem('isAdmin') === 'true'){
  addAdminNav();
}

adminBtn.addEventListener('click', () => {
  adminPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
  adminForm.reset(); // clear fields on cancel
});

adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === "admin" && password === "1234"){
    // Set admin login in localStorage
    localStorage.setItem('isAdmin', 'true');

    // Hide popup & reset form
    adminPopup.style.display = 'none';
    adminForm.reset();

    // Add Admin button dynamically
    addAdminNav();

    // Redirect to admin page
    window.location.href = 'admin.html';
  } else {
    alert("Incorrect username or password.");
  }
});






