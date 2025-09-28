// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// --- Admin button (only exists on Contact page) ---
const adminBtn = document.getElementById('admin-btn');
if(adminBtn){
  adminBtn.addEventListener('click', () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if(username === "admin" && password === "password123") {
      alert("Welcome, Admin!");
      // Optionally redirect to admin page:
      // window.location.href = "admin.html";
    } else {
      alert("Incorrect credentials.");
    }
  });
}












