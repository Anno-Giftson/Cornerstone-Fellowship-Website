// --- Navigation & year code inside DOMContentLoaded ---
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

// --- Google Maps must be global for API callback ---
function loadCampusMap(mapId, coords, title) {
  const mapDiv = document.getElementById(mapId);
  const container = mapDiv.parentElement;
  const embedUrl = container.dataset.embed;

  if (window.google && window.google.maps) {
    const map = new google.maps.Map(mapDiv, { center: coords, zoom: 15 });
    const marker = new google.maps.Marker({ position: coords, map: map });
    const infoWindow = new google.maps.InfoWindow({ content: `<strong>${title}</strong>` });
    infoWindow.open(map, marker);
  } else {
    container.innerHTML = `<iframe src="${embedUrl}" allowfullscreen loading="lazy"></iframe>`;
  }
}

// This must be global (not inside DOMContentLoaded)
function initMaps() {
  loadCampusMap("delaware-map", { lat: 39.681437979449336, lng: -75.6126781846068 }, "Cornerstone DE");
  loadCampusMap("pa-map", { lat: 40.1190346, lng: -75.4250808 }, "Cornerstone PA");
  loadCampusMap("nj-map", { lat: 40.383, lng: -74.54 }, "Cornerstone NJ");
}








