// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin session management
document.addEventListener("DOMContentLoaded", () => {
  const adminNav = document.getElementById("nav-admin"); // nav button
  const logoutBtn = document.getElementById("logout-btn"); // bottom-left logout
  const loginForm = document.getElementById("admin-login-form"); // login form

  // Check session on page load
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    if (adminNav) adminNav.classList.remove("hidden");
    if (logoutBtn) logoutBtn.classList.remove("hidden");
  }

  // Handle login form submit
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        sessionStorage.setItem("isLoggedIn", "true");
        // Show admin button and logout immediately
        if (adminNav) adminNav.classList.remove("hidden");
        if (logoutBtn) logoutBtn.classList.remove("hidden");
        // Redirect to admin page
        window.location.href = "admin.html";
      } else {
        alert("Incorrect username or password.");
      }
    });
  }

  // Handle logout click
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("isLoggedIn");
      if (adminNav) adminNav.classList.add("hidden");
      logoutBtn.classList.add("hidden");
      window.location.href = "index.html"; // redirect to welcome page
    });
  }
});
















