// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Set year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Admin button + popup
const adminBtn = document.getElementById("admin-btn");
const adminPopup = document.getElementById("admin-popup");

if (adminBtn && adminPopup) {
  adminBtn.addEventListener("click", () => {
    adminPopup.style.display = "block";
  });
}

// Admin form
const adminForm = document.getElementById("admin-form");

if (adminForm) {
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
}

