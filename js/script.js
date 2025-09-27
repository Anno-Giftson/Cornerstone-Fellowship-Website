document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-list a");
  const sections = document.querySelectorAll("main section");

  // Hide all sections except the first
  sections.forEach((sec, idx) => {
    if(idx !== 0) sec.style.display = "none";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default link behavior

      // Remove 'active' from all links
      navLinks.forEach(l => l.classList.remove("active"));

      // Add 'active' to clicked link
      this.classList.add("active");

      const targetId = this.getAttribute("href").replace("#","");
      
      // Show only the target section
      sections.forEach(sec => {
        if(sec.id === targetId) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    });
  });
});







