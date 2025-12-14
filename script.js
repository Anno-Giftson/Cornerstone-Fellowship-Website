// Ensure DOM is fully loaded before running script
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
      setTimeout(function() {
          window.location.href = href;
      }, 300);
    });
  });

  // Restore previous menu state WITHOUT triggering animations
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

  // --- Google Maps fallback ---
  function loadMap(divId, lat, lng, zoom, embedUrl) {
    const div = document.getElementById(divId);
    try {
      if (!google || !google.maps) throw "API not loaded";
      new google.maps.Map(div, { center: { lat, lng }, zoom: zoom });
    } catch {
      div.innerHTML = `<iframe src="${embedUrl}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
  }

  loadMap('delaware-map', 39.6814379, -75.6126781, 15, document.getElementById('delaware-map').dataset.embed);
  loadMap('pa-map', 40.1190346, -75.4250808, 15, document.getElementById('pa-map').dataset.embed);
  loadMap('nj-map', 40.383, -74.54, 15, document.getElementById('nj-map').dataset.embed);

});
