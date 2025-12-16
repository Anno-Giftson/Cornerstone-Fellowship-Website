document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const links = document.querySelectorAll(".nav-list a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      navList.classList.remove("show");
      localStorage.setItem("menuOpen", false);

      const href = this.getAttribute("href");
      setTimeout(() => window.location.href = href, 300);
    });
  });

  const wasOpen = localStorage.getItem("menuOpen") === "true";
  if (wasOpen) {
    navList.classList.add("show", "no-animate");
    navToggle.classList.add("open", "no-animate");
    setTimeout(() => {
      navList.classList.remove("no-animate");
      navToggle.classList.remove("no-animate");
    }, 50);
  }

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');
    localStorage.setItem("menuOpen", navList.classList.contains("show"));
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});









