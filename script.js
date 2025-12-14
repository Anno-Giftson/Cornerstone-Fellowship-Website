document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const links = document.querySelectorAll(".nav-list a");

  // Hamburger menu links
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();          
      navList.classList.remove("show");  
      localStorage.setItem("menuOpen", false);

      const href = this.getAttribute("href");
      setTimeout(function() {
          window.location.href = href;
      }, 300);
    });
  });

  // Restore menu state
  const wasOpen = localStorage.getItem("menuOpen") === "true";
  if (wasOpen) {
    navList.classList.add("show", "no-animate");
    navToggle.classList.add("open", "no-animate");
    setTimeout(() => {
      navList.classList.remove("no-animate");
      navToggle.classList.remove("no-animate");
    }, 50);
  }

  // Toggle menu
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');
    localStorage.setItem("menuOpen", navList.classList.contains("show"));
  });

  // Current year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Maps fallback ---
  const campusLocations = {
    'delaware-map': { lat: 39.6814379, lng: -75.6126781 },
    'pa-map': { lat: 40.1190346, lng: -75.4250808 },
    'nj-map': { lat: 40.383, lng: -74.54 }
  };

  function loadMap(apiDivId) {
    const container = document.getElementById(apiDivId).parentElement;
    const embedUrl = container.dataset.embed;

    const div = document.getElementById(apiDivId);
    div.style.width = "100%";
    div.style.height = "300px";

    if (window.google && window.google.maps) {
      try {
        new google.maps.Map(div, {
          center: campusLocations[apiDivId],
          zoom: 15
        });
      } catch (err) {
        container.innerHTML = `<iframe src="${embedUrl}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      }
    } else {
      container.innerHTML = `<iframe src="${embedUrl}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
  }

  loadMap('delaware-map');
  loadMap('pa-map');
  loadMap('nj-map');

});



