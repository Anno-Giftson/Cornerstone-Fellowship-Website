// --------------------
// Mobile nav toggle
// --------------------
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// --------------------
// Footer Year
// --------------------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --------------------
// Session Management
// --------------------
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

function isLoggedIn() {
  return sessionStorage.getItem("loggedIn") === "true";
}

function logIn() {
  sessionStorage.setItem("loggedIn", "true");
  showAdminUI();
}

function logOut() {
  sessionStorage.removeItem("loggedIn");
  hideAdminUI();
  window.location.href = "index.html"; // redirect to welcome/home page
}

// --------------------
// Admin UI Controls
// --------------------
function showAdminUI() {
  // Show Admin button in nav
  const adminNav = document.getElementById("nav-admin");
  if (adminNav) adminNav.classList.remove("hidden");

  // Show floating logout button
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) logoutBtn.style.display = "block";
}

function hideAdminUI() {
  // Hide Admin button in nav
  const adminNav = document.getElementById("nav-admin");
  if (adminNav) adminNav.classList.add("hidden");

  // Hide floating logout button
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) logoutBtn.style.display = "none";
}

// --------------------
// Admin Popup Logic
// --------------------
const adminBtn = document.getElementById("admin-btn");
const adminPopup = document.getElementById("admin-popup");
const closePopup = document.getElementById("close-popup");
const adminForm = document.getElementById("admin-form");

if (adminBtn) {
  adminBtn.addEventListener("click", () => {
    adminPopup.style.display = "block";
  });
}

if (closePopup) {
  closePopup.addEventListener("click", () => {
    adminPopup.style.display = "none";
    adminForm.reset();
  });
}

if (adminForm) {
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      adminPopup.style.display = "none";
      adminForm.reset();
      logIn();
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password.");
    }
  });
}

// --------------------
// Logout Button Events
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logOut);
  }

  // Check session on load
  if (isLoggedIn()) {
    showAdminUI();
  } else {
    hideAdminUI();
  }
});















