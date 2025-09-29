// ===== Mobile nav toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// ===== Set year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Admin Logic =====
const adminBtn = document.getElementById('admin-btn'); // invisible button on contact.html
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin'); // Admin button in nav
const navLogout = document.getElementById('nav-logout'); // Log out button if present

// Function to show/hide admin elements based on session
function updateAdminUI() {
  if(sessionStorage.getItem("isAdmin") === "true") {
    // Show Admin button in nav
    if(navAdmin) navAdmin.classList.remove("hidden");
    // Show log out button if it exists
    if(navLogout) navLogout.classList.remove("hidden");
    // Hide invisible admin button on contact.html
    if(adminBtn) adminBtn.style.display = "none";
  } else {
    if(navAdmin) navAdmin.classList.add("hidden");
    if(navLogout) navLogout.classList.add("hidden");
    // Show invisible admin button only on contact.html
    if(adminBtn) adminBtn.style.display = "block";
  }
}

// Run on page load
updateAdminUI();

// ===== Admin button click (invisible on contact.html) =====
if(adminBtn){
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

// ===== Close popup =====
if(closePopup){
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
    if(adminForm) adminForm.reset(); // Clear fields on cancel
  });
}

// ===== Admin form submit =====
if(adminForm){
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "1234"){
      // Set session
      sessionStorage.setItem("isAdmin", "true");
      // Redirect to admin page
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password.");
    }
  });
}

// ===== Log out button click =====
if(navLogout){
  navLogout.addEventListener('click', () => {
    sessionStorage.removeItem("isAdmin");
    // Update UI immediately
    updateAdminUI();
    // Optional: redirect to welcome page
    window.location.href = "index.html";
  });
}












